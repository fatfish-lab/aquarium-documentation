---
id: workspaces
title: Workspaces
lang: en
nav_order: 10
---

# Introduction

Like we explained in the [introduction](/web/introduction), the workspaces are like the Explorer on Windows, or the Finder on macOS: **they are dedicated to display your project's items.**

Workspaces works the same way in the focus or studio interface. The only difference is the way you access them.

| In [focus interface](/web/interfaces/focus) | In [studio interface](/web/interfaces/studio) |
|:--------:|:-------:|
| ![Focus workspaces](/_medias/focus-workspaces.png) | ![Studio workspaces](/_medias/studio-workspaces.png) |
| Workspaces are regrouped by need (assets manager, shots manager, ...) | Workspaces are regrouped by location. You need to go the the correct folder to be able to active the workspace you want. |

# Different workspaces

We created several workspaces, to fit specific project management needs : [shots manager](./shotsmanager.md), [assets manager](./assetsmanager.md), [timeline](./timeline.md), ... You can explore the rest of this section to learn more about each of them.

# Options

All workspaces works quite the same way and have same options available:

![Workspaces options](/_medias/workspaces-options.png)

<$>[info]
Don't forget to save your workspace after editing it. The save button is located at the top right of the workspace, when a change is detected.

You can also enable auto-save in the [<span class="aq-icon">more_vert</span> menu](#more-options).
<$>

## Filter

You can filter any data you want, using our existing presets or directly from a cell of your table.

When you click on a filter you can change the comparison operator (`is`, `is not`, `is empty`, ...).
You can also temporarily disable a filter, or completely remove it.

### From presets

Presets are available under the `Add filter` button.

If you think a preset is missing, [let us know](/contact), we can add it for you!

### From cell

To filter based on the content of cells, right-click on a cell and select `Filter [...]`. You can also directly filter based on the item type using the `Filter by type [...]` option.

You can edit the filter to add more option, or filter other cell to narrow down your search.

### Save filters
You can also save specific filters to re-use them later by clicking on "<span class="aq-icon">filter_alt</span> 1 filter".

From the same menu you can define the search depth. It's an important concept, that can help you to unlock the full potential of the workspaces.

### Depth

As a reminder, Aquarium is a nodal solution. It means that every item have a connection to another item.

> Example
> ```mermaid
> graph TD
>     A([Project: My short movie]) --> B([Group: Sequences])
>     B --> D([Sequence: s010])
>     B --> E([Sequence: s020])
>     D --> G([Shot: s010_010])
>     G --> I([Task: layout])
>     G --> J([Task: animation])
>     D --> H([Shot: s010_020])
>     H --> K([...])
>     E --> L([...])
> ```

Let's say you are at the root of your project and you want to display all the shots of the project.

> Example
> ```mermaid
> graph TD
>     A([Project: My short movie]) --> B([Group: Sequences])
>     style A fill:#ff922b,stroke:##e8590c,stroke-width:4px
>     B --> D([Sequence: s010])
>     B --> E([Sequence: s020])
>     D --> G([Shot: s010_010])
>     G --> I([Task: layout])
>     G --> J([Task: animation])
>     D --> H([Shot: s010_020])
>     H --> K([...])
>     E --> L([...])
>     subgraph Start point
>     A
>     end
>     subgraph Depth: 1
>     B
>     end
>     subgraph Depth: 2
>     D
>     E
>     end
>     subgraph Depth: 3
>     G
>     H
>     end
>     subgraph Depth: 4
>     I
>     J
>     K
>     L
>     end
> ```

To display all shots being at the root of the project, you will need to set the depth to 3.

The depth option allows you to display items that are not directly connected to the current item. It's a powerful tool to display a lot of data at once.

<$>[warning]
Please keep in mind that big depth values can slow down the workspace. In the previous example, it will be better to displayed all shots starting from the `Group: Sequences` and use a depth of 2 instead.
<$>

## Display

Some workspaces have multiple display options like `table` or `card`.

<$>[note]
If this option is not available, it's because the workspace only works with a pre-defined display.
<$>

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
- **Import in Spreadsheet**: Copy in the clipboard a special function that you can paste in a Google Spreadsheet to import the data. Please refer to the [Google Spreadsheet integration](../integrations/google-spreadsheet.md) for more information.
- **Copy sharable link**: Copy in the clipboard a link to the current workspace.
- **Browse trash...**: Open the [trash application](../applications/trash.md) to restore items.

## Columns & views

If the workspace is compatible with the table display, views and columns are available.

### Views

A view is here to regroup multiple columns together. You can add as many views as you want. You can also easily expand or collapse views to hide unnecessary columns.

You can click on the name of the views to edit it using the [views application](../applications/views.md).

### Columns

You can add or remove columns from the view, based on our presets or by creating a new custom columns by right-clicking on a cell and selecting `Add column from property`. Learn more in our how-to [create a custom column](../how-to/create/column.md) guide.