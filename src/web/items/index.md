---
id: items
title: Items
lang: en
nav_order: 10
icon: category
---

# What are items?

In Aquarium items are the entity you can create to represent your project's data. An item can be a [Project](/web/items/project), a [Task](/web/items/task), a [User](/web/items/user), an [Asset](/web/items/asset), etc.

<$>[note]
By convention, the type of an item always starts with a capital letter.
<$>

Explore our section for learn more about the different types available by default.

# How to create an Item?

In most [workspace](/web/items/workspace) you can create new items by clicking on the "Create" button. This will open the [Add menu](/web/applications/addmenu) application, where you can select the type of item you want to create.

[![Create Item](/_medias/create-button.png)](/web/applications/addmenu)

# How can I see the item's data ?

You can see and edit item's data using the [Quickeditor](../applications/quickeditor.md) application.

## In a graphic interface

1. Right click on the item
2. Click on `Properties...`
3. Click on the `Item's and edges' data` tab


## In a JSON editor
1. Right click on the item
2. Click on `Properties...`
3. Click on the `Advanced` tab
4. Click on `Editor` button

[![Item Properties](/_medias/item-properties.png)](/web/application/quickeditor)

<$>[note]
When an item is displayed in the interface, you can try to right click on it. Most of the time we will open the [quickeditor](/web/applications/quickeditor). If it's not the case, [let us know](/contact) !
<$>

# How can I manage item's permissions ? {#permissions}

On Aquarium, permissions works like on a Google Drive or a filesystem : you can set permissions on any items to control who can read, write, trash, ...

You can assign permission for [Organisation](/web/items/organisation), [User group](/web/items/usergroup), [User](/web/items/user) or [Bot](/web/items/bot).

For all items, you can access the permission from the [Quickeditor](/web/applications/quickeditor) application.

![Item Permissions](/_medias/quickeditor-permissions.png)

1. This is the list of all participants that have a permission on the item.
2. Use this input to search for an Organisation, User group, User or Bot.
   1. By default, when you create or edit a permission, it will be inherited by all the children items. You can change this behavior by unchecking the `Propagate permissions` checkbox.

<$>[warning]
On big projects, to keep high performances, we recommend to only use Organisation or User group permissions.
<$>

We provide several permissions presets to help you to quickly set the permissions you need :

- `Read only` : Can only read the item
- `Write` : Can read, write and append content to the item
- `Write & connect` : Can read, write, append, link and unlink content to the item
- `Write, connect & trash` : Can read, write, append, link, unlink and trash content to the item
- `Write, connect, trash & share` : Can read, write, append, link, unlink, trash and share content to the item
- `Admin` : Have full control over the item

Those presets are used to define lower level permissions. You can click on the `Fine tune` section to see those lower level permissions :

- `r` : Read
- `w` : Write
- `a` : Append content (like a new comment, upload a media, ...)
- `l` : Link (create a connection)
- `u` : Unlink (delete a connection)
- `t` : Trash
- `s` : Share (create a permission)
- `g` : Grant (change the permissions)
- `d` : Delete (delete the item)

> The `Inherit these permissions` is a special flag that is enabled by default, that allow the children items to inherit the permissions of the parent item. This flag is represented by the `*` on the permission. Most of the time, you don't need to change this flag, it's only here for special cases.

# What actions can I do on an item ?

On Aquarium, you can do several actions on an item. Here is a list of the most common actions :

- **Open** : Open the item with its default application.
- **Move**: Move the item to another location.
- **Copy**: Copy the item to another location.
- **Duplicate**: Duplicate the item.
- **Clone**: Clone the item. Meaning you can instantiate the item in multiple locations, to avoid duplication of data. On technical perspective, a clone is "just" a new Child edge from another item to the cloned item.
- **Trash**: Move the item to the trash.
- **Restore**: Restore the item from the trash.
- **Delete**: Permanently delete the item. The item need to go through the trash before being deleted.
- **Manage permissions**: Manage the permissions of the item.