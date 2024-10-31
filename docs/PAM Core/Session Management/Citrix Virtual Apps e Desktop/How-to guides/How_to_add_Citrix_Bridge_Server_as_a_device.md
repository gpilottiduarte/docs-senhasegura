# How to add Citrix Bridge Server as a device

In this document, you’ll find a step-by-step guide on how to add Citrix Bridge Server as a senhasegura device.

## Requirements

* Have the Citrix Server Bridge installed. The server can be installed in two different ways: via [Docker Container](/v3-32/docs/pam-session-how-to-install-citrix-bridge-server-using-docker-container) or [Extended Services OVA](/v3-32/docs/pam-session-how-to-install-citrix-bridge-server-using-senhasegura-extended-services-ova).

---
## Add Citrix as a device

1. On senhasegura, in the upper-left corner, click on the **Grid Menu**, represented by the nine squares, and select **Devices**.
2. In the side menu, select **Devices**.
3. In the upper-right corner, click on the three vertical dots icon and click **+ New**.
4. In the **Device** registration window, in the **Information** tab fill in the mandatory fields.
     :::info
    To find out more details on how to fill in these fields, access the [Devices](/v3-32/docs/devices) documents.
    :::
5. In the **Connectivity** tab, at the **Connectivity** field select **RDP**.
    1. The **Port** field will be filled with the value of **3389** automatically.
    2. Click **Add**.
    3. In the **Connectivity** list that will be displayed, click **Test**.
6. Click Save.


After these steps, a new device is configured as a Citrix Server Bridge and ready for use.

---
### Next:
[How to add a RemoteApp to Citrix Bridge Server](/v3-32/docs/how-to-add-a-remoteapp-to-citrix-bridge-server)
[How to add Citrix Bridge Server credential](/v3-32/docs/how-to-add-citrix-bridge-server-credential)
[How to access a Citrix desktop or application](/v3-32/docs/how-to-access-a-citrix-desktop-or-application)

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/) .