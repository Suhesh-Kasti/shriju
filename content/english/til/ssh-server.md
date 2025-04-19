---
title: "How to SSH Into a Server or OLT"
date: 2023-07-12T10:30:00+05:30
draft: false
tilDate: "2023-07-12"
categories: ["2023", "July"]
tags: ["networking", "ssh", "server-administration"]
---

Today I learned how to SSH into a server and an Optical Line Terminal (OLT). This is a fundamental skill for remote server administration and network management.

## Basic SSH Command

The basic syntax for SSH is surprisingly simple:

```bash
ssh username@hostname
```

For example:
```bash
ssh admin@192.168.1.100
```

## SSH Authentication Methods

I learned there are two main ways to authenticate:

1. **Password Authentication**: Simply enter your password when prompted
2. **Key-Based Authentication**: More secure, uses a public/private key pair

### Setting Up Key-Based Authentication

To set up key-based authentication:

```bash
# Generate SSH key pair
ssh-keygen -t rsa -b 4096

# Copy public key to server
ssh-copy-id username@hostname
```

## SSH into an OLT

Connecting to an OLT (Optical Line Terminal) has some specific considerations:

1. **Default Credentials**: Many OLTs have default credentials like `admin/admin` or `root/admin`
2. **Telnet vs SSH**: Older OLTs might only support Telnet (less secure)
3. **Port Differences**: Some OLTs use non-standard SSH ports

Example command for connecting to an OLT:
```bash
ssh -p 22 admin@192.168.1.10
```

## Useful SSH Commands Once Connected

Once connected to a server or OLT, these commands came in handy:

```bash
# View system information
uname -a

# Check running processes
ps aux

# View network interfaces
ifconfig

# For OLTs: Show connected ONUs
show pon onulist

# For OLTs: Check optical power levels
show pon power-info
```

## SSH Configuration Tips

I also learned some useful SSH configuration tricks:

1. **Config File**: Create `~/.ssh/config` to store connection settings
2. **Connection Persistence**: Use `ServerAliveInterval 60` to keep connections alive
3. **Aliases**: Set up shortcuts for frequent connections

Example config file:
```
Host myserver
    HostName 192.168.1.100
    User admin
    Port 22
    IdentityFile ~/.ssh/id_rsa
    ServerAliveInterval 60
```

Then simply use:
```bash
ssh myserver
```

## Security Best Practices

Important security considerations:

1. **Disable Password Authentication** when possible
2. **Use Strong Keys** (RSA 4096 bits or ED25519)
3. **Change Default Ports** to reduce automated attacks
4. **Implement Fail2Ban** to prevent brute force attempts
5. **Keep Software Updated** to patch security vulnerabilities

SSH is an incredibly powerful tool for remote administration. I'm glad I took the time to learn it properly!
