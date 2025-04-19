---
title: "Let's Learn Computer Networking: Basics for Beginners"
date: 2023-05-20T14:30:00+05:45
image: "images/blog/subisu/computer_network.png"
description: "Understanding the basics of computer networking, OSI model, and how internet is delivered to homes"
categories: ["Technology", "Networking"]
tags: ["Networking", "Internet", "ISP", "GPON"]
draft: false
---

# Let's Learn Computer Networking: Basics for Beginners

> Yes! currently I am working as a Tech Support Representative at Subisu. So boys if you have developed a crush on me by now, you can call Subisu with your ~~WIFE~~ WIFI problems 🤪. But first let me teach you !!

![This is me](/images/blog/subisu/final_boss.jpg)

## What is Computer Networking?

Computer networking is how computers connect and communicate with each other. Think of it like a postal system, but for digital information instead of letters.

## The OSI Model: A Framework for Understanding Networks

The OSI (Open Systems Interconnection) model helps us understand how networks work by breaking them into 7 layers. Each layer has a specific job.

| Layer | Name | What it Does | Example |
|-------|------|--------------|---------|
| 7 | Application | What users interact with | Web browsers, email |
| 6 | Presentation | Data formatting and encryption | JPEG, MP4, encryption |
| 5 | Session | Manages connections between computers | Starting/ending connections |
| 4 | Transport | Ensures data arrives correctly | TCP, UDP protocols |
| 3 | Network | Routes data across networks | IP addresses, routers |
| 2 | Data Link | Connects devices on the same network | MAC addresses, switches |
| 1 | Physical | Physical cables and hardware | Ethernet cables, fiber optics |

Think of it like sending a letter:
1. **Physical**: The roads and vehicles that carry mail
2. **Data Link**: The local postal workers
3. **Network**: The postal system deciding which route to take
4. **Transport**: Making sure your letter arrives complete
5. **Session**: Starting and ending your letter writing
6. **Presentation**: The language and format of your letter
7. **Application**: You writing and reading letters

## Network Devices: What They Do

### Switches: Traffic Directors for Local Networks

> A switch is like a smart traffic controller for your local network.

Switches connect devices within the same network (like devices in your home or office).

| What Switches Do | How They Work |
|------------------|---------------|
| Connect local devices | Create a local network |
| Forward data to the right device | Use MAC addresses (physical device IDs) |
| Operate at Layer 2 (Data Link) | Don't understand IP addresses |
| Create separate collision domains | Allow multiple conversations at once |

### Routers: Gateways Between Networks

> A router is like a postal sorting facility that connects different neighborhoods.

Routers connect different networks together (like connecting your home to the internet).

| What Routers Do | How They Work |
|-----------------|---------------|
| Connect different networks | Like your home network to the internet |
| Find the best path for data | Use routing tables and protocols |
| Operate at Layer 3 (Network) | Understand IP addresses |
| Provide firewall protection | Can filter traffic |
| Assign IP addresses (DHCP) | Give devices their network identity |

## How GPON Works: Getting Internet to Your Home

GPON (Gigabit Passive Optical Network) is a technology used by ISPs like Subisu to deliver high-speed internet to homes using fiber optic cables.

### The GPON Journey: From ISP to Your Device

```
ISP Core Network → OLT → Splitter → ONT/ONU → Your Router → Your Devices
```

Let's break this down:

| Component | What It Is | What It Does |
|-----------|------------|--------------|
| OLT (Optical Line Terminal) | Equipment at ISP | Sends/receives data to/from customers |
| Splitter | Passive device | Splits one fiber signal to multiple customers |
| ONT/ONU (Optical Network Terminal) | Box at your home | Converts fiber optic signals to electrical |
| Router | Your home device | Creates your home network |

### Why GPON is Special

1. **High Speed**: Can deliver up to 2.5 Gbps downstream
2. **Long Distance**: Can reach up to 20km from the central office
3. **Efficient**: One fiber can serve multiple customers (typically 32 or 64)
4. **Passive Network**: The splitters don't need power, making the network more reliable

## How Internet is Delivered to Your Home: Step by Step

1. **ISP Connection**: Subisu connects to the global internet through large connections called "backbones"
2. **Core Network**: Data travels through Subisu's core network
3. **OLT**: The OLT sends data through fiber optic cables
4. **Splitting**: A passive splitter divides the signal to multiple homes
5. **ONT/ONU**: The box at your home converts the light signals to electrical
6. **Your Router**: Creates your home network and connects your devices
7. **Your Devices**: Finally connect to your router via WiFi or cables

## Common Networking Problems and Solutions

| Problem | Possible Causes | Solutions |
|---------|----------------|-----------|
| No internet connection | Physical disconnection, ONT issues | Check cables, restart ONT and router |
| Slow internet | Congestion, WiFi interference | Try wired connection, change WiFi channel |
| Intermittent connection | Loose cables, signal issues | Secure connections, check signal strength |
| Limited connectivity | IP address conflicts | Restart router, release/renew IP |

## Networking Terms Simplified

| Term | Simple Explanation |
|------|-------------------|
| IP Address | Your device's network "home address" |
| MAC Address | Your device's permanent physical ID |
| DNS | The "phone book" that converts website names to IP addresses |
| Bandwidth | How much data can flow at once |
| Latency | How long it takes data to travel (ping) |
| DHCP | Service that automatically assigns IP addresses |
| Subnet | A smaller section of a larger network |

## Conclusion

Understanding networking basics helps you troubleshoot problems and appreciate how the internet works. From the OSI model to GPON technology, these concepts explain how data travels from websites around the world to your device at home.

Next time your internet has problems, you'll have a better idea of what might be happening behind the scenes!

> "The internet is not just a technology; it's a complex network of networks working together seamlessly." - Unknown
