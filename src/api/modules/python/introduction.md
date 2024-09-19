---
id: introduction
title: Introduction
lang: en
nav_order: 20
---

> [!note]
> We advice you to read the [introduction about API documentation](../../introduction.md) first.

# Prerequisites

1. Use one of the Python version compatible with the package (2.7+ or 3.4+)
   - If your version is not compatible, let [us know](../../../contact.md) and we will try to help you.
2. An Aquarium instance URL. Ex: `https://studio.aquarium.app`
3. An Aquarium account or bot's credentials in order to authenticate.


# Authentication

All the functions are grouped in the `Aquarium()` class. This class is in charge of managing the authentication and the different requests to the Aquarium server.

By creating an instance, you will be able to reuse your identification without having to specify it each time.

```python
from aquarium import Aquarium

aq=Aquarium('https://studio.aquarium.app')
aq.connect(AQ_USER, AQ_PASSWORD)
```

If you want to allow your users to reconnect easily without having to enter a password every day, you can save the authentication token. The token is directly available in the Aquarium class (ex: aq.token). Once the token is securely saved, you can reuse it when initializing the Aquarium() class:

```python
aq=Aquarium('https://studio.aquarium.app', token=token)
```

> [!error]
> Token is a sensitive information. Be sure to store it securely.

[details How to authenticate when MFA is enabled?

If you have enabled multi-factor authentication on your account, you must generate a personal access token from your user profile. You just have to pass it when initializing the Aquarium class:

```python
aq=Aquarium('https://studio.aquarium.app', token=personal_access_token)
```
]

[details How to authenticate when SSO is enabled?

The python module doesn't have a native support for SSO authentication yet. A proof of concept is available on the [GitHub repository](https://github.com/fatfish-lab/aquarium-python-api/tree/feature/sso). Feel free to contribute to the project if you want to help us to improve it.

```python
aq=Aquarium('https://studio.aquarium.app')

ssoURL = aq.sso.signin()

import webbrowser
webbrowser.open(signin['url'])

aq.sso.listen()
```
]

# Item and Edge classes

In the package, 2 main classes are available to work with items and edges. These classes are directly accessible within the Aquarium() class.

```python
itemKey=1234567
item=aq.item(itemKey).get()
```

Subclasses inherited from the Item() class are also available to facilitate the requests:

  - user
  - usergroup
  - organisation
  - template
  - project
  - playlist
  - tas
  - shot
  - asset

Every time we can, requests will return instances of the Item() or Edge() class.

> [!note]
> Checkout the reference documentation to see all the available methods with their parameters and return types.

## How to initiate an Item class ?

### By its _key
If you know the key of the item, you can directly initiate the class with the key:

```python
item=aq.item(1234567)
```

If it's a Project, you can also initiate the class the project key:

```python
projectKey= 7890
project=aq.project(projectKey)
```

### By its metadata

If you get all the item metadata, you can initiate the class with the metadata:

```python
item={
  "_id": "items/1234",
  "_key": "1234",
  "_rev": "b234553",
  "type": "Group",
  "data": {
      "name": "My group"
  },
  "createdBy": "567",
  "updatedBy": "567",
  "createdAt": "20..-1...8.580Z",
  "updatedAt": "20..-1...8.580Z"
}

group=aq.cast(item)
```

The `cast()` method will automatically initiate the right class according to the item type.


## Next steps

Subclasses have been added to facilitate your access to certain data within Aquarium.

For example, retrieving all projects accessible to the active user, retrieving tasks assigned to a user, or uploading a new version of media in a shot, etc.

> [!note]
> If you are missing certain functions, do not hesitate to [contact us](../../../contact.md) so that we can add them.

### meshQL
These functions save you time by avoiding diving into [meshQL](../../meshql.md), the language used to write queries in Aquarium.

But if you are curious, you can enable the `DEBUG` mode of the package to visualize the meshQL queries used in these functions.

In this way, you will see that the following function:

```python
projects=aq.project.get_all()
```

is equivalent to this query:

```python
projects=aq.query(meshql="# ($Project AND item.data.completion != 1 AND NOT <($Trash)- *) ) SORT item.data.name ASC")
```

It is a practical tool to gradually learn meshQL. If you have any questions, do not hesitate to [contact us](../../../contact.md)!

### Low level API

If you need to write more advanced queries, we recommend that you look at the `item.traverse()` and `aquarium.query()` functions. These 2 functions will be the most useful for filtering, navigating, and retrieving the data you want within your projects.

These 2 functions use meshQL. You can find more information about meshQL in the [dedicated documentation](../../meshql.md).
