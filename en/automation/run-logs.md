---
layout: doc
title: Run logs
---

# Run logs

Logs show the steps taken during one run. Use them to find where a task stopped or why results are unexpected.

## Open the right run

In **Workbench**, click **Logs** on the workflow card. Scheduled task cards also have a log control. The page opens in a new browser tab.

The page title is **Run logs**. Select the correct workflow and run time at the top, rather than an earlier successful run.

## Start with three checks

1. **Status:** running, paused, completed, or failed? Completed results still need checking.
2. **Last action:** opening a page, waiting, collecting, or sending data?
3. **Reason:** is there a sign-in, permission, or page-response prompt? Follow that specific reason.

One red error does not always mean the whole task failed; some workflows continue after a step error. A completed task may also have skipped content. Use [Check your results](/en/data/check-results) for the final answer.

## Expand details when needed

Click **Expand details** on a row to see **Arguments** and **Result**, which can also be copied. Long logs initially show only part of the record; load earlier lines when needed.

If the technical details are unfamiliar, keep the relevant rows and time for support. See [Error reference](/en/troubleshooting/error-reference).

## Export a log for support

Click **Export .log** to save the full run log. Include the request, webpage address, and actual symptom. Check for account information, page content, or verification details before sharing.

**Delete this run log** removes the selected record. **Clear logs** removes deletable records in the scope described by the current page. Active or paused runs cannot be removed this way. Log deletion cannot be undone; export anything needed for diagnosis first.
