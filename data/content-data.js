// ToolWise AI - Content Dataset
// Prompts, task recommendations, and AI stacks.

const prompts = [
    {
        "title": "Explain like a beginner",
        "category": "Study",
        "text": "Explain [topic] like I am a beginner. Use a simple analogy, then give 5 exam-style questions with short answers."
    },
    {
        "title": "Create flashcards",
        "category": "Study",
        "text": "Create 15 question-answer flashcards from this content: [paste notes]. Keep answers short and exam-friendly."
    },
    {
        "title": "Scenario-based practice",
        "category": "Study",
        "text": "Create 5 scenario-based questions on [topic]. Avoid direct theory questions. Include short model answers."
    },
    {
        "title": "Code reviewer",
        "category": "Coding",
        "text": "Act as a senior developer. Review this code for bugs, security issues, performance problems, and clean-code improvements: [paste code]."
    },
    {
        "title": "Debug my error",
        "category": "Debugging",
        "text": "I am getting this error: [paste error]. Here is my code: [paste code]. Explain why it happens and give the corrected code."
    },
    {
        "title": "Build feature plan",
        "category": "Coding",
        "text": "Help me build [feature] using [tech stack]. Give folder structure, files to change, and complete implementation steps."
    },
    {
        "title": "Presentation generator",
        "category": "PPT",
        "text": "Create a 10-slide presentation on [topic]. Include slide title, key bullets, examples, conclusion, and speaker notes."
    },
    {
        "title": "Pitch deck outline",
        "category": "PPT",
        "text": "Create a startup pitch deck for [idea]. Include problem, solution, market, product, business model, traction, team, and ask."
    },
    {
        "title": "Resume bullet improver",
        "category": "Resume",
        "text": "Rewrite these resume bullets to sound professional, action-driven, and measurable: [paste bullets]."
    },
    {
        "title": "Internship message",
        "category": "Resume",
        "text": "Write a short professional message to apply for [role]. Mention my skills: [skills], projects: [projects], and availability: [availability]."
    },
    {
        "title": "Research summary",
        "category": "Research",
        "text": "Research [topic] and give me a structured summary with key points, use cases, limitations, and sources I should verify."
    },
    {
        "title": "Compare options",
        "category": "Research",
        "text": "Compare [option A] and [option B] in a table. Include use case, strengths, limitations, cost level, and recommendation."
    },
    {
        "title": "UI design brief",
        "category": "Design",
        "text": "Create a UI/UX design brief for [app idea]. Include visual style, color palette, typography, layout sections, and component ideas."
    },
    {
        "title": "Stitch prompt",
        "category": "Design",
        "text": "Write a detailed Google Stitch prompt for a [type of website/app] with modern UI, responsive layout, sections, colors, and interaction states."
    },
    {
        "title": "Project planner",
        "category": "Project Planning",
        "text": "Break down [project name] into a 7-day build plan with frontend, backend, database, testing, and deployment tasks."
    },
    {
        "title": "Hackathon MVP",
        "category": "Project Planning",
        "text": "Create a hackathon MVP plan for [idea]. Include core features, bonus features, tech stack, user flow, and judging pitch."
    },
    {
        "title": "Social content plan",
        "category": "Content Creation",
        "text": "Create a 7-day content plan for [topic/brand]. Include post ideas, captions, hooks, and CTA suggestions."
    },
    {
        "title": "Video script",
        "category": "Content Creation",
        "text": "Write a 60-second video script about [topic]. Include hook, simple explanation, example, and closing CTA."
    },
    {
        "title": "PDF study notes",
        "category": "Study",
        "text": "Summarize this PDF content into exam-ready notes with headings, key definitions, diagrams to draw, and likely questions: [paste content]."
    },
    {
        "title": "Email polish",
        "category": "Writing",
        "text": "Rewrite this message to sound polite, clear, and professional without making it too formal: [paste message]."
    },
    {
        "title": "Blog outline",
        "category": "Writing",
        "text": "Create a blog outline on [topic] with intro, headings, key points, examples, and conclusion."
    },
    {
        "title": "SEO content brief",
        "category": "Marketing",
        "text": "Create an SEO content brief for [keyword]. Include search intent, title ideas, H2s, FAQs, and internal linking suggestions."
    }
];

const tasks = {
    "ppt": {
        "label": "Create PPT",
        "tools": [
            "gamma",
            "canva",
            "beautiful-ai",
            "slidesai",
            "plus-ai"
        ],
        "reason": "Use ChatGPT/Claude for content structure, Gamma or SlidesAI for quick deck generation, and Canva/Beautiful.ai for visual polish.",
        "prompt": "Create a 10-slide presentation on [topic]. Include slide titles, key points, examples, visuals, conclusion, and speaker notes."
    },
    "research": {
        "label": "Research topic",
        "tools": [
            "perplexity",
            "elicit",
            "consensus",
            "scispace",
            "notebooklm"
        ],
        "reason": "These tools help discover sources, understand papers, summarize material, and build a research base.",
        "prompt": "Research [topic] and give me a structured summary with important points, use cases, limitations, and sources I should verify."
    },
    "code": {
        "label": "Write code",
        "tools": [
            "cursor",
            "github-copilot",
            "chatgpt",
            "replit-ai",
            "windsurf"
        ],
        "reason": "Use code editors for implementation, Copilot for inline suggestions, and ChatGPT for explanations and architecture.",
        "prompt": "Act as a senior developer. Help me build [feature] in [tech stack]. Give clean code, file structure, and edge cases."
    },
    "debug": {
        "label": "Debug code",
        "tools": [
            "phind",
            "chatgpt",
            "cursor",
            "coderabbit",
            "qodo"
        ],
        "reason": "These tools are useful for reading errors, explaining bugs, reviewing code, and suggesting fixes.",
        "prompt": "I am getting this error: [error]. Here is my code: [code]. Explain the cause and give the corrected version."
    },
    "design": {
        "label": "Design UI",
        "tools": [
            "figma-ai",
            "uizard",
            "framer-ai",
            "relume",
            "galileo-ai"
        ],
        "reason": "These tools help with UI ideas, wireframes, website sections, layouts, and visual direction.",
        "prompt": "Create a modern UI design brief for [app/website]. Include layout, sections, colors, typography, and component ideas."
    },
    "images": {
        "label": "Generate images",
        "tools": [
            "midjourney",
            "dalle",
            "adobe-firefly",
            "leonardo-ai",
            "ideogram"
        ],
        "reason": "These tools cover artistic images, product visuals, design assets, and prompt-based image generation.",
        "prompt": "Generate an image prompt for [subject] in [style]. Include composition, lighting, background, colors, and mood."
    },
    "pdf": {
        "label": "Summarize PDF",
        "tools": [
            "notebooklm",
            "chatpdf",
            "pdf-ai",
            "askyourpdf",
            "humata"
        ],
        "reason": "PDF-focused tools make it easier to ask questions, extract summaries, and turn documents into notes.",
        "prompt": "Summarize this document into key points, important definitions, action items, and likely exam/interview questions."
    },
    "exams": {
        "label": "Prepare for exams",
        "tools": [
            "chatgpt",
            "notebooklm",
            "quizlet-ai",
            "mindgrasp",
            "studyfetch"
        ],
        "reason": "Use these for notes, flashcards, quizzes, concept explanations, and scenario-based practice.",
        "prompt": "Create exam-ready notes on [topic], then give 10 scenario-based questions with short answers."
    },
    "resume": {
        "label": "Make resume",
        "tools": [
            "rezi",
            "teal",
            "kickresume",
            "jobscan",
            "grammarly"
        ],
        "reason": "These tools help create resumes, improve bullet points, check ATS fit, and polish grammar.",
        "prompt": "Rewrite these resume bullets to be action-oriented, measurable, and suitable for [role]: [paste bullets]."
    },
    "plan": {
        "label": "Plan project",
        "tools": [
            "notion-ai",
            "taskade",
            "claude",
            "chatgpt",
            "clickup-ai"
        ],
        "reason": "These tools help break ideas into milestones, tasks, docs, and organized execution plans.",
        "prompt": "Break down [project idea] into a practical 7-day build plan with tasks, files, features, and testing steps."
    },
    "content": {
        "label": "Create content",
        "tools": [
            "chatgpt",
            "copy-ai",
            "canva",
            "opusclip",
            "captions-ai"
        ],
        "reason": "Use writing tools for scripts/captions, Canva for visuals, and video tools for short-form content.",
        "prompt": "Create a content plan for [topic]. Include hooks, captions, visual ideas, and CTA for 7 posts."
    },
    "writing": {
        "label": "Improve writing",
        "tools": [
            "grammarly",
            "quillbot",
            "wordtune",
            "prowritingaid",
            "claude"
        ],
        "reason": "These tools help polish grammar, rewrite sentences, improve tone, and refine long-form text.",
        "prompt": "Improve this text for clarity, tone, grammar, and flow while keeping it natural: [paste text]."
    },
    "automation": {
        "label": "Automate workflow",
        "tools": [
            "zapier-ai",
            "make-ai",
            "n8n-ai",
            "bardeen",
            "lindy"
        ],
        "reason": "These tools connect apps, automate repetitive work, and help create AI-powered workflows.",
        "prompt": "Design an automation workflow for [task]. Include trigger, steps, tools involved, and expected output."
    },
    "video": {
        "label": "Create video",
        "tools": [
            "runway",
            "pika",
            "invideo-ai",
            "veed-ai",
            "descript"
        ],
        "reason": "These tools cover video generation, editing, captions, clips, and transcript-based editing.",
        "prompt": "Create a short video plan for [topic]. Include hook, scene ideas, visuals, captions, and CTA."
    }
};

const aiStacks = [
    {
        "title": "For Students",
        "tools": [
            "ChatGPT",
            "Perplexity",
            "NotebookLM",
            "Canva",
            "Quizlet AI"
        ],
        "description": "For notes, research, assignments, presentations, and revision."
    },
    {
        "title": "For Developers",
        "tools": [
            "Cursor",
            "GitHub Copilot",
            "Phind",
            "ChatGPT",
            "CodeRabbit"
        ],
        "description": "For coding, debugging, code reviews, and technical research."
    },
    {
        "title": "For Designers",
        "tools": [
            "Figma AI",
            "Canva",
            "Uizard",
            "Midjourney",
            "Khroma"
        ],
        "description": "For UI ideas, visuals, color palettes, wireframes, and brand assets."
    },
    {
        "title": "For Content Creators",
        "tools": [
            "ChatGPT",
            "Canva",
            "Runway",
            "ElevenLabs",
            "OpusClip"
        ],
        "description": "For captions, scripts, visuals, voiceovers, and short-form videos."
    },
    {
        "title": "For Hackathon Builders",
        "tools": [
            "Perplexity",
            "ChatGPT",
            "Claude",
            "Gamma",
            "Replit AI"
        ],
        "description": "For research, MVP planning, pitch decks, docs, and quick prototypes."
    }
];
