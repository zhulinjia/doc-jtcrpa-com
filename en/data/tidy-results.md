---
layout: doc
title: Filter and format results
---

# Filter and format results

You may want only some rows, different column names, or a particular price format. Tell the saved workflow what to change, then run it to produce the updated result.

## Practice: keep books above a price

Open the extension on the bookshop home page below and send:

<PracticeTask lesson="tidy" />

Once saved, return to the bookshop home page and click **Manual start** in **Workbench**. Open the new table in **Preview**. It should contain only **City Strolls, ¥45.00** and **Room to Breathe, ¥39.00**, with English column names.

If both original and filtered tables appear, preview them to find the new two-row result. Check that the ¥32.00 and ¥28.50 books are excluded by the “over ¥35” condition.

## Adjust an existing task

Click **Edit** in Workbench and add your change after the inserted task name:

| Change | Example request |
| --- | --- |
| Column language | Change the column names to English. |
| Additional content | Add the author. |
| Numeric prices | Keep only the numeric amount in the price column. |
| Leading zeros | Keep order numbers as text, including their leading zeros. |
| Separate result | Save this run in a separate new table. |

See [Change the column language](/en/guide/modify-workflow#column-language). Formatting changes apply to later collections; they do not automatically update already-saved results.

## Try one work requirement

Choose one condition, such as in-stock products or articles after a certain date. Decide which records should remain, then ask AI to process a small sample. Add complex requirements one at a time and check after each change.
