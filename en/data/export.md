---
layout: doc
title: Export data
---

# Export data

In **Storage**, find the result, click **Download**, and choose **Excel** to use it in Excel or WPS. You can also download from the top right of the preview page.

## Check which table you are downloading

Both download controls export the **whole dataset**, including earlier records, rather than only the visible preview page. For a separate run result, ask the workflow to save to a new table, run again, and download that table. See [Storage and preview](/en/data/storage-preview).

## Choose a format

| Format | Use it for |
| --- | --- |
| Excel | Continue working in Excel or WPS, or share with a colleague. |
| CSV | Import into another spreadsheet or business system. |
| TXT | Plain text. |
| JSON | Full-length content in very long cells, or a receiver that requires this format. |
| MD | Paste a text table into a Markdown document. |

Find the files in your browser downloads. Open them and check the headers, row count, and a few actual records.

## Download permissions and large datasets

The current extension checks the total dataset row count: non-members up to **500**, VIP1 up to **5,000**, VIP2 up to **50,000**, and VIP3 or above without a row limit. Follow the current account prompt. An oversized dataset is not automatically trimmed to the allowed count.

Datasets over **10,000 rows** are split into multiple downloads. Check that the browser permits multiple files and that every file was saved.

## If the file looks wrong

- **Unreadable characters in CSV:** try Excel, or import the CSV as UTF-8 in your spreadsheet software.
- **Missing leading zeros:** check the saved result and whether the spreadsheet treats the column as numbers. Ask AI to preserve identifiers as text, then recollect and check.
- **Truncated long content:** Excel, CSV, TXT, and MD have limits for very long cells. Choose JSON when you need the full text and verify the downloaded content.

For saving and sharing workflows as well, see [Back up and move workflows](/en/advanced/import-export).
