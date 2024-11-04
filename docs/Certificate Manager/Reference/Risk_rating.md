# Risk rating

The certificate risk rating is a scale that assesses and sets a grade for certificates according to the following criteria:

- Encryption algorithm
- Encryption key size
- Signature algorithm
- Certificate authority
- Certificate expiration date
- Number of devices using the certificate
- Certificate responsible
- Certificate status

For each criterion, the certificate can gain or lose points. The final result is the sum of the points the certificate has received. This classification allows rapid risk assessment in environments where certificates are in use.

## Security rating

| Score | Rating |
|---|---|
| More than 80      | **A** |
| Between 65 and 79 | **B** |
| Between 50 and 64 | **C** |
| Between 35 and 49 | **D** |
| Between 25 and 34 | **E** |
| Between 0 and 24  | **F** |
| Less than 0       | **NT** (Not Trusted) |

The classification does not restrict the use of certificates. You can define whether or not to use a low-rated certificate on your systems.

 :::warning
We do not recommend using low-rated certificates in productive environments.
:::
***
## Rating criteria
The sum of the criteria below generates a total that falls within one of the ranges, resulting in the final security rating of the certificate.

### Encryption algorithm

| Type | Score |
|---|---|
| DSA | **-100** |
| Others | **0** |

### Encryption key size

**RSA**

| Size | Score |
|---|---|
| 4096 bits     |   **+30** |
| 2048 bits     |   **+20** |
| 1024 bits     |   **+10** |
| < 1024 bits   | **-100** |

**EC/ECDSA**

| Size | Score |
|---|---|
| 384 bits |   **+40** |
| 256 bits |   **+25** |
| 160 bits |   **+5** |
| < 160 bits | **0** |

### Signature algorithm

| Type | Score |
|---|---|
| SHA512 |   **+30** |
| SHA384 |   **+20** |
| SHA256 |   **+10** |
| Others | **0** |

### Certificate authority

| Type | Score |
|---|---|
| Has CA |   **+10** |
| Self-signed | **0** |

### Certificate expiration date

| Value | Score |
|---|---|
| Valid   |   **+10** |
| Expired | **-100** |

### Number of devices using the certificate

| Value | Score |
|---|---|
| Between 0 and 1 devices |   **+10** |
| Between 2 and 5 devices |   **+5** |
| More than 5 devices | **0** |

### Certificate responsible

| Value | Score |
|---|---|
| Has responsible |   **+10** |
| Does not have responsible | **0** |

### Certificate status

| Value | Score |
|---|---|
| Revoked* | **-100** |
| Others | **0** |

 :::warning
The certificate is considered revoked when its intermediate or root certificate is revoked.
:::



