# ToolWise AI — Features Document

## Overview

ToolWise AI is a mini AI tool directory and task-based recommender website.

The purpose of this website is not only to list AI tools, but to help users decide which AI tool they should use for a specific task.

The website should feel like a small useful product for students, developers, designers, creators, and hackathon builders.

---

## Core Feature List

### 1. AI Tool Directory

The website should display a collection of AI tools as cards.

Each tool card should include:

- Tool name
- Category
- Short description
- Best use case
- Pricing label
- Difficulty level
- Tags
- Visit button
- Save button

Example tools:

- ChatGPT
- Claude
- Gemini
- Perplexity
- Canva
- Gamma
- GitHub Copilot
- Cursor
- Notion AI
- Grammarly
- QuillBot
- DeepL
- Figma AI
- Runway
- ElevenLabs
- Midjourney
- DALL·E
- Tome
- Beautiful.ai
- Replit AI

---

### 2. Search Functionality

Users should be able to search for AI tools using a search bar.

The search should match:

- Tool name
- Category
- Description
- Tags
- Best use case

Example:

If the user searches for:

```txt
coding
```

The website can show tools like:

- ChatGPT
- GitHub Copilot
- Cursor
- Replit AI
- Claude

If the user searches for:

```txt
ppt
```

The website can show tools like:

- Gamma
- Canva
- Tome
- Beautiful.ai
- ChatGPT

---

### 3. Category Filters

Users should be able to filter tools by category.

Suggested categories:

- All
- Writing
- Coding
- Research
- Design
- Presentation
- Productivity
- Image
- Video
- Study
- Resume
- Marketing

The active filter should be clearly highlighted.

---

### 4. Pricing Filter

Users should be able to filter tools by pricing type.

Pricing options:

- All
- Free
- Freemium
- Paid

Do not include exact pricing numbers because pricing may change.

Use simple labels only.

---

### 5. Difficulty Filter

Users should be able to filter tools by difficulty.

Difficulty options:

- All
- Beginner
- Intermediate
- Advanced

This helps users quickly find beginner-friendly tools.

---

### 6. Task-Based Tool Finder

This is the main useful feature of the website.

The user should select what they want to do, and the website should recommend suitable AI tools.

Tasks to include:

- Create PPT
- Research topic
- Write code
- Debug code
- Design UI
- Generate images
- Summarize PDF
- Prepare for exams
- Make resume
- Plan project
- Create social media content
- Improve writing

For each task, show:

- Recommended tools
- Short reason
- Suggested prompt

Example:

Task:

```txt
Create PPT
```

Recommended tools:

- ChatGPT — for slide content and structure
- Gamma — for quick deck generation
- Canva — for final visual design

Suggested prompt:

```txt
Create a 10-slide presentation on [topic]. Include slide titles, key points, examples, conclusion, and speaker notes.
```

---

### 7. Recommendation Output Cards

When the user selects a task, display the recommendations in clean cards.

Each recommendation card should show:

- Tool name
- Why it is useful
- Best use case
- Related prompt
- Button to view the tool in the directory

The recommendation should feel practical and easy to understand.

---

### 8. Prompt Library

The website should include a prompt library with ready-to-use AI prompts.

Prompt categories:

- Study
- Coding
- PPT
- Resume
- Research
- Design
- Debugging
- Project Planning
- Content Creation

Each prompt card should include:

- Prompt title
- Category
- Prompt text
- Copy button

Example prompt:

```txt
Act as a senior developer. Review this code, find bugs, explain the issue in simple language, and provide the corrected version.
```

---

### 9. Copy Prompt Button

Each prompt card should have a copy button.

When clicked:

- The prompt text should be copied to clipboard.
- A short success message should appear.

Success message:

```txt
Prompt copied!
```

This message can disappear after a few seconds.

---

### 10. Saved Tools

Users should be able to save tools they want to try later.

Each tool card should have a save button.

When clicked:

- The tool should be added to the saved tools list.
- The saved data should be stored in LocalStorage.
- The button state should change to show that the tool is already saved.

Example button states:

```txt
Save
Saved
```

---

### 11. Saved Tools Section

The website should have a separate Saved Tools section.

This section should show all tools saved by the user.

Users should be able to remove a saved tool.

If no tools are saved, show an empty state message:

```txt
No saved tools yet. Save useful tools to access them quickly later.
```

Saved tools should remain available after the page is refreshed.

---

### 12. Compare Tools

Users should be able to compare two AI tools side by side.

Use two dropdowns:

- Select first tool
- Select second tool

After selection, show a comparison table.

Compare these fields:

- Category
- Best for
- Pricing
- Difficulty
- Strength
- Limitation
- User type

If the user selects the same tool in both dropdowns, show a message:

```txt
Please choose two different tools to compare.
```

---

### 13. Best AI Stacks

The website should suggest tool combinations for different user types.

Sections to include:

#### For Students

Suggested tools:

- ChatGPT
- Perplexity
- Canva
- Grammarly
- Notion AI

Purpose:

Help with notes, assignments, research, presentations, and writing.

#### For Developers

Suggested tools:

- ChatGPT
- Claude
- GitHub Copilot
- Cursor
- Perplexity

Purpose:

Help with debugging, code generation, architecture, documentation, and technical research.

#### For Designers

Suggested tools:

- Canva
- Figma AI
- Midjourney
- DALL·E
- ChatGPT

Purpose:

Help with UI ideas, branding, image generation, and UX writing.

#### For Content Creators

Suggested tools:

- ChatGPT
- Canva
- Runway
- ElevenLabs
- Grammarly

Purpose:

Help with scripts, captions, videos, thumbnails, voice, and editing.

#### For Hackathon Builders

Suggested tools:

- Perplexity
- ChatGPT
- Claude
- Gamma
- GitHub Copilot

Purpose:

Help with research, product planning, pitch decks, documentation, and faster coding.

---

### 14. Theme Toggle

The website should include a light/dark mode toggle.

Requirements:

- User can switch between light and dark mode.
- Theme preference should be stored in LocalStorage.
- The selected theme should remain after refresh.

Suggested button labels:

```txt
Light
Dark
```

or icon-based toggle.

---

### 15. Responsive Design

The website should work properly on:

- Desktop
- Tablet
- Mobile

Responsive behavior:

- Cards should become one column on mobile.
- Navbar should not overflow.
- Buttons should wrap neatly.
- Tables should be scrollable on small screens.
- Text should remain readable.

---

### 16. Smooth Navigation

Navbar links should scroll to the correct page sections.

Suggested navbar links:

- Home
- Finder
- Tools
- Prompts
- Compare
- Stacks

Use section IDs for smooth scrolling.

Example:

```html
<section id="tools">
```

---

### 17. Empty States

The website should show helpful empty states.

Examples:

If no search results are found:

```txt
No tools found. Try a different keyword or filter.
```

If no saved tools exist:

```txt
No saved tools yet. Save useful tools to access them quickly later.
```

If no task is selected:

```txt
Select a task to get AI tool recommendations.
```

---

### 18. Tool Visit Buttons

Each tool card should have a Visit button.

The Visit button should open the tool website in a new tab.

Use:

```html
target="_blank"
rel="noopener noreferrer"
```

This keeps the website safe and user-friendly.

---

### 19. Data Stored in JavaScript

All website data should be stored in `script.js`.

Data should include:

- Tools array
- Task recommendation object
- Prompt array
- AI stacks array

Do not use a backend or database.

---

## Data Requirements

### Tool Object

Each tool should follow this structure:

```js
{
  id: "chatgpt",
  name: "ChatGPT",
  category: "Productivity",
  description: "A multipurpose AI assistant for writing, coding, studying, brainstorming, and planning.",
  bestFor: "General AI help, study support, coding explanations, and content generation.",
  pricing: "Freemium",
  difficulty: "Beginner",
  tags: ["writing", "coding", "study", "brainstorming"],
  strength: "Flexible and useful for many different tasks.",
  limitation: "Works best when the user gives clear instructions.",
  userType: "Students, developers, creators, and professionals.",
  url: "https://chat.openai.com"
}
```

---

### Task Recommendation Object

Each task should follow this structure:

```js
{
  id: "ppt",
  label: "Create PPT",
  tools: ["chatgpt", "gamma", "canva"],
  reason: "Use ChatGPT for content, Gamma for quick deck generation, and Canva for final design polish.",
  prompt: "Create a 10-slide presentation on [topic]. Include slide titles, key points, examples, conclusion, and speaker notes."
}
```

---

### Prompt Object

Each prompt should follow this structure:

```js
{
  id: "coding-review",
  title: "Code Review Helper",
  category: "Coding",
  text: "Act as a senior developer. Review this code, find bugs, explain the issue in simple language, and provide the corrected version."
}
```

---

### Stack Object

Each stack should follow this structure:

```js
{
  id: "students",
  title: "For Students",
  tools: ["ChatGPT", "Perplexity", "Canva", "Grammarly", "Notion AI"],
  description: "Useful for studying, research, assignments, presentations, and notes."
}
```

---

## MVP Features

These features are compulsory for the first version:

- Tool cards
- Search bar
- Category filter
- Pricing filter
- Difficulty filter
- Task-based recommender
- Prompt library
- Copy prompt button
- Save tools using LocalStorage
- Compare tools
- Theme toggle
- Responsive layout

---

## Optional Future Features

These can be added later:

- Tool ratings
- User reviews
- Tool alternatives
- Export saved tools
- Free-tools-only page
- AI tool quiz
- Tool detail modal
- Recently viewed tools
- More prompt categories
- Advanced comparison scoring
- Screenshots
- Demo video
- Share saved tools list
- Bookmark prompt feature

---

## User Experience Rules

The website should be easy to use.

A user should be able to:

1. Understand the purpose of the site within 5 seconds.
2. Search for tools quickly.
3. Filter tools without confusion.
4. Select a task and get recommendations.
5. Copy useful prompts easily.
6. Save tools for later.
7. Compare two tools clearly.
8. Use the website comfortably on mobile.

---

## Content Rules

Use simple and helpful language.

Avoid generic buzzwords like:

- Revolutionize
- Unlock potential
- Cutting-edge
- AI-powered ecosystem
- Seamless innovation
- Next-generation solution

Use practical language like:

- Good for quick research
- Useful for coding help
- Helps create presentations
- Better for visual design
- Save this tool for later

---

## Design Rules

The design should feel:

- Clean
- Modern
- Minimal
- Useful
- Student-friendly
- Portfolio-worthy

Avoid:

- Too much glow
- Too many gradients
- Random stock photos
- Tiny text
- Cluttered cards
- Overloaded animations
- Broken layouts

---

## Acceptance Criteria

The features are complete only when:

- Search works correctly.
- Filters work correctly.
- Task recommendations display correctly.
- Prompt copy button works.
- Saved tools work after refresh.
- Tools can be removed from saved tools.
- Compare section works.
- Theme toggle works after refresh.
- Website is responsive.
- No buttons are broken.
- No console errors appear.
- Website can be deployed on GitHub Pages.