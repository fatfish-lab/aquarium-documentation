---
id: whiteboard
title: Whiteboard
lang: en
nav_order: 10
---

# Whiteboard

A **<span class="aq-icon outline">timeline</span> Whiteboard** is big canvas where you can add post-it, media, backdrop, milestone and more to create boards for your projects.

You can use them as reference, brainstorming, planning, meeting, ...

## Data

| Key | Type | Description |
| :--- | :---- | :----------- |
| `name` | `string` | Name of the whiteboard |

## Structure

```mermaid
graph LR
  Whiteboard -->|Pin| Item
  Whiteboard -->|Child| Subwhiteboard[Whiteboard]:::Whiteboard
```