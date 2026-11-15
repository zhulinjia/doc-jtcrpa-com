---
layout: doc
title: No data or empty results
---

# No data or empty results

Start in **Storage → Preview**. Check that you selected the right table, and refresh a preview opened before the latest run.

## 1. Check page and computer sleep

Minimizing the window or letting the computer sleep can prevent content from loading. Keep the target page visible, connect power, and check Logs for messages about a sleeping page. Consider the message time and the action that was running.

For longer tasks, check [sleep settings](/en/troubleshooting/anti-sleep). Keep existing results while deciding which content needs another run.

## 2. Check the target page

Return to the page used during the run. Check sign-in and make sure you can see the desired content. A list, search result, and detail page may require different steps.

For the first exercise, open the <a href="/en/practice/index.html" target="_blank" rel="noopener noreferrer">bookshop home page ↗</a> and check the original 4 books. If a workflow card has not appeared, AI may still be preparing the task; see [Your first collection](/en/guide/first-task).

## 3. Check that content has appeared

If a page needs a search, scroll, load, or dialog closure first, have the workflow perform that action before collecting. Click **Edit** and say:

> Wait for the list to appear before collecting.

Describe the visible content rather than guessing a delay. See [Wait for content](/en/tutorial/wait-page).

## 4. Describe what is missing

For example: “Page 1 is present, but page 2 is missing” or “Titles are present, but prices are empty.” Use Edit on the saved workflow and retry a small sample.

If the website layout changed, the workflow may need to be recreated. Keep the earlier workflow and results for comparison. For missing embedded content, see [Collect embedded content](/en/guide/frame-practice).

If the issue remains, include the request, webpage, and logs in a [problem report](/en/troubleshooting/).
