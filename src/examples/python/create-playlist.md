---
id: create-playlist
title: Create-playlist
lang: en
nav_order: 80
---

# Create a playlist with media uploaded today

[Please see this other example](./get-projects.md) to learn how to retrieve a `project`.

```python
playlist = project.append(type="Playlist", data={'name': 'My playlist'})
medias = project.traverse(meshql="# -($Child, 5)> $Media AND item.updatedAt > DATE_ROUND(@now, 1, 'day') VIEW item")
medias = [aq.item(media) for media in medias]

for media in medias:
    aq.edge.create(type="Playlist", from_key=playlist.item._key, to_key=media._key)

imported_media = playlist.item.get_medias()
```
