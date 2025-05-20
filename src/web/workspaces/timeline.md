---
id: timeline
title: Timeline
lang: en
nav_order: 10
---

# Timeline

This workspace is dedicated to display tasks and define schedules.

![Timeline](/_medias/screenshots/timeline.webp)

1. **Add your columns**: Define the columns you want to see in your workspace. You can choose between our presets or create your own custom column. To create a custom column, follow our [guide](../../examples/tutorials/create-column.md).
2. **Choose your tool**: Enable the tools you want to use in your schedule:
   1. **Move**: Allow you to move across time or if some days are selected move the selected days
   2. **Select**: Allow you to select a range of days. You can also double-click on a task to select all days of the task directly. Double-click after/before task to unselect all. Use `SHIFT` or `CTRL` to select multiple ranges/tasks.
   3. **Add**: Allow you to "paint" time assignments by clicking or "painting" over the cells. You can right click on a cell to remove the time assignment instead.
   4. **Remove**: Allow you to remove time assignments and dependencies.
   5. **Linking**: Allow you to create dependency links between tasks. Enable this tool and drag n drop a task on another to create a dependency.
   6. **Show dependencies**: Enable this option to visualize the dependencies between tasks
   7. Click on the <span class="aq-icon">settings</span> icon to access the settings of the timeline
3. **The timeline**: Each cell correspond to a day. Be default the number is in `day` but you can switch to `hour` from the settings.

> [!note]
> You can use keyboard shortcuts to quickly select the tool you want:
>
> - `ESC` for Move
> - `S` for Select
> - `A` for Add
> - `R` for Remove
> - `L` to link tasks and create dependencies
> - `T` to center the view on Today
> - `D` to show/hide dependencies
> - `J` to show/hide the timelogs
> - `W` to show/hide the workload

If you want to display more days in the calendar, you can expand the size of the column called "Timeline", by dragging the handle located at the end of the column.

## Grow and shrink your tasks

By hovering a task, you can grow or shrink its duration. Grab the handle located at the beginning or the end of the task and drag it to the desired date.

Checkout [general information about workspace](/web/workspaces) to know how to filter, sort, and group your data.

## Setup recurring tasks

By selecting tasks, you can setup there recurrence. Select `Set recurrence` from the [bufferzone](./index.md#bufferzone).

From this interface, you can define if the task need to repeat every day of the week, starting from a specific date, and for how long. You can also define it's daily duration.

If you enable `Replace existing timeline`, the task's timeline will be replaced by the new recurrence. If you disable it, the recurrence will be added to the existing timeline.

## Show workload

By pressing `W` or clicking on `Show workload` in the bufferzone, you can display the number of days or hours already assigned to assigned users for each days of the timeline. This is useful to see if a user is overloaded or not.

If the workload is too high, the cell will be colored in red. When you hover the cell, you will see the total number of hours assigned to the user for that day.

## Show timelogs

By pressing `J` or clicking on `Show timelogs` in the bufferzone, you can display the number of hours already timeloged by the team. It's displayed as a progression bar on top of the cell. The information is also displayed when you hover the cell.