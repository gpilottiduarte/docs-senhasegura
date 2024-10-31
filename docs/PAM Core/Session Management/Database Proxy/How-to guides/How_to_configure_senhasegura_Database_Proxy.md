# How to configure senhasegura Database Proxy

In this document, you’ll find a step-by-step guide on how to configure the Database Proxy to access your database through senhasegura.

 :::info
To find out which databases and clients are approved by senhasegura, access the [Database Proxy](/v3-32/docs/pam-session-about-database-proxy) documentation.
:::

---
### Requirements

* Have PAM admin permission in senhasegura

---
### Parameters  to establish a connection:
Database|Device type|Vendor|Product|Connectivity|Port
|---|---|---|---|---|---|
SQL Server|Database|Microsoft|Desired option| SQL Server|1433 |
Post|Database|PostgreSQL|PostgreSQL 9.x.|PostgreSQL|5432 |
Oracle|Database|Oracle|Oracle Database 10g|Oracle|2484|

---
### Path to access
There are two ways to access the **Devices** configuration area. Follow one of these paths:

1. **Quick actions menu**: click the **Quick actions** icon, represented by a sheet of paper with the sum sign, and select Device.

or

1. In the upper left corner of the senhasegura platform, click the **Grid Menu**, represented by the nine squares, and select **Devices**.
2. On the side menu, select **Devices**.
3. Click the **View Actions** icon, represented by the three vertical dots, and click **+ New**.

Both actions will open a new pop-up window with the device registration form. Fill in the following data to configure the new device:

## Add a device

1. Register a device with the following data according to the values in the table above:
    1. On the tab **Information**, fill in the mandatory fields with the asterisk:
        1. **IP, hostname, or management URL**: type the information in which the device is registered.
        2. **Device name**: name that will be used to identify the device.
        3. **Device type**: choose Database.
        4. **Vendor**: choose the database vendor.
        5. **Product**: choose the database model.
        6. **Site**: select the option to which the database belongs.
        7. **Tags**: add the desired tags.
    2. On the tab **Connectivity**, fill in:
        1. **Connectivity**: choose the connectivity to be used.
        2. **Port**: the default number is automatically filled in. If you use a number other than the suggested port, make the change.
        3. Click **Save**.
        4. Click **Test** to confirm the connectivity.
2. Click **Save**.

The platform will display the confirmation notice. Once the configuration is finished, it’s important to set up a credential for this device. Access the [Credentials](/v3-32/docs/pam-credentials) documentation to know how to perform it.

 :::warning
For **Oracle** device type, the credentials set up is done in a different way. To know how to register this type of credential, access the [How to configure a credential in senhasegura to use the Database Proxy with Oracle](/v3-32/docs/pam-session-how-to-configure-a-credential-in-senhasegura-to-use-the-database-proxy-with-oracle).
:::

---
## Next:
[How to setup up a credential in senhasegura](/v3-32/docs/pam-how-to-set-up-a-credential-in-senhasegura)
[MS SQL Server sessions](/v3-32/docs/pam-session-ms-sql-server)
[PostgreSQL sessions](/v3-32/docs/pam-session-postgresql-sessions)

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/) .