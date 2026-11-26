---
layout: doc
title: Webpage and tab actions
---

# Webpage and tab actions

Identify the button, field, or tab you want to use. If several buttons have the same name, describe the section or nearby text. [Add or change a node](/en/nodes/#add-or-change-a-step)

## Click {#click}

Name the button, link, or other visible target and say when to click it.

> Click **Next** at the bottom of the bookshop.

Check that the page number and list change. If collection should wait for the new list, add [Wait for an element](/en/nodes/waiting#wait-element) after the click. [Click practice](/en/guide/basic-practice#click)

## Type text {#input}

Name the field and the text to enter. Say whether to press Enter or Tab, or click a submit button afterward. If suggestions fail to appear, ask AI to type one character at a time.

> Type “City” in the book title search box and press Enter.

Check the text in the field and the search results. Some forms only validate a field after you leave it with Tab. [Search with Enter](/en/guide/basic-practice#search) · [Type and press Tab](/en/guide/basic-practice#tab)

## Choose a dropdown option {#select}

Name the dropdown and the option using its visible label. For a custom list that opens on click, ask AI to open it and click the option.

> Set the book category to “Travel”.

Check the selected label and any list or confirmation message that depends on it. [Dropdown practice](/en/guide/basic-practice#choices)

## Check or uncheck an option {#check}

For a checkbox, say whether it should end up checked or unchecked. For a radio group, name the option to select.

> Uncheck “Receive email reminders”.

Check the final checkbox state. The practice page also shows a message confirming that reminders are off. [Checkbox practice](/en/guide/basic-practice#choices)

## Hover {#hover}

Name the text, icon, or card to hover over and say what to do when its popup appears.

> Hover over **View contact details**, then collect the details when the popup appears.

Hover manually once to identify the popup. In the test run, check where it appears and what values were collected. [Hover practice](/en/tutorial/hover-dialog#hover)

## Move the pointer away {#unhover}

Tell AI what to move away from and when. Use this after reading a popup that should close before you move on.

> After reading the contact details, move the pointer away from **View contact details**.

Check that the popup closes and you can open the next one.

## Scroll {#scroll}

Identify the whole page or a panel with its own scrollbar. Say how far to scroll or name the top, bottom, or item to scroll to.

> Scroll to the bottom of the reviews panel and wait for more reviews.

Check that the reviews panel scrolls and more reviews appear. Use a [loop](/en/nodes/flow#loop) when you need to repeat the action. [Scroll practice](/en/guide/basic-practice#scroll)

## Open a tab {#tab-open}

Give the full address or name a link collected by an earlier step. Say what should happen on the new page.

> Open the collected detail link in a new tab and collect the title and price.

Check that the expected URL opens and that the fields came from the detail page. [Tab practice](/en/guide/basic-practice#tabs)

## Switch tabs {#tab-switch}

Name the open page where the next step should happen. After viewing a detail page, you can refer to the list you opened it from.

> After collecting the details, switch back to the book list.

Check the next action or the URL in the log to confirm the workflow is back on the list. [Tab practice](/en/guide/basic-practice#tabs)

## Close a tab {#tab-close}

Name the tab to close and when to close it. In a batch, close each detail tab once its item has been handled.

> Close the detail tab after collecting this book. Keep the book list open.

Check that the detail tab is closed and the remaining steps can still use the list. [Tab practice](/en/guide/basic-practice#tabs)

## Reload {#reload}

Say when to reload the page the workflow is using and what to look for afterward. Ask for a hard refresh if you need the browser to fetch the page resources again.

> Click **Prepare update**, then reload this page.

Check the updated page content. Add [Wait for an element](/en/nodes/waiting#wait-element) if the content loads after the page reloads. [Reload practice](/en/guide/basic-practice#reload)
