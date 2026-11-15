---
layout: doc
title: Edit a saved workflow
prev:
  text: Your first collection
  link: /en/guide/first-task
next:
  text: Use your own webpage
  link: /en/guide/own-page
---

# Edit a saved workflow

Open the <a href="/en/practice/index.html" target="_blank" rel="noopener noreferrer">practice bookshop home page ↗</a>. To add authors to your price table, select the saved workflow and tell AI “Add the author.”

## Open the workflow for editing

1. Open the webpage the workflow uses and wait for it to load. Sign in to that website if required.
2. Open **Workbench** in the sidebar and find the workflow. Use **Search workflow names** at the top if needed.
3. Click **Edit**, with the pencil icon, at the bottom of its card. The sidebar opens Compile with AI and inserts the workflow name at the start of the input.
4. After that name, describe your change:

   > Add the author.

5. Send the message and wait. Answer any questions, then return to Workbench after AI saves the changes.
6. Run a small sample and check it in Storage. Earlier data may remain in the dataset, so distinguish it from the new run.

If a run is already paused, editing the workflow does not change the steps used by that run. End it and start a new run to use the updated workflow.

## Change the column language {#column-language}

Click **Edit** as above, then add this after the selected workflow name:

> Change the column names to English.

Name another language if you prefer, for example:

> Change the column names to Japanese.

After saving, return to the bookshop home page and run again. Reopen **Preview** and check the newly collected content and column names. You can also check the header row in the downloaded Excel file.

<details>
<summary>Old columns remain, or you want a separate table?</summary>

Earlier results can remain. To make a separate result, say:

> Change the column names to English and save this run in a separate new table.

After saving, return to the bookshop home page and run again. Find the new table in Storage, open **Preview**, and check it before downloading.

</details>

## Check the author column

The 4 newly collected books should match these authors:

| Book | Author |
| --- | --- |
| Between Mountains and Seas | Lin Jian |
| City Strolls | Zhou Ning |
| Room to Breathe | Yun Shu |
| Moonlight on the Page | Xu Zhi |

Download the Excel file and check that it also includes the authors.

<details>
<summary>Another way: select a workflow in the conversation</summary>

In Compile with AI, enter `@` at the **very start** of the input, select a workflow from the list, then add your change after its name. Keep typing its name or description to narrow a long list.

- Select the workflow from the list. Typing its name as ordinary message text may not select it for editing.
- Keep the inserted workflow name at the start of the input.
- Check the name and description when several workflows look similar.

In the same conversation that just created a workflow, you can also add a follow-up request. Run and check the updated workflow, using test data first for tasks that submit or delete content.

</details>

## If the change is still wrong

- **Wrong column:** name it and give an example of the value you expect.
- **The website changed:** open the new page and describe what needs changing. You may need a new workflow.
- **Unclear where it stopped:** check [Run logs](/en/automation/run-logs). For empty results, see [No data or empty results](/en/troubleshooting/empty-result).

Continue with [Use your own webpage](/en/guide/own-page).
