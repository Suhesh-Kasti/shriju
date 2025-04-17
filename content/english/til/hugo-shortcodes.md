---
title: "Hugo Shortcodes Make Life Easier"
date: 2023-04-15T10:30:00+05:30
draft: false
tilDate: "2023-04-15"
categories: ["2023", "April"]
tags: ["hugo", "web-development", "shortcodes"]
---

Today I learned how powerful Hugo shortcodes can be. They allow you to create reusable components in your markdown content.

## What are Shortcodes?

Shortcodes are simple snippets inside your content files that Hugo will render using predefined templates.

## Example

```go
{{</* youtube w7Ft2ymGmfc */>}}
```

This will embed a responsive YouTube video player.

## Custom Shortcodes

You can also create your own shortcodes by adding HTML templates to your site's `/layouts/shortcodes/` directory.

```html
<!-- layouts/shortcodes/note.html -->
<div class="note">
  {{ .Inner }}
</div>
```

Then use it in your markdown:

```markdown
{{</* note */>}}
This is a note!
{{</* /note */>}}
```

This makes content creation much more efficient and consistent!
