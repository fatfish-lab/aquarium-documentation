---
id: task
title: Task
lang: en
nav_order: 10
---

# Task

A **<span class="aq-icon outline">task_alt</span> Task** is here to represent a work/task to do.

A task can have sub-tasks.

A task can be assigned to a [User](./user.md).

The main application used to edit a task is [Tasks editor](../applications/tasks.md).

## Data

| Key | Type | Description |
| :--- | :---- | :----------- |
| `name` | `string` | Name of the task |
| `description` | `string` | Description of the task |
| `status` | `string` | Status of the task |
| `color` | `string` | Color of the task's status |
| `completion` | `number` | Completion of the task |
| `startdate` | `date` | Start date of the task |
| `deadline` | `date` | Deadline of the task |
| `duration` | `duration` | Duration of the task |
| `priority` | `number` | Priority of the task |
| `bid` | `duration` | Bidding information of the task. Like the duration to more tight to estimated duration |
| `checklist` | `array` | Checklist of the task |
| `steps` | `array` | Steps of the task. Like a milestone dedicated to the task |


## Structure

```mermaid
graph LR
  Task -->|Child| Subtask[Task - subtask]:::Task
  Subtask -->|Child| SubtaskB[Task - subtask]:::Task
  Task -->|Child| Comment
  Task -->|Child| Job
  Task -->|Assigned| User
  Task -->|Assigned| Usergroup
  Task -->|Assigned| Organisation
  Task -.->|Dependency| Outbound[Task <br/> <small>Outbound dependency</small>]
  Inbound[Task <br/> <small>Inbound dependency</small>] -.->|Dependency| Task
```

## Task's statuses

Statuses are defined by four properties:

- `status`: The name of the status (e.g. `TODO`, `WIP`, `DONE`, ...)
- `color`: The color of the status. It's a string in hexadecimal format (e.g. `#FF0000`)
- `completion`: The default completion of the status. It's a number between 0 and 1. In the web interface, the completion will be displayed as a percentage.
- `valid`: A boolean to know if the status represents a completed task or not.
  - We advice you to rely on completion to know if a task is completed or not, instead of the parameter.


You can customize and choose the statuses you want by editing them in the [project](../applications/projectsettings.md#properties) or [organisation](../applications/organisation.md#properties) settings application.