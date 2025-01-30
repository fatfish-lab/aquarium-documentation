---
id: update-item-data
title: Update an item data
lang: en
nav_order: 10
---

# Update an item data

```python
shot = aq.shot("123456").get()
shot.update_data({
  "name": "New shot name"
})
```

> [!note]
> The `update_data` method will update the item data and return the updated item. If you want to replace the item data, you can use the `replace_data` method instead.