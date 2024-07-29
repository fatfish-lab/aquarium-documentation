---
id: shot
title: Shot
lang: en
nav_order: 10
---

# Shot

A **<span class="aq-icon outline">theaters</span> Shot** is composed by tasks where you can upload medias.

Tasks can have sub-tasks too.

Medias can be regrouped into versions.

The application used by default is [Shot editor](../applications/shoteditor.md).

## Structure

```mermaid
graph LR
  Shot -->|Breakdown| Asset
  Shot -->|Child| Task
  Task -->|Child| Version
  Version -->|Child| MediaA[Media - versioned media]
  Task -->|Child| MediaB[Media - unversioned media]
  Task -->|Child| Subtask[Task - subtask]:::Task
  Subtask -->|Child| Version
  Subtask -->|Child| MediaB
```
