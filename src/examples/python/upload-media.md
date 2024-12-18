---
id: upload-media
title: Upload a media
lang: en
nav_order: 30
---

# Upload an image to a folder

`reference_folder` is an item of type `Group` created on [the previous example](./create-folder.md).

```python
media = reference_folder.item.append(type='Media', path=r"/mnt/project/image.jpg")
```

> [!note]
> Don't forget to replace the path with the actual path of the file you want to upload.
