---
layout: doc
title: Send results to another system
---

# Send results to another system

Some systems provide an address that accepts data from a workflow. Ask the receiving system for its requirements. Start with the fictional order below to learn the process.

## 1. Open the exercise and send the request

<PracticeTask lesson="send" />

The address is a real third-party test service that returns what it receives. Send only the fictional order on the practice page. Keep personal information, passwords, and real business data out of this exercise. Stop if the test service is unavailable.

## 2. Run and check the response

After AI prepares the workflow, keep the practice page in the current tab and click **Manual start** in **Workbench**.

In **Storage → Preview**, check the returned result for **DD5001 / Between Mountains and Seas / 32**. The original order or a completion message alone does not prove that the receiver accepted the correct data.

If there is no response, open **Logs**, find the sending step, and expand its details. After a timeout, check with the receiver before retrying to avoid duplicate sends.

If the returned fields are blank, click **Edit** and say:

> The returned order number, product, and amount are empty. Fix them and save the correct response to a separate new table.

Run and check the corrected task. Saving a change alone does not verify the response.

## 3. Use your own receiving system

Ask for the destination address, required fields, sending instructions, and authentication method, then give that information to AI. Send one test record and have the receiver confirm it before expanding.

This sending method does not automatically reuse your website sign-in. If the receiver only offers a web sign-in page, ask whether it also provides a data-receiving interface. Addresses, authentication details, and data may be sent to the selected AI service or receiver. Check workflow exports and logs before sharing them.
