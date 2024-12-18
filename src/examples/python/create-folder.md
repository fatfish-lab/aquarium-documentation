---
id: create-folder
title: Create a folder
lang: en
nav_order: 20
---

# Create a folder in a project

`projects` is a list of projects. [Please see this other example](./get-projects.md) to learn how to retrieve all projects accessible by the user.

```python
project = projects[0]
reference_folder=project.append(type='Group', data={'name': 'References'})
```