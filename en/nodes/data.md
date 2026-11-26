---
layout: doc
title: Collect, read, write, and download data
---

# Collect, read, write, and download data

Tell AI where the data comes from, what you need, and how you want to use it next.

## Collect data {#extract}

Describe what belongs in each row and which columns you want. The source can be the current page, data loaded by a webpage request, or a previous step's results. For intermediate results, you can say to use the data only in the next step.

> Collect titles and prices from this page, one row per book.

Compare a few rows and column names with the page. If a click or page change loads the data, collect after loading finishes. [Your first collection](/en/guide/first-task) · [Collect data loaded by a webpage](/en/tutorial/from-api)

## Read a dataset {#read-dataset}

Name the existing table in **Storage** and say how much to read and what to do with it. This node reads one batch at a time. To work through a large table row by row, use a [loop](/en/nodes/flow#loop).

> Read yesterday's book dataset and check the prices of the first five rows.

Preview the source table and compare its rows and fields with the next step's output. If the tables have similar names, specify which one to use. [Reuse collected data](/en/data/read-dataset)

## Read a local file {#read-file}

Use this to read the latest version of a file from disk on each run. Provide the full file path, say whether the first row contains headings and which column to use, and follow the file-access prompt.

> Read this local spreadsheet each time and open the pages in the “Product link” column.

Test with a few rows and check that the latest file and the right columns were used. You can also attach a list directly in a conversation. [Read local files and check browser requirements](/en/data/local-file)

## Read Feishu Bitable {#feishu-read}

Set up a Feishu connection with access to the table. Give AI the Bitable link and name the column to use. If you want to process only a few rows, specify that limit for the steps that follow.

> Read this Feishu table and open the first two links in the URL column.

Compare the opened URLs with the source table. For a permission error, check the configured Feishu app and its table access. [Read Feishu Bitable](/en/data/feishu-read)

## Write to Feishu Bitable {#feishu-write}

Give AI the link to a writable table and say which step supplies the rows. Use the names of the actual destination columns to describe how fields should map.

> Write the collected titles and prices to this Feishu table. Test with two rows first.

Check the row count, columns, and values in Feishu. After a partial failure, check what arrived before deciding to retry. [Write to Feishu Bitable](/en/data/feishu)

## Send an HTTP request {#http}

Provide the address, request method, fields, and any headers specified by the receiving system. Say when to send the request and which response data to use afterward.

> Collect one test order, send it as the receiver requires, and log the returned status.

Expand the request in the log to see its status and response, then check the test record at the receiver. After a timeout, check for receipt before retrying. [HTTP request practice](/en/tutorial/http-request)

## Download a file {#download}

Give AI a full download URL or identify a column of download links collected earlier. You can also specify a folder inside the browser's downloads directory, a filename, and what to do if a file of that name already exists.

> Download the first three book covers into a “Bookshop practice” folder.

Check the browser's download list and open the files to confirm they finished. A skipped link can appear in the log while the workflow continues with later steps.
