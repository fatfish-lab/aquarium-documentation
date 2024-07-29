---
id: asset
title: Asset
lang: en
nav_order: 10
---

# Asset

An **<span class="aq-icon outline">work</span> Asset** is composed by tasks where you can upload medias.

Tasks can have sub-tasks too.

Medias can be regrouped into versions.

The application used by default is [Asset editor](../applications/asseteditor.md).

## Structure

```mermaid
graph LR
  Shot([Shot]) -->|Breakdown| Asset
  Asset([Asset]):::asset -->|Child| Task([Task])
  Task -->|Child| Version([Version])
  Version -->|Child| MediaA([Media - versioned media])
  Task -->|Child| MediaB([Media - unversioned media])
  Task -->|Child| Subtask([Task - subtask]):::Task
  Subtask -->|Child| Version
  Subtask -->|Child| MediaB
```
