---
id: episode
title: Episode
lang: en
nav_order: 10
---

# Episode

An **<span class="aq-icon outline">tv</span> Episode** is here to regroup [sequences](./sequence.md) and [shots](./shot.md) like on a TV show.

You can also create tasks on episodes to track and manage global tasks per episodes.

## Data

| Key | Type | Description |
| :--- | :---- | :----------- |
| `name` | `string` | Name of the episode |
| `description` | `string` | Description of the episode |

## Structure

```mermaid
graph LR
  Episode -->|Child| Sequence
  Sequence -->|Child| Subshot[Shot]:::Shot
  Episode -->|Child| Shot
  Episode -->|Child| Task
```