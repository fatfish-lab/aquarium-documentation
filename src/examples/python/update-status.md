---
id: update-status
title: Update a task status
lang: en
nav_order: 75
---

# Update a task status

```python
task = aq.task("123456").get()
statuses = task.get_statuses()
task.update_data(statuses["done"])
```

> [!note]
> A status is composed by multiple properties. The default one is the `status` property. But other properties exist like `color`, `completion`, ... The statuses can be updated from the [project settings](../../web/applications/projectsettings.md#properties) or the [organisation settings](../../web/applications/organisation.md#properties).