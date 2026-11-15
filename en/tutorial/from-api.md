---
layout: doc
title: Collect data loaded by a webpage
---

# Collect data loaded by a webpage

Some pages load data before displaying it in a list. AI can try collecting directly from that loaded data. Describe the result you need; you do not have to find technical parameters yourself.

This is an advanced option. Start with [ordinary list collection](/en/tutorial/list-pagination) when that meets your needs.

## 1. Open the exercise and send the request

<PracticeTask lesson="api" />

Click **Load orders** once on the exercise page to display 4 fictional orders. Keep that page in the current tab and send the request in **Compile with AI**.

## 2. Reload the exercise and run

Once the workflow appears, refresh the exercise page to its initial state. Find the task in **Workbench** and click **Manual start**. The workflow should click the load button itself to obtain the current data.

## 3. Check the 4 orders

Open **Storage → Preview**. There should be 4 orders, starting with **DD1001 / Between Mountains and Seas / 32**. Match every order number, product, and amount.

A correct table alone does not prove this collection method was used. If you specifically need the loaded data, ask AI which method it actually used and check **Logs**.

For your own website, sign in and trigger the load normally first. This method cannot supply fields the website does not provide. If AI cannot identify the request, try collecting from the visible page instead.
