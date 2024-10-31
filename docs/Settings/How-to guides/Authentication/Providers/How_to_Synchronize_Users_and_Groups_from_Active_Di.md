# How to Synchronize Users and Groups from Active Directory

## **Requirements**

To synchronize users, you will need the following:

- A user who is part of the Domain Admins group.
- An Active Directory (AD) Authentication Server registered with senhasegura. See [Configure Active Directory Authentication](https://docs.senhasegura.io/v3-32/docs/configure-active-directory-authentication) for details.
- The location's Distinguished Name (DN) in AD to synchronize the users.
- Have a senhasegura [User Group](/v3-32/docs/administration-user-groups).

* * *

::: (info) (LDAP/AD Group Sync Time)
senhasegura's user synchronization services run every **three minutes**. The services check whether any users have been added or removed from your Active Directory group, and mirror any changes in the corresponding senhasegura User Group.
:::

## Create LDAP/AD Sync Group

Each group has its own set of synchronization rules, and senhasegura can use a different LDAP server for certain groups if necessary.

To synchronize your AD users with senhasegura:

1. Go to **Settings ➔ Authentication ➔ Active Directory ➔ Group Synchronization**.
2. Click the Action button **( ⁝ )** in the upper right corner, then click **+ New group**.
3. Inside **LDAP/AD group**, fill in all the required information. For more details, check LDAP/AD group.
    1. Under the **Settings** tab:
        - Give the group a name.
        - Select the **LDAP/AD Server** created in the requirements.
        - Select the **[User Group](/v3-32/docs/administration-user-groups)** that will be used.
     :::warning
    Make sure to have an "Access Group" and "Role" within your "User Group," or else your users will not have any permission.
    :::
        - Set **Enable** to **yes**.
        - Select **Synchronization** to **ON** to make synchronization active.
        - Insert the DN to be used to search for the users.
        - Add an AD username attribute to be used from your AD, for example: “sAMAccountName”.
        - Select an AD name attribute.
        - Give a Query Filter. You can access [Creating a Query Filter | Microsoft Learn](https://learn.microsoft.com/en-us/windows/win32/ad/creating-a-query-filter)  to help create your own queries. For example, `(&(objectClass=user)(sAMAccountName=*)(memberOf=CN=senhasegura,DC=mt4,DC=com,DC=br))`

     :::warning
    You can type up to 2,048 characters in the **Query Filter** field.
    :::
4. (Optional) **Domum** tab. Only use this tab if you are using this group to be used in the Domum Senhasegura.
5. Under Roles tab:
    1. Click the **+** button to add a role for all users in this group.
6. Click **Save**.


## Group Sync Test

To ensure that your group is synchronizing correctly and collecting the correct users, you can perform a sync test.

Follow these steps:

1. Under the Action column, locate the group you want to test.
2. Click on the group's Action button ( **⁝** ), and choose **Synchronization test**.
3. In the **LDAP/AD group test** window, senhasegura fills in the DN and filter fields with the group's configuration values. You can change these fields for testing without affecting the original group settings.
4. Click **Simulate**.
5. A table will show the results of users being added, removed, or unchanged.
6. After the simulation, Senhasegura returns the list of users in the AD group. Users are listed as added, modified, or unchanged.

If any errors occur, check out our [AD Synchronization Troubleshooting](/v3-32/docs/user-management-troubleshooting) article.
