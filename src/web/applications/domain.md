---
id: domain
title: Domain
lang: en
nav_order: 10
---

# Domain

This application is here to manage all administrative settings of your domain.

<$>[warning]
This application is only accessible to the administrator and super-administrator of the domain.
<$>

![Domain](../../_medias/domain.png)

From this application, you can manage the following settings:

## Users

This section allows you to manage the users of your domain.

Users can be activate / deactivate from here. Deactivated users are not able to log in on the platform, but can still be accessible in the project to assign them tasks for example.

To create a user, or multiple users at the same time, you can use the `Create` button on top of the interface.

<$>[info]
The only mandatory information to create a user is the email address.
<$>

When you create a user, and you don't set a password, the user will receive an invitation email. The invitation email is only valid for a certain number of days, after which the user will have to request a new link using the `Forgot password` link on the login page. Lean more on this process [in our dedicated guide](../../how-to/reset-password.md).

If you unfold a user, you can edit its information using the [Profile application](./profile.md).

You can also make its account as admin or super-admin.

### Admin and super-admin

<$>[note]
Aquarium works on the principle of domain system, like an Active Directory for example.
<$>

Being an admin or super-admin makes you member of `Domain admins` usergroup. By default this usergroup is present on all items. So admin and super-admin can access all projects for example.

The difference between an admin vs a super-admin, is that super-admin can edit domain settings like licenses, and manage users.

Here is a table explaining the differences between admin and super-admin:

| Feature | Admin | Super-admin |
| :--- | :--- | :--- |
| Have access to the domain application | <span style="color: var(--green-50);">Yes</span> | <span style="color: var(--green-50);">Yes</span> |
| Member of `Domain admins` usergroup | <span style="color: var(--green-50);">Yes</span> | <span style="color: var(--green-50);">Yes</span> |
| Promote to admin or super-admin | <span style="color: var(--red-50);">No</span> | <span style="color: var(--green-50);">Yes</span> |
| Create users | <span style="color: var(--red-50);">No</span> | <span style="color: var(--green-50);">Yes</span> |
| Edit users | <span style="color: var(--green-50);">Yes</span> | <span style="color: var(--green-50);">Yes</span> |
| Access all items (like projects for example) | <span style="color: var(--green-50);">Yes</span> | <span style="color: var(--green-50);">Yes</span> |
| Manage [licenses](#licenses) | <span style="color: var(--red-50);">No</span> | <span style="color: var(--green-50);">Yes</span> |
| Manage [storage](#storage) | <span style="color: var(--red-50);">No</span> | <span style="color: var(--green-50);">Yes</span> |
| Manage [bots](#bots) | <span style="color: var(--red-50);">No</span> | <span style="color: var(--green-50);">Yes</span> |
| Use the [console](#console) | <span style="color: var(--red-50);">No</span> | <span style="color: var(--green-50);">Yes</span> |
| Can requeue [events](#events) | <span style="color: var(--red-50);">No</span> | <span style="color: var(--green-50);">Yes</span> |
| Manage [SSO](#SSO) | <span style="color: var(--red-50);">No</span> | <span style="color: var(--green-50);">Yes</span> |

<$>[error]
[label **Use with caution**]
If you don't want a admin or super-admin to access specific project, you can remove the `Domain admins` usergroup from the participant.
<$>

## Organisations

This section allows you to manage the organisations of your domain. You can create as many organisations as you want. You can use an organisation to regroup users and projects together.

<$>[info]
Be default, users can't see each others, unless they are in the same organisation.

If you need users from different organisations to collaborate, you can edit the organisation permissions to allow `Read only` on the other one (and vice versa).
<$>

Each organisation have their own settings that you can edit using the [Organisations application](./organisations.md).

## Licenses

This section allows you to manage the licenses of your domain. You can see the number of licenses you have, and the number of licenses you are using. You can also edit you license to request more active users and storage.

Here is a short video [from our guide](../../how-to/manage-licenses.md), explaining how to manage your licenses:

[youtube DnCszP4uk0U]