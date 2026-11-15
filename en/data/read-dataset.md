---
layout: doc
title: Reuse collected data
---

# Reuse collected data

A saved table can become input for another task, such as selecting books and opening their URLs. First check that the original table exists and is correct in **Storage**.

## Identify the saved result

On the target webpage, open **Compile with AI** and say:

> Read the book results I collected earlier. Keep the titles and prices of books over ¥35 and save them to a separate new table.

If there are similar tables, answer AI questions to select the right one. You can copy its displayed name and smaller identifier from the card to distinguish it.

Run the saved workflow according to its instructions, then find and check the new result in Storage. This creates a follow-up task; it does not automatically edit all earlier tables.

## What can you do with earlier results?

Try goals such as “Process only unfinished items in the list” or “Find price changes since the last run.” Check a small known sample first. Comparisons depend on having names, identifiers, or source URLs that match records between tables.

Check both included and excluded rows and their sources, rather than relying on a completion message. See [Check your results](/en/data/check-results).

For other input sources, see [Read local files](/en/data/local-file) and [Read Feishu Bitable](/en/data/feishu-read).
