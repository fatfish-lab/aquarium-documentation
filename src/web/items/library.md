---
id: library
title: Library
lang: en
nav_order: 10
---

# Library

A **<span class="aq-icon outline">business_center</span> Library** is a collection of assets. It's used to regroup similar asset like characters, props, environments, ...

## Data

| Key | Type | Description |
| :--- | :---- | :----------- |
| `name` | `string` | Name of the library |
| `description` | `string` | Description of the library |

## Structure

```mermaid
graph LR
  Library -->|Child| Asset
```