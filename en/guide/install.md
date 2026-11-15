---
layout: doc
title: Install and sign in
prev:
  text: Introduction
  link: /en/guide/what-is-jtcrpa
next:
  text: Your first collection
  link: /en/guide/first-task
---

<script setup>
import { DOWNLOADS } from '../../.vitepress/downloads'
</script>

# Install and sign in

Add the extension to your browser and sign in, then try your first collection. In an English-language browser, its name is **Jiutouchong Agent — Web Scraping & Automation**. It is the same extension.

## 1. Add the extension {#一、安装扩展}

Open the store for the browser you use and follow its installation instructions:

- <a :href="DOWNLOADS.chrome" target="_blank" rel="noopener noreferrer">Chrome Web Store ↗</a>
- <a :href="DOWNLOADS.edge" target="_blank" rel="noopener noreferrer">Microsoft Edge Add-ons ↗</a>

<details>
<summary>If the store is unavailable, use the offline archive</summary>

<a :href="DOWNLOADS.pan" target="_blank" rel="noopener noreferrer">Download the offline archive ↗</a>. Access code: {{ DOWNLOADS.panCode }}.

1. Download and extract the archive. Keep track of the extracted folder.
2. Enter chrome://extensions in Chrome, or edge://extensions in Edge, in the address bar.
3. Turn on **Developer mode**.
4. Click **Load unpacked** and select the complete extracted folder. The wording can vary slightly by browser.

Keep that folder. Offline installations need manual updates using a newer archive. If your organization blocks extension installation, contact its administrator.

</details>

## 2. Find the extension icon {#二、固定图标并激活页面}

Click the puzzle icon beside the address bar, find **Jiutouchong Agent**, and pin it to the toolbar. Clicking its icon opens the extension sidebar.

**After installation, refresh any target pages that were already open.** You can open the practice bookshop below. Start on a normal webpage, rather than the browser settings page.

## 3. Sign in {#三、登录账号}

Open the <a href="/en/practice/index.html" target="_blank" rel="noopener noreferrer">practice bookshop ↗</a> and click the extension icon. At the bottom of the sidebar, open **Settings**, choose **Sign in / Sign up**, and complete sign-in on the website.

Return to the bookshop and open **Settings** again. Check that your nickname and account status appear. AI preparation uses your account credits; the current interface shows whether the service is available.

If the extension interface is in another language, open its **Language** menu and choose **English**. The rest of this documentation uses its English button names.

## Make your first collection {#四、ai-模型配置新手可跳过}

Start with the default AI service. You do not need to obtain your own key first. Continue to [Your first collection](/en/guide/first-task) to collect the 4 books and download an Excel file.

If you later want to use your own AI service, see [AI model settings](/en/settings/ai-model).
