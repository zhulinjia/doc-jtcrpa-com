---
layout: doc
title: Lists and pagination
---

# Lists and pagination

Collect the titles and prices from the first two bookshop pages into one table. Check for **8 different books**.

## Open the exercise and send the request

Switch to the practice webpage and open **Compile with AI** there:

<PracticeTask lesson="pagination" />

## Return to the start, then run

After the workflow card appears, click **Bookshop playground** at the top of the bookshop to return home. Check that the search box is empty and **All categories** is selected. Open **Workbench** and click **Manual start** on the task.

## Check the results

Open **Storage → Preview** and check 8 different books from the first two pages:

| Position | Book | Price |
| --- | --- | --- |
| First on page 1 | Between Mountains and Seas | ¥32.00 |
| First on page 2 | Little Maps for the Journey | ¥48.00 |
| Last on page 2 | A Weekend by the Sea | ¥35.00 |

Check that page 2 was actually included. A total of 8 rows could otherwise contain the first page twice. Once correct, click **Download** and choose **Excel**.

<details><summary>Only one page, or the wrong second page?</summary>

Start from page 1. Click **Edit** on the workflow and say “Only the first page was collected. Include page 2 as well.” Save, return to the home page, and run again. Earlier results may remain; see [Check your results](/en/data/check-results).

</details>

## Use your own list

Tell AI which columns and how many pages you want. Check two pages before expanding. For pages that load through scrolling, see [Scrolling and Load more](/en/tutorial/infinite-scroll).

**Try it yourself:** add authors while keeping the same two-page scope, then check that each author matches the book.
