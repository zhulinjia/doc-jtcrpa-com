---
layout: doc
title: Data storage and destinations
---

# Data storage and destinations

Distinguish saved collection results, information sent to AI for analysis, and data a task sends to other services.

## What is saved on this computer?

Workflows, results, task configuration, and related settings are saved in the current browser extension local storage. Files attached to conversations are also saved locally for use by tasks.

Signing in to the same website account on another computer does not transfer these local items. Before changing computers or browser profiles, uninstalling, or clearing extension data, download important results and export workflows and task packages separately. See [Back up and move workflows](/en/advanced/import-export).

## What can AI receive?

Creating or editing workflows and asking for diagnosis can send the request and necessary information to the selected AI service. This can include relevant page content, sample results, and task descriptions. Attachments or saved results read for a task may also enter that analysis.

Local result storage does not make AI analysis fully offline. The receiving AI service depends on whether you use the official service or your own provider settings.

## Other destinations

- **Feishu writes:** data goes to the authorized Feishu Bitable table.
- **HTTP requests:** specified content goes to the destination in the request.
- **Email notifications:** task status goes to the configured email address. This is not the same as sending the full table as an attachment.
- **Downloads:** the browser saves local files. Check them before sharing.

## Sharing workflows or reporting a problem

Workflow exports and logs may contain URLs, task text, or page-related content. Check for information you do not intend to share. Keep passwords, verification codes, and keys out of practice requests.

Workflow exports and result data are different backups; save both when needed.
