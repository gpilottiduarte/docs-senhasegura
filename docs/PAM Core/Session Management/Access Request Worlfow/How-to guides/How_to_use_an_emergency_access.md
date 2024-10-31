# How to use an emergency access

This document will guide you through a step-by-step on how to use emergency access to view a credential password.

It’s a case in which the requester can skip the approval process if there is a need for immediate emergency use of the credential.

When the access group allows the requester to use this feature, the user will be presented with the emergency access screen right after sending the access request.

 :::info
As soon as the requester confirms emergency access, senhasegura will send all approvers the information to which the requester had previous access. The access request will be marked with **emergency use**.
:::

---
## Request an emergency access.

1. On senhasegura, in the upper left corner, click **Grid Menu**, identified by the nine squares icon, and select **PAM Core**.
2. In the side menu, select **Credential** >  **All**.
3. Choose the credential that you want to request access on the list.
4. In the **Action** column, click on the **key** icon.
5. In the pop-up window, called **Justify**, fill in the mandatory fields identified with the asterisk:
    1. **Justification***: describe why you need access.
    2. **Reason***: choose among the available options.
    3. **Governance Code**
    4. **Start access***
    5. **Access end***
     :::info
    **Start** and **end** fields will only be available for **Require approval to view a password** type
    The field Access end can’t have a value greater than **1 (one)** hour than what was chosen in the **Start access** field.
    :::
6. Click **Justify**.
7. The message **“Request sent. You need approval for view the password for this credential. A request was sent to the approvers.”** will be displayed.
8. Click **Use emergency access**.
9. On the **Emergency access** window, write down a justification for using the emergency access.
10. Click **Use emergency access**.
11. The **Safe password view and transfer** window will be opened with the information.

The access will be available for the same period set at the **Start access** and **End access** or until the approver **revokes** the access.

To follow your request status, access the My request report page.

---
## Next:
[My requests](/v3-32/docs/pam-session-requests)
[Requests](/v3-32/docs/pam-session-requests)

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/) .