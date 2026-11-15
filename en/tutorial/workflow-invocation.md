---
layout: doc
title: Combine saved workflows
---

# Combine saved workflows

AI can combine steps you have already tested separately. For example, run a saved “Set order filter” workflow, then a “Collect orders” workflow.

This is an advanced option. A single small task can usually be described in one request and saved as one workflow.

## Describe the order

Open a page suitable for both workflows and say in **Compile with AI**:

> Run “Set order filter” first, then run “Collect orders”.

Replace the example names with the actual saved names in **Workbench**. Answer AI questions carefully if names are similar.

Run the new workflow on a small sample. Check its output in Storage and open **Logs** to confirm that both parts ran. If the second part needs results from the first, explain that relationship and verify it in the output.

## Editing and moving combined workflows

Changing a referenced workflow can change the combined task, so test it again. Before deleting a workflow, check whether other workflows or scheduled tasks use it.

On another computer, check, reconnect, and test both the combined workflow and its dependencies. Importing one file does not bring all other workflows, data, or settings with it. See [Back up and move workflows](/en/advanced/import-export).

To schedule an existing workflow directly, choose it in **New task → Workflow**. See [Scheduled tasks](/en/automation/scheduled-task).
