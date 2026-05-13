# ToolWise AI — Compact System Spec

## Project Overview

ToolWise AI is a static mini website that works as an AI tools directory and task-based recommender. It helps users answer:

> Which AI tool should I use for this task?

## Tech Stack

Use only:

- HTML
- CSS
- Vanilla JavaScript
- LocalStorage

Do not use React, npm, backend, database, or external APIs.

## Required Sections

1. Sticky navbar with logo, links, mobile menu, and theme toggle
2. Decorative hero section with CTA buttons
3. Task finder with recommended tools and prompt output
4. Tool directory with search and filters
5. Saved tools section using LocalStorage
6. Compare tools section
7. Prompt library with copy button
8. Best AI stacks section
9. Footer with author details

## JavaScript Structure

The JavaScript is split into three files:

```txt
data/tools-data.js      -> AI tools dataset only
data/content-data.js    -> prompts, task recommendations, AI stacks
script.js               -> app logic only
```

Script loading order in `index.html` must be:

```html
<script src="data/tools-data.js"></script>
<script src="data/content-data.js"></script>
<script src="script.js"></script>
```

## Required JS Features

- Render tool cards dynamically
- Search tools by name, category, description, tags, best use case, strength, and limitation
- Filter by category, pricing, and difficulty
- Show task-based recommendations
- Save/remove tools using LocalStorage
- Compare two tools in a table
- Render prompt cards and copy prompts
- Toggle light/dark theme using LocalStorage
- Show toast messages
- Support mobile navbar toggle

## Design Rules

The UI should feel:

- Clean
- Decorative
- Modern
- SaaS-like
- Student-friendly
- Portfolio-worthy

Avoid robots, stock photos, heavy neon, clutter, tiny text, and broken layouts.

## File Structure

```txt
ToolWise/
├── assets/
├── data/
│   ├── tools-data.js
│   └── content-data.js
├── index.html
├── style.css
├── script.js
├── readme.md
├── features.md
└── system.md
```

## Acceptance Criteria

- Website runs by opening `index.html`
- No console errors
- Search works
- Filters work
- Task finder works
- Saved tools persist after refresh
- Compare table works
- Prompt copy works
- Theme toggle persists after refresh
- Layout is responsive on desktop, tablet, and mobile
- Project is deployable on GitHub Pages
