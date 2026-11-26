---
layout: doc
title: Read local files
---

# Read local files

Choose a method based on how the input file should be updated.

| What you need | Method |
| --- | --- |
| Try an Excel or CSV list once | Use **Add file** in the conversation. See [Uploaded lists](/en/tutorial/upload-table). |
| Read a frequently updated disk file on every run | Ask the workflow to read the local file during its run. |

## Add a file for your first task

In **Compile with AI**, click **Add file**. Excel, CSV, JSON, and TXT are supported. Follow any header-row prompt, then name the input column and what to collect.

The extension saves a local snapshot. Later changes to the original disk file do not update that snapshot automatically. Replace it from its file card in Storage to keep the reference used by existing workflows. Duplicate rows in the file are preserved.

In **Workbench**, open **Input files** on a workflow card that uses an uploaded file. Click **View data** to check its contents, or click **Update file** and select a newer version. Once the extension confirms the update, workflows that use the same file will use the new data.

## Read the disk file on each run

This method currently needs file-access capabilities in Chrome or Edge. In Firefox, use Add file instead.

Tell AI which file to read and how to use it. Follow the file-access prompt card. Chrome or Edge may require **Allow access to file URLs** on the extension details page.

Data read directly during a run may be used only for that task, without appearing as a separate Storage table. Ask to save a table if you need one. Recheck the path after moving or renaming a file, or changing computers.

## If a file cannot be read

Open it in Excel or WPS to check the file itself. For unreadable CSV text, save as CSV UTF-8 and retry. Give AI the actual column names when headers or URLs are not recognized. Start with a few rows from a complex workbook before using the whole file.
