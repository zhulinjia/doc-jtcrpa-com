---
layout: doc
title: Decisions and flow control
---

# Decisions and flow control

Tell AI when to repeat steps, when to take a different path, and when to continue, pause, or end.

## Branch on a condition {#if}

Describe what to check and what to do for each outcome. You can compare text or numbers or check whether a button exists or is disabled.

> If it says “In stock,” collect the title and price. Skip collection when it says “Out of stock.”

Run the workflow in both states and check whether collection occurred. [Inventory condition practice](/en/guide/basic-practice#conditions)

## Repeat with a loop {#loop}

Describe the steps to repeat, what to repeat them for, and when to stop.

| Scope | What you could say |
| --- | --- |
| A fixed number of times | Start on page 1 and collect the first three pages. |
| Items on a page | Open each product card in the list and collect the details. |
| A set of values | Process these three keywords in order. Or process each link just collected. |
| A saved or uploaded table | Open each URL in the Product link column. Try the first two rows. |
| Continue paging or scrolling | Scroll and collect comments until no new ones appear. |

Start with a small run. Check the first and last items and the number processed. If a page change collects the previous page again, add a wait for the new page content. [Lists and pagination](/en/tutorial/list-pagination) · [Scroll to load more](/en/tutorial/infinite-scroll)

## Exit a loop {#break-loop}

Say when to stop the current loop and what should happen next. With nested loops, the steps after the current loop continue.

> Stop turning pages at the first order we've already processed, then summarize the results.

Include a test item that meets the stop condition. Check that no further pages open and that the summary runs.

## Skip one pass {#continue-loop}

Describe which item should be skipped and ask AI to continue with the next one. This can be used with a [condition](#if).

> Skip rows with a blank URL and continue to the next row.

Test with a blank URL followed by a valid URL. Check that the valid row is still processed.

## Handle item failures {#try-block}

Describe the full set of related actions that can fail for one item. Say where to continue afterward. Opening a detail page, waiting, and collecting can be grouped together. Put cleanup such as returning to the list after the group.

> If a detail page won't open, skip that item and return to the list to continue.

Test with one working link and one that fails. Check that the working item completes and the failure is logged. Writes or sends that already succeeded are kept.

## Pause for manual work {#pause}

Name the step to pause at and what you need to do manually. When finished, click **Resume** on the running workflow card to continue from the next step.

> When the page opens, pause so I can sign in. Collect the results after I resume.

Check that the run pauses at the expected point. Finish the manual work, click **Resume**, and check that collection continues. [Run controls](/en/automation/start-stop)

## End a workflow {#end}

Describe the condition that should end the current workflow early. If another workflow called it, that caller continues with its next step.

> If there are no orders to process, end this workflow.

Test on an empty list. Check that the workflow ends before the item processing steps.
