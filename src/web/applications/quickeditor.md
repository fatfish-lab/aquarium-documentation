---
id: quickeditor
title: Quickeditor
lang: en
nav_order: 10
---

# Quickeditor

This application is used with any items and allows to access universal items properties : it's data, edges, participants, permissions, ...

You can see that application as the the `File properties` application in Windows or the `Informations` viewer on MacOS.

![Quickeditor](../../_medias/quickeditor.png)

## Infos

This section displays main item's informations :

- Item's **type**
- **Creation** date
- User or bot **who created** the item
- Item's **icon**
- Item's **label color**
- Item's **tags**
- **Templates** assigned to this item. Please refer to [Template item](../items/template.md) for more information.
- Item's **parents**. It correspond where the item is located. Parents is plural, because an item can be clones to multiple locations, allowing you to create instances of the same item in different contexts.
- Item's **description**

## Item's & edges' data

This section displays the item's and edges' data in a graphic interface.

You can visualize all item's data and edit them. For edges, because an item can be connected to multiple items, you can see all the edges and their data.

## Participants

This tab give you an overview of all the participants and their permission on the current item.

Please refer to general information about [permissions on the documentation](../items/index.md#permissions).

## History

When a data on the item is modified, a new history entry is created. You can see all the modifications made on the item.

Next to an entry you can restore the item to the state of this entry.

## Events

This tab display all the events related to the item. It can be a creation, a modification, a permission change, ...

Please refer to the [Events section in Domain application](./domain.md#events) for more information.

## Advanced

This tab display more advanced options, related to the item:

- **Item key**: The unique identifier for the item.
- **Open item**: Opens the item with its default application.
- **Download**: If the item as an upload, it will download the file on your computer.
- **Created from**: Indicates the source createdFrom key from which the item was created.
- **Edit item's data in Editor**: Display the item's data in a JSON editor.
- **Convert to template**: Converts the item into a reusable template.
  - <span style="color: var(--red-50)" class="aq-icon">warning</span> This will transform the item into a template by changing it's type !
- **Export to JSON file**: Exports the item and its content to a JSON file.
- **Print entity data on the console**: Prints the item into the browser console. Press `F12` to open it.
- **Browse trashed content**: Browse the trash of this item.
- **Trash item**: Moves the item to the trash.