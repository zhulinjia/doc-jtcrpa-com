---
layout: doc
title: Logs, notifications, and scripts
---

# Logs, notifications, and scripts

Add a step to record an intermediate value or get a progress notification at a specific point in the workflow.

## Record a log value {#print}

Name the value to record and the step after which it should be recorded. This helps you inspect the data used by later actions.

> Before sending the order, record its order number and amount in the run log.

Open the log for this run, find the new step, and expand its result to check the actual values. [Run logs](/en/automation/run-logs)

## Show a notification {#notify}

Say when to show a system notification. You can give it a title and message, such as a reminder to review a table after writing the results.

> After saving the data, show a notification reminding me to review the results.

Look for the system notification when the run reaches this step. If none appears, verify that the step ran and check browser and system notification settings.

## Use a custom script {#user-script}

For a specialized page action, tell AI which page to use, what to do on it, and which step needs the result. Follow the extension's permissions prompt if it appears.

> Use a custom script to read the discount amount calculated on the page so the next step can check it.

Test on a page where you can check the expected value. Confirm the amount and the decision that followed. [User script permissions](/en/advanced/user-script)
