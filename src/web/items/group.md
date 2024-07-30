---
id: group
title: Group
lang: en
nav_order: 10
---

# Group

A **<span class="aq-icon outline">folder</span> Group** is a folder. You can use a folder like an a computer folder to store and organize your items.

A group can have subgroups and items.

## Data

| Key | Type | Description |
| :--- | :---- | :----------- |
| `name` | `string` | Name of the group |

## Structure

```mermaid
graph LR
  Group -->|Child| Item
  Group -->|Child| Subgroup[Group]:::Group
  Subgroup -->|Child| Subitem[Item]:::Item
```