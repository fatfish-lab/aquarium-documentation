---
id: get-shots
title: Get shots
lang: en
nav_order: 45
---

# Retrieve shots or assets of a project

```python
projectKey=123456
project=aq.project(123456).get()
shots=project.get_shots()
```

## Advanced query

```python
meshql = "# -($Child, 2)> $Shot"
shots = project.traverse(meshql=meshql)
```

> [!note]
> Depending on the structure of your project, you might need to adapt the query to your needs
