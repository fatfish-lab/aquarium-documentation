---
id: assign-task
title: Assign-task
lang: en
nav_order: 100
---

# Assign a task

`users` is a list of users. [Please see this other example](./get-users.md) to learn how to retrieve all users.

```python
user = users[0]
task = aq.task('1234')
task.assign_to(user_key = user._key)
```