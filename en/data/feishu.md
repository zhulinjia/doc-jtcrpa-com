---
layout: doc
title: Upload to Feishu Bitable
---

# Upload to Feishu Bitable

Prepare a Feishu Bitable table you can use for test writes, and an application authorized to access it. Initial setup may require a colleague with the necessary permissions.

## Configure the connection

At the bottom of the extension, open **Settings → Feishu Bitable**. Enter the **App ID**, **App Secret**, and test table link. Changes save automatically.

In the Feishu administration console, create the application, grant the required Bitable permissions, publish it, and give it access to the target table. Then click **Test connection** in the extension. Available permissions and operations depend on your Feishu environment.

Resolve credential, link, or permission errors reported by the test. After the connection succeeds, still check actual records in Feishu to verify a write.

## Choose how to write

| Method | How to start |
| --- | --- |
| Write while collecting | Include the test table link in the request and ask AI to write the collected results there. |
| Upload a saved result | Find the result in Storage, click **Upload to Feishu**, and follow the target selection prompts. |

Both use the same connection settings, but their access requirements can differ. Uploading saved results manually requires the relevant membership permission shown in the current interface.

## Check two records first

Complete [Your first collection](/en/guide/first-task), then use two books for a small write test. In Feishu, check the two records, column names, prices, and matching values.

Columns are matched by name. Missing columns may be created as text. To use existing number, date, or option columns, check their names, types, and options before trying a small write.

## After a partial failure

Records already written are not rolled back when a task stops. Check what Feishu received before retrying, to avoid duplicates. A submission message in the extension alone does not prove that all table content is correct.

Keep App Secret out of collection requests. For a local file instead, use [Export data](/en/data/export).

::: info Verification scope
The settings and instructions have been checked against the extension. Live Feishu reads and writes have not been tested with an available test app and table. Check two sample records in your own environment first.
:::
