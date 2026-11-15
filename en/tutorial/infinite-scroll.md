---
layout: doc
title: Scrolling and Load more
---

# Scrolling and Load more

Some lists show more content only after you scroll or click Load more. Practice collecting all **12 reviews** below.

## A list loaded by scrolling

Open the extension on the practice page and send:

<PracticeTask lesson="scroll" />

After saving the workflow, click **Restart this exercise** on the page, then **Manual start** in **Workbench**. Keep the page visible and let the task handle scrolling.

## A list with a Load more button {#more}

This exercise reveals more reviews when a button is clicked. Describe the desired result and let AI prepare the page actions:

<PracticeTask lesson="more" />

Restore the initial page state before running the saved workflow.

## Check that all reviews were collected

In **Storage → Preview**, check **12 different reviews**. The first reviewer is **Lin Xiao** and the last is **Yu He**. Check a middle row too, matching its reviewer, rating, and text.

If only the first batch appears, click **Edit** and say “Reviews loaded later are missing. Include those too.” Save and retry from the initial page.

## Use your own webpage

Start with a limit such as “Collect the first 20 reviews.” Some lists keep growing, so add the record count or date range you actually need. For slow content, see [Wait for content](/en/tutorial/wait-page). If images are not loaded yet, ask AI to load them before collecting, or use [Image extractor](/en/tools/extract-tools#images).

If several reviews are combined in one cell, use Edit and say “Put one review on each row and save to a separate new table.” Run again and check that each row belongs to one reviewer.
