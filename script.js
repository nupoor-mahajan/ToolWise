// ToolWise AI - App Logic
// Depends on data/tools-data.js and data/content-data.js.

// State
let savedTools = JSON.parse(localStorage.getItem("toolwise_saved") || "[]");

// DOM Helpers
const $ = (id) => document.getElementById(id);

function escapeHTML(value) {
    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function getToolById(id) {
    return aiTools.find((tool) => tool.id === id);
}

function getUniqueValues(key) {
    return [...new Set(aiTools.map((tool) => tool[key]).filter(Boolean))].sort((a, b) => a.localeCompare(b));
}

// DOM Elements
let toolsGrid;
let searchInput;
let filterCategory;
let filterPricing;
let filterDifficulty;
let savedGrid;
let emptySaved;
let savedBadge;
let taskSelect;
let taskResults;
let compare1;
let compare2;
let btnCompare;
let compareResults;
let promptsGrid;
let promptFilters;

// Initialize
function init() {
    toolsGrid = $("tools-grid");
    searchInput = $("search-input");
    filterCategory = $("filter-category");
    filterPricing = $("filter-pricing");
    filterDifficulty = $("filter-difficulty");
    savedGrid = $("saved-grid");
    emptySaved = $("empty-saved");
    savedBadge = $("saved-badge");
    taskSelect = $("task-select");
    taskResults = $("task-results");
    compare1 = $("compare-1");
    compare2 = $("compare-2");
    btnCompare = $("btn-compare");
    compareResults = $("compare-results");
    promptsGrid = $("prompts-grid");
    promptFilters = $("prompt-filters");

    setupTheme();
    populateFilterOptions();
    populateTaskOptions();
    populateCompareOptions();
    populatePromptFilters();

    renderTools(aiTools);
    renderSavedTools();
    renderPrompts("all");
    renderStacks();
    updateSavedBadge();

    setupEventListeners();
}

function setupEventListeners() {
    searchInput?.addEventListener("input", handleFilters);
    filterCategory?.addEventListener("change", handleFilters);
    filterPricing?.addEventListener("change", handleFilters);
    filterDifficulty?.addEventListener("change", handleFilters);

    taskSelect?.addEventListener("change", handleTaskSelection);

    compare1?.addEventListener("change", checkCompareButton);
    compare2?.addEventListener("change", checkCompareButton);
    btnCompare?.addEventListener("click", handleCompare);

    promptFilters?.addEventListener("click", (event) => {
        const button = event.target.closest(".prompt-filter");
        if (!button) return;

        document.querySelectorAll(".prompt-filter").forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
        renderPrompts(button.dataset.filter);
    });

    $("mobile-menu-btn")?.addEventListener("click", () => {
        $("nav-links")?.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach((link) => {
        link.addEventListener("click", () => {
            $("nav-links")?.classList.remove("active");
        });
    });
}

// Populate Controls
function populateFilterOptions() {
    if (filterCategory) {
        const categories = getUniqueValues("category");
        filterCategory.innerHTML = `<option value="all">All Categories</option>` +
            categories.map((category) => `<option value="${escapeHTML(category)}">${escapeHTML(category)}</option>`).join("");
    }

    if (filterPricing) {
        const pricingOrder = ["all", "Free", "Freemium", "Paid"];
        filterPricing.innerHTML = pricingOrder.map((price) => {
            const label = price === "all" ? "All Pricing" : price;
            return `<option value="${escapeHTML(price)}">${escapeHTML(label)}</option>`;
        }).join("");
    }

    if (filterDifficulty) {
        const difficultyOrder = ["all", "Beginner", "Intermediate", "Advanced"];
        filterDifficulty.innerHTML = difficultyOrder.map((level) => {
            const label = level === "all" ? "All Difficulty" : level;
            return `<option value="${escapeHTML(level)}">${escapeHTML(label)}</option>`;
        }).join("");
    }
}

function populateTaskOptions() {
    if (!taskSelect) return;

    taskSelect.innerHTML = `<option value="">Select a task...</option>` +
        Object.entries(tasks)
            .map(([key, task]) => `<option value="${escapeHTML(key)}">${escapeHTML(task.label)}</option>`)
            .join("");
}

function populateCompareOptions() {
    if (!compare1 || !compare2) return;

    const sortedTools = [...aiTools].sort((a, b) => a.name.localeCompare(b.name));
    const options = `<option value="">Select tool</option>` +
        sortedTools.map((tool) => `<option value="${escapeHTML(tool.id)}">${escapeHTML(tool.name)}</option>`).join("");

    compare1.innerHTML = options;
    compare2.innerHTML = options;
    checkCompareButton();
}

function populatePromptFilters() {
    if (!promptFilters) return;

    const categories = [...new Set(prompts.map((prompt) => prompt.category))].sort((a, b) => a.localeCompare(b));

    promptFilters.innerHTML = `
        <button class="prompt-filter active" data-filter="all">All</button>
        ${categories.map((category) => `
            <button class="prompt-filter" data-filter="${escapeHTML(category)}">${escapeHTML(category)}</button>
        `).join("")}
    `;
}

// Render Tools
function renderTools(toolsToRender) {
    if (!toolsGrid) return;

    toolsGrid.innerHTML = "";

    if (toolsToRender.length === 0) {
        toolsGrid.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <i class="fa-regular fa-face-frown"></i>
                <h3>No tools found</h3>
                <p>Try another keyword or change the filters.</p>
            </div>
        `;
        return;
    }

    const fragment = document.createDocumentFragment();

    toolsToRender.forEach((tool) => {
        const isSaved = savedTools.includes(tool.id);
        const card = document.createElement("div");
        card.className = "tool-card";
        card.innerHTML = `
            <div class="tool-header">
                <div class="tool-title">
                    <span class="tool-category">${escapeHTML(tool.category)}</span>
                    <h3>${escapeHTML(tool.name)}</h3>
                </div>
                <button class="btn-save ${isSaved ? "saved" : ""}" data-id="${escapeHTML(tool.id)}" title="${isSaved ? "Remove saved tool" : "Save tool"}" aria-label="${isSaved ? "Remove saved tool" : "Save tool"}">
                    <i class="${isSaved ? "fa-solid" : "fa-regular"} fa-bookmark"></i>
                </button>
            </div>

            <p class="tool-desc">${escapeHTML(tool.description)}</p>

            <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1rem;">
                <strong style="color: var(--text-main);">Best for:</strong> ${escapeHTML(tool.bestFor)}
            </p>

            <div class="tool-meta">
                <span class="badge-tag badge-price">${escapeHTML(tool.pricing)}</span>
                <span class="badge-tag badge-diff">${escapeHTML(tool.difficulty)}</span>
                ${tool.tags.slice(0, 4).map((tag) => `<span class="badge-tag">#${escapeHTML(tag)}</span>`).join("")}
            </div>

            <div class="tool-footer">
                <span style="font-size: 0.8rem; color: var(--text-muted);">
                    <i class="fa-solid fa-user"></i> ${escapeHTML(tool.userType)}
                </span>
                <a href="${escapeHTML(tool.url)}" target="_blank" rel="noopener noreferrer" class="tool-link">
                    Visit <i class="fa-solid fa-arrow-right"></i>
                </a>
            </div>
        `;

        fragment.appendChild(card);
    });

    toolsGrid.appendChild(fragment);

    toolsGrid.querySelectorAll(".btn-save").forEach((button) => {
        button.addEventListener("click", (event) => {
            toggleSaveTool(event.currentTarget.dataset.id);
        });
    });
}

// Filtering
function handleFilters() {
    const query = (searchInput?.value || "").trim().toLowerCase();
    const category = filterCategory?.value || "all";
    const pricing = filterPricing?.value || "all";
    const difficulty = filterDifficulty?.value || "all";

    const filteredTools = aiTools.filter((tool) => {
        const searchableText = [
            tool.name,
            tool.category,
            tool.description,
            tool.bestFor,
            tool.pricing,
            tool.difficulty,
            tool.userType,
            tool.strength,
            tool.limitation,
            ...tool.tags
        ].join(" ").toLowerCase();

        const matchesSearch = !query || searchableText.includes(query);
        const matchesCategory = category === "all" || tool.category === category;
        const matchesPricing = pricing === "all" || tool.pricing === pricing;
        const matchesDifficulty = difficulty === "all" || tool.difficulty === difficulty;

        return matchesSearch && matchesCategory && matchesPricing && matchesDifficulty;
    });

    renderTools(filteredTools);
}

// Save / Remove Tools
function toggleSaveTool(id) {
    if (!id) return;

    const index = savedTools.indexOf(id);

    if (index === -1) {
        savedTools.push(id);
        showToast("Tool saved!");
    } else {
        savedTools.splice(index, 1);
        showToast("Tool removed.");
    }

    localStorage.setItem("toolwise_saved", JSON.stringify(savedTools));

    handleFilters();
    renderSavedTools();
    updateSavedBadge();
}

function renderSavedTools() {
    if (!savedGrid) return;

    savedGrid.innerHTML = "";

    if (savedTools.length === 0) {
        emptySaved?.classList.remove("hidden");
        return;
    }

    emptySaved?.classList.add("hidden");

    const savedToolObjects = aiTools.filter((tool) => savedTools.includes(tool.id));

    savedToolObjects.forEach((tool) => {
        const card = document.createElement("div");
        card.className = "tool-card";
        card.innerHTML = `
            <div class="tool-header">
                <div class="tool-title">
                    <span class="tool-category">${escapeHTML(tool.category)}</span>
                    <h3>${escapeHTML(tool.name)}</h3>
                </div>
                <button class="btn-save saved" data-id="${escapeHTML(tool.id)}" title="Remove saved tool" aria-label="Remove saved tool">
                    <i class="fa-solid fa-bookmark"></i>
                </button>
            </div>

            <p class="tool-desc">${escapeHTML(tool.description)}</p>

            <div class="tool-footer">
                <span style="font-size: 0.8rem; color: var(--text-muted);">${escapeHTML(tool.pricing)} • ${escapeHTML(tool.difficulty)}</span>
                <a href="${escapeHTML(tool.url)}" target="_blank" rel="noopener noreferrer" class="tool-link">
                    Visit <i class="fa-solid fa-arrow-right"></i>
                </a>
            </div>
        `;

        savedGrid.appendChild(card);
    });

    savedGrid.querySelectorAll(".btn-save").forEach((button) => {
        button.addEventListener("click", (event) => {
            toggleSaveTool(event.currentTarget.dataset.id);
        });
    });
}

function updateSavedBadge() {
    if (!savedBadge) return;

    if (savedTools.length > 0) {
        savedBadge.textContent = savedTools.length;
        savedBadge.classList.remove("hidden");
    } else {
        savedBadge.classList.add("hidden");
    }
}

// Task Finder
function handleTaskSelection() {
    if (!taskResults || !taskSelect) return;

    const taskKey = taskSelect.value;

    if (!taskKey || !tasks[taskKey]) {
        taskResults.classList.add("hidden");
        return;
    }

    const taskInfo = tasks[taskKey];
    const recommendedTools = taskInfo.tools
        .map((id) => getToolById(id))
        .filter(Boolean);

    taskResults.innerHTML = `
        <h3 style="margin-bottom: 1rem; color: var(--primary);">Recommended for ${escapeHTML(taskInfo.label)}</h3>
        <p style="margin-bottom: 1.5rem; color: var(--text-muted);">${escapeHTML(taskInfo.reason)}</p>

        <div style="display: grid; gap: 1rem; margin-bottom: 2rem;">
            ${recommendedTools.map((tool) => `
                <div class="recommendation-card">
                    <div style="display: flex; justify-content: space-between; align-items: center; gap: 1rem; flex-wrap: wrap;">
                        <h4>${escapeHTML(tool.name)}</h4>
                        <span class="badge-tag badge-price">${escapeHTML(tool.pricing)}</span>
                    </div>
                    <p style="font-size: 0.875rem; color: var(--text-muted);">${escapeHTML(tool.bestFor)}</p>
                </div>
            `).join("")}
        </div>

        <div class="task-prompt">
            <h5>Suggested Prompt</h5>
            <p>${escapeHTML(taskInfo.prompt)}</p>
            <button class="btn-copy" data-copy="${escapeHTML(taskInfo.prompt)}">
                <i class="fa-regular fa-copy"></i> Copy Prompt
            </button>
        </div>
    `;

    taskResults.classList.remove("hidden");

    taskResults.querySelector(".btn-copy")?.addEventListener("click", (event) => {
        copyText(event.currentTarget.dataset.copy);
    });
}

// Compare
function checkCompareButton() {
    if (!btnCompare || !compare1 || !compare2) return;

    btnCompare.disabled = !(compare1.value && compare2.value && compare1.value !== compare2.value);
}

function handleCompare() {
    if (!compareResults || !compare1 || !compare2) return;

    const id1 = compare1.value;
    const id2 = compare2.value;

    if (!id1 || !id2) {
        showToast("Please select two tools.");
        return;
    }

    if (id1 === id2) {
        showToast("Please choose two different tools to compare.");
        return;
    }

    const tool1 = getToolById(id1);
    const tool2 = getToolById(id2);

    if (!tool1 || !tool2) {
        showToast("Tool not found.");
        return;
    }

    compareResults.innerHTML = `
        <div class="compare-table-container">
            <table class="compare-table">
                <thead>
                    <tr>
                        <th>Feature</th>
                        <th>${escapeHTML(tool1.name)}</th>
                        <th>${escapeHTML(tool2.name)}</th>
                    </tr>
                </thead>
                <tbody>
                    ${renderCompareRow("Category", tool1.category, tool2.category)}
                    ${renderCompareRow("Best For", tool1.bestFor, tool2.bestFor)}
                    ${renderCompareRow("Pricing", `<span class="badge-tag badge-price">${escapeHTML(tool1.pricing)}</span>`, `<span class="badge-tag badge-price">${escapeHTML(tool2.pricing)}</span>`, false)}
                    ${renderCompareRow("Difficulty", tool1.difficulty, tool2.difficulty)}
                    ${renderCompareRow("Strength", `<span style="color:#10B981;"><i class="fa-solid fa-plus-circle"></i></span> ${escapeHTML(tool1.strength)}`, `<span style="color:#10B981;"><i class="fa-solid fa-plus-circle"></i></span> ${escapeHTML(tool2.strength)}`, false)}
                    ${renderCompareRow("Limitation", `<span style="color:#EF4444;"><i class="fa-solid fa-minus-circle"></i></span> ${escapeHTML(tool1.limitation)}`, `<span style="color:#EF4444;"><i class="fa-solid fa-minus-circle"></i></span> ${escapeHTML(tool2.limitation)}`, false)}
                    ${renderCompareRow("User Type", tool1.userType, tool2.userType)}
                </tbody>
            </table>
        </div>
    `;

    compareResults.classList.remove("hidden");
}

function renderCompareRow(label, value1, value2, shouldEscape = true) {
    const left = shouldEscape ? escapeHTML(value1) : value1;
    const right = shouldEscape ? escapeHTML(value2) : value2;

    return `
        <tr>
            <td class="feature-label">${escapeHTML(label)}</td>
            <td>${left}</td>
            <td>${right}</td>
        </tr>
    `;
}

// Prompts
function renderPrompts(filter = "all") {
    if (!promptsGrid) return;

    promptsGrid.innerHTML = "";

    const promptsToRender = filter === "all"
        ? prompts
        : prompts.filter((prompt) => prompt.category.toLowerCase() === filter.toLowerCase());

    if (promptsToRender.length === 0) {
        promptsGrid.innerHTML = `
            <div class="empty-state" style="grid-column: 1 / -1;">
                <h3>No prompts found</h3>
                <p>Try another prompt category.</p>
            </div>
        `;
        return;
    }

    promptsToRender.forEach((prompt) => {
        const card = document.createElement("div");
        card.className = "prompt-card";
        card.innerHTML = `
            <div class="prompt-card-header">
                <h3>${escapeHTML(prompt.title)}</h3>
                <span class="prompt-card-category">${escapeHTML(prompt.category)}</span>
            </div>

            <div class="prompt-text-container">${escapeHTML(prompt.text)}</div>

            <button class="btn-copy" data-copy="${escapeHTML(prompt.text)}">
                <i class="fa-regular fa-copy"></i> Copy Prompt
            </button>
        `;

        promptsGrid.appendChild(card);
    });

    promptsGrid.querySelectorAll(".btn-copy").forEach((button) => {
        button.addEventListener("click", (event) => {
            copyText(event.currentTarget.dataset.copy);
        });
    });
}

// Optional: Render stacks if HTML has a dynamic container with id="stacks-grid"
function renderStacks() {
    const stacksGrid = $("stacks-grid");
    if (!stacksGrid || stacksGrid.children.length > 0) return;

    stacksGrid.innerHTML = aiStacks.map((stack) => `
        <div class="stack-card">
            <div class="stack-icon"><i class="fa-solid fa-layer-group"></i></div>
            <h3>${escapeHTML(stack.title)}</h3>
            <p>${escapeHTML(stack.description)}</p>
            <ul class="stack-tools">
                ${stack.tools.map((tool) => `<li><span>${escapeHTML(tool)}</span><i class="fa-solid fa-check"></i></li>`).join("")}
            </ul>
        </div>
    `).join("");
}

// Utility
function copyText(text) {
    if (!text) return;

    if (!navigator.clipboard) {
        fallbackCopyText(text);
        return;
    }

    navigator.clipboard.writeText(text)
        .then(() => showToast("Prompt copied!"))
        .catch(() => fallbackCopyText(text));
}

function fallbackCopyText(text) {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.focus();
    textarea.select();

    try {
        document.execCommand("copy");
        showToast("Prompt copied!");
    } catch (error) {
        showToast("Copy failed.");
    }

    document.body.removeChild(textarea);
}

function showToast(message) {
    const toast = $("toast");

    if (!toast) {
        console.log(message);
        return;
    }

    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 2600);
}

// Theme
function setupTheme() {
    const toggleBtn = $("theme-toggle");
    const icon = $("theme-icon");
    const html = document.documentElement;

    const savedTheme = localStorage.getItem("toolwise_theme") || "light";
    html.setAttribute("data-theme", savedTheme);
    updateThemeIcon(savedTheme, icon);

    toggleBtn?.addEventListener("click", () => {
        const currentTheme = html.getAttribute("data-theme");
        const newTheme = currentTheme === "light" ? "dark" : "light";

        html.setAttribute("data-theme", newTheme);
        localStorage.setItem("toolwise_theme", newTheme);
        updateThemeIcon(newTheme, icon);
    });
}

function updateThemeIcon(theme, icon) {
    if (!icon) return;

    if (theme === "dark") {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
}

// Run init safely
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
} else {
    init();
}
