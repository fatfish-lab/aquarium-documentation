---
id: profile
title: Profile
lang: en
nav_order: 10
---

# Profile

This application is dedicated to edit [User item](../items/user.md).

If you open the profile application with another user than you, some options might be disabled, depending your permission level.

![Profile](../../_medias/profile.png)

## Account

You can edit general information about the user: name, email, thumbnail and social networks details.

Just under the thumbnail, you can find the item._key of the user. This is the unique identifier of the user on Aquarium.

## Security

You can change the password from here.

<$>[warning]
When you change your password, we will ask you to sign-in again. It will also disconnect all your other sessions.
<$>

You can also enable and manage the two-factor authentication. You backup code can be manage from here too.

The `Close all session` allow you to disconnect all your sessions and will force the user to sign-in again.

## Personal access tokens

Sometimes, instead of providing your password, you can use a personal access token to authenticate yourself in some tools. You can create, revoke and manage them from here.

## Preferences

You can change the [default interface](../introduction/index.md#how-can-i-use-aquarium-) and choose the default theme (`light`, `dark` or `system` to automatically switch between light and dark theme depending on your system preferences).

By pressing `F1` or by clicking on the <span class="aq-icon outline">help</span> icon, Aquarium provide quests to help you to discover the application. You can reset your quests from here.

You can also enable browser notifications from here. So you will be notified from your operating system (OS) that you received a new notification on Aquarium.

If you already enabled the browser notifications, you can revoke the permission from here.

## Assistants

Like in the [Organisation](../applications/organisation.md#assistants) and [Project settings](./projectsettings.md#assistants), you can enable/discard assistants from here.

## Member of

This panel show you the list of organisation and user group the user is member of.

## Actions

You can see and manage all the [Action](../items/action.md) accessible to you.

You can filter the list of actions, to quickly find the one you are looking for.

You can create new one from here, using our existing templates or by creating a new one from scratch.

Once an action is created, you can click on the <span class="aq-icon">launch</span> icon to edit it, using [its dedicated application](./actioneditor.md).

You can also enable/disable actions from here.

<$>[warning]
Actions can be triggered by any user who have at least the permission to read the item.
So it's super easy to deploy an action for a group of user of for the entire organisation. You just need to invite them on this item. Open the [Action editor](./actioneditor.md) to learn more.
<$>

## Focus view

Open the [Diary in the focus interface](../introduction/focus.md#diary) of the user in a new tab.

## Browse trash

Open the [Trash](./trash.md) of the user.

## Signout

Sign-out from your Aquarium session.