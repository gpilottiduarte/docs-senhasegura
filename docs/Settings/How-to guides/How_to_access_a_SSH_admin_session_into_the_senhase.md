# How to access a SSH admin session into the senhasegura platform

In this article, you’ll learn step-by-step how to access an SSH admin session into the senhasegura platform through the application of your preference.

## Requirements

* Use a 3.10 version or higher.
* Be an admin user.
***

## Perform access 

We’ll use the SSH command via the command line as an example. To do this follow these instructions.

1. Type this line to enter the vault:
    1. ```ssh mt4adm@{hostname} -p 59022```
    2. Press **Enter**.
2. At the **warning**, type:
    1. ```yes```
    2. Press **Enter**.
3. Type the **password**:
    1. In the first access, the password is **mt4adm**.
    2. Press **Enter**.
    3. Then change the password to a personal one.
    4. Press **Enter**.
     :::danger
    With your personal password created after the first access, only this password will give you access to the vault. **Don’t forget this password**, the loss of it results in permanent loss of access to the vault.
    :::
6. After login, the senhasegura home screen will be displayed.
7. The SSH admin session into the senhasegura platform is ready.

***

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/) .