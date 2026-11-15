---
layout: doc
title: Storage and preview
---

# Storage and preview

Open **Storage** in the extension to find locally saved results and uploaded files. Each card represents a table. One workflow can produce more than one result.

## Find the right result

Check its name, source website, update time, and row count. Use **Search dataset names** when you have many tables. Click **Preview** or the card title to open the table in a new tab.

An uploaded list and its collected result may both appear. A card named after the file is usually the original list; check the actual content to identify the collected result.

## Read the table

Check your requested columns, then the final **Collected at** and **Source page** columns. These help identify when and where a row was collected.

The type control beside a column name switches between **Text**, **Link**, and **Image** display. This changes only the current preview. Refreshing restores the display, and the saved or exported data is unaffected.

After another run, refresh an already-open preview. Check the pagination at the bottom; the visible page may show only part of the table.

## Understand repeated runs

Collected rows can accumulate. Identical content usually updates its collection time and source instead of adding a row. Changed content, new columns, or new column names can create additional rows. The total count is not necessarily the number collected in the latest run.

For example, the first 4 title-and-price rows may remain when another 4 rows with authors are added. Check the newly collected content; see [Check your results](/en/data/check-results).

For a separate result, click **Edit** on the workflow and say:

> Save this run in a separate new table.

Save and run again, then find the new table. Editing a workflow does not automatically rename or fill in earlier results.

## Download, replace, and delete

- **Download:** choose Excel or another format. See [Export data](/en/data/export).
- **Upload to Feishu:** send the result to a configured table. See [Feishu Bitable](/en/data/feishu).
- **Replace an uploaded file:** choose a new file on its card while keeping the reference used by existing workflows. Replacement updates the whole file; duplicate rows in the file are preserved.
- **Delete:** removes the local result, not the chat. Deletion cannot be undone, so download important content first.

Before moving computers or reinstalling, save results and workflows separately. See [Back up and move workflows](/en/advanced/import-export).
