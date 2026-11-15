---
layout: doc
title: Collect embedded content
---

# Collect embedded content

Some websites display an order table or form inside a separate area of the page. If ordinary collection misses content you can see, tell AI which area to use.

## Start with an embedded order table {#extract}

<span id="orders"></span>

<PracticeTask lesson="frame" />

Keep the practice page in the current tab and send the request in **Compile with AI**. After the workflow card appears, restore the exercise to its initial state and click **Manual start** in **Workbench**.

In **Storage → Preview**, check **3 orders**:

| Order | Product | Amount |
| --- | --- | --- |
| DD2001 | Between Mountains and Seas | 32 |
| DD2002 | City Strolls | 45 |
| DD2003 | Room to Breathe | 39 |

A currency sign may be present or absent; check that each amount matches its order.

If only the outer page title was collected, click **Edit** and say “I need the table inside the embedded area. It was missing.” Retry a small sample after saving.

## Choose another embedded-page exercise

Each page contains its own request. Choose one at a time. After AI saves the task, restart the page as instructed, run the workflow, and check any collected results in Storage.

### Click inside an embedded page {#click}

<a href="/en/practice/scenarios/frame-actions/click.html" target="_blank" rel="noopener noreferrer">Open the delivery lookup exercise ↗</a>. Check **1 row: WL1001, In transit, Hangzhou distribution center**.

### Fill in an embedded form {#form}

<a href="/en/practice/scenarios/frame-actions/form.html" target="_blank" rel="noopener noreferrer">Open the pickup form exercise ↗</a>. The submitted details should show **Lin**, **Store pickup**, and **Pick up on Saturday**. The collected row should match.

### Two stores side by side {#parallel}

<a href="/en/practice/scenarios/frame-structures/parallel.html" target="_blank" rel="noopener noreferrer">Open the two-store exercise ↗</a>. Check **4 orders**, 2 from each store. Make sure the East and West store records are not mixed up.

### Orders in nested pages {#nested}

<a href="/en/practice/scenarios/frame-structures/nested.html" target="_blank" rel="noopener noreferrer">Open the nested-page exercise ↗</a>. Show the innermost table before collecting. Check **3 orders** with their matching numbers, products, and amounts.

### Content from another website {#cross}

<a href="/en/practice/scenarios/frame-cross/index.html" target="_blank" rel="noopener noreferrer">Open the external embedded-page exercise ↗</a>. First check that its third-party book list loads. Collect the first two titles and prices shown at that time.

If the third-party website does not load, skip this exercise for now. Follow any extension prompt for cross-site access.

## If you cannot see the embedded content

Check that you can open it manually. Sign in to the target website or restart the exercise if needed. Resolve loading problems before collecting. For a stopped run, see [A run has stopped](/en/troubleshooting/interrupted); for missing data, see [Check your results](/en/data/check-results).
