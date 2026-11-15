---
layout: doc
title: Scheduled tasks
---

# Scheduled tasks

Run a tested workflow at a chosen time to collect the same kind of webpage regularly. **Test a manual run successfully before scheduling.**

The computer, browser, and extension must be running, and the target page must remain accessible. The browser performs the task. Shutdown, sleep, or a closed browser can prevent scheduled runs and catch-up runs.

## Create a small task

1. Open **Scheduled tasks** in the sidebar and click **New task**.
2. Enter a recognizable **Task name**, such as “Daily book prices”.
3. Paste one complete webpage address in **Target URLs**. Each URL goes on its own line.
4. Under **Workflow**, select a workflow already tested on that kind of page.
5. In **Schedule**, choose **Every day**, set the time, and click **Save task**.

Check the card switch and next-run time. Click **Run now** once, verify the result in Storage, and check Logs. Also check the first run that happens at the scheduled time.

::: tip Access requirements
Saving settings and executing the task have different permissions. Scheduled execution and Run now require VIP1 or above. Follow the current account and plan prompt.
:::

## Temporarily disable automatic runs

Turn off the switch at the top right of the task card. **Run now still works while the schedule switch is off.**

New tasks are enabled by default. For a one-time list of URLs, switch the schedule off after saving. See [Batch collection](/en/automation/batch-collection).

## Other schedules

Choose intervals in minutes or hours, daily, weekly, or monthly. Monthly dates are 1–28; choosing 28 means the 28th of each month. Use the preset schedules unless you need the advanced custom expression.

Tasks open collection tabs and usually close the tabs they opened after a normal finish. Let them operate those tabs. A scheduled run may be skipped while the previous one is still running. Results follow the selected workflow settings and may join earlier data in the same table.

## If a scheduled run did not start

1. Check that the switch is on and the next-run time is correct.
2. Check computer sleep, the browser, and the network.
3. Check the account, membership, and whether the card says **Workflow deleted**.
4. Open **Logs** to see whether the run started and where it stopped.

Use **Retry sync** when prompted. If execution settings are missing, edit the task, select its workflow again, and save. Before using Run now to retry, check for partial results.

See [Email notifications](/en/automation/notifications) and [Keep long runs awake](/en/troubleshooting/anti-sleep).
