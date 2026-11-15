---
layout: doc
title: Error reference
---

# Error reference

Find the message or symptom below. If a prompt card is shown, follow its instructions and buttons first.

## During task preparation

| Message or prompt | Next step |
| --- | --- |
| Sign-in required | Click **Sign in**, then return to the target webpage. |
| No API key configured for the current AI model | Click **Configure** or select a service with available credits. |
| Not enough credits | Check the selected service and balance. See [AI settings](/en/settings/ai-model). |
| User-script permission is needed | Follow [the permission steps](/en/advanced/user-script), then return and click **Enabled**. |
| File URL access is needed | For a task that reads disk files, follow [Read local files](/en/data/local-file). |
| This page needs a reload | Refresh the target page and resend any unsent request as prompted. |
| This page is not supported | Switch to an ordinary webpage. See [Page support](/en/troubleshooting/page-not-supported). |

## Diagnosis during a run

These labels describe the issue. Check the card controls and log state to decide whether the run can still be resumed.

| Label | First action |
| --- | --- |
| Login required / CAPTCHA required | Handle it yourself on the target page, then use **Resume** if the run is still paused. |
| This page is not the target page | Check the actual page and intended workflow, then return to the correct page. |
| No data could be collected | [Check the page and results](/en/troubleshooting/empty-result). |
| Site has been redesigned | Use **Edit** and let AI examine the updated page. |
| Page not found / Page unavailable | Check the URL, connection, and whether the tab is still open. |
| Page not ready | Wait for the content or [change the wait](/en/tutorial/wait-page). |
| Permission not granted | Read which permission is missing and follow its prompt card. |
| Failed to save data | Keep the log and inspect existing results. Report repeated failures. |
| Workflow is misconfigured | Give AI the complete message, then test a small sample after editing. |
| Engine execution error / Diagnosis returned no conclusion | Export the log and report what actually happened. |

## Data, tasks, and files

| Message or symptom | Next step |
| --- | --- |
| Completed workflow, wrong row count | [Check results](/en/data/check-results), including older data and skipped content. |
| Timed out waiting for content to appear or disappear | Check the page manually, then ask AI to review the wait target. A timeout does not itself prove a step was skipped. |
| Run page closed | Check whether the run ended and inspect existing results before starting again. |
| Workflow deleted | Edit the scheduled task and select an existing workflow. |
| Missing execution settings; edit and save required | Open the task, check its selected workflow, and save again. |
| Download exceeds plan limit | Check total dataset rows and current permissions. See [Export data](/en/data/export). |
| Import failed: not a task package | Check the import page. Import workflow files in Workbench. |
| Unsupported or unreadable uploaded file | Open it in a spreadsheet program, save a supported format, and upload again. |
| Dataset changed during a run | Finish the run before replacing its input, check results, then start again. |

For Feishu permissions and partial writes, see [Write to Feishu](/en/data/feishu) and [Read Feishu](/en/data/feishu-read). For a submitted email that did not arrive, see [Email notifications](/en/automation/notifications).

If no entry matches, keep the full original message and include logs in a [problem report](/en/troubleshooting/).
