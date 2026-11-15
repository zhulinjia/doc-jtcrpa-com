---
layout: doc
title: Introduction
prev: false
next:
  text: Install and sign in
  link: /en/guide/install
---

# Introduction

Jiutouchong RPA Agent is a browser extension that lets AI prepare tasks for the webpage you are using. For example, say “Collect the product names and prices from the first 3 pages into an Excel file.” AI examines the page and prepares the steps. You start the task, then check the results. Saved tasks can be run again or edited through the conversation.

## Try it: collect 4 books into Excel {#第一次只认三个地方}

Use the bookshop playground to collect the titles and prices of the 4 books on its first page. The books and prices are fictional, so you can practice directly.

Not installed yet? [Install and sign in](/en/guide/install), then return here.

<PracticeTask lesson="first" />

### 1. Open the extension on the bookshop page

Click **Copy this request**, then **Open practice** above. The bookshop opens in a new tab. Switch to it, click the **Jiutouchong Agent** icon in the browser toolbar, and open **Compile with AI** in the extension sidebar.

Paste the request into the input at the bottom of the conversation and click the send arrow. If the icon is missing, follow [the installation instructions](/en/guide/install#二、固定图标并激活页面) to find and pin it.

<a href="/images/intro-ai-chat-en.png" target="_blank" rel="noopener noreferrer"><img src="/images/intro-ai-chat-en.png" width="400" height="760" style="width: 400px; max-width: 100%; height: auto;" loading="lazy" alt="Compile with AI in the extension sidebar, with the practice request in the bottom input and the send arrow at the bottom right; click to enlarge" /></a>

This screenshot shows the English sidebar with the request ready to send. Click the image to enlarge it.

### 2. Wait for AI, then start the task

AI examines the bookshop and prepares the collection steps. Let it finish. A workflow card with a task name and a **Manual start** button means the task has been saved. AI chooses the task name.

Click **Bookshop playground** at the top of the bookshop to return to its first page. In the extension, open **Workbench**, find the task, and click **Manual start**.

This starts the actual collection. Keep the bookshop window visible and leave its tab open.

### 3. Check the results and download Excel

When the run finishes, open **Storage**, find the result, and click **Preview**. Check these 4 books:

| Book title | Price |
| --- | --- |
| Between Mountains and Seas | ¥32.00 |
| City Strolls | ¥45.00 |
| Room to Breathe | ¥39.00 |
| Moonlight on the Page | ¥28.50 |

Column names and price formatting may vary. Each title must match the price on the webpage. Once the content is correct, click **Download** and choose **Excel**.

For a step-by-step walkthrough and help with unexpected results, see [Your first collection](/en/guide/first-task).

## Other tasks you can try {#适合从哪些工作开始}

| Your work | What the extension can do |
| --- | --- |
| A product list has several pages | Collect product names and prices from the first 3 pages into one table. See [pagination](/en/tutorial/list-pagination). |
| Article text is on separate detail pages | Open each article and put its title and text on the same row. See [lists and detail pages](/en/tutorial/list-and-detail). |
| An Excel file contains product URLs | Open each URL and add its price. See [uploaded lists](/en/tutorial/upload-table). |
| A web form needs text and options filled in | Describe the entries and selections to make. See [forms](/en/tutorial/fill-form). |

To find emails, phone numbers, or images on a page, use the corresponding [extraction tool](/en/tools/extract-tools).

## Reuse the task next time

The prepared task is saved in **Workbench**. Next time you need the same bookshop data, open that page, find the task, and start it again. The extension calls these saved steps a **workflow**.

Want an author column? Click **Edit** on the task and say “Add the author.” After AI saves the change, run it again. See [Edit a saved workflow](/en/guide/modify-workflow). Once a task works correctly, you can also [schedule it](/en/automation/scheduled-task).

## Use your own webpage

Sign in to the website you want to use, then start with one page or a few records. Keep the browser and target page open while the task runs. Check the results before increasing the scope. Continue with [Use your own webpage](/en/guide/own-page).
