---
layout: doc
title: Parameters, variables, and workflow reuse
---

# Parameters, variables, and workflow reuse

Use run parameters for values someone should enter at startup. To pass a value between steps, tell AI where it comes from and where it is used.

## Run parameters {#params}

Name the values you want to supply on each run, such as a keyword, filter, or page count. You can set common values as defaults. AI puts the parameter node at the start of the workflow.

> Collect the book titles and prices. Let me enter how many pages to collect each time I start.

Click **Manual start** and check that the fields appear in **Enter run parameters**. Run with one page and then two, and check the collection scope changes. [Run parameters practice](/en/automation/workflow-parameters)

## Set a variable {#declare}

Give a reusable value a clear name. Tell AI what its initial value is and when it should be updated.

> Remember the selected category as “Current category” and use it in the later lookups.

Check which category the workflow uses for the later lookups. To inspect when the value was set, [record it in the log](/en/nodes/diagnostics#print) after that step.

## Call a workflow {#call-workflow}

Name an existing workflow in **Workbench**. Say when to run it, which tab to use, and what run parameters it needs.

> After opening each book's detail page, call the saved “Collect book details” workflow.

Test with one detail page. Check the log for the correct called workflow and confirm that the caller resumes afterward. [Combine saved workflows](/en/tutorial/workflow-invocation)

## Return a result {#return}

Tell the called workflow which value to return. Tell the calling workflow how to use that value.

> Return this book's price to the calling workflow so it can check whether it is over ¥35.

Start from the calling workflow and use a book with a known price. Check that the later comparison or log uses the correct price.
