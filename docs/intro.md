---
sidebar_position: 1
---
# Upgrade notes

:::danger

- Before executing the senhasegura update, **always run a snapshot on your hypervisor** and perform the [running and restoring backup](https://docs.senhasegura.io/docs/orbit-config-manager-running-and-restoring-backup)

- If you use the **senhasegura Arbitrator**, remove it from the cluster before updating senhasegura. [Learn more in our documentation](https://docs.senhasegura.io/docs/arbitrator-update).

- Zabbix users must reconfigure the application if it presents any problem after updating. Find instructions in the article [How to configure Zabbix via Orbit CLI](https://docs.senhasegura.io/docs/orbit-cli-how-to-configure-zabbix-via-orbit-cli).

:::

This update focuses on three areas: PAM Core, MySafe, and Certificate Manager. Check out the highlights we've brought to each of them.

PAM Core
--------

We've made accessing the Database Proxy easier by enabling authentication with an Active Directory user. Now, users can utilize their [domain credentials to access the MS SQL Server Management Studio](https://docs.senhasegura.io/docs/pam-session-how-to-start-a-ms-sql-server-session-with-ms-sql-server-management-studio).
We've improved the remote session authentications by allowing Kerberos to perform authentication in cases where Active Directory manages privileged credentials that are part of the Protected Users Security Group.

We've added the option for authentication in RDP Proxy sessions via a file. It´s now possible to [generate a .rdp file with a temporary token](https://docs.senhasegura.io/docs/pam-session-how-to-use-a-rdp-file-to-start-a-remote-session) that allows access via RDP Gate on the target device without the need to input the user’s authentication information.

We've updated the libraries used in the terminal proxy and web proxy for SSH connection. Now, we offer support for the rsa-sha2-256 algorithm for remote sessions.

MySafe
------

Starting from this version, when accessing via the web, it's also possible to [manage TOTP tokens](https://docs.senhasegura.io/v3-32/docs/mysafe-passwords-add) in MySafe. Passwords stored in MySafe can be accompanied by their respective token, eliminating the need for a third-party authentication app for multi-factor authentication (MFA).

Certificate Manager
-------------------

We’ve released a new integration with the [Entrust Certificate Authority (CA)](https://docs.senhasegura.io/docs/en/certificate-manager-reference-supported-cas). Signing and revoking certificates with the Entrust CA through the platform is now possible.

We’ve made it possible to [import SSL certificates via API](https://docs.senhasegura.io/v3-32/docs/a2a-api-certificate-manager) Signed certificates can now be included in the Certificate Manager using the endpoint provided.

PEDM GO Endpoint Manager
------------------------

Version 3.32 of PEDM Go Endpoint Manager for Windows introduces a new architecture to improve performance and security, in addition to adding new features. From this version, the PEDM GO will have two management interfaces.: "GO Endpoint Manager New" and "GO Endpoint Manager Old". Refer to the [changelog](https://docs.senhasegura.io/docs/changelog#pedm-windows) and [documentation](https://docs.senhasegura.io/docs/go-windows-about-new-go-pedm) for more information.

Was this article helpful?
