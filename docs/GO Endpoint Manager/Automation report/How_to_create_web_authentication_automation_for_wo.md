# How to create web authentication automation for workstation segregation

In this article, you will learn how to create a web authentication automation for segregation by workstations.

* * *

## Requirements
For Web Authentication, the default browser chosen by the user is used. Supported browsers:

* Google Chrome 
* Mozilla Firefox

:::warning
Microsoft Edge and Microsoft Internet Explorer browsers are not supported.
:::

* * *

## Step 1: Create automation for web authentication

1. On the senhasegura platform, in the upper left corner, click the **Grid Menu**, identified by the nine squares, and select **GO Endpoint Manager.**
2. In the side menu, select **General ➔ Automation.**
3. In the upper toolbar, click the **View actions** icon **⁝**, identified by the three vertical dots, and select **+ New.**
4. In the window **Automation register**, fill in the fields.
    1. **Name.**
    2. **Type** of automation. Select **Web Authentication** from the drop-down menu.
    3. In **Enabled** mark as **Yes.**
    4. **Application path:** fill in the application path on the system. For example, for the web enter a URL like `https://google.com.br`, `https://facebook.com` or any other.
    5. Define **Tags** to assist in the search for automation.
    6. **View TAGs:** use the tags below to build your automation. Select the **Input** option and fill in the **value** field.
        1. **[#USERNAME#]:** credential username.
        2. **[#PASSWORD#]:** credential password.
        3. **[#DOMAIN#]:** credential domain.
        4. **[#HOSTNAME#]:** hostname.
        5. **[#HOST_IP#]:** IP do hostname.
    7. To create automation to perform authentication on a website, you can use this example:
        :::warning
        Remember to replace the name in the label field with the name on the web page.
        :::
        1. Select the "Input" action and fill in the **label** field with the name "email", and in the **value** field, enter "**[#USERNAME#]**."
        2. Select the "Input" action again, fill in the **label** field with the name "password," and in the **value** field, enter "[**#PASSWORD#]**."
        3. Select the "Button" action with the "Enter" **label**.
    11. If you wish, add a brief **Description** of what the automation does and what it is used for.
5. Click the **Save** button.

## Step 2: Add access list for automation with workflow

1. On the senhasegura platform,  in the upper left corner, click the **Grid Menu**, identified by the nine squares, and select **GO Endpoint Manager.**
2. Access **Policies ➔ Windows ➔ Access Lists.**
3. In the upper toolbar, click on the **View Actions** icon, identified by the three vertical dots, and select the option **New segregation for workstation.**
4. In the pop-up windows, select **Automations.**
5. In the **List per workstation** window:
    1. Fill in a **Name** to identify in the access list.
    2. Check the **Status** field to **Enabled.**
    3. Check the **Record the session of these applications**  field to **Enabled**, to record the automation run.
6. In the **Automations** section, click the **+** icon, identified by a sum signal.
7. Select the automation created in the previous step.
8. Click the **Add** button.
9. In the **Workstations** tab:
    1.  In the **Workstations** section, click the **+** icon, identified by the sum signal.
    2. The available workstations will be listed according to their code. Select the desired one and click on the **Add** button.
10. On the **Workflow** tab: 
    1. In the **Elevation Settings** section:.
        1. Check the **User can elevate applications** option to allow automation to elevate privilege when running automation.
        2. Check the **Require reason to elevate applications** option to require justification when running automation.
        3. Check the **Requires approval to elevate applications** option to require an approving user to approve the automation run.
        4. Set the number of **Approvals required.**
        5. Set the number of **Disapprovals required to cancel.**
        6. If you want to, check the **Allow emergency access** option.
        7. If you want to, check **Approval in levels** option.
    2. In the **Access request settings** tab:
        1. Check the **Governance ID required when justifying?** option as **Yes** if you have and want to use a code.
        2. Check the **Always add user manager to approvers?** option as **Yes** whether you want to automatically add the manager to the approvers.
11. Click the **Save** button.

:::info
User interaction is blocked until the automation finishes running.
:::

* * *

## Run automation

1. Access the workstation desktop.
2. start the application **GO Automation.**
3. Select the automation you want to run.
4. Right-click the automation and then click **Execute.**
5. Select the credential that will be used to run the automation.
6. Wait for the automation to run.

* * *

Do you still have questions? Reach out to the [senhasegura Community.](https://community.senhasegura.io/)