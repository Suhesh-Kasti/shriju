---
title: "Tikku: The Browser Extension That Simplified Our Tech Support Workflow"
date: 2023-09-05T13:45:00+05:45
image: "images/blog/projects/tikku.jpg"
description: "How a simple browser extension called Tikku can transform the ticket writing process for tech support representatives at Subisu"
categories: ["Technology", "Productivity"]
tags: ["Browser Extension", "Automation", "Tech Support", "Productivity Tools"]
draft: false
---

# Tikku: The Browser Extension That Simplified Our Tech Support Workflow

> Working in tech support often means writing the same ticket remarks over and over again. With the help of [Mr. Suhesh](https://suhesh.com.np/), I created a browser extension called "Tikku" that automated this boring process and made our lives much easier.

## The Problem: Repetitive Ticket Writing

As a tech support representative at Subisu (an ISP in Nepal), I spent a lot of time writing ticket remarks. Every day, I would:

1. Take calls from customers with internet problems
2. Troubleshoot their issues
3. Write detailed ticket remarks about what happened
4. Repeat this process dozens of times per day

The problem? Most tickets followed the same patterns. I found myself typing the same phrases over and over:

* "Customer reported slow internet speed"
* "Performed basic troubleshooting steps"
* "Advised customer to restart their router"
* "Scheduled a technician visit"

This repetitive typing was:
- **Time-consuming**: Each ticket took 3-5 minutes to write
- **Boring**: The same phrases, day after day
- **Error-prone**: Typos and missing information were common when rushing

## The Solution: Tikku Browser Extension

That's when I had the idea to create a browser extension that could automate this process. With help from [Mr. Suhesh](https://suhesh.com.np/), we built "Tikku" - a simple but powerful tool that transformed our workflow.

### What Tikku Does

Tikku is a browser extension that:

1. Provides a simple form with fields for the important ticket information
2. Generates complete, properly formatted ticket remarks based on your inputs
3. Automatically fills in the ticket system with the generated text
4. Works on both Chrome and Firefox browsers

| Before Tikku | After Tikku |
|-------------|------------|
| 3-5 minutes per ticket | 30-60 seconds per ticket |
| Manual typing of repetitive text | Quick form filling |
| Inconsistent formatting | Standardized format every time |
| Frequent typos and errors | Clean, professional remarks |

## How Tikku Works

Using Tikku is incredibly simple:

1. Click the Tikku extension icon in your browser
2. Fill in the required information (customer name, issue, solution, etc.)
3. Click the button that matches the type of ticket you're creating
4. The extension automatically generates the remarks and fills them in the ticket system

Behind the scenes, Tikku uses templates for different types of tickets. When you click a button, it takes your form inputs, inserts them into the appropriate template, and then uses browser automation to fill in the ticket system.

## The Development Process

Creating Tikku was a learning experience. Neither of us were professional web developers, but we knew enough to make something useful.

### The Basic Structure

The extension has three main components:

1. **HTML form**: The user interface where support reps enter ticket information
2. **JavaScript logic**: Processes the form data and generates the ticket remarks
3. **Browser automation**: Inserts the generated text into the ticket system

### Making It Work for Everyone

We needed Tikku to work for all tech support representatives, so we made it:

- **Easy to install**: Simple installation process for both Chrome and Firefox
- **Customizable**: Support reps can modify templates to match their writing style
- **Lightweight**: Doesn't slow down the browser or ticket system

## The Impact of Tikku

The results were immediate and impressive:

- **Time saved**: Each rep saved about 1-2 hours per day
- **Consistency**: All tickets followed the same professional format
- **Reduced errors**: Fewer typos and missing information
- **Happier reps**: Less time on boring tasks meant more time helping customers

One colleague told me: "This little extension has changed my workday completely. What used to be the most tedious part of my job now takes just seconds."

## Technical Details for the Curious

If you're interested in how Tikku works technically, here's a simplified explanation:

### For Firefox-based Browsers:

1. The extension uses a background script to monitor when you're on the ticket page
2. When you fill the form and click a button, it generates the appropriate text
3. It then uses content scripts to insert the text into the right field on the page

### For Chrome-based Browsers:

The process is similar, but with some differences in how the extension accesses the page elements due to Chrome's security model.

### Customization Options

The best part about Tikku is how easy it is to customize:

- **Changing templates**: Open budhijivi.js in a text editor and modify the templates at the bottom
- **Modifying buttons**: Edit the HTML file to change button labels and the JavaScript file to change their functions
- **Adding new fields**: Add new form elements in HTML and update the JavaScript to include them in templates

## Lessons Learned

Building Tikku taught me several valuable lessons:

1. **Simple automation can have a huge impact**: You don't need complex AI or machine learning to save time
2. **Browser extensions are powerful tools**: They can interact with and modify web pages in useful ways
3. **Sharing your work multiplies its value**: What helped me also helped dozens of other support reps

## Known Issues and Workarounds

No software is perfect, and Tikku has a couple of quirks:

| Issue | Workaround |
|-------|------------|
| Service worker doesn't activate immediately | Invoke the extension, then reload the page |
| Line breaks don't transfer properly | Manually press Enter at each line break |

## Try It Yourself

While Tikku was designed specifically for Subisu's ticket system, the concept can be applied to any repetitive writing task. The code is available to fork and modify for your own needs.

## Conclusion

Tikku shows that you don't need to be a professional developer to create tools that make a real difference in your work. By identifying a repetitive task and finding a way to automate it, we saved countless hours of boring work.

The next time you find yourself doing the same task over and over, ask yourself: "Could I automate this?" The answer might be simpler than you think!

> "The best code is the code you don't have to write." - This applies to ticket remarks too!
