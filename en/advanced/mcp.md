---
layout: doc
title: Connect an AI app with MCP
description: Connect Codex or Tencent WorkBuddy to Jiutouchong Agent, verify the browser connection, and run your first collection.
---

# Connect an AI app with MCP

Jiutouchong MCP lets Codex and Tencent WorkBuddy view local browser tabs, build and run collection workflows, and read saved results. Add the shared MCP configuration once per AI app to use connected Chrome, Edge, and Firefox profiles by name.

## Before you start

- Use Chrome, Edge, or Firefox on Windows or macOS. Install a version of Jiutouchong Agent that includes **MCP connection**. [Install and sign in](/en/guide/install)
- Install Node.js 20.19.0 or later and use an AI app that supports local MCP (STDIO) on the same computer. [Download Node.js](https://nodejs.org/en/download)
- The shared configuration and connection removal steps in this guide apply to bridge 0.12.3 or later and the matching extension. Use the installation steps below to update an older bridge.
- With the ChatGPT desktop app, use a local Codex session. An app that only accepts a remote MCP URL cannot use this local configuration directly.

## 1. Connect the browser to the local bridge

1. In the browser you want to use, click the Jiutouchong icon to open its sidebar. At the bottom, open **Settings → MCP connection**.
2. Under **Install the bridge**, click **Copy installation command**. Open PowerShell on Windows or Terminal on macOS, paste the command, and run it. Install the bridge once on the same computer.
3. Turn on **Enable MCP connection**. If the browser asks for permission, allow native messaging. This lets local AI apps configured with shared Jiutouchong MCP access this browser profile.
4. Under **Connect an AI app**, click **Copy setup command**. Keep the target browser open and run the entire command in the terminal. If you already see **Copy shared MCP configuration**, continue to the next section.

Return to **MCP connection** and check for **Browser connected to the local program**. To distinguish profiles, enter a name like “Store A” under **Browser name (optional)** and click **Save**.

## 2. Add the connection to your AI app and verify it {#_2-add-the-connection-to-codex-and-verify-it}

In **MCP connection**, click **Copy shared MCP configuration**. Add the `jtcrpa` service once per app. Keep the generated launch command and all arguments. Follow the instructions for [Codex](#codex) or [WorkBuddy](#workbuddy).

### Add to Codex {#codex}

- **Add it manually.** In the ChatGPT desktop app, open **Settings → MCP servers → Add server**. Choose **STDIO** and fill in the name, command, and arguments from the copied configuration. Save and restart when prompted. [Codex MCP configuration](https://developers.openai.com/codex/mcp)
- **Ask local Codex to add it.** Paste the configuration into Codex and say, “Add this shared Jiutouchong MCP configuration to the current Codex settings and keep my other servers.” Once the settings are saved, reopen the app to load them.

### Add to Tencent WorkBuddy {#workbuddy}

1. Open the WorkBuddy desktop app on the same computer. Open the **Experts, Skills, and Connectors** section in the sidebar and select the **Connectors** tab.
2. Click **Custom connectors** at the top right, then **Add MCP** in the MCP service manager.
3. Add the shared MCP configuration copied from the extension. You can replace an empty configuration with the full copied content. If you already have connectors, merge the `jtcrpa` entry into the existing `mcpServers` section and keep the other entries. Click **Save**.
4. **Quit WorkBuddy completely, then reopen it.** Return to **Custom connectors → MCP service manager**, find `jtcrpa`, and click **Trust**. Wait for the status dot to turn green and for the enabled tool count to appear. [WorkBuddy MCP trust authorization](https://cloud.tencent.com/document/product/1831/139964)
5. Start a **New task**. If you need to enable the connector for this task, open **+ → Connectors** next to the message box and enable `jtcrpa`. Then follow the verification steps below. [WorkBuddy connector guide](https://cloud.tencent.com/document/product/1831/134525)

If WorkBuddy already has a browser-specific connector named `jtcrpa`, back up the old configuration, then replace its `jtcrpa` entry with the one from the shared configuration.

### Verify the connection {#verify-connection}

After the configuration loads, send the following message.

> Use Jiutouchong MCP to check the connection. Tell me which browser profile you selected, list its tabs, and identify the active tab.

Seeing the expected tabs confirms the connection. A new task can use the only confirmed online profile when all other profiles are confirmed offline. If several profiles are online or a profile's status is uncertain, choose when AI asks. You can also name the target directly, for example, “Use Store A in Firefox.”

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

## Run with parameters or preview data from an API

- **Run with parameters.** For example, ask AI to run “Bookshop collection” with the keyword “travel” and a page count of 3. Use the parameter names already defined in the workflow. The supplied values apply to this run. Omitted values can use the workflow's defaults. [Parameter node and run parameters](/en/automation/workflow-parameters)
- **Preview data from an API.** Load the data once on the target page. Ask AI to inspect the data the page loaded, show a sample response, and preview the fields you want. [Collect data loaded by a webpage](/en/tutorial/from-api)

## Manage browser connections {#manage-connections}

To add another browser or profile, open **MCP connection** in that profile, turn on the switch, and follow the setup steps. Name the profile in your next task. When you continue to the next page or check a previous run, AI uses the browser selected for that task. Name the new target explicitly when switching browsers.

Clients configured for a single browser before upgrading can keep using that service. To add that browser to the shared service, turn **Enable MCP connection** off and back on in its profile. To set up a client for one fixed browser, use **Copy configuration for this browser only**.

| What you want to do | Action |
| --- | --- |
| Suspend MCP access for a browser | Turn off **Enable MCP connection** in that profile. Turn it back on to restore a valid connection. |
| List registered connections | In the terminal, run `jtcrpa-mcp list` to check browsers and connection numbers. |
| Remove one connection | Run `jtcrpa-mcp remove`, select the connection, and confirm. Its currently connected session disconnects. |
| Clear all connections | Run `jtcrpa-mcp clear` to revoke every registration and disconnect online sessions immediately. The bridge stays installed for future setup. |

You can remove or clear connections while the browser is open. If PowerShell says script execution is disabled, use `jtcrpa-mcp.cmd` in place of `jtcrpa-mcp`.

To restore access, open **MCP connection** in the target browser, click **Set up again**, and run the new setup command. Reuse the shared configuration and replace any previous browser-specific configuration with a newly copied one.

## Troubleshooting

| What you see | What to do |
| --- | --- |
| The Settings menu has no MCP connection entry | Check that you have Jiutouchong Agent and that your extension build supports MCP. If you need a compatible build, [contact Jiutouchong](https://jtcrpa.com/en/contact). |
| The extension is waiting for the setup command | Keep that browser open and run the complete command just copied from its MCP page in your local terminal. If the terminal cannot find npm, install Node.js, reopen the terminal, and copy the installation command from the extension again. |
| The extension says native messaging is still unavailable | Wait for active runs to finish, then save and close any workflow editors. If you still see a prompt to reload manually, open your browser's extensions page, reload Jiutouchong Agent, and check the connection status again. |
| The browser is connected, but the AI cannot find Jiutouchong tools | Check that the server was added to the local app you are using. Save, restart the app, and ask the AI to list the tabs in a new conversation. |
| The AI can list tabs, but says the connection does not provide the page tool | Check that the Jiutouchong Agent build in the target browser and the local bridge are compatible. Update both, turn **MCP connection** back on, restart the AI app, and try opening the bookshop again. If the tool is still unavailable, [contact Jiutouchong](https://jtcrpa.com/en/contact) to check which builds to use together. |
| The page only shows **Copy MCP configuration** | After checking both versions, turn **Enable MCP connection** off and back on and follow the prompts to set up shared access. |
| AI lists tabs from a different browser | Name the target profile in chat. If the profile is missing, check that its browser is open and **MCP connection** is enabled. |
| `BROWSER_RECOVERING` or **Reconnecting to this browser** | Keep the target browser open and wait for **Browser connected to the local program** before retrying. If you already started a workflow, check the original run in the same browser before starting it again. |
| **Set up this browser again** | Click **Set up again**, then copy and run the new setup command. [Manage browser connections](#manage-connections) |
| A workflow was saved but there are no collected results | Confirm that you approved the run. Ask AI to check its status, the number of rows saved, and the latest logs. If it saved zero rows, check the target page and preview the extraction again. If rows were saved, check the dataset name. [Run logs](/en/automation/run-logs) |
