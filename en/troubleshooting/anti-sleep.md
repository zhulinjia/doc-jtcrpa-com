---
layout: doc
title: Keep long runs awake
---

# Keep long runs awake

Tasks run in your browser. Computer sleep, a closed browser, or restricted background activity can interrupt a task or prevent content from loading fully.

## For a short task

- Keep the target page in a visible browser window and leave its tab open.
- Connect laptop power and keep the lid open during the task.
- Keep a working connection and let the workflow operate its collection tabs.

These reduce interruptions; still check the results.

## For a long task

**Browser:** search settings for Memory Saver or Sleeping tabs. Use the current browser options to keep the collection website active. If there is no per-site exception, adjust the relevant setting during the run and restore it afterwards as needed. Names and locations vary by browser version.

**Computer:** check the power settings and automatic sleep timeout while plugged in. On a laptop, also check lid-close behavior. Display power-off and computer sleep are separate settings; screen brightness alone does not tell you whether a task can run.

Schedule tasks for times when the computer is normally on. Start long jobs with small batches before increasing the scope.

## Check for interruptions

In [Run logs](/en/automation/run-logs), look for messages about a sleeping or unresponsive page. Compare their time, the action being performed, and the result. A message does not mean all data is wrong, and no message does not prove all data was collected.

Identify missing content and keep existing data. For a retry, ask AI to save the additional collection to a new table for comparison.

After reopening the computer or browser, check the run records before retrying. Earlier runs do not automatically continue from where they stopped. See [A run has stopped](/en/troubleshooting/interrupted).
