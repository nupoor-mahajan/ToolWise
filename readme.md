# ToolWise AI

ToolWise AI is a static AI tool directory and task-based recommender that helps users choose useful AI tools for study, coding, research, design, presentations, content creation, resumes, and project planning.

It is built as a lightweight client-side website that runs directly from `index.html` and is ready for GitHub Pages.

## Features

- Task-based AI recommendations with suggested prompts
- Large searchable AI tools directory
- Category, pricing, and difficulty filters
- Saved tools using LocalStorage
- Compare two tools side by side
- Prompt library with copy-to-clipboard
- Best AI stacks for different user types
- Light/dark theme toggle using LocalStorage
- Responsive decorative SaaS-style UI

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- LocalStorage

No React, npm, backend, database, or external API is required.

## Project Structure

```txt
ToolWise/
├── assets/
│   └── logo.png
├── data/
│   ├── tools-data.js      # AI tools dataset
│   └── content-data.js    # prompts, tasks, AI stacks
├── features.md
├── index.html
├── readme.md
├── script.js              # app logic only
├── style.css
└── system.md
```

## How to Run Locally

Open `index.html` directly in your browser.

No installation is needed.

## GitHub Pages Deployment

1. Push the project to GitHub.
2. Go to repository `Settings`.
3. Open `Pages`.
4. Choose `Deploy from branch`.
5. Select `main` and `/root`.
6. Save.

Your site will be available at:

```txt
https://your-username.github.io/repository-name/
```

## Notes

The JavaScript is split for better maintainability:

- Add/edit AI tools in `data/tools-data.js`.
- Add/edit prompts and task recommendations in `data/content-data.js`.
- Keep interaction logic in `script.js`.

## Author

Made by Nupoor Mahajan.
