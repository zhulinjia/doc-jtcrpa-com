---
layout: doc
title: Back up, move, and share workflows
---

# Back up, move, and share workflows

Save useful workflows to your computer and import them in another browser or share them with a colleague. **Download collected results separately: a workflow file is not a data backup.**

## Choose what to save

| Content | Export from | Import into |
| --- | --- | --- |
| Saved workflow steps | Workbench card: **More actions → Download workflow (JSON)** | **Import workflow** in Workbench |
| Schedule, URL list, and associated workflow | Scheduled task card: **More actions → Download scheduled task (JSON)** | **Import task** in Scheduled tasks |
| Collected data | **Download** in Storage | Keep as a backup, or attach the spreadsheet when needed |

Import each file on its corresponding page. Keep the downloaded workflow or task package as it is; you do not need to edit its contents.

## Before changing computers

1. Download important results as Excel files from **Storage** and check them.
2. In **Workbench**, export each workflow using **More actions → Download workflow (JSON)**.
3. Export scheduled tasks with **Download scheduled task (JSON)**. You can turn a schedule off before exporting if you want to test manually after import.
4. Install the extension in the new browser and import on the matching pages. Check schedule switches before any automatic run.
5. Sign in to target websites again and configure AI, Feishu, and local files as needed. Test a small run before enabling schedules.

Browser sign-in sessions, AI keys, Feishu app settings, and local disk files are not automatically transferred as separate configuration. Check any [referenced workflows](/en/tutorial/workflow-invocation) too.

## Duplicate cards after import

Import adds new workflows. It does not overwrite or deduplicate an existing workflow with the same name. Importing twice can create two similar cards.

When updating a shared workflow, keep the earlier version while you import and test the new one. Check references from other workflows and scheduled tasks before deciding to delete the old version.

## Check before sharing

Workflows can contain target URLs, fixed form text, and business information supplied in a request. Review internal links, account details, and verification data before sharing. The recipient uses their own browser session and should test the imported workflow.

If import fails, check the selected page and file, then ask for a fresh export. Avoid editing unfamiliar file contents to try to repair an import.
