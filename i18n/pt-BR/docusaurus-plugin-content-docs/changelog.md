---
sidebar_position: 2
---

# Changelog

**Release date**: April 22, 2024

Check below the new features, improvements, and errors fixed in this version of senhasegura.

---

## ⚙ Changelog per module

### PAM - Credential Management

#### Bug fixes

| Item | Description                                                                                                                                                                                                                                                                                                                                                                                         |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2275 | Fixed an issue causing automatic policy rollback when creating a credential policy based on tags and assigning the corresponding tag to the credential. Now, upon adding the tag to the credential, the created policy is permanently applied, ensuring consistency in the application of tag-based credential policies without undesired fallbacks to lower-level policies shortly after creation. |
| 1063 | Fixed an issue where, when creating a new notification to send by e-mail at login, the option Send notifications only to contacts with access to credentials and device was not respected.                                                                                                                                                                                                          |
| 1979 | Fixed an issue where the Local User credential was not retaining the new policy when a password strength and credential type policy were applied using the Default policy. This caused the credential to persist with the Default policy instead of adopting the newly assigned one.                                                                                                                |
| 2186 | Fixed an issue in which the embedded Mozilla Firefox browser made requests to URLs outside of senhasegura's domain.                                                                                                                                                                                                                                                                                 |

#### Product Updates

| Item | Description                                                                                                                                                                                                                                       |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1115 | Removed the Key Path field from the SSH Key form, as it's no longer necessary with the system now automatically generating private keys. This enhancement streamlines the key creation process by eliminating the need for manual key path input. |
| 1125 | From now on, administrators will only receive email notifications when SSH credential/key password exchanges fail. The notification email includes a list of affected devices.                                                                    |

#### Translation fix

| Item | Description                                                                                                                                                                                                                                                                                                                                                 |
| ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1116 | **The label "Renew the key without setting a password?" has been changed to "Renew the key and set a password?"** The new label has been applied to all instances where it appears. The modification of the label doesn't affect the functionality of key renewal. As a result of this change, the default value for this field is now **Yes**. |

### PAM - Session Management

#### Bug fixes

| Item | Description                                                                                                                   |
| ---- | ----------------------------------------------------------------------------------------------------------------------------- |
| 2527 | Fixed the error where Database Proxy sessions weren't marked as closed even after disconnecting from the client.              |
| 2934 | Fixed MFA certificate validation error in Web Proxy sessions that allowed access to another workstation via RDP or SSH Proxy. |

#### Product Updates

| Item | Description                                                                                                                                                                |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1995 | Fixed the error where the word proxy was together with the word Terminal, in the Session type field in the register of audited commands.                                   |
| 592  | The `.rpd` file will have one-time access and a period of 30 seconds for use after downloading.                                                                          |
| 2025 | Updated the libraries used in the proxy terminal and web proxy for SSH connection, to support RSA algorithms.                                                              |
| 1406 | Added the Justification field in the Remote Access History report.                                                                                                         |
| 607  | Implemented support for authentication via Kerberos for RDP Gate and RDP via Web Proxy sessions.                                                                           |
| 119  | The Enable file transfer field was divided, in System Parameters and Segregated Parameters, between Enable file transfer for download and Enable file transfer for upload. |
| 991  | Support for the `RSA_SHA2_256` and `RSA_SHA2_512` algorithms has been implemented for web proxy and terminal proxy connections.                                        |

#### Translation fix

| Item | Description                                                                                                                                                   |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2415 | Fixed the error where multiple fields on the System Parameters screen, in the Spanish language, didn't have a question mark at the beginning of the sentence. |
| 1853 | Fixed an error that replaced Serbian Latin and Cyrillic characters, when pasted, with question marks in web sessions.                                         |

### PAM - Settings

#### Bug fixes

| Item | Description                                                                                                                                  |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| 2570 | Fixed the issue causing users utilizing DUO for authentication to encounter an 'Internal Server Error 500' after the update to version 3.31. |

#### Product Updates

| Item | Description                                                                                                                                                                 |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1928 | Removed URL validation for the SAML Provider registration field to prevent any impact on integration configuration.                                                         |
| 1898 | Added a notification on the Active Directory Group registration screen, including a link to the documentation "How to Synchronize Users and Groups from Active Directory”. |
| 1810 | Added a configuration flag to enable or disable the use of Network Connector on SMTP and IMAP/POP3 servers.                                                                 |
| 1851 | Upgraded the graph creation library for building dashboards from HighCharts to ApexCharts.                                                                                  |

### Orbit

#### Security

| Item | Description                                                                                                 |
| ---- | ----------------------------------------------------------------------------------------------------------- |
| 1948 | Fixed an issue that was allowing users to access other users' sensitive information in a specific scenario. |
| 2093 | The “admin” user was renamed to “mt4web” and a command was created to facilitate this renaming process. |

#### Translation fix

| Item | Description                                                                                   |
| ---- | --------------------------------------------------------------------------------------------- |
| 2684 | Fixed translation errors for Portuguese in the System Parameters.                             |
| 2863 | Fixed a spelling error in the "Username" column that was incorrectly written within Settings. |

### Task Manager

#### Behavior

##### Bug fixes

| Item | Description                                                                                                                 |
| ---- | --------------------------------------------------------------------------------------------------------------------------- |
| 1755 | Fixed the issue with the Viewing interval filter, which was previously filtering by date instead of by the number of views. |

### A2A

#### Bug fixes

| Item | Description                                                                                                                                                            |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1918 | Fixed the issue that was causing the character `&` to be changed into its entity code `&amp;` in the Tags field in the SSH key report and when editing an SSH key. |

#### Product Updates

| Item | Description                                                                                                                                                                                                                                                                                                               |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 441  | Updated Certificate Manager to allow users to import SSL certificates through API requests.                                                                                                                                                                                                                               |
| 1071 | Introduced an API for consulting users' session data. The methods available are GET by `id` and GET for all sessions.                                                                                                                                                                                                   |
| 1144 | Updated the SSH key API to include `key_name`, `enabled`, `tags`, and `devices` parameters for adding devices to an SSH key. Except for the 'enabled' parameter, all these are also accessible for querying an SSH key. Use the endpoints `POST /iso/pam/key` and `GET /iso/pam/key/id` for these operations. |

### Discovery

#### Bug fixes

| Item | Description                                                                |
| ---- | -------------------------------------------------------------------------- |
| 1662 | Fixed an error occurring when attempting to use the glossary in Discovery. |

#### Product Updates

| Item | Description                                                                                                                                                                                                                   |
| ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 184  | Added the ability to perform a device search and manually import only devices not registered with senhasegura.                                                                                                                |
| 1429 | Improved Discovery functionality to handle and support repeating IP addresses in the discovery process. Discovery can now successfully import and display information in the device report, even in cases of overlapping IPs. |
| -    | No changes.                                                                                                                                                                                                                   |
| -    | No changes.                                                                                                                                                                                                                   |

### PEDM - Windows

#### Bug Fixes

| Item | Description                                                                                                                                                                           |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 344  | Fixed error `The requested operation requires elevation` that happened while trying to run some applications with elevation of privileges.                                          |
| 1594 | Fixed an error that allowed the execution of an application listed in a `denylist`.                                                                                                 |
| 1623 | Fixed issue where using the "runes" functionality (to impersonate a domain administrator) would display a warning message that access to the home directory had been denied.          |
| 2725 | It is no longer necessary to register new users on workstations where senhasegura.go client has already been registered.                                                              |
| 2786 | senhasegura.go client returns an alert that elevation of privileges is necessary to change network adapters.                                                                          |
| 478  | Adjusted lift flow. Now, the senhasegura.go client allows you to copy and paste all local users and user groups, to facilitate their registration in the administrator's environment. |
| 2439 | Fixed an error that occurred when trying to run an application with the `Execute with senhasegura.go` functionality on Windows Server 2016.                                         |
| 2580 | The recommended command for installing and reinstalling the senhasegura.go client via the command line has been updated.                                                              |

#### Product Updates

| Item    | Description                                                                                                                                                                                                                                          |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 378/395 | PEDM GO Windows event reports now feature commands entered via PowerShell and CMD in the senhasegura.go client.                                                                                                                                      |
| 679/680 | New parameters for the behavior of parent and child processes, executed by the senhasegura.go client, have been added to the rules of an access list in senhasegura.                                                                                 |
| 2875    | senhasegura now has two versions of PEDM GO Windows in two separate windows, available on the platform. To use the new version, it is necessary to update the senhasegura.go client to the same version of senhasegura (administrator environment).  |
| 2949    | The `Synchronize local groups` functionality has been removed from the options (menu opened by right mouse button) of the senhasegura.go client.                                                                                                   |
| 3049    | It is now necessary to create the senhasegura.go client user in the senhasegura PAM, so that features such as impersonation (and all others that need a PAM credential connections) work as expected.                                                |
| 3063    | The PEDM GO Windows parameter settings were divided into two tabs within System Parameters page, the GO Windows tab, must be used with the senhasegura.go client up to v3.31 and the PEDM GO Windows, must be used with senhasegura.go client v3.32. |

### DSM (DevOps Secret Manager)

#### Bug fixes

| Item | Description                                                                                                 |
| ---- | ----------------------------------------------------------------------------------------------------------- |
| 584  | Fixed a bug where a secret's details page would not close automatically after exceeding the approved range. |
| 1765 | Fixed a bug related to the "Authorization Activation trigger", which was not functioning as expected.       |

#### Product Updates

| Item | Description                                                                                                               |
| ---- | ------------------------------------------------------------------------------------------------------------------------- |
| 2335 | Implemented asymmetric cryptography methods for cryptographic keys in the DSM.                                            |
| 1779 | Fixed an issue related to application visibility when the "Line of business" field is empty in the DevOps Secret Manager. |

#### Translation fix

| Item | Description                                                                           |
| ---- | ------------------------------------------------------------------------------------- |
| 2623 | Fixed the issue of the "I18N_EMPTY" string appearing on the DSM access groups screen. |
| 2821 | Fixed spelling error on the Cryptographic Keys screen in Portuguese.                  |

### Cloud IAM

**No changes.**

### Executions

**No changes.**

### MySafe

#### Bug fixes

| Item | Description                                                                                                                                                                                               |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1796 | Fixed the issue that erroneously allowed users with viewing permissions to mark checkboxes for files and notes. This problem was causing errors during the execution of batch actions on files and notes. |
| 1776 | Fixed the issue that was preventing the unsharing of notes via API.                                                                                                                                       |
| 1799 | Added the Tags and Notes parameters when retrieving, creating, and updating API secrets via API.                                                                                                          |
| 1888 | Added the Username search filter on the Password details screen.                                                                                                                                          |
| 1675 | Added the batch action buttons Enable, Disable and Share on the API secrets screen.                                                                                                                       |
| 1504 | Renamed the API keys menu to Access keys, accessible through MySafe > Integrations > Access keys.                                                                                                         |
| 1514 | Added the ID field in the Passwords, API secrets, Files, Notes, and Audit reports so that users can consult it when using the MySafe APIs.                                                                |
| 761  | Renamed the Delete button to Disable on the MySafe home screen for password deactivation.                                                                                                                 |

#### Product Updates

| Item | Description                                                                                                                                        |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| 24   | Added the possibility to integrate multifactor authentication (MFA) tokens with passwords stored in MySafe. Available for senhasegura web and API. |

### MySafe extension

**No changes.**

#### Security

| Item | Description                                                                                                 |
| ---- | ----------------------------------------------------------------------------------------------------------- |
| 1948 | Fixed an issue that was allowing users to access other users' sensitive information in a specific scenario. |

### Domum

#### Bug fixes

| Item       | Description                                                                                                                                                                                                                         |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1783       | Fixed error when trying to create or edit remote access through Domum, the column that displayed the device type was incorrectly changed to "username".                                                                             |
| 1941, 1867 | Fixed the incorrect group filter name in the internal user groups report from "vendors" to "group".                                                                                                                                 |
| 921        | Fixed on the Domum dashboard of Internal User Group, in the Behavior field, after clicking on Users to view the internal users report, it now correctly displays the internal users report instead of the third-party users report. |
| 1899       | Fixed the incorrect translation in the date fields, "Start Date" and "End Date", in the access request reports.                                                                                                                     |

#### Product Updates

| Item | Description                                                                                                                                                                                                                                                                                                |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2193 | The GeoIP base of Domum is now updated daily.                                                                                                                                                                                                                                                              |
| 926  | Removed "Start date" and "Due date" fields from Domum > Dashboard > Internal user groups as this entity does not have these attributes.                                                                                                                                                                    |
| 1336 | Updated dashboards located in "Domum > Dashboards > Vendors / Third-party users / Internal users groups / Internal users". The term "Access" in the line chart has been replaced with "Sessions".                                                                                                          |
| 1759 | The custom attribute `thirdPartyVendor` has been removed from the group provisioning XML via SCIM. This change is due to new authentication improvements, which have made this attribute unnecessary. When registering a new provider, users should now utilize the field labeled "Add users to Domum?". |

### Certificate Manager

#### Product Updates

| Item | Description                                                                                 |
| ---- | ------------------------------------------------------------------------------------------- |
| 441  | Updated Certificate Manager to allow users to import SSL certificates through API requests. |
| 1662 | Added the capability to import A1 certificates in `.PFX` format.                          |

#### New Feature

| Item | Description                                                                                                                                                          |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 300  | Added a new feature integrating the Entrust Certificate Authority (CA) through API. This new feature allows signing certificates using the Entrust CA as a provider. |

### Change Audit

#### Product Updates

| Item | Description                                                     |
| ---- | --------------------------------------------------------------- |
| 2364 | Change Audit now also audits sessions using the Proxy Terminal. |

### Mobile App

**No changes.**

### Network Connector

**No changes.**

### Arbitrator

**No changes.**

### Load Balancer

**No changes.**

---

## Deprecated solutions

For information on old or deprecated modules or solutions, please refer to our [End Of Life](https://docs.senhasegura.io/docs/en/end-of-life#deprecated-solutions) (EOL) article.

## Other versions

You can see the older [documentation versions here](https://docs.senhasegura.io/docs/other-versions).

Was this article helpful?
