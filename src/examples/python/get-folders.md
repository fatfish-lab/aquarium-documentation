---
id: get-folders
title: Get folders
lang: en
nav_order: 40
---

# Retrieve folders of a project

`projects` is a list of projects. [Please see this other example](./get-projects.md) to learn how to retrieve all projects accessible by the user.

```python
project = projects[0]
folders = project.get_children(types="Group")
```

## Advanced query

```python
meshql = '# -($Child)> $Group'
folders = project.traverse(meshql=meshql)
```