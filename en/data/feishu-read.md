---
layout: doc
title: Read Feishu Bitable
---

# Read Feishu Bitable

A Feishu table can be a task input, such as a list of URLs to process. Reading and writing use the same connection settings.

## Prepare an accessible test table

Follow [Upload to Feishu Bitable](/en/data/feishu) to configure the app and authorize the table. Check that the connection test reaches the target table. Being able to open the table in your browser does not prove that the configured app has read permission.

## Name the input column

Open **Compile with AI** on the target page. Include the Feishu table link with a request such as:

> Read this Feishu table. Open each link in the “URL” column and collect the title and price from the first 2 webpages.

Use the actual column name. Answer any questions about the table and include its full link.

## Run and check

After the workflow is saved, start it as its instructions describe. Check that both source URLs have matching results, titles, prices, and source pages. Reading the original table does not automatically update it. Describe a separate write-back target if that is also required.

## If reading fails

Check the full link, published app permissions, and access to this specific table. If a knowledge-base link cannot be recognized, use the original table link supplied by Feishu or ask an administrator to help.

Start with a few records. Without a Feishu environment, try the [local file list](/en/tutorial/upload-table) to learn the same collection process.

::: info Verification scope
The settings and instructions have been checked against the extension. Live Feishu reads and writes have not been tested with an available test app and table. Check two sample records in your own environment first.
:::
