---
id: api
title: Introduction
topic: API & modules
lang: en
nav_order: 1
shortcut: true
icon: api
---

# Aquarium API & modules

You can interact with Aquarium using our [REST API](rest).

Our REST API documentation is build with [Bruno](https://usebruno.com). It allows you to download our API and play with requests directly in the GUI or with the CLI of Bruno.

[column
```card [<span class="aq-icon">flag</span> Introduction](./introduction.md)
Start here to get an introduction about our API.
```
]

[column
```card [<span class="aq-icon">layers</span> REST API](./rest)
Discover our REST API. All routes and methods are listed here.
```
]

[column
```card [<span class="aq-icon">book_5</span> How-to guides](../how-to/index.md)
Check our how-to guides to learn how to interact with Aquarium.
```
]

----

## Modules

Several modules are available as an API wrapper:

[column
```card [<span class="aq-icon">code</span> Typescript](./modules/typescript.md)
Connect your javascript/typescript code with Aquarium.
```
]

[column
```card [<span class="aq-icon">deployed_code</span> Python](./modules/python/index.md)
Integrate your Aquarium with Python.
```
]

> [!info]
> Looking for another language? [Contact us](../contact.md) and we will help you to build a module for your language.

## meshQL

Aquarium's API use [meshQL](meshql.md) as language to filter data. MeshQL allows you to traverse or query your nodal data tree as you want to filter everything. It's also a way to customize the output of our API.

You don't need to learn meshQL to use our wrapper modules, especially the Python one, where we added build-in functions.

But learning meshQL can be useful if you want to optimize your queries, gain in performance and understand how Aquarium works.

Feel free to [contact us](../contact.md) if you have any questions.