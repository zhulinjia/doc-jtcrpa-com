---
layout: doc
title: Practice common web actions
---

# Practice common web actions

These are optional exercises. Start with [Your first collection](/en/guide/first-task), then choose an action when you want to practice it separately. All data is fictional.

## How to do an exercise

1. Open its page and click the Jiutouchong browser icon.
2. Open **Compile with AI** and send the request shown under **Try this request** on the practice page. The options exercise has three separate requests; choose one at a time.
3. Wait for AI to save the workflow. Let it finish any page actions during preparation.
4. Reset the exercise as its page describes, then use **Manual start** in **Workbench**.
5. Compare with the expected result below. For collected data, open **Storage → Preview**.

If a result is wrong, describe the problem to AI and ask it to adjust the workflow. Check the result again after running it.

## 1. Click a button {#click}

Open the <a href="/en/practice/scenarios/basics-controls/click.html" target="_blank" rel="noopener noreferrer">button exercise</a> and have the workflow click **Claim bookmark**.

The page should show **Bookmark claimed**. Click **Reset exercise** before trying again.

## 2. Type and press Enter {#search}

Open the <a href="/en/practice/scenarios/basics-controls/search.html" target="_blank" rel="noopener noreferrer">Enter-to-search exercise</a>. Ask the workflow to enter **City** in the book search box and press Enter.

The result should show **City Strolls**, ¥45.00. Reset the exercise before another run.

## 3. Select options and clear checkboxes {#choices}

Open the <a href="/en/practice/scenarios/basics-controls/choices.html" target="_blank" rel="noopener noreferrer">options exercise</a>. Create a separate workflow for each request you want to try.

| Exercise | Expected result |
| --- | --- |
| Select a dropdown option | Both the category and its status show **Travel**. |
| Change a radio selection | **Store pickup** is selected and shown in the status. |
| Clear a checkbox | **Receive email reminders** is cleared, and the status says **Reminders off**. |

After the workflow is saved, use the reset button beside that exercise before starting it.

## 4. Wait for data to load {#wait}

Open the <a href="/en/practice/scenarios/basics-wait-scroll/disappear.html" target="_blank" rel="noopener noreferrer">loading exercise</a>. Ask the workflow to click **Look up books**, wait for the table, and collect the title and status.

Restart the exercise after saving the workflow, then run it. Storage should contain 3 rows: **Between Mountains and Seas**, **City Strolls**, and **Room to Breathe**, all **Available to borrow**.

## 5. Scroll inside an area {#scroll}

Open the <a href="/en/practice/scenarios/basics-wait-scroll/container.html" target="_blank" rel="noopener noreferrer">review box exercise</a>. This box has its own scrollbar; reaching its bottom loads more reviews.

Ask the workflow to load all reviews in the box and collect reviewer names and text. Restart the page before running. Check for **8 reviews**, starting with **Lin Xiao** and ending with **Yu He**.

## 6. Switch browser tabs {#tabs}

Open the <a href="/en/practice/scenarios/basics-flow/tabs.html" target="_blank" rel="noopener noreferrer">browser tabs exercise</a>. Open **Book details** in a new tab, collect the title and price, return to the exercise, and close the details tab.

After preparation, return to the exercise before starting. Check **1 row: Between Mountains and Seas, ¥32.00**. The browser should be back on the original page and the details tab should be closed.

## 7. Follow a condition {#conditions}

Open the <a href="/en/practice/scenarios/basics-flow/conditions.html" target="_blank" rel="noopener noreferrer">stock exercise</a>. Ask the workflow to collect the title and price when the product is **In stock**, and skip it when **Out of stock**.

After saving, try both states:

1. Click **Set in stock** and start the workflow. Storage should gain **1 row: Between Mountains and Seas, ¥32.00**.
2. Click **Set out of stock** and run again. No new row should be added. The previous row may remain; use this run in **Logs** to check that collection was skipped.

## 8. Type and press Tab {#tab}

Open the <a href="/en/practice/scenarios/basics-input-reload/tab.html" target="_blank" rel="noopener noreferrer">Tab-key exercise</a>. Enter **Lin** as the pickup name, then press Tab to trigger the name check.

Reset the exercise after saving, then run it. The input should contain **Lin** and the status should say **Name confirmed: Lin**.

## 9. Refresh to see an update {#reload}

Open the <a href="/en/practice/scenarios/basics-input-reload/reload.html" target="_blank" rel="noopener noreferrer">refresh exercise</a>. Ask the workflow to click **Prepare update**, then refresh the page.

Reset before the actual run. The message should change from **No new messages** to **New message received** after refreshing.

## 10. Scroll to a particular book {#target}

Open the <a href="/en/practice/scenarios/basics-scroll-extract/target.html" target="_blank" rel="noopener noreferrer">book scrolling exercise</a>. Ask the workflow to scroll **Book 12: Between Mountains and Seas** into view inside the list.

Restart before running. The list should scroll until book 12 is visible inside it.

## 11. Collect titles and links {#links}

Open the <a href="/en/practice/scenarios/basics-scroll-extract/links.html" target="_blank" rel="noopener noreferrer">link collection exercise</a>. Collect each title and its URL under **Recommended exercises**.

Return to the exercise before starting. Check for **3 rows**: Click a button, Type and press Enter, and Switch browser tabs. Each row should have the full matching URL. Open the URLs to check them.

Return to the <a href="/en/practice/hub.html" target="_blank" rel="noopener noreferrer">playground</a> to try complete collection and form tasks.
