---
id: organisation
title: Organisation
lang: en
nav_order: 10
---

# Organisation

An **<span class="aq-icon outline">business</span> Organisation** is here to regroup users together and allow them to see each others and to centralize their work.

You can use an organisation has a global folder to organise and store your projects, global tasks, ...


## Data

| Key | Type | Description |
| :--- | :---- | :----------- |
| `name` | `string` | Name of the organisation |

## Structure

```mermaid
graph LR
  Organisation -->|Member| User
  Organisation -->|Member| Bot
  Organisation -->|Child| Item
```
