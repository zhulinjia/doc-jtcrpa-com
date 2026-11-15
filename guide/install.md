---
layout: doc
title: 安装与首次使用
prev:
  text: 介绍
  link: /guide/what-is-jtcrpa
next:
  text: 第一个采集任务
  link: /guide/first-task
---

<script setup>
import { DOWNLOADS } from '../.vitepress/downloads'
</script>

# 安装与首次使用

先装好扩展，再登录账号，就可以跟着练习做第一个任务。你在浏览器里会看到它显示为「**九头虫 Agent**」，是同一个扩展。

## 1. 添加到浏览器 {#一、安装扩展}

打开自己正在使用的浏览器对应的商店页面，按页面提示添加扩展：

- <a :href="DOWNLOADS.chrome" target="_blank" rel="noopener noreferrer">Chrome：打开应用商店 ↗</a>
- <a :href="DOWNLOADS.edge" target="_blank" rel="noopener noreferrer">Edge：打开扩展商店 ↗</a>

<details>
<summary>商店打不开，使用离线安装包</summary>

<a :href="DOWNLOADS.pan" target="_blank" rel="noopener noreferrer">下载离线安装包 ↗</a>，提取码：{{ DOWNLOADS.panCode }}。

1. 下载压缩包并解压，记住解压后的文件夹位置。
2. 在地址栏输入 Chrome 的 chrome://extensions 或 Edge 的 edge://extensions，按回车。
3. 开启「开发者模式」（Edge 可能叫「开发人员模式」）。
4. 点击「加载已解压的扩展程序」（Edge 名称略有不同），选择解压后的整个扩展文件夹。

不要删除这个文件夹。离线安装的版本需要自行下载更新包并更新；公司管理的浏览器若禁止安装，请先联系管理员。

</details>

## 2. 找到九头虫图标 {#二、固定图标并激活页面}

点击浏览器地址栏右侧的拼图图标，找到「**九头虫 Agent**」，用旁边的图钉固定到工具栏。以后点击这个图标，就能打开扩展侧边栏。

**刚装好后，刷新之前已经打开的目标网页。** 可以直接打开下面的练习书店，不要停留在浏览器设置页开始采集。

## 3. 登录账号 {#三、登录账号}

打开<a href="/practice/index.html" target="_blank" rel="noopener noreferrer">练习书店 ↗</a>，点击九头虫图标。在侧边栏底部打开「**设置菜单**」，点击「**立即登录 / 注册**」，按官网页面提示完成登录。

完成后切回书店，再打开「设置菜单」。看到自己的昵称和账号状态，就可以继续。准备任务会使用账号的 AI 额度，是否可用以当前页面提示为准。

## 装好了，做成第一个任务 {#四、ai-模型配置新手可跳过}

初次使用先用默认 AI 通道即可，无需自己申请密钥。继续[第一个采集任务](/guide/first-task)，把 4 本书整理成表格并下载到电脑。

以后确实需要自己的 AI 服务时，再看[AI 模型配置](/settings/ai-model)。
