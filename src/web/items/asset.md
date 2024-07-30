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

## Data

| Key | Type | Description |
| :--- | :---- | :----------- |
| `name` | `string` | Name of the asset |
| `description` | `string` | Description of the asset |


## Structure

```mermaid
graph LR
  Shot([Shot]) -->|Breakdown| Asset
  Asset([Asset]):::asset -->|Child| Task([Task])
  Task -->|Child| Version([Version])
  Version -->|Child| MediaA([Media <br/> <small>versioned media</small>])
  Task -->|Child| MediaB([Media <br /> <small>unversioned media</small>])
  Task -->|Child| Subtask([Task <br /> <small>subtask</small>]):::Task
  Subtask -->|Child| Version
  Subtask -->|Child| MediaB
```
