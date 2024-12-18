---
id: listen-events
title: Listen events
lang: en
nav_order: 90
---

# Listen to events

```python
events = aq.events.listen()
callback = lambda event: print(event)

allEvents = events.subscribe('*', callback)
itemCreated = events.subscribe('item.created', callback)

events.unsubscribe('*', allEvents)

events.start()
```