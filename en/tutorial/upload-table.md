---
layout: doc
title: Collect from an uploaded list
---

# Collect from an uploaded list

Give AI an Excel or CSV list of URLs and have it process each linked page. Start with the two books in the bookshop sample file.

## Download and attach the list

In the bookshop below, click **Download the sample list** above the books. The file has a **URL** column with two book detail links.

Open **Compile with AI** on the bookshop page. Click **Add file** below the input and choose the downloaded file. If asked about headers, use the first row as column names.

<PracticeTask lesson="file-list" />

## Run and check

Once the workflow is saved, return to the bookshop home page and use **Manual start** in **Workbench**. Open the collection result in **Storage → Preview**:

| Book | Price |
| --- | --- |
| Between Mountains and Seas | ¥32.00 |
| City Strolls | ¥45.00 |

Check that each row has the correct source page. The original uploaded list may also appear in Storage, so distinguish it from the collected result.

## Use your own list

Attach your file, name its URL column, and state which information you need. Check two or three records before expanding. See [Read local files](/en/data/local-file) for supported formats, replacing a list, and reading a disk file during a run.

If a URL fails, check that you can open it manually and are signed in where required. For a partially completed task, see [A run has stopped](/en/troubleshooting/interrupted).
