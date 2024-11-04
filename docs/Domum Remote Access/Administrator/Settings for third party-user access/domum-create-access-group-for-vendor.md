To grant access to a third\-party user, you must first create a vendor access group. Domum aggregates third\-party users into vendor groups like it organizes employees into employee groups.

CautionThe vendor access group has no relation to the PAM module access group. The settings determined in the vendor's form are independent.1. Access the senhasegura platform.
2. Go to **Domum Remote Access➔Access Control➔Access Groups.**
3. In the upper\-right corner, click the **(⁝) View Actions** icon.
4. Select **\+ New**.
5. Complete the information in the **New access group**'s registration window.
	* **Access group name\***
	* **Enabled.\***Choose between **Yes** or **No**.
	* **Description**
6. On the **Settings** tab, complete the required information.
7. Under**Password preview settings**, select the preferred options.
	* **Users can view a password**
	* **Require approval to view a password**
		+ If you checked this option, you must specify the number of **Approvals required for viewing** and the number of **Disapprovals required to cancel**.
	* **Approval in levels.** Flag whether approvers will be triggered in levels. Thus, you can define a hierarchy of approvers.
8. Under **Remote session settings**, select the preferred options.
	1. * **Users can start session****.** Mark the checkbox to permit users to initiate a proxy session using the credentials associated with this group.
		* **Require approval to start session****.**Flag whether another user must act as an approver to start the proxy session.
			+ Once active, you need to define the number of **Approvals required** to view and the number of **Disapprovals required** to cancel.
		* **Approval in levels****.** Flag whether the approvers will be triggered in tiers. This way, you can define a hierarchy of approvers.
9. In **Access request settings**, choose **Yes** or **No**for the options:
	* **Governance ID required when justifying?\*** Flag whether the applicant must enter an ITMS code at the time of justification.
	* **Always add user manager to approvers?\*** Flag whether the manager should be automatically queried as an additional approver to this group. Therefore, the manager and the other approvers in the **Approvers** tab will be alerted.
	* [**Can third\-party users request their own access?\***](/v3-32/docs/domum-enable-third-parties-request-and-extend-access)
10. If you haven't selected the option for the group to require approvers, click **Save**.
11. If you have selected the option for the group to require approval, provide the necessary information on the **Approvers** tab.
12. Click the **\+** icon to add an approver.
13. Click **Add.**
14. The name of the approvers appears on the report. Note that approving users have a **Level** setting in their registry. This setting determines the calling sequence for approving the operation, allowing a hierarchy to be applied.  
Info
	* If you are an approver, pending approval requests will be in the **Domum Remote Access➔Access Control➔My Approvals**menu.
	* If you are a user that needs approval, you can view your requests in the **Domum➔Access Control➔My Requests**menu.
15. **Save.**
