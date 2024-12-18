---
id: get-projects
title: Get projects
lang: en
nav_order: 15
---

# How can I get the list of all projects ?

Retrieve all projects accessible by the user.

```python
projects = aq.project.get_all()
```

## Advanced query

```python
meshql = '# $Project'
projects = aq.query(meshql=meshql)
```