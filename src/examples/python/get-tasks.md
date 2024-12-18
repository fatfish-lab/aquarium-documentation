---
id: get-tasks
title: Get tasks
lang: en
nav_order: 60
---

# Retrieve tasks assigned to the current user

```python
me = aq.get_current_user()
my_tasks = me.get_tasks()
```

## Advanced query

```python
me = aq.get_current_user()
meshql = '# <($Assigned)- $Task'
my_tasks = me.traverse(meshql=meshql)
```


# Retrieve tasks assigned within a project of the current user

```python
projectKey = "123456"
me = aq.get_current_user()
my_tasks = me.get_tasks(project_key=projectKey)
```

## Advanced query

```python
projectKey = "123456"
meshql = "# <($Assigned)- $Task AND (<($Child, 5)- item._key == @projectKey AND path.vertices[*].type NONE == 'User')"
aliases = {
  'projectKey': projectKey
}
my_tasks = me.traverse(meshql=meshql, aliases=aliases)
```

> [!note]
> Depending on your project structure, you might adapt the query to your needs
