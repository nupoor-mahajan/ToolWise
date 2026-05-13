# ToolWise AI

**ToolWise AI** is a static AI tool directory and task-based recommender that helps users quickly choose useful AI tools for studying, coding, research, design, presentations, content creation, resumes, and project planning.

Instead of only listing tools, ToolWise AI helps users answer:

> “I want to do this task. Which AI tool should I use?”

The project is built as a lightweight client-side website using HTML, CSS, and Vanilla JavaScript. It runs directly from `index.html` and is ready to deploy on GitHub Pages.

---

## Live Demo

```txt
https://nupoor-mahajan.github.io/ToolWise/
```

---

## Repository

```txt
https://github.com/nupoor-mahajan/ToolWise
```

---

## Features

- Task-based AI tool recommendations
- Suggested prompts for different tasks
- Large searchable AI tools directory
- Category, pricing, and difficulty filters
- Save useful tools using LocalStorage
- Compare two AI tools side by side
- Prompt library with copy-to-clipboard feature
- Best AI stacks for students, developers, designers, creators, and hackathon builders
- Light/dark theme toggle using LocalStorage
- Responsive decorative SaaS-style UI
- No login, backend, database, or API required

---

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- LocalStorage
- GitHub Pages

This project does **not** require React, npm, backend, database, or external APIs.

---

## Project Structure

```txt
ToolWise/
├── assets/
│   └── logo.png
│
├── data/
│   ├── tools-data.js        # AI tools dataset
│   └── content-data.js      # prompts, tasks, and AI stacks
│
├── features.md             # detailed feature list
├── index.html              # main website structure
├── README.md               # project documentation
├── script.js               # website interaction logic
├── style.css               # complete styling and responsiveness
└── system.md               # compact project specification
```

---

## Main Sections

### 1. Hero Section

A decorative landing section with the main project message, call-to-action buttons, and floating category chips.

### 2. Task Finder

Users can select a task such as creating a PPT, researching a topic, writing code, debugging, designing UI, preparing for exams, making a resume, or planning a project.

The website then recommends suitable AI tools and provides a useful prompt for that task.

### 3. AI Tools Directory

A searchable and filterable directory of AI tools. Each tool card includes:

- Tool name
- Category
- Description
- Best use case
- Pricing label
- Difficulty level
- Tags
- Visit button
- Save button

### 4. Saved Tools

Users can save useful tools for later. Saved tools are stored using LocalStorage, so they remain available after refreshing the page.

### 5. Compare Tools

Users can select two AI tools and compare them based on category, pricing, difficulty, strengths, limitations, and best use cases.

### 6. Prompt Library

A collection of ready-to-use prompts for study, coding, research, design, presentations, resumes, debugging, and project planning.

### 7. Best AI Stacks

Suggested combinations of AI tools for different users, such as students, developers, designers, content creators, and hackathon builders.

---

## How to Run Locally

1. Clone the repository:

```bash
git clone https://github.com/nupoor-mahajan/ToolWise.git
```

2. Open the project folder:

```bash
cd ToolWise
```

3. Open `index.html` directly in your browser.

No installation is needed.

---

## GitHub Pages Deployment

1. Push the project to GitHub.

2. Open the repository on GitHub.

3. Go to:

```txt
Settings → Pages
```

4. Under **Build and deployment**, choose:

```txt
Source: Deploy from a branch
Branch: main
Folder: /root
```

5. Click **Save**.

The deployed website will be available at:

```txt
https://nupoor-mahajan.github.io/ToolWise/
```

---

## Data Management

The project keeps data and logic separate for better maintainability.

### AI Tools

Add or edit tools in:

```txt
data/tools-data.js
```

Each tool object contains details such as name, category, description, best use case, pricing, difficulty, tags, strengths, limitations, user type, and URL.

### Prompts, Tasks, and Stacks

Add or edit prompts, task recommendations, and AI stacks in:

```txt
data/content-data.js
```

### Website Logic

Main interactivity is handled in:

```txt
script.js
```

This includes search, filters, saved tools, comparison, prompt copy, task recommendations, mobile menu, and theme toggle.

---

## Future Improvements

- Add more AI tools
- Add tool ratings
- Add tool detail modal
- Add advanced filters
- Add free-tools-only section
- Add recently viewed tools
- Add export saved tools feature
- Add prompt bookmarking
- Add more AI stacks for specific professions
- Add screenshots and demo video

---

## Author

Made by **Nupoor Mahajan**

```txt
GitHub: https://github.com/nupoor-mahajan
Portfolio: https://nupoor-mahajan-portfolio.vercel.app/
Live Project: https://nupoor-mahajan.github.io/ToolWise/
```

---

## License

This project is open-source and free to use for learning, portfolio, and personal projects.
