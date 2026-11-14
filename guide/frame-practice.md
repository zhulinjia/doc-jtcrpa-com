---
layout: doc
title: 采集网页中嵌入的内容
---

# 采集网页中嵌入的内容

有些网页把订单表、登记表放在一个单独区域里。你能看见内容，却发现普通采集漏掉了它，可以告诉 AI 要处理哪个区域，无需知道网页的技术结构。

## 先整理一张嵌入订单表 {#extract}

<span id="orders"></span>

<PracticeTask lesson="frame" />

保持练习页在当前标签页，在扩展「**AI 编译生成**」发送上面的需求。等待工作流卡片出现后，回到练习页初始状态，在「**主工作台**」点击「**手动启动**」。

到「**数据存储 → 预览**」检查 **3 条订单**：DD2001 / 山海之间 / 32，DD2002 / 城市慢行 / 45，DD2003 / 生活的留白 / 39。金额带不带货币符号都可以，逐条对应即可。

如果只采到了外面的标题，点击工作流「**修改**」说明：“我要里面订单表的内容，刚才没有采到。”修改后再小范围试跑。

## 其他嵌入区域按需要选练

这些练习的需求写在各自页面里。每次只选一个，AI 准备好后按页面提示重新开始，再手动启动；有数据时到「数据存储 → 预览」核对。

### 在嵌入区域里点击 {#click}

<a href="/practice/scenarios/frame-actions/click.html" target="_blank" rel="noopener noreferrer">打开物流查询练习 ↗</a>。完成后应得到 1 条：WL1001，运输中，杭州转运中心。

### 在嵌入区域里填表 {#form}

<a href="/practice/scenarios/frame-actions/form.html" target="_blank" rel="noopener noreferrer">打开取书登记练习 ↗</a>。模拟提交后应显示小林、门店自取、周六取书；采集结果与页面一致。

### 两个并列的门店 {#parallel}

<a href="/practice/scenarios/frame-structures/parallel.html" target="_blank" rel="noopener noreferrer">打开并列门店练习 ↗</a>。应有 4 条，东区和西区各 2 条；核对两个门店的内容没有混淆。

### 多层区域里的订单 {#nested}

<a href="/practice/scenarios/frame-structures/nested.html" target="_blank" rel="noopener noreferrer">打开多层嵌入练习 ↗</a>。最里面显示订单后再采集，应有 3 条，编号、商品和金额与该表对应。

### 来自其他网站的区域 {#cross}

<a href="/practice/scenarios/frame-cross/index.html" target="_blank" rel="noopener noreferrer">打开跨站嵌入练习 ↗</a>。先确认第三方书籍列表能显示，再整理前两本书的书名和价格，以当时页面为准。

这项依赖第三方网站；加载不了时先跳过，不要把空白区域当成采集失败。需要跨站权限时按扩展提示处理。

## 看不到里面的内容

先手动确认该区域可以正常打开，必要时登录目标网站或重新开始练习。内容本身没有显示出来时，先处理加载问题。运行停住，查看[中断处理](/troubleshooting/interrupted)；结果缺失，查看[检查采集结果](/data/check-results)。
