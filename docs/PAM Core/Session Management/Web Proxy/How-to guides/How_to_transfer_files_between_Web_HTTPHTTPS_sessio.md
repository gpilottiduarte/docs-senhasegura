# How to transfer files between Web HTTP/HTTPS sessions

This document will guide you through a step-by-step on how to transfer files between Web HTTP/HTTPS sessions.

### Requirements

* Web HTTP/HTTPS sessions created. To create a session, access the [device's documents](/v3-32/docs/pam-devices-management).
* A credential with access to a Web HTTP/HTTPS session. To create a credential, access the [credential’s documents](/v3-32/docs/pam-how-to-set-up-a-credential-in-senhasegura).
***

## Transfer a file

1. On the senhasegura platform, in the upper left corner, click **Grid Menu**, identified by the nine squares icon, and then select **PAM Core**.
2. In the side menu, select **Credentials** > **All**. 
3. In the credentials list, go to the desired session.
4. Click on the Start session, represented by the **computer** icon.
5. Once you’re in the session, you can download any file during the session.
    1. Alternatively,  right-click on the file you want to transfer, and then click **Save** or **Save as PDF**.
6. Select the Download folder to save the file and to make it available for another HTTP/HTTPS session to access the file.
     :::warning
    Make sure to save the file in the **Download** folder. If you save the it in the Home folder, or another, the file won’t be available to be transferred between the sessions.
    :::
7. Rename the document if necessary.
8. Click **Save**. A message will be displayed in the bottom right corner, confirming that the file was transferred.
9. End the session.
10. The file will be saved in the **Download** folder for other HTTP/HTPPS sessions to access it.

 :::info
The file will be available in the folder for **2 (two) days**. At the end of this period, it will be automatically erased.
:::

---
Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/)  .