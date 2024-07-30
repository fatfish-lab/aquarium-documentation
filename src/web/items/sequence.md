---
id: sequence
title: Sequence
lang: en
nav_order: 10
---

# Sequence

A **<span class="aq-icon outline">movie_creation</span> Sequence** is here to regroup shots together.

A sequence can have tasks too.

## Data

| Key | Type | Description |
| :--- | :---- | :----------- |
| `name` | `string` | Name of the sequence |

## Structure

```mermaid
graph LR
  Sequence -->|Child| Shot
  Sequence -->|Child| Task
```
