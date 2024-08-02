---
id: organisation
title: Organisation
lang: en
nav_order: 10
---

# Organisation

This application is used to edit [Organisation item](../items/organisation.md).

![Organisation](../../_medias/organisation.png)

You have several tabs to manage the organisation:

## Infos

You can edit global information about the organisation, like its name, website, contact email.

You can also browse the organisation trash from here.

To change the organisation's thumbnail, just drag-and-drop a new image on the thumbnail or click on it.

## Members

On organisation work like a user group, you can add [User](../items/user.md) and [Bot](../items/bot.md) to it.

Member of the same Organisation can see each others.

You can unfold a member to edit its permissions or to remove it from the organisation.

You can select multiple members to edit their permissions on the organisation.

Click on the `Add` button to add a new member to the organisation. If the email you enter doesn't exists, Aquarium will propose you to create a new user.

## Projects

You can use the organisation like a folder to regroup and organise your projects.

This section allow you to create and manage organisation's projects.

You can also flag a project as `archived` to hide it in the interface. Archiving a project is just a flag on the project. All you data remain intact and accessible.

## Usergroups

You can also regroup user groups in the organisation.

## Actions

This section give you an overview of all the [Actions](../items/action.md) that are accessible to you.

More details about that section in the [Profile](./profile.md#actions) application.

## Shortcuts

When you use the [Aquarium Studio interface](../_interfaces/studio.md), you can add shortcuts to the [dock](../_interfaces/studio.md#dock).

This section allow you to manage those shortcuts. You can add or remove them. You can also edit its icon, color and description.

## Assistants

When you use the [Aquarium Studio interface](../_interfaces/studio.md), assistants are provided to help you to create and manage your projects. Those assistants appear in the [Homepage workspace](../workspaces/homepage.md).

When an assistant is finished, it's automatically discarded. This interface allow you to manage those assistants, to manually discard them or to enable them again.

## Connectors

Connectors are used to connect Aquarium to external services. Today, on the Organisation level, only the [Syncsketch connector](../../integrations/syncsketch.md) is available. Other connectors are available at [Project level](./projectsettings.md#connectors).

## Properties

You can edit default Organisation's properties from this section.

### Working days and hours

From here you can customize the working days and hours of the organisation.

Define how many hours correspond to one day. By default 8 hours = 1 day.

If you work only 4 days per weeks, you can select the days of the week you don't work. This setting is used in the [Timeline workspace](../workspaces/timeline.md).

You can also define non-working dates, like holidays. This settings is also used in the [Timeline workspace](../workspaces/timeline.md).

### Organisation's statuses

You can define the statuses that are available for the organisation. Those status are used for [Tasks](../items/task.md).

Those status are merged with the [Project's statuses](./projectsettings.md#properties).
