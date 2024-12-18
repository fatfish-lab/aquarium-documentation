---
id: get-statuses
title: Get statuses
lang: en
nav_order: 70
---

# Retrieve available statuses for a task

```python
me=aq.get_current_user()
tasks=me.get_tasks()
statuses=tasks[0].get_statuses()
```

## Advanced query

```python
meshql = "# <($Child, 40)- path.vertices[*].type NONE == 'User' -($Child)> $Properties AND item.data.tasks_status != null VIEW item.data.tasks_status"
statuses = tasks[0].traverse(meshql=meshql)
```

> [!note]
> Depending on the structure of your project, you might have multiple properties returning the available statuses.

> [!info]
> You can also get the `version` statuses using the same query, but replacing `tasks_status` by `versions_status`.