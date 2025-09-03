---
id: signin-user
title: Sign in a user
lang: en
nav_order: 10
---

# Sign in a user

In order to signin a user to Aquarium using the module, you can use the `signin` method:

```python
aq.signin(email="user@example.com", password="password123")
```

# How to sign in a user when 2FA is enabled

When a user enables 2FA using "Authenticators", you will need to provide the 2FA code as well.
For convenience, we created an all-in-one method to handle the 2FA flow:

```python
aq.connect(email="user@example.com", password="password123", otp_code="123456")
```

If you prefer to handle it on your side, you can do as follows:

```python
result = aq.signin(email="user@example.com", password="password123")

if result["status"] == "pending_verification" and "otp" in result["options"]:
    aq.verify_otp(email="user@example.com", challenge=result["challenge"] ,code="123456")
```

> [!note]
> Currently, only "authenticator" 2FA is natively supported by our Python module.


# How to use SSO with the python module

Our Python module is compatible with SSO (Single Sign-On) authentication yet. A [dedicated branch (feature/sso)](https://github.com/fatfish-lab/aquarium-python-api/tree/feature/sso) on our repository is available, if you want to help us and contribute to it. We can assist you and work with you on this feature.