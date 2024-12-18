---
id: create-shot
title: Create shot
lang: en
nav_order: 50
---

# Create a shot in a sequence

You can get the sequences using the same method as in the [Get folders](./get-folders.md) example.

```python
sequences = project.get_children(type='Sequence')
shot = sequences[0].append(type="Shot", data={'name': 's010_p100', frameIn: '101', frameOut: '256'})
```