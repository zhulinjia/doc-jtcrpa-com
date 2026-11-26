---
layout: doc
title: Webhook 推送
description: 将工作流新写入数据集的行自动发送到指定地址，并查看投递记录。
---

# Webhook 推送

在扩展里为数据集启用 Webhook 后，每批采集结果保存时，扩展会把本次实际写入的行发送到你指定的接收地址。新增的行和被新结果覆盖的行都可能送达。规则从启用后的采集开始生效。

## 新建并测试推送

1. 点击九头虫图标打开侧边栏，再打开「**设置菜单 → Webhook 推送**」。
2. 点击「**新建推送**」，填写「**推送名称**」，选择「**数据集**」。可以选择已保存的采集数据集，也可以选择工作流已设置、尚未写入的采集目标。
3. 在「**接收地址**」粘贴接收方提供的完整 HTTP 或 HTTPS 地址。若地址会跳转，请填最终地址。
4. 在「**发送字段**」保留「**全部业务字段**」，或取消勾选后选择要发送的列。首次采集前还没有列清单时，可填写「**字段名**」并点击「**添加字段**」。字段名要和工作流写入的列名一致。
5. 如果接收方需要验签，填写「**签名密钥（可选）**」。接收端使用相同密钥。
6. 点击「**测试发送**」，在接收端确认示例数据到达。勾选「**启用推送**」并点击「**保存**」，再运行一次写入该数据集的工作流。

测试发送使用示例数据。验证真实数据时，到规则卡片上点击「**投递记录**」，对照本次投递的行数、状态和接收端收到的字段。

## 签名与重复投递

配置密钥后，扩展用 HMAC-SHA256 对原始请求正文签名，并把签名放在 HTTP 请求头 `X-Webhook-Signature`。接收端使用同一密钥和未经改写的正文验签。签名值由 `sha256=` 和十六进制摘要组成。密钥为空时，发送无签名请求。

自动重试和手动重试会沿用同一个 `X-Webhook-Delivery-Id`。接收方可以用这个投递编号识别同一次投递，避免重复处理。下一批写入会生成新的投递编号。

### Node.js 接收端验签 {#verify-signature}

把服务器收到的原始正文保留为 `Buffer`。读取 `X-Webhook-Signature`，用与扩展相同的密钥，在解析 JSON 前调用下面的函数。密钥可以从服务器环境变量 `WEBHOOK_SECRET` 读取。

```js
import { createHmac, timingSafeEqual } from 'node:crypto'

export function verifyWebhookSignature(rawBody, signature, secret) {
  if (!secret || typeof signature !== 'string') return false

  const digest = createHmac('sha256', secret).update(rawBody).digest('hex')
  const expected = Buffer.from(`sha256=${digest}`, 'utf8')
  const received = Buffer.from(signature, 'utf8')

  return received.length === expected.length && timingSafeEqual(received, expected)
}
```

使用 Node.js 原生 HTTP 服务时，通过 `req.headers['x-webhook-signature']` 读取签名。返回 `false` 时拒绝这次请求并返回 `401`。返回 `true` 后再解析正文和处理数据。使用「**测试发送**」验证接收端取到的是原始字节。格式化或重新序列化 JSON 会改变校验用的字节。[Node.js 加密模块](https://nodejs.org/api/crypto.html#cryptotimingsafeequala-b)

## 管理推送和排查失败

| 看到的情况 | 怎么处理 |
| --- | --- |
| 「等待采集」 | 确认工作流写入所选数据集，再运行一次。 |
| 「等待重试」 | 网络异常或接收端暂时不可用时，扩展会自动重试。接收端恢复后，在「投递记录」核对状态。 |
| 投递失败 | 查看「投递记录」中的错误或 HTTP 状态。修正接收端后，如果该记录仍显示「**重试**」，可以从这里重发。修改规则的接收地址、签名密钥、数据集或发送字段后，请用新采集的数据验证新配置。 |
| 想暂时停止发送 | 在规则卡片上点「**暂停**」。恢复时点「**启用**」，暂停前待发的投递可继续发送。 |
| 想移除整条推送规则 | 点击「**删除**」并确认。规则配置和它的投递记录会一并移除，原采集数据仍可在「数据存储」查看。 |
