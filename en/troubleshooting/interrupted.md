---
layout: doc
title: A run has stopped
---

# A run has stopped

Check the buttons on the workflow card. **Resume usually means the run is waiting for help. When Manual start returns, that run has ended.**

## Resume is available

Read the page prompt. Complete sign-in, a CAPTCHA, permissions, or close a covering dialog. Return to the correct target page and click **Resume**. This also continues a run you paused yourself.

Follow the instructions if a manual step is required. For script access, see [Enable user scripts](/en/advanced/user-script).

If unsure, open **Logs** to find the reason. **Skip** abandons the current whole step and may omit data or affect later form entries and submissions.

## The run has ended

Check its state and stopping point in [Run logs](/en/automation/run-logs). Data already collected may remain in the table; submissions and outgoing data may already have reached the receiver.

Restarting the browser or computer does not automatically resume an earlier run. Check what finished, open the target page, and start again. For a scheduled task, inspect its log before using **Run now** to retry.

## Resume does not make progress

| Symptom | What to do |
| --- | --- |
| The run page is loading | Wait for loading to finish, then try Resume. |
| The run page is not responding | Check whether it works manually; refresh if needed and follow the prompt. |
| The page was closed | The run may already have ended. Reopen the page and check results before restarting. |
| No recent progress | Check whether Logs is still updating and review [sleep settings](/en/troubleshooting/anti-sleep). |

Click **End** to terminate the current run. It must be started again afterwards. See [Run controls](/en/automation/start-stop) for all four buttons.
