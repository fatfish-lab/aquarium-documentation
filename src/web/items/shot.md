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


## Data

| Key | Type | Description |
| :--- | :---- | :----------- |
| `name` | `string` | Name of the asset |
| `description` | `string` | Description of the asset |
| `frameIn` | `number` | Start frame of the shot |
| `frameOut` | `number` | End frame of the shot |


## Structure

```mermaid
graph LR
  Shot -->|Breakdown| Asset
  Shot -->|Child| Task
  Task -->|Child| Version
  Version -->|Child| MediaA([Media <br/> <small>versioned media</small>])
  Task -->|Child| MediaB([Media <br /> <small>unversioned media</small>])
  Task -->|Child| Subtask([Task <br /> <small>subtask</small>]):::Task
  Subtask -->|Child| Version
  Subtask -->|Child| MediaB
```
