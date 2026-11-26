---
layout: doc
title: Workflow node guide
description: Find what each node does, what to ask AI for, and how to check the result.
---

# Workflow node guide

Each node is a step in a workflow. Clicking **Next**, waiting for the book list, and collecting titles and prices can be three consecutive nodes.

## Add or change a step

1. Open the webpage you want to use. For a new workflow, describe the task in **Compile with AI**. For an existing workflow, find its card in **Workbench**, click **Edit**, and say which step to change. For example, “After clicking Next, wait for the new list of books before collecting.”
2. Once AI saves the workflow, restore the page to the starting state and click **Manual start**. If a run parameters dialog appears, enter the values for this run.
3. Check the page, data, or notification. To inspect a step, open **Logs** on the workflow card and select the current run. Find the step and expand any available details to see its arguments and result. [Run logs](/en/automation/run-logs)

## Find a node by task

| Task | Nodes |
| --- | --- |
| [Use webpages and tabs](/en/nodes/browser) | [Click](/en/nodes/browser#click) · [Type text](/en/nodes/browser#input) · [Choose a dropdown option](/en/nodes/browser#select) · [Check an option](/en/nodes/browser#check) · [Hover](/en/nodes/browser#hover) · [Move away](/en/nodes/browser#unhover) · [Scroll](/en/nodes/browser#scroll) · [Open a tab](/en/nodes/browser#tab-open) · [Switch tabs](/en/nodes/browser#tab-switch) · [Close a tab](/en/nodes/browser#tab-close) · [Reload](/en/nodes/browser#reload) |
| [Wait for the page](/en/nodes/waiting) | [Wait for an element](/en/nodes/waiting#wait-element) · [Wait for a request](/en/nodes/waiting#wait-network) · [Wait a set time](/en/nodes/waiting#delay) |
| [Collect, read, write, and download](/en/nodes/data) | [Collect data](/en/nodes/data#extract) · [Read a dataset](/en/nodes/data#read-dataset) · [Read a local file](/en/nodes/data#read-file) · [Read Feishu](/en/nodes/data#feishu-read) · [Write to Feishu](/en/nodes/data#feishu-write) · [Send an HTTP request](/en/nodes/data#http) · [Download a file](/en/nodes/data#download) |
| [Make decisions and control a run](/en/nodes/flow) | [Branch on a condition](/en/nodes/flow#if) · [Repeat with a loop](/en/nodes/flow#loop) · [Exit a loop](/en/nodes/flow#break-loop) · [Skip one pass](/en/nodes/flow#continue-loop) · [Handle item failures](/en/nodes/flow#try-block) · [Pause](/en/nodes/flow#pause) · [End](/en/nodes/flow#end) |
| [Pass values and combine workflows](/en/nodes/reuse) | [Run parameters](/en/nodes/reuse#params) · [Set a variable](/en/nodes/reuse#declare) · [Call a workflow](/en/nodes/reuse#call-workflow) · [Return a result](/en/nodes/reuse#return) |
| [Inspect progress and show notifications](/en/nodes/diagnostics) | [Record a log value](/en/nodes/diagnostics#print) · [Show a notification](/en/nodes/diagnostics#notify) · [Use a custom script](/en/nodes/diagnostics#user-script) |
