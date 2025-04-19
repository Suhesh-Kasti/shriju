---
title: "Setting Up a Site Using Hugo"
date: 2023-10-22T14:45:00+05:30
draft: false
tilDate: "2023-10-22"
categories: ["2023", "October"]
tags: ["hugo", "web-development", "static-site-generators"]
---

Today I learned how to set up a website using Hugo, a powerful static site generator. The process was surprisingly straightforward and much faster than I expected.

## Installation

First, I installed Hugo on my system:

```bash
# On Windows using Chocolatey
choco install hugo -confirm

# Verify installation
hugo version
```

## Creating a New Site

Creating a new Hugo site is as simple as:

```bash
hugo new site mywebsite
cd mywebsite
```

This creates a new directory with the basic structure for a Hugo site.

## Adding a Theme

Hugo sites need a theme. I added one using Git submodules:

```bash
git init
git submodule add https://github.com/theNewDynamic/gohugo-theme-ananke themes/ananke
```

Then I specified the theme in my `config.toml` file:

```toml
theme = "ananke"
```

## Creating Content

Adding content is straightforward:

```bash
hugo new posts/my-first-post.md
```

This creates a new Markdown file with front matter already set up:

```markdown
---
title: "My First Post"
date: 2023-10-22T14:45:00+05:30
draft: true
---

Content goes here...
```

## Running the Development Server

To see the site locally:

```bash
hugo server -D
```

The `-D` flag includes draft content. The site is then available at `http://localhost:1313/`.

## Building the Site

When ready to deploy, build the site with:

```bash
hugo
```

This generates the static site in the `public` directory, ready to be deployed to any web server.

## What I Learned

1. Hugo is incredibly fast compared to other static site generators I've used
2. The template system is powerful but has a learning curve
3. Content organization with sections and taxonomies is very flexible
4. The live reload feature during development is a huge time-saver
5. Hugo's image processing capabilities eliminate the need for separate image optimization tools

I'm impressed with how quickly I was able to get a site up and running. Next, I'll be diving deeper into customizing themes and creating more complex content structures.
