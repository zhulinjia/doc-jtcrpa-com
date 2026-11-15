---
layout: doc
title: Batch collection with multiple URLs
---

# Batch collection with multiple URLs

Use one workflow to process a list of similar product or detail URLs. Start with **2 similar pages** and check them before adding more.

For URLs already in a spreadsheet, you can also use [an uploaded list](/en/tutorial/upload-table). This page uses the URL list in Scheduled tasks; manual execution there also requires VIP1 or above.

## 1. Test a workflow on each URL

Open the first page, ask AI to collect the needed content, run it, and check the result. Switch to the second similar page and test the same workflow, verifying that it processes the second page.

If it always returns to the first URL, click **Edit** and say “Process the page I currently have open instead of always opening the original URL.” Test again.

You can use the first two book detail pages in the <a href="/en/practice/index.html?lesson=file-list" target="_blank" rel="noopener noreferrer">practice bookshop ↗</a>. Open each and copy its complete URL onto a separate line.

## 2. Add the URL list

1. Open **Scheduled tasks → New task** and enter a task name.
2. Paste the two URLs in **Target URLs**. You can also paste an Excel column or use **Import TXT / CSV**.
3. Select the tested **Workflow** and click **Save task**. A task can contain up to **5,000 URLs**.
4. **For a manual-only run, turn off the schedule switch after saving**, so the default schedule does not run it again later.

## 3. Run and check both pages

Click **Run now**. Leave the collection tabs open. For pausing or ending a run, see [Run controls](/en/automation/start-stop).

In **Storage → Preview**, check that each URL has matching content. Earlier results may already be in the workflow table, so the card total may differ from this batch size.

If one URL fails, later URLs may continue or the task may pause for your help. Check **Logs**, not only the end message. Before retrying, check already-processed records, especially for Feishu writes, forms, or outgoing data.

Increase the list gradually after the first two URLs work. For repeated execution, see [Scheduled tasks](/en/automation/scheduled-task).
