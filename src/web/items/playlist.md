---
id: playlist
title: Playlist
lang: en
nav_order: 10
---

# Playlist

A **<span class="aq-icon">play_arrow</span> Playlist** is a here to regroup media, that need to be reviewed or seen the one after the other together.

You can open a playlist with the [Playlist application](../applications/playlist.md).

A playlist can be stored in a [Room](./room.md) for sharing it to external users.

## Data

| Key | Type | Description |
| :--- | :---- | :----------- |
| `name` | `string` | Name of the playlist |
| `description` | `string` | Description of the playlist |

## Structure

```mermaid
graph LR
  Playlist -->|Playlist| Media
  Room -->|Child| Playlist
  Group -->|Child| Playlist
```