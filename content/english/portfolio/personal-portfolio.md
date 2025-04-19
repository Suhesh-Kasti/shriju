---
title: "Personal Portfolio Website"
date: 2023-10-05T10:00:00+06:00
image: "images/portfolio/portfolio.png"
client: "Personal Project"
project_url: ""
categories: ["hugo", "web development"]
description: "A responsive portfolio website built with Hugo"
draft: false
---

#### Project Overview

This personal portfolio website was designed and developed to showcase my work, skills, and professional experience in a visually appealing and user-friendly manner. The site serves as both a digital resume and a demonstration of my web development capabilities.

#### Project Goals

- Create a responsive, modern portfolio website
- Showcase projects in an organized, visually appealing way
- Implement a blog section for sharing insights and experiences
- Ensure fast loading times and optimal performance
- Make the site easily maintainable and updatable
- Demonstrate technical skills through the implementation itself

#### Technical Implementation

| Component | Technology |
|-----------|------------|
| Static Site Generator | Hugo |
| Frontend | HTML5, CSS3, JavaScript |
| CSS Framework | Bootstrap 5 |
| Version Control | Git |
| Deployment | Netlify |
| Forms | Netlify Forms |
| Analytics | Google Analytics |
| SEO | Custom meta tags, structured data |

#### Key Features

1. **Responsive Design**: The site is fully responsive and works seamlessly on devices of all sizes
2. **Dark/Light Mode**: Users can toggle between dark and light themes
3. **Portfolio Gallery**: A filterable gallery showcasing various projects
4. **Blog Section**: A blog with categories and tags for organizing content
5. **Contact Form**: An integrated contact form for visitor inquiries
6. **Performance Optimization**: Lazy loading images, minified assets, and optimized resource loading
7. **Accessibility**: WCAG 2.1 AA compliant design and implementation
8. **Multilingual Support**: Content available in multiple languages

#### Development Process

The development followed these steps:

1. **Planning**: Defined site structure, content requirements, and design goals
2. **Design**: Created wireframes and mockups in Figma
3. **Theme Development**: Built a custom Hugo theme with modular components
4. **Content Creation**: Wrote and formatted content for all sections
5. **Testing**: Performed cross-browser and device testing
6. **Optimization**: Improved performance, SEO, and accessibility
7. **Deployment**: Set up continuous deployment via Netlify
8. **Maintenance**: Established a workflow for regular updates

#### Performance Metrics

The website achieves excellent performance metrics:

- 95+ Google PageSpeed score on mobile and desktop
- < 1s First Contentful Paint
- < 2s Time to Interactive
- Optimized Core Web Vitals

#### Code Example

Here's a simplified example of a Hugo shortcode created for the project:

```html
<!-- layouts/shortcodes/project-card.html -->
{{ $title := .Get "title" }}
{{ $image := .Get "image" }}
{{ $categories := .Get "categories" | split "," }}
{{ $url := .Get "url" }}

<div class="project-card" data-categories="{{ range $i, $e := $categories }}{{ if $i }},{{ end }}{{ $e | urlize }}{{ end }}">
  <div class="project-image">
    <img src="{{ $image }}" alt="{{ $title }}" loading="lazy">
  </div>
  <div class="project-details">
    <h3>{{ $title }}</h3>
    <div class="project-categories">
      {{ range $categories }}
      <span class="category">{{ . }}</span>
      {{ end }}
    </div>
    <a href="{{ $url }}" class="btn btn-primary">View Project</a>
  </div>
</div>
```

#### Lessons Learned

This project provided valuable experience in:
- Working with static site generators
- Creating modular, maintainable code
- Optimizing website performance
- Implementing accessibility best practices
- Content strategy and organization

> "Building my own portfolio site with Hugo was both challenging and rewarding. It allowed me to apply best practices in web development while creating a platform that effectively showcases my work and skills."
