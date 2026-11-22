---
layout: doc
title: Connect an AI app with MCP
description: Connect Codex or another local AI app to Jiutouchong Agent, verify the connection, and run your first collection.
---

# Connect an AI app with MCP

Jiutouchong MCP lets Codex and other AI apps view tabs in your local browser, build and run collection workflows, and read saved results. This guide uses Codex and the practice bookshop.

## Before you start

- Use Chrome, Edge, or Firefox on Windows or macOS. Install a version of Jiutouchong Agent that includes **MCP connection**. [Install and sign in](/en/guide/install)
- Install Node.js 20.19.0 or later and use an AI app that supports local MCP (STDIO) on the same computer. [Download Node.js](https://nodejs.org/en/download)
- With the ChatGPT desktop app, use a local Codex session. An app that only accepts a remote MCP URL cannot use this local configuration directly.

## 1. Connect the browser to the local bridge

1. In the browser you want to use, click the Jiutouchong icon to open its sidebar. At the bottom, open **Settings → MCP connection**.
2. Find **Install the bridge** and click **Copy installation command**. Open PowerShell on Windows or Terminal on macOS, paste the command, and wait for installation to finish. Skip this step if you already have bridge version 0.8.0 or later.
3. Turn on **Enable MCP connection**. If the browser asks for permission, allow native messaging.
4. Under **Connect an AI app**, click **Copy setup command**. Paste the entire command into the same terminal and run it. The extension generates this command for the current browser. If you already see **Copy MCP configuration**, continue to the next section.

Return to **MCP connection** in the extension. When you see **Browser connected to the local program** and **Copy MCP configuration**, you can configure your AI app.

## 2. Add the connection to Codex and verify it

Click **Copy MCP configuration** in the extension. Keep the generated service name, launch command, and all arguments.

- **Add it manually.** In the ChatGPT desktop app, open **Settings → MCP servers → Add server**. Choose **STDIO** and fill in the name, command, and arguments from the copied configuration. Save and restart when prompted. [Codex MCP configuration](https://developers.openai.com/codex/mcp)
- **Ask local Codex to add it.** Paste the configuration into Codex and say, “Add this Jiutouchong MCP server to the current Codex settings and keep my other servers.” Once the settings are saved, reopen the app to load them.

After the configuration loads, send the following message.

> Use Jiutouchong MCP to check the connection, list the open browser tabs, and tell me which tab is active.

Seeing your tabs confirms that the AI app is connected to the browser. If you use multiple browsers or profiles, match the active tab's title and URL to confirm which profile the app can see.

Next, check that this connection can open a page. Send the following message in the same conversation.

> Use Jiutouchong MCP to open https://doc.jtcrpa.com/en/practice/index.html in the connected browser. Tell me the URL that actually opened.

Continue once you see the practice bookshop in your browser. If the app reports that the connection does not provide the page tool, see [Troubleshooting](#troubleshooting).

## 3. Collect the books on the first page

### Open the page and save a workflow

In the same AI conversation, send this message. The exercise uses one page so you can check the results easily.

> Use Jiutouchong MCP to collect the books on the bookshop homepage we just opened. Collect one row per book. Name the columns title and price, and keep the currency symbol. Show me a few sample rows, then save a workflow named “MCP bookshop practice” that writes to the bookshop_demo dataset when run. Tell me the workflow ID and wait for my confirmation before running it.

Once the assistant reports that the workflow was saved, look for **MCP bookshop practice** under **Workbench** in the extension. The bookshop tab stays open for the run.

### Confirm the run and check the results

If the sample matches what you want, send the following as a separate message.

> Yes, run “MCP bookshop practice” on the bookshop homepage now. Wait for it to finish, tell me how many rows it saved this time, and read the title and price columns from bookshop_demo. Show them in a table.

On the first run with an empty dataset, expect four rows. To check in the extension, open **Storage**, locate `bookshop_demo`, and click **Preview**.

| title | price |
| --- | --- |
| Between Mountains and Seas | ¥32.00 |
| City Strolls | ¥45.00 |
| Room to Breathe | ¥39.00 |
| Moonlight on the Page | ¥28.50 |

Next time, click **Next** in the bookshop and ask the AI to run the saved workflow on page 2. To view earlier results, ask it to read `bookshop_demo`. [Storage and preview](/en/data/storage-preview)

## Troubleshooting

| What you see | What to do |
| --- | --- |
| The Settings menu has no MCP connection entry | Check that you have Jiutouchong Agent and that your extension build supports MCP. If you need a compatible build, [contact Jiutouchong](https://jtcrpa.com/en/contact). |
| The extension is waiting for the setup command | Keep that browser open and run the complete command just copied from its MCP page in your local terminal. If the terminal cannot find npm, install Node.js, reopen the terminal, and copy the installation command from the extension again. |
| The extension says native messaging is still unavailable | Wait for active runs to finish, then save and close any workflow editors. If you still see a prompt to reload manually, open your browser's extensions page, reload Jiutouchong Agent, and check the connection status again. |
| The browser is connected, but the AI cannot find Jiutouchong tools | Check that the server was added to the local app you are using. Save, restart the app, and ask the AI to list the tabs in a new conversation. |
| The AI can list tabs, but says the connection does not provide the page tool | Check that the Jiutouchong Agent build in the target browser and the local bridge are compatible. Update both, turn **MCP connection** back on, restart the AI app, and try opening the bookshop again. If the tool is still unavailable, [contact Jiutouchong](https://jtcrpa.com/en/contact) to check which builds to use together. |
| The AI lists tabs from a different browser | Switch to the intended browser or profile and complete setup from its MCP connection page. If your AI app has multiple Jiutouchong servers, tell it which one to use. |
| The workflow is saved, but you cannot find the results | Check that you confirmed the run. Ask the AI to verify that it finished successfully and report how many rows it saved. If it succeeded and you still cannot find the table, check the workflow's destination dataset name. [Run logs](/en/automation/run-logs) |
