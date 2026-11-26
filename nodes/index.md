---
layout: doc
title: 节点操作手册
description: 按节点查找用途、设置方法、简短的采集需求示例和验证方式。
---

# 节点操作手册

工作流由一个个节点组成。点击「下一页」、等待列表出现、采集书名和价格，就可以是连续的三个节点。

## 怎样添加或修改具体步骤

1. 打开要操作的网页。新建工作流时，在「**AI 编译生成**」里说清楚希望做什么。已有工作流时，从「**主工作台**」找到卡片，点击「**修改**」，再说明要改哪一步。例如「点击下一页后，等新书列表出现再采集」。
2. 等 AI 保存后，把页面恢复到本次任务的起点，点击「**手动启动**」。工作流有启动参数时，在弹窗里填写本次值。
3. 看网页、数据或通知是否符合预期。需要定位到某一步时，打开卡片的「**日志**」，选择本次运行。找到对应步骤，有详情的行可以展开查看参数和结果。[执行日志](/automation/run-logs)

## 按操作查节点

| 想做什么 | 节点 |
| --- | --- |
| [操作网页与标签页](/nodes/browser) | [点击](/nodes/browser#click) · [输入](/nodes/browser#input) · [下拉选择](/nodes/browser#select) · [勾选](/nodes/browser#check) · [悬停](/nodes/browser#hover) · [移开鼠标](/nodes/browser#unhover) · [滚动](/nodes/browser#scroll) · [打开标签页](/nodes/browser#tab-open) · [切换标签页](/nodes/browser#tab-switch) · [关闭标签页](/nodes/browser#tab-close) · [刷新](/nodes/browser#reload) |
| [等页面准备好](/nodes/waiting) | [等待元素](/nodes/waiting#wait-element) · [等待接口](/nodes/waiting#wait-network) · [固定等待](/nodes/waiting#delay) |
| [采集、读写与下载](/nodes/data) | [采集](/nodes/data#extract) · [读取数据集](/nodes/data#read-dataset) · [读取本地文件](/nodes/data#read-file) · [读取飞书](/nodes/data#feishu-read) · [写入飞书](/nodes/data#feishu-write) · [HTTP 请求](/nodes/data#http) · [下载文件](/nodes/data#download) |
| [判断与控制流程](/nodes/flow) | [条件分支](/nodes/flow#if) · [循环](/nodes/flow#loop) · [跳出循环](/nodes/flow#break-loop) · [跳过本轮](/nodes/flow#continue-loop) · [容错](/nodes/flow#try-block) · [暂停](/nodes/flow#pause) · [结束](/nodes/flow#end) |
| [传值与组合工作流](/nodes/reuse) | [启动参数](/nodes/reuse#params) · [设置变量](/nodes/reuse#declare) · [调用工作流](/nodes/reuse#call-workflow) · [返回结果](/nodes/reuse#return) |
| [查看中间结果与提醒](/nodes/diagnostics) | [记录到日志](/nodes/diagnostics#print) · [消息提示](/nodes/diagnostics#notify) · [自定义脚本](/nodes/diagnostics#user-script) |
