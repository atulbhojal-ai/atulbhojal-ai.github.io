// This file contains all the dynamic content for the portfolio website.
// By keeping the content separate from the HTML, you can easily update
// your portfolio without touching the code's structure.

const portfolioData = {
    // --- Home Section ---
    home: {
        name: "Atul Kumar Singh",
        jobTitles: "Prompt Engineer | Automation Specialist | Content-to-Tech Storyteller",
        summary: "I thrive on simplifying complex workflows with logic, language, and low-code tools. I've happily transitioned from creative storytelling to the world of tech, focusing on automation, prompt engineering, and powerful AI tools. It's been an incredible journey of turning curiosity into prototypes and real-world business solutions!",
        // Converted GitHub links to their 'raw' format for direct image access
        profilePicture: "https://raw.githubusercontent.com/atulbhojal-ai/atulbhojal-ai.github.io/bd8b50a85d852175bbbc03652243548ca0fb447f/Assets/Profile%20Photo.jpg",
        bannerImage: "https://raw.githubusercontent.com/atulbhojal-ai/atulbhojal-ai.github.io/bd8b50a85d852175bbbc03652243548ca0fb447f/Assets/Website-banner.png",
        // The Google Drive link for your CV/Resume
        resumeLink: "https://drive.google.com/file/d/1R_UQUw2sqWImjdianTT8ICwarpUO7hzY/view?usp=sharing",
        callToAction: "Explore My Projects",
    },

    // --- About & Experience Section ---
    about: {
        title: "About Me & My Journey",
        story: "I'm a dedicated Automation Specialist, passionate about making technology work smarter. I love using no-code platforms like **n8n**, Zapier, and Make to build clever integrations that transform chaotic, repetitive tasks into wonderfully smooth and smart systems. I'm always on the lookout for new challenges and relish the chance to build solutions that save time, reduce errors, and bring a little more happiness to the workday!",
        experience: [
            {
                title: "SEO Content Writer",
                company: "Houzeo",
                duration: "2024 - Present",
                bullets: [
                    "Crafted engaging SEO content for a US real estate platform.",
                    "Worked alongside the tech team for JSON-based publishing.",
                ]
            },
            {
                title: "Content Editor",
                company: "Phistream Consulting",
                duration: "2023",
                bullets: [
                    "Managed daily government newsletters and weekly insights.",
                    "A great time collaborating with senior writers and editors!",
                ]
            },
        ],
    },

    // --- Skills Section ---
    skills: {
        title: "My Skills & Toolkit",
        categories: [
            {
                name: "Prompt Engineering",
                list: [
                    "Generative AI with LLMs (e.g., GPT-4, Gemini)",
                    "Prompt Chaining, Chain of Thought (CoT)",
                    "AI-driven code generation in JavaScript and Python.",
                ]
            },
            {
                name: "Automation & Low-Code",
                list: [
                    "n8n expert (API, Webhooks, HTTP, Google Sheets, etc.)",
                    "JavaScript for advanced logic within workflows",
                    "Experience with Zapier and Make.",
                ]
            },
            {
                name: "APIs & Data",
                list: [
                    "OpenAI, AbstractAPI",
                    "JSON handling, HTML",
                    "SQL and NoSQL database concepts.",
                ]
            }
        ]
    },

    // --- Projects Section ---
    projects: {
        title: "Featured Projects",
        list: [
            {
                title: "Inbound Lead Routing",
                summary: "A smart system to automatically qualify and assign inbound leads.",
                screenshot: "https://raw.githubusercontent.com/atulbhojal-ai/atulbhojal-ai.github.io/bd8b50a85d852175bbbc03652243548ca0fb447f/Assets/Project%201.png",
                tech: ["n8n", "JavaScript", "AbstractAPI"],
                links: [
                    { name: "Video Part 1", url: "https://drive.google.com/file/d/1eH_DS-GFuTZD0TDbrL8heHbtPKIOAdMP/view?usp=sharing" },
                    { name: "Video Part 2", url: "https://drive.google.com/file/d/160kZWYFI5G7fSZUf81ENBOyVj7qovb3m/view?usp=sharing" },
                    { name: "Test Run", url: "https://drive.google.com/file/d/1zOZ-3dd7BurUcrldRulKPTr8eNFlXasR/view?usp=sharing" },
                ],
            },
            {
                title: "AI-Powered Blog Auditor",
                summary: "A series of bots to check blog posts for grammar, facts, and SEO compliance.",
                screenshot: "https://raw.githubusercontent.com/atulbhojal-ai/atulbhojal-ai.github.io/bd8b50a85d852175bbbc03652243548ca0fb447f/Assets/Project%202.png",
                tech: ["n8n", "Gemini", "Google Docs"],
                links: [],
            },
            {
                title: "Workflow Assistant",
                summary: "A workflow that takes form data, summarises it with AI, and organises it into a Notion dashboard.",
                screenshot: "https://raw.githubusercontent.com/atulbhojal-ai/atulbhojal-ai.github.io/bd8b50a85d852175bbbc03652243548ca0fb447f/Assets/WhatsApp%20ChatBot.png",
                tech: ["n8n", "Notion", "Forms"],
                links: [
                    { name: "Documentation", url: "https://docs.google.com/document/d/1WZKtaHbCbWTDEuo06AHxtRPwgGH5FcOnd7xsApigXwc/edit?usp=sharing" }
                ],
            },
            {
                title: "AI Personalised Chatbot",
                summary: "An experiment in creating a chatbot with a personality that mimics human consciousness.",
                screenshot: "https://raw.githubusercontent.com/atulbhojal-ai/atulbhojal-ai.github.io/bd8b50a85d852175bbbc03652243548ca0fb447f/Assets/Website%20ChatBot.png",
                tech: ["n8n", "Gemini", "Creative Prompting"],
                links: [
                    { name: "Documentation", url: "https://docs.google.com/document/d/1k1QuqWy6wyK8qy6401poSgwZudMTnqf-doFetpp_26U/edit?usp=sharing" }
                ],
            },
            // --- Uncomment the projects below to add them to your site ---
            /*
            {
                title: "Your New Project Name",
                summary: "A brief, compelling summary of your new project.",
                screenshot: "https://example.com/your-image-link.png",
                tech: ["Tech Stack 1", "Tech Stack 2"],
                links: [
                    { name: "View Live", url: "https://example.com" },
                    { name: "GitHub Repo", url: "https://github.com/your-repo" },
                ],
            },
            {
                title: "Another Exciting Project",
                summary: "This is a great place to describe your next project.",
                screenshot: "https://example.com/another-image-link.png",
                tech: ["React", "Node.js", "Express"],
                links: [
                    { name: "View Live", url: "https://another-example.com" },
                ],
            },
            */
        ],
    },

    // --- Contact Information ---
    contact: {
        title: "Let's Connect!",
        intro: "Have a question, a project idea, or just fancy a chat about automation? I'd be absolutely delighted to hear from you!",
        email: "atulbhojal.ra1@gmail.com",
        phone: "+91 9953475427",
        location: "India (Remote + Hybrid friendly)",
        formLink: "https://docs.google.com/forms/d/e/1FAIpQLSfZE2n4VEVT7eVhxj2gLhpoiknhqCXgPyZ39D0xBTblsX7Ayw/viewform?usp=sharing&ouid=102478087926455650608",
    },

    // --- Social Media & Footer ---
    social: {
        linkedin: "https://www.linkedin.com/in/atulbhojal/",
        github: "https://github.com/atulbhojal-ai",
        year: new Date().getFullYear(),
    },
};
