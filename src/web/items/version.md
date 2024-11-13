---
id: version
title: Version
lang: en
nav_order: 10
---

# Version

A **<span class="aq-icon">work_history</span> Version** is here to regroup multiple media items that are related to the same version of a project.

## Data

| Key | Type | Description |
| :--- | :---- | :----------- |
| `name` | `string` | Name of the version |
| `status` | `string` | Status of the version |
| `color` | `string` | Color of the version's status |
| `completion` | `number` | Completion of the version |

## Structure

```mermaid
graph LR
  Version -->|Child| Media
```