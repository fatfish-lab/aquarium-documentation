---
id: conversation
title: Conversation
lang: en
nav_order: 10
---

# Conversation

A **<span class="aq-icon outline">forum</span> Conversation** is a discussion between users. You can see a conversation as a thread of messages like in Slack, Discord, ...

You can upload media in a conversation to share images, videos, ...

## Data

| Key | Type | Description |
| :--- | :---- | :----------- |
| `name` | `string` | Name of the conversation |
| `description` | `string` | Description of the conversation |
| `status` | `string` | Status of the conversation (`open`, `closed`, ...) |
| `tags` | `array` | List of tags |

## Structure

```mermaid
graph LR
  Conversation -->|Child| Comment
  Conversation -->|Child| Media
  Item -->|Child| Conversation
```