---
id: examples
title: Examples
lang: en
nav_order: 10
---

# Examples

Here are some examples to perform specific actions. Do not hesitate to directly consult the documentation of the classes to know the parameters you can use as well as the functions available.

## Retrieve projects accessible by the user

```python
projects=aq.project.get_all()
```

## Create a folder in a project

```python
# projects is defined on the previous example
project = projects[0]
reference_folder=project.append(type='Group', data={'name': 'References'})
```

## Upload an image to a folder

```python
# reference_folder is defined on the previous example
media = reference_folder.item.append(type='Media', path=r"/mnt/project/image.jpg")
```

## Retrieve folders of a project

```python
# project is defined on previous example

folders = project.get_children(types="Group")
```

## Create a shot in a sequence

```python
sequence_key = 123456
shot = aq.item(sequence_key).append(type="Shot", data={'name': 's010_p100', frameIn: '101', frameOut: '256'})
```

## Retrieve tasks assigned to the current user

```python
me=aq.get_current_user()
my_tasks=me.get_tasks()
```

## Retrieve tasks assigned within a project of the current user

```python
projectKey=123456
me=aq.get_current_user()
my_tasks=me.get_tasks(project_key=projectKey)
```

## Retrieve shots or assets of a project

```python
projectKey=123456
project=aq.project(123456).get()
shots=project.get_shots()
```

<$>[note]
Depending on the structure of your project, it may be more efficient to use a traverse with a custom query.
<$>

## Retrieve available statuses for a task

```python
me=aq.get_current_user()
tasks=me.get_tasks()
statuses=tasks[0].get_statuses()
```

## Create a playlist with media uploaded today

```python
# project is defined on the previous example
playlist = project.append(type="Playlist", data={'name': 'My playlist'})
medias = project.traverse(meshql="# -($Child, 5)> $Media AND item.updatedAt > DATE_ROUND(@now, 1, 'day') VIEW item")
medias = [aq.item(media) for media in medias]

for media in medias:
    aq.edge.create(type="Child", from_key=playlist.item._key, to_key=media._key)

imported_media = playlist.item.get_medias()
```

## Listen to events

```python
events = aq.events.listen()
callback = lambda event: print(event)

allEvents = events.subscribe('*', callback)
itemCreated = events.subscribe('item.created', callback)

events.unsubscribe('*', allEvents)

events.start()
```