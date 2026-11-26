---
layout: doc
title: Wait for pages and data
---

# Wait for pages and data

Identify when the page is ready to continue. A list may appear, a loading indicator may disappear, or a request may return the data. Put the wait after the action that starts loading.

## Wait for an element {#wait-element}

Tell AI what should appear or disappear. Specify how long to wait if the page is slow.

> After clicking **Look up books**, wait for the books table before collecting.

Check that the results came from the loaded table. If the table stays visible during pagination, wait for the new page number or the first item on the new page. For a timeout, check whether the expected content appeared before adjusting the target or wait time. [Wait for the books table](/en/guide/basic-practice#wait)

## Wait for a request {#wait-network}

Load the results once on the target page so AI can identify the request that returned them. Describe which data to wait for after a click or scroll and what to do next.

> After clicking Load orders, wait for the request that returns the order list, then read the orders.

Check the wait result in the log and confirm that you got the newly loaded orders. If the wait reaches its time limit, use the later results to decide whether to increase it. When collecting what appears on the page, you can also wait for the list itself. [API collection practice](/en/tutorial/from-api)

## Wait a set time {#delay}

Say which action should be followed by a wait and how many seconds it should last. Use this for a fixed interval between actions.

> After every click on Load more, wait 2 seconds before continuing.

Compare the log timestamps around the wait. When page load times vary, [wait for an element](#wait-element) that shows the page is ready.
