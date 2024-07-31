---
id: file
title: File
lang: en
nav_order: 10
---

# File

A **<span class="aq-icon outline">archive</span> File** is a default item type used to store uploaded files that are not [media](./media.md).

A file can be opened with the [Downloader application](../applications/downloader.md).

## Data

| Key | Type | Description |
| :--- | :---- | :----------- |
| `name` | `string` | Name of the file |
| `description` | `string` | Description of the file |
| `filename` | `string` | Filename of the file |
| `mimetype` | `string` | Mimetype of the file |
| `originalname` | `string` | Original name of the file |

## Structure

```mermaid
graph LR
  File
```