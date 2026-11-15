---
layout: doc
title: Email notifications
---

# Email notifications

Get an email when a workflow fails or needs your help. Set a recipient address and verify that a test email actually arrives.

## Set an address and test delivery

1. Open **Settings → Notification settings** at the bottom of the sidebar. Sign in if prompted.
2. Enter your recipient in **Email address** and click outside the field. Changes save automatically.
3. Click **Send test**. After the submission message, check the inbox and spam folder.
4. **Delivery is verified only when the message arrives.** A submission message confirms a send request, not delivery. Wait for the countdown before sending another test.

A previous test was confirmed delivered to a QQ mailbox. Test your own address separately. No email password is needed here.

## When notifications are sent

| Event | Setting |
| --- | --- |
| Waiting for your help, or a failed run | Enabled by default once an address is saved. |
| A normally completed workflow | Turn on **When a workflow completes**. |
| You click Pause or End yourself | These actions do not send this kind of notification. |
| Disable email notifications | Clear **Email address**, click outside it, and check the save state. |

Workflow notifications may include a task name and error details. Use an address suitable for that content.

## If a message does not arrive

Check the address, save status, spam folder, and whether the selected event actually occurred. The extension cannot send promptly while the computer is off, browser closed, or network unavailable.

After an error notification, return to the browser and handle the target page. Use **Resume** if the task is still paused. If it has ended, inspect [Run logs](/en/automation/run-logs) and completed work before restarting.
