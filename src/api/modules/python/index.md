---
id: python
title: Python
lang: en
nav_order: 10
---

# Python package

We created a python package to interact with the API.

You have access to the low level API endpoints but also some dedicated methods for an easier onboarding.

![Aquarium Python API](../../../_medias/logo_python.png)

> It's compatible with Python 2.7+ et 3.4+

[column
```card [<span class="aq-icon">deployed_code_update</span> Installation](./installation.md)
See how to install the package.
```
]

[column
```card [<span class="aq-icon">quick_reference</span> Reference API](https://docs.python.aquarium.app/reference/aquarium.html)
Check the full documentation of the package.
```
]

[column
```card [<span class="aq-icon">book_5</span> Examples](../../../how-to/python/examples.md)
Discover some examples to perform specific actions.
```
]


# Quickstart

## Install the package

```bash
python -m pip install aquarium-python-api
```

> More details in the [installation section](./installation.md)

## Use the package

```python
from aquarium import Aquarium

aq=Aquarium('https://studio.aquarium.app')
aq.connect(AQ_USER, AQ_PASSWORD)

me=aq.get_current_user()

my_tasks=me.get_tasks()

projects=aq.project.get_all()
```