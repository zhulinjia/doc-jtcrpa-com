---
layout: doc
title: Start, pause, and end a run
---

# Start, pause, and end a run

Find the saved workflow in **Workbench**. Switch to the webpage it should process, then click **Manual start**. Preparing the workflow and running it are separate steps.

## Enter run parameters {#run-parameters}

When a workflow has a parameter node, **Manual start** opens **Enter run parameters**. Keep the prefilled defaults or enter the keyword, page count, or other values for this run, then click **Start run**. [Add and use a parameter node](/en/automation/workflow-parameters)

## Controls during a run

The card shows the current action and may pause while the page needs your help. The run controls are at the bottom of the workflow card.

| Button | Use it to |
| --- | --- |
| **Pause** | Pause this run so it can be continued. |
| **Resume** | Continue after handling a problem on the page. |
| **Skip** | Abandon the current whole step and continue. Read the confirmation because data or later actions may be affected. |
| **End** | Stop the run immediately. Starting again creates a new run. |

Skip may skip a whole step rather than one record. If uncertain, resolve the problem and use Resume. Some positions cannot be skipped separately.

Keep the page visible and its tab open. For long tasks, see [Keep long runs awake](/en/troubleshooting/anti-sleep).

## Start from the webpage right-click menu

Click the arrow beside Manual start. In **Switch trigger**, choose **Set as right-click run**. The card shows **Right-click enabled**.

Right-click the target webpage and choose the workflow name from the browser menu. The Right-click enabled control on the card explains how to use it; the webpage menu starts the task.

Only one workflow can use this trigger at a time. Enabling another replaces the previous choice. Choose **Manual start** from the arrow menu to switch back.

## After the run

When the start button returns, the run has ended. Check **Storage → Preview**; completion alone does not guarantee correct data.

If the run fails or its outcome is unclear, click **Logs** and see [Run logs](/en/automation/run-logs). Existing data and submitted actions may remain. Check them before retrying, especially for forms and outgoing data.

Continue with [Scheduled tasks](/en/automation/scheduled-task), or [A run has stopped](/en/troubleshooting/interrupted) for an interrupted task.
