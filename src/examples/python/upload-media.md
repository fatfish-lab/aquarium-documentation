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

# Upload a file on Aquarium and update an existing media

```python
file_metadata = aq.upload(path=r"/mnt/project/image.jpg")
media = aq.media("1234").update_data(file_metadata)
anothermedia = aq.media("5678").update_data(file_metadata)
```

> [!note]
> All uploaded files on Aquarium generate metadata, that can be used on multiple other items to avoid uploading the same file mulitple times.

# Upload a file on a Shot or Asset

```python
media = aq.shot("1234").upload_on_task(
  task_name='animation',
  version_name='v001',
  override_media=True,
  path=r"/mnt/project/image.jpg")
```

> [!note]
> This function will automatically create a new version on the task if it doesn't exist yet. The `override_media` parameter will replace the existing media that has the same file path name. When replacing an existing media, the old data is not deleted, a new [history update](../../web/applications/quickeditor.md#history) is created instead.