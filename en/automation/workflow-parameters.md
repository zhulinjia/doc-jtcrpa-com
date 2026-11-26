---
layout: doc
title: Parameter node and run parameters
description: Add a parameter node so you can enter a keyword, page count, or other values each time a workflow starts.
---

# Parameter node and run parameters

Run the same workflow with different keywords, filters, or page counts. Tell AI what you want to enter each time you start. AI adds a parameter node as the workflow's first step. The remaining steps use the values supplied for that run.

## Try collecting different page counts

1. Open the <a href="/en/practice/index.html" target="_blank" rel="noopener noreferrer">practice bookshop home page ↗</a>. On that page, open the extension sidebar and select **Compile with AI**.
2. Send this request.

   > Collect the book titles and prices. Let me enter how many pages to collect each time I start.

3. Return to the bookshop home page. Find the new workflow in **Workbench** and click **Manual start**. In **Enter run parameters**, enter 2 as the page count and click **Start run**.
4. After the run, check that it collected *Little Maps for the Journey* from page 2. [Check your results](/en/data/check-results)

## Enter values or change the defaults

- On a manual start, fields with defaults are prefilled. Keep them or enter the values for this run. Follow the form prompts for fields marked **Required**.
- Use the type shown beside each field. Choose **Text** for a keyword, **Number** for a page count, and **Yes** or **No** for a **Boolean** field. Workflows can also accept **JSON** input.
- To add a parameter or change a default for future runs, click **Edit** on the workflow card. For example, say, “Make the default page count 2 and let me change it each time I start.” [Edit a saved workflow](/en/guide/modify-workflow)

## Provide values in other ways to start a run

| Start method | Where to provide values |
| --- | --- |
| Scheduled task | Select the workflow, fill in **Workflow parameters**, and save. The saved values apply to scheduled runs and **Run now**. [Scheduled task parameters](/en/automation/scheduled-task#workflow-parameters) |
| MCP | In Codex or WorkBuddy, tell AI which workflow to run and say, “Collect 2 pages this time.” [MCP connection guide](/en/advanced/mcp) |
| Webpage right-click menu | The workflow uses its defaults. To enter values for a specific run, use the menu on the workflow card to switch back to **Manual start**. |

When one workflow calls another, tell AI which values to pass to it. [Combine saved workflows](/en/tutorial/workflow-invocation)
