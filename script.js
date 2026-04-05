// --- 1. PORTFOLIO DATA (The Engine) ---
// Update text or image paths here. The HTML will auto-generate.
const portfolioData = {
    projects: [
        {
            title: "Vibe Marketing Engine",
            description: "End-to-end content automation processing Airtable inputs through dual-stage LLMs. Coordinates graphic generation via webhooks and handles automated scheduling to LinkedIn, X, and Meta.",
            // Placeholder: Replace with path to your asset, e.g., "assets/vibe-engine.png"
            image: "assets/placeholder.jpg", 
            tech: ["n8n", "Airtable", "Claude API", "Buffer API"]
        },
        {
            title: "B2B Lead Intelligence Pipeline",
            description: "Scheduled automation scraping URLs via Firecrawl and parsing Reddit RSS. Utilizes an LLM intelligence layer to score prospect quality before delivering HTML reports via Outlook.",
            image: "assets/placeholder.jpg",
            tech: ["n8n", "Serper API", "Firecrawl", "Prompt Eng"]
        },
        {
            title: "Apollo → SalesHandy Pipeline",
            description: "End-to-end lead management. Fetches leads via Apollo.io API, enriches the data, validates emails, and pushes simultaneously to Zoho CRM and SalesHandy campaigns.",
            image: "assets/placeholder.jpg",
            tech: ["n8n", "Apollo.io", "SalesHandy", "Zoho CRM"]
        },
        {
            title: "Dynamic Email Writer",
            description: "Context-aware outreach engine that scrapes LinkedIn and company websites to dynamically generate personalized sales emails at massive scale.",
            image: "assets/placeholder.jpg",
            tech: ["n8n", "OpenAI", "Web Scraping"]
        },
        {
            title: "AI-Powered Blog Auditor",
            description: "A series of AI bots that automatically fetch Google Docs drafts, running comprehensive audits for grammar, factual accuracy, and SEO keyword density.",
            image: "assets/placeholder.jpg",
            tech: ["n8n", "Gemini", "Google Docs API"]
        },
        {
            title: "WhatsApp Conversational Assistant",
            description: "No-code conversational interface built for real-time query handling, utilizing advanced prompt chaining and memory retention.",
            image: "assets/placeholder.jpg",
            tech: ["n8n", "OpenAI", "Webhooks"]
        }
    ],

    skills: {
        "Core Orchestration": [
            "n8n Workflow Design",
            "API Integration (REST, OAuth)",
            "Webhook Infrastructure",
            "Error Handling & Retries",
            "Data Mapping & Deduplication"
        ],
        "AI & LLM Logic": [
            "OpenAI / Claude / Gemini APIs",
            "Prompt Engineering & Chaining",
            "JSON Structured Outputs",
            "AI Agent Architecture",
            "Automated Lead Scoring"
        ],
        "Platforms & Tools": [
            "Airtable (Complex Schema Design)",
            "Google Sheets & Workspace API",
            "LinkedIn & Meta Graph API",
            "Apollo.io & SalesHandy",
            "Firecrawl & Serper API"
        ],
        "Currently Learning": [
            "Python (Data Automation)",
            "Web Scraping (BeautifulSoup)",
            "Flask / FastAPI Backends",
            "AI-Generated Frontend Code"
        ]
    }
};

// --- 2. RENDER FUNCTIONS ---

// Inject Projects into Bento Box Grid
function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;

    portfolioData.projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        
        // Generate the pill badges for the tech stack
        const techBadges = project.tech.map(t => `<span class="tag">${t}</span>`).join('');
        
        card.innerHTML = `
            <img src="${project.image}" alt="${project.title} screenshot" class="project-image" onerror="this.src='data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'400\\' height=\\'200\\' viewBox=\\'0 0 400 200\\'%3E%3Crect width=\\'400\\' height=\\'200\\' fill=\\'%23111\\'%3E%3C/rect%3E%3Ctext x=\\'50%25\\' y=\\'50%25\\' dominant-baseline=\\'middle\\' text-anchor=\\'middle\\' fill=\\'%23333\\' font-family=\\'sans-serif\\' font-size=\\'14\\'%3EImage Placeholder%3C/text%3E%3C/svg%3E';">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-desc">${project.description}</p>
            <div class="tech-tags">
                ${techBadges}
            </div>
        `;
        container.appendChild(card);
    });
}

// Inject Skills into Grid
function renderSkills() {
    const container = document.getElementById('skills-container');
    if (!container) return;

    for (const [category, skillsList] of Object.entries(portfolioData.skills)) {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'skill-category';
        
        const itemsHTML = skillsList.map(skill => `<li>${skill}</li>`).join('');
        
        categoryDiv.innerHTML = `
            <h3>${category}</h3>
            <ul class="skill-list">
                ${itemsHTML}
            </ul>
        `;
        container.appendChild(categoryDiv);
    }
}

// Navbar Scroll Effect
function handleNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(3, 3, 3, 0.9)';
        navbar.style.borderBottom = '1px solid var(--border-hover)';
    } else {
        navbar.style.background = 'rgba(3, 3, 3, 0.6)';
        navbar.style.borderBottom = '1px solid var(--border-color)';
    }
}

// --- 3. INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderSkills();
    window.addEventListener('scroll', handleNavbarScroll);
});
