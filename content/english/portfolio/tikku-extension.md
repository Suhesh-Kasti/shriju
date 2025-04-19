---
title: "Tikku Browser Extension"
date: 2023-08-05T11:45:00+06:00
image: "images/portfolio/item-5.png"
client: "Internal Project"
project_url: ""
categories: ["web development", "programming"]
description: "A browser extension for automated ticket writing"
draft: false
---

#### Project Overview

Tikku is a browser extension developed to automate the repetitive process of writing support tickets. Working in technical support often involves writing similar ticket remarks multiple times per day. This extension streamlines the process by generating standardized ticket text based on user inputs.

#### Problem Statement

As a technical support representative, I noticed that:
- Support agents spent significant time writing similar ticket remarks
- There was inconsistency in how different agents formatted tickets
- The repetitive nature of ticket writing led to errors and omissions
- Time spent on documentation could be better used helping customers

#### Technical Implementation

| Component | Technology |
|-----------|------------|
| Frontend | HTML, CSS, JavaScript |
| Form Handling | JavaScript |
| Template System | JavaScript (Template Literals) |
| Browser Integration | Chrome Extension API |
| Storage | Chrome Storage API |
| DOM Manipulation | JavaScript |

#### Key Features

1. **Template System**: Pre-defined templates for common ticket types
2. **Custom Fields**: Form inputs for variable information (customer name, issue details, etc.)
3. **Auto-Fill**: Automatically fills ticket fields in the support system
4. **Template Management**: Ability to add, edit, and delete templates
5. **Keyboard Shortcuts**: Quick access to frequently used templates
6. **History**: Saves recent tickets for reference
7. **Export/Import**: Backup and restore functionality for templates

#### Development Process

The development followed these steps:

1. **Requirements Gathering**: Interviewed support agents to understand their needs
2. **Prototyping**: Created a basic version to test the concept
3. **Iterative Development**: Built features incrementally with regular testing
4. **User Testing**: Had support team members test the extension and provide feedback
5. **Refinement**: Improved the UI and added features based on feedback
6. **Deployment**: Published internally for the support team
7. **Maintenance**: Ongoing updates based on user suggestions

#### Results

The Tikku extension has significantly improved the support team's efficiency:

- Reduced average ticket writing time by 75%
- Improved consistency in ticket documentation
- Decreased errors in ticket information
- Increased customer satisfaction due to faster response times
- Reduced training time for new support agents

#### Code Example

Here's a simplified example of how the template system works:

```javascript
function generateTicketText(template, data) {
  return template.replace(/\${(\w+)}/g, (match, key) => {
    return data[key] || match;
  });
}

const template = "Customer ${name} reported ${issue}. Troubleshooting steps: ${steps}. Resolution: ${resolution}.";
const data = {
  name: "John Smith",
  issue: "internet connectivity problems",
  steps: "checked router, verified line status, tested on multiple devices",
  resolution: "reset router configuration and updated firmware"
};

const ticketText = generateTicketText(template, data);
```

> "Tikku has been a game-changer for our support team. What used to take minutes now takes seconds, and the quality and consistency of our ticket documentation has improved dramatically." — Support Team Lead
