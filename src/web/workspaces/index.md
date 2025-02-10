---
id: workspaces
title: Workspaces
lang: en
nav_order: 30
icon: chrome_reader_mode
---

# Introduction

Like we explained in the [introduction](/web/introduction), the workspaces are like the Explorer on Windows, or the Finder on macOS: **they are dedicated to display your project's items.**

Workspaces works the same way in the focus or studio interface. The only difference is the way you access them.

| In [focus interface](../introduction/focus) | In [studio interface](../introduction/studio) |
|:--------:|:-------:|
| ![Focus workspaces](/_medias/screenshots/focus-workspaces.webp) | ![Studio workspaces](/_medias/screenshots/studio-workspaces.webp) |
| Workspaces are regrouped by need (assets manager, shots manager, ...) | Workspaces are regrouped by location. You need to go the the correct folder to be able to active the workspace you want. |

# Workspace types

We created several workspaces, to fit specific project management needs : [shots manager](./shotsmanager.md), [assets manager](./assetsmanager.md), [timeline](./timeline.md), ... You can explore the rest of this section to learn more about each of them.

- [Homepage](./homepage.md)
- [Shots manager](./shotsmanager.md)
- [Assets manager](./assetsmanager.md)
- [Episodes manager](./episodes.md)
- [Timeline](./timeline.md)
- [Wiki](./wiki.md)
- [Medias](./medias.md)
- [Review](./review.md)

We created a short video that show you all those workspaces:

[youtube hUJxjg8yh08 405 720]

# Options

All workspaces works quite the same way and have same options available:

![Workspaces options](/_medias/screenshots/workspaces-options.webp)

> [!info]
> Don't forget to save your workspace after editing it. The <span class="aq-icon">save</span> save button is located at the top right of the workspace, when a change is detected.
>
> You can also enable auto-save in the [<span class="aq-icon">more_vert</span> menu](#more-options).
>
> If you don't have enough permissions to save the workspace, an error message will be displayed if you try to save it. Even if you can't save it, you can still temporary edit it and see the changes.

Discover what's a workspace and how to use it :

[youtube KlmlsAMNUys 405 720]

Those options are also accessible from the [workspace editor](../applications/workspaces.md).

## Filter

You can filter any data you want, using our existing presets, directly from a cell of your table or using our [Workspace nodal editor](../applications/workspacenodaleditor.md).

- When you click on a filter you can change the comparison operator (`is`, `is not`, `is empty`, ...).
- You can also temporarily disable a filter by right clicking on it, or in the <span class="aq-icon">more_horiz</span> menu.
- To completely remove a filter, click on it and then on the <span class="aq-icon">more_horiz</span> icon.

Grab a filter and drop it on another filter to create a group of filters. If you drop a filter on the `x Filters` element, it will convert your filter into a [saved filter](#save-filters).

### From presets

Presets are available under the `Add filter` button.

If you think a preset is missing, [let us know](/contact), we can add it for you!

### From cell

To filter based on the content of cells, right-click on a cell and select `Filter [...]`. You can also directly filter based on the item type using the `Filter by type [...]` option.

You can edit the filter to add more option, or filter other cell to narrow down your search.

### From the nodal editor

You can also create a filter from the [Workspace nodal editor](../applications/workspacenodaleditor.md). To do so, click on the <span class="aq-icon">add</span> icon and select `Create your own filter...`.

### Save filters
You can also save specific filters to re-use them later by clicking on "<span class="aq-icon">filter_alt</span> 1 filter". Filters can be created from the [Workspaces application](../applications/workspaces.md#filters).

From the same menu you can define the search depth. It's an important concept, that can help you to unlock the full potential of the workspaces.

### Depth

As a reminder, Aquarium is a nodal solution. It means that every item have a connection to another item.

> Example
> ```mermaid
> graph TD
>     Project([Project: My short movie]) --> Group([Group: Sequences])
>     Group --> Sequence010([Sequence: s010]):::Sequence
>     Group --> Sequence020([Sequence: s020]):::Sequence
>     Sequence010 --> Shot010([Shot: s010_010]):::Shot
>     Shot010 --> Layout([Task: layout]):::Task
>     Shot010 --> Animation([Task: animation]):::Task
>     Sequence010 --> Shot020([Shot: s010_020]):::Shot
>     Shot020 --> K([...])
>     Sequence020 --> L([...])
> ```

Let's say you are at the root of your project and you want to display all the shots of the project.

> Example
> ```mermaid
> graph TD
>     A([Project: My short movie]) --> Group([Group: Sequences])
>     style A fill:#ff922b,stroke:##e8590c,stroke-width:4px
>     Group --> Sequence010([Sequence: s010])
>     Group --> Sequence020([Sequence: s020])
>     Sequence010 --> Shot010([Shot: s010_010])
>     Shot010 --> Layout([Task: layout])
>     Shot010 --> Animation([Task: animation])
>     Sequence010 --> Shot020([Shot: s010_020])
>     Shot020 --> K([...])
>     Sequence020 --> L([...])
>     subgraph Start point
>     A
>     end
>     subgraph Depth: 1
>     Group
>     end
>     subgraph Depth: 2
>     Sequence010
>     Sequence020
>     end
>     subgraph Depth: 3
>     Shot010
>     Shot020
>     end
>     subgraph Depth: 4
>     Layout
>     Animation
>     K
>     L
>     end
> ```

To display all shots being at the root of the project, you will need to set the depth to 3.

The depth option allows you to display items that are not directly connected to the current item. It's a powerful tool to display a lot of data at once.

> [!warning]
> Please keep in mind that big depth values can slow down the workspace. In the previous example, it will be better to displayed all shots starting from the `Group: Sequences` and use a depth of 2 instead.

## Display

Some workspaces have multiple display options like `table` or `card`.

> [!note]
> If this option is not available, it's because the workspace only works with a pre-defined display.

## Sort

You can choose in which order the items are displayed in the viewport. By default items are ordered alphabetically.

We provide sort presets in the sort menu, but you can also sort based on the content of columns. To do so, click on the column name and select sort <span class="aq-icon">arrow_upward</span> or <span class="aq-icon">arrow_downward</span>.

You can also create a custom sort from the sort menu, at the bottom, you can enter a meshQL query to sort your items.

> Example: `item.data.name ASC` or `item.data.custom_order DESC`.

You can add multiple sort criteria by separating them with a comma.

> Example: `item.data.name ASC, item.data.custom_order DESC`.

More advanced sort queries are available, like `path.vertices[-2].data.name ASC` (to order based on parent name).
You can find more information on [meshQL section](../../api/meshql.md).

## Group

You can re-group your items based on certain criteria. You can pick a group preset from the menu and also create a custom group using the last option.

The custom group is based on meshQL queries, like the custom sort option.

> Example: `item.data.type` or `item.data.custom_property`.

More advanced group queries are available, like `CONCAT_SEPARATOR(' / ', path.vertices[*].data.name)` (to group based on parents name).

## More options

In the <span class="aq-icon">more_vert</span> menu, more options are available:

- **Select all**: Select all items displayed in the workspace
- **Clear selection**: Clear the current selection
- **Select by...**: Select items based on criteria. You can also paste names from a spreadsheet that you copied.
- **Configure workspace**: Launch the [workspaces application](../applications/workspaces.md) to edit it.
- **Auto save is enabled**: Enable or disable the auto-save feature. When enabled, all changes are saved automatically. The save button have a timer to show you when the next save will occur. Just over it to cancel the auto-save.
- **Export table to CSV**: Export the current workspace in a CSV file. The export will include all the items displayed in the workspace with their column data.
- **Import in Spreadsheet**: Copy in the clipboard a special function that you can paste in a Google Spreadsheet to import the data. Please refer to the [Google Spreadsheet integration](../../integrations/spreadsheet.md) for more information.
- **Copy sharable link**: Copy in the clipboard a link to the current workspace.
- **Browse trash...**: Open the [trash application](../applications/trash.md) to restore items.

## Columns & views

If the workspace is compatible with the table display, views and columns are available.

### Views

A view is here to regroup multiple columns together. You can add as many views as you want. You can also easily expand or collapse views to hide unnecessary columns.

You can click on the name of the views to edit it using the [views application](../applications/views.md).

### Columns

You can add or remove columns from the view, based on our presets or by creating a new custom columns by right-clicking on a cell and selecting `Add column from property`. Learn more in our how-to [create a custom column](../../examples/create/column.md) guide.