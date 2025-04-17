---
title: "CSS Grid Layout Simplified"
date: 2023-04-20T14:45:00+05:30
draft: false
tilDate: "2023-04-20"
categories: ["2023", "April"]
tags: ["css", "web-development", "layout"]
---

Today I learned how to create complex layouts easily using CSS Grid.

## Basic Grid Setup

Setting up a basic grid is surprisingly simple:

```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}
```

This creates a 3-column grid with equal width columns and 20px gaps.

## Grid Areas

You can name grid areas and place elements in them:

```css
.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar content content"
    "footer footer footer";
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 200px 1fr 1fr;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.footer { grid-area: footer; }
```

This creates a layout with a header, sidebar, content area, and footer.

## Responsive Grids

You can easily make grids responsive using media queries:

```css
@media (max-width: 768px) {
  .container {
    grid-template-areas:
      "header"
      "content"
      "sidebar"
      "footer";
    grid-template-columns: 1fr;
  }
}
```

CSS Grid makes complex layouts much easier than using floats or flexbox alone!
