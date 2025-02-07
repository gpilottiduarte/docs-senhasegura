# How to authenticate an application

This tutorial will guide you through a step-by-step on how to authenticate an application created in the **A2A** module in a REST or HTTP client of your choice.

senhasegura’s **A2A** APIs support **OAuth v1.0**,  **OAuth v2.0**, and **AWS** authentication methods. 

 :::info
senhasegura recommends the use of **OAuth v2.0** authentication for enhanced security.
:::

## OAuth v1.0 authentication

**OAuth v1.0** is an authentication method that uses a set of **Consumer Key**, **Consumer Secret**, **Access Token**, and **Token Secret** to identify and authorize application access.

## Requirements

A previously registered application using **OAuth v1.0** as the authentication method and a previously registered authorization for this application. For more information, access the documentation on [How to create an application](/v3-32/docs/a2a-how-to-create-an-application) and [How to create an authorization for an application](/v3-32/docs/a2a-how-to-create-an-authorization-for-an-application).


### Obtain OAuth v1.0 request parameters

In order to initiate requests using **OAuth v1.0**, you must provide the following information:

* **consumer_key**

* **consumer_secret**

* **token_key**

* **token_secret**

To find the values for the parameters mentioned above, follow the steps below:

1. On the senhasegura platform, in the upper left corner, click the **Grid Menu**, identified by the nine squares, and select **A2A**.

1. In the side menu, select **Applications**.

1. From the list, select the desired application and, in the **Action** column, click the three vertical dots to open a drop-down menu.

1. In the drop-down menu, click **Authorizations**.

1. In the **Authorizations** window, select the desired authorization, and in the **Action** column, click **View**, identified by the key icon.

1. In the **Application authorization** window, click the eye icons to view the **Consumer Key**, **Consumer Secret**, **Token** and the **Token Secret**.

### Make a request using OAuth v1.0

There are numerous ways to make an authentication request using **OAuth v1.0**. 
In the following example, Python is being used to demonstrate it. 

Use the following script:

```python
import requests
import urllib3
from requests_oauthlib import OAuth1


def make_oauth1_request():
    url = "https://<SENHASEGURA_HOSTNAME>/<ENDPOINT>"
    consumer_key = "CONSUMER_KEY"
    consumer_secret = "CONSUMER_SECRET"
    token_key = "TOKEN_KEY"
    token_secret = "TOKEN_SECRET"


    oauth = OAuth1(consumer_key, consumer_secret, token_key, token_secret)


    try:
        response = requests.get(url, auth=oauth, verify=False)
        if response.status_code == 200:
            print("Request was successful!")
            print("Response:")
            print(response.text)
        else:
            print("Request failed with status code:", response.status_code)
    except requests.exceptions.RequestException as e:
        print("An error occurred:", e)


if __name__ == "__main__":
    urllib3.disable_warnings()
    make_oauth1_request()
```
 :::info
When executing a request, replace the **ENDPOINT** field with the desired senhasegura endpoint. E.g., 
```
/iso/pam/credential
```
or 
```
/iso/pam/device
```

The parameters - **consumer_key**, **consumer_secret**, **token_key**, and **token_secret** - previously obtained must be inserted in the header of the request, and not in the body.
:::
    
**Parameters**
  
The following table presents a list with the mandatory and optional authentication parameters.
    
    

| Field | Description |
| --- | --- |
| **oauth_signature*** | A string of unique characters that act as a signature for a request. For more information, go to the documentation for [creating the signature](https://datatracker.ietf.org/doc/html/rfc5849#section-3.4) . |
| **oauth_version*** | Make sure to set the version value to 1.0. |
| **oauth_signature_method*** | The name of the signature method used by the client to sign the request. Set the signature method to **HMAC-SHA1**. |
| **oauth_consumer_key*** | The **consumer_key** value previously obtained. |
| **oauth_token*** | The **token_key** value previously obtained. |
| **oauth_consumer_secret*** | The **consumer_secret** value previously obtained. |
| **oauth_token_secret*** | The **token_secret** value previously obtained. |
| **oauth_nonce**  | A unique and random value generated by the client for each request. |
| **oauth_timestamp** | The number of seconds since January 1, 1970, 00:00:00 GMT, responsible for generating a date signature. |

    
 :::info
The parameters marked with an asterisk are mandatory.
For more information on the parameters above, access T[he OAuth v1.0 Protocol RFC](https://datatracker.ietf.org/doc/html/rfc5849#section-3.4) .
:::

##     OAuth v2.0 authentication
    
 **OAuth v2.0** is an authentication method that uses a **Client ID** and a **Client Secret** to request a time-limited token and access senhasegura resources. 
    
## Requirements
 
A previously registered application using **OAuth v2.0** as the authentication method and a previously registered authorization for this application. For more information, access the documentation on [How to create an application](/v3-32/docs/a2a-how-to-create-an-application) and [How to create an authorization for an application](/v3-32/docs/a2a-how-to-create-an-authorization-for-an-application).

    
### Obtain an OAuth v2.0 authorization token
    
To obtain an **OAuth v2.0** authorization token, follow the steps below.
    
 :::info
The process may vary depending on the scenario.
:::

1. On the senhasegura platform, click the **Grid Menu**, identified by the nine squares, and select **A2A**.

1.  In the side menu, select **Applications**.

1.  From the list, select the desired application and, in the **Action** column, click the three vertical dots.

1. Click **Authorizations** to open a new window with the list of authorizations for the selected application.

1. Select the desired authorization, and in the **Action** column, click **View**, identified by the key icon. 

1. In the **Application Authorization** window, click the **eye** icons to view the **Client ID** and the **Client secret**.

### Make a request using OAuth v2.0
    

1. In the HTTP or REST client of your choice, such as **Postman**, create a collection.

1. In the **Authorization tab > Type**, select **OAuth 2.0**.

1. In **Configure New Token > Configuration Options > Grant Type**, select **Client Credentials**.

1. In the **Access Token UR**L, make a request to the appliance endpoint. E.g., 
```
https://applianceURI/iso/oauth2/token
```

5. In **Client ID**, enter the value obtained in step 6 of the [Obtain an OAuth v2.0 authorization token](/v3-32/docs/a2a-how-to-authenticate-an-application#obtain-an-oauth-v20-authorization-token) section of this tutorial. 

1. In **Client Secret**, enter the value obtained in step 6 of the [Obtain an OAuth v2.0 authorization token](/v3-32/docs/a2a-how-to-authenticate-an-application#obtain-an-oauth-v20-authorization-token) section of this tutorial. 

1. Click **Get New Access Token**, at the bottom of the page.

1. Click **Proceed** to open the **MANAGE ACCESS TOKENS** page and view the **Access Token**.

1. Use this **Access Token** to make the requests in senhasegura’s **A2A** APIs.
    
 :::warning
By default, senhasegura creates a token with a 1-hour validity.
:::

###     Request a new access token
    
 If needed, request a new access token to **A2A** using the following URI:
```
POST /senhasegura/iso/oauth2/token
```
 and the following mandatory parameters:


**Parameters**
    
    

| Field | Description |
| --- | --- |
| **grant_type** | The value informed must always be **client_credentials**. |
| **client_id** | Value informed by senhasegura and obtained following the steps in the [Make a request using OAuthv2.0](/v3-32/docs/a2a-how-to-authenticate-an-application#make-a-request-using-oauth-v20)  section of this tutorial. |
| **client_secret** | Value informed by senhasegura and obtained following the steps in the [Make a request using OAuthv2.0](/v3-32/docs/a2a-how-to-authenticate-an-application#make-a-request-using-oauth-v20) section of this tutorial. |
    
**Example request**
    
    
```json
{
	grant_type: "client_credentials"
	client_id: "765299ec425cf0255badc739c2dce1b10634973e1"
	client_secret: "f13aeddeb57f262835871dab5d839b70"
}

```
    
 **Expected response**
    
```json
{
    "token_type": "Bearer",
    "expires_in": 3600,
    "access_token": "
        eyJ0eXAiOiJKV1QiL0IjoxNTgwNDM2NTk4LCJuYmYiOjE1ODA0MzY1OTgsImV4cCI
     6MTU4MDQ0MDE5OCwic3ViIjoiTVRNeE1qQWtTRGRPUVRWV1ozcEVSI6Ijg0OWYw
        ZmVhNDI0ZDc5NWUwYTg2MjVlMTdiZWE2YTAyNTQyMzAxNjQzYmRmYTc5ZjYzZDN
        hM2U3ZmI5ZjQzbGCJhjg0OWYwZmVhNDI0ZDc5NWUwYTg2MjVlMTdiZWE2YTAyNT
        QyMzAxNjQzYmRmYTc5ZjYzZDNhM2U3ZmI5ZjQzYmM2MjRhYzg5YmVhMzFhOGQwI
        iwiaWFciOiJSUzI1NiIsImp0ahYzg5YmVhMzFhOGQwIn0.eyJhdWQiOiIzY2E4Y
        Tk4ZDkwNzU0MzgxMjMzNGY3ZjVkYmFmY2E2NTA1ZTMzMTlmYiIsImp0aSI6IYmM
        2MjRTRzB6ZFZONlZXVXhhVWN2Y1RKdFRXNTVhM05sZGtOd1JHeHllbXR5VEV3eE
        5EMD0iLCJzY29wZXMiOltdfQ.efqHZdlij6sQcj_l9RbNNKxDbf81CbIoTFwdIk
        ooT5bK14N5iUazrT8jpB_JsgQdQ8RyD5xF_ReKSj4Al7hp1uRXIiuErlKv1FpxY
        9oNC44kldlumjyevu87GJ0qzem0RYNc3930UbT-XEYqnQijg0se8_GdzdLkxyMn
        0kxApkAkv-to9EUdbbrvvno_pmqiZGyamw6J2BL1aCqwne3S8CCG34TXRyJyqkG
        rPrDO-NPi2fj25PRbX8Ci1iIqXdYvEkefg-g-i0A_Hp9E3s585c5wqxreSBAIwi
        aGtnTkxw0D14JPzqWf48hbvVRPGMj_-KXJTnu-zXkkEPNYs8oWpA"
}

```
    
Save the **access_token** to use in the next calls for every method.
    
    
## AWS authentication



**AWS** is an authentication method that enables applications to retrieve stored data using **AWS Access Keys ID** and **Secret Access Keys** together with a unique key generated by senhasegura **DSM**. This method is used mainly for integration with **DevOps** applications. For more information on **AWS** authentication, access the [Configure the AWS authenticator](https://docs.senhasegura.io/v3-32/docs/en/dsm-how-to-configure-authenticators#configure-the-aws-authenticator) document. 
