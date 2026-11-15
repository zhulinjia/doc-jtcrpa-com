---
layout: doc
title: Wait for content to appear
---

# Wait for content to appear

A page may still be loading when collection starts. Describe the content you need; AI can add a wait without you having to guess the right delay.

## Practice: wait for orders after clicking

<PracticeTask lesson="wait" />

Send the request on the practice page. After the workflow is saved, click **Restart this exercise**, then use **Manual start** in **Workbench**.

## Check the results

Once the table appears, collect **4 orders**. The first is **DD1001 / Between Mountains and Seas / 32**. Check the last order against the page. Open **Storage → Preview** to confirm the task waited for the orders.

## Your own page is slow too

Click **Edit** on the saved workflow and add:

> Wait for the product list to appear before collecting.

Describe visible content such as the list, loading message, or dialog. Sign-in and CAPTCHA steps still need to be handled separately.

You can also try [waiting for a loading indicator to disappear](/en/guide/basic-practice#wait).
