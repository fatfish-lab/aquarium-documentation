---
id: user
title: User
lang: en
nav_order: 10
---

# User

A **<span class="aq-icon outline">person</span> User** is a human that use Aquarium and its able to access to the web interface.

A user can update its own profile, change its password, from its [Profile application](../applications/profile.md).

Administrators, can can be enable or disable users from the [Domain application](../applications/domain.md).

# Data

| Key | Type | Description |
| :--- | :---- | :----------- |
| `name` | `string` | Name of the user |
| `email` | `string` | Email of the user |
| `ui` | `string` | User default interface (`focus`, `studio` or `rooms`) |
| `thumbnail` | `string` | URL of the user thumbnail |

# Structure

```mermaid
graph LR
  User -->|Child| Item
  Task -->|Assigned| User
```