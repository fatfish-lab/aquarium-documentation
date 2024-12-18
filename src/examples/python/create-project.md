---
id: create-project
title: Create project
lang: en
nav_order: 10
---

# Create a new private project

```python
me = aq.get_current_user()
project = me.append(type='Project', data={'name': 'My new project'})
```

# Create a project in my organisation

```python
organisations = aq.get_profile()['organisations']
project = organisations[0].append(type='Project', data={'name': 'My new project'})
```