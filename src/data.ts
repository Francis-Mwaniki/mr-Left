// Single source of truth for portfolio content. Edit here; the UI updates everywhere.

export const profile = {
  name: "Francis Mwaniki",
  role: "Senior Software Engineer",
  location: "Nairobi, Kenya",
  timezone: "Africa/Nairobi",
  email: "esoftware385@gmail.com",
  photo: "/francis.webp",
  socials: [
    { label: "GitHub", handle: "Francis-Mwaniki", href: "https://github.com/Francis-Mwaniki" },
    { label: "GitHub (work)", handle: "Franc-dev", href: "https://github.com/Franc-dev" },
    { label: "LinkedIn", handle: "francis-mwaniki", href: "https://www.linkedin.com/in/francis-mwaniki-378603220/" },
    { label: "X", handle: "@FRANCIS90776084", href: "https://x.com/FRANCIS90776084" },
  ],
};

export type Project = {
  id: string;
  name: string;
  tagline: string;
  url: string;
  year: string;
  kind: string;
  summary: string;
  highlights: string[];
  stack: string[];
  /** Base path; `${image}.webp` (1440w) and `${image}-sm.webp` (720w) must exist in /public */
  image: string;
};

/** Large case-study rows */
export const flagship: Project[] = [
  {
    id: "forge",
    name: "Forge",
    tagline: "Describe it. Forge builds it.",
    url: "https://mitsumi.ai",
    year: "2025 — Now",
    kind: "AI developer platform",
    summary:
      "An autonomous AI software engineer that plans, writes, runs and repairs real full-stack apps inside a private Docker sandbox on the user's own machine, with a live preview as it works.",
    highlights: [
      "Multi-agent orchestration: specialist reviewers for testing, design and security, plus parallel workers for larger builds",
      "Self-healing runtime with a checkpoint after every step, so any change can be rolled back",
      "Works with Claude, OpenAI, Gemini or local Ollama models, with per-project spend limits and a live cost meter",
      "Web edition for teams, with Research, Marketing and Sales agents grounded in company knowledge",
    ],
    stack: ["TypeScript", "Next.js", "Python", "Docker", "LLM agents", "AWS"],
    image: "/work/forge",
  },
  {
    id: "keyguard",
    name: "KeyGuard",
    tagline: "A leaked key costs one click, not a bill.",
    url: "https://mitsumiguard.com/docs/",
    year: "2026",
    kind: "API key security gateway",
    summary:
      "A secrets gateway that keeps real Resend, Anthropic and OpenAI keys off every server and laptop. Apps use their existing SDKs with a per-app, instantly revocable kg_live_ key, and only the gateway holds the real credentials.",
    highlights: [
      "Drop-in proxy for the Resend, Claude and OpenAI APIs, with streams passed through byte for byte. Migrating means changing two environment variables, not code",
      "Email policy engine: sender-domain allow-list, per-key rate limits, bulk-send holds for human review (202) and phishing scoring that revokes the key automatically",
      "LLM spend tracking from usage blocks, with alerts at 50/100/200% of daily levels and on spikes. Prompts and answers are never stored",
      "Leak response: a CLI scans files and git history and reports only SHA-256 fingerprints, plus a pre-commit hook, CI checks and an encrypted .env manager with read audit logs",
    ],
    stack: ["API gateway", "Python CLI", "Encryption", "TOTP 2FA", "Nginx"],
    image: "/work/keyguard",
  },
  {
    id: "aistore",
    name: "AI Store",
    tagline: "Enterprise AI, simplified.",
    url: "https://aistore.102.210.173.202.sslip.io",
    year: "2026",
    kind: "Enterprise AI marketplace",
    summary:
      "An enterprise marketplace for production-ready GenAI agents (fraud, support, clinical, invoicing, sales and more). It takes a company from finding a use case to a live pilot in minutes.",
    highlights: [
      "Find, try, choose and go live: discovery by industry use case, then agent trials and stack selection",
      "A catalogue of vertical agents, from fraud detection to contact-centre voice AI",
      "Built-in assistant that matches a described problem to the right agents",
      "⌘K search, regional catalogues and a pilot-request pipeline",
    ],
    stack: ["TypeScript", "React", "LLM agents", "Search", "Self-hosted"],
    image: "/work/aistore",
  },
  {
    id: "kandarasi",
    name: "Kandarasi",
    tagline: "Turn talent into the next big conversation.",
    url: "https://kandarasi.com",
    year: "2026",
    kind: "Creative marketplace",
    summary:
      "Kenya's creative marketplace. Artists and brands discover each other, price creative work, agree on terms and move money with confidence, all in one connected deal workflow.",
    highlights: [
      "Rate cards, portfolios and proposals, so artists can show and price their value",
      "Escrow-protected agreements with deliverable approvals",
      "A full payment trail for every campaign, from first proposal to payout",
      "Brand partner programme with live campaign tracking",
    ],
    stack: ["Next.js", "TypeScript", "Payments", "Escrow", "Postgres"],
    image: "/work/kandarasi",
  },
  {
    id: "talentlens",
    name: "TalentLens",
    tagline: "Find the right people, faster.",
    url: "https://talentlens.102.210.173.202.sslip.io/login",
    year: "2026",
    kind: "AI recruiting",
    summary:
      "AI-powered CV screening that reads every CV from inboxes and uploads, sorts candidates by skills and seniority, and ranks the best fit for each role.",
    highlights: [
      "Ingests CVs from Gmail and from PDF and Word uploads, with OCR for scanned CVs",
      "Structured extraction of skills, seniority and experience",
      "Explainable fit scores that rank candidates per role",
      "Organisation-only sign-in with admin-managed access",
    ],
    stack: ["TypeScript", "Python", "LLMs", "OCR", "Gmail API"],
    image: "/work/talentlens",
  },
];

/** Medium screenshot cards */
export const products: Project[] = [
  {
    id: "signal",
    name: "Signal",
    tagline: "Control panel for company chat agents",
    url: "https://agents.entitysoftwares.com",
    year: "2026",
    kind: "AI agents SaaS",
    summary:
      "Bring your own API keys, teach the bot from your docs, and drop a small widget into Next.js, Nuxt, Vue or React apps.",
    highlights: [],
    stack: ["Next.js", "RAG", "Embeddable widget", "Multi-tenant"],
    image: "/work/agents",
  },
  {
    id: "marketplace",
    name: "Marketplace",
    tagline: "B2B cloud, enterprise & IT marketplace",
    url: "https://www.mitsumi-marketplace.com",
    year: "2025",
    kind: "B2B commerce",
    summary:
      "Infrastructure, AI, cloud and security in one catalogue, with search, cart, checkout, multiple currencies and languages, and an AI shopping assistant.",
    highlights: [],
    stack: ["React", "Vite", "REST API", "S3 + CloudFront"],
    image: "/work/marketplace",
  },
  {
    id: "catalyst",
    name: "Catalyst",
    tagline: "Virtual events & partner ecosystem",
    url: "https://www.mitsumicatalyst.com",
    year: "2025",
    kind: "Events platform",
    summary:
      "A virtual event platform for a partner ecosystem, sharing accounts and API conventions with the Marketplace.",
    highlights: [],
    stack: ["React", "Vite", "REST API", "AWS"],
    image: "/work/catalyst",
  },
  {
    id: "cutout",
    name: "Cutout",
    tagline: "Cut the subject. Lose the rest.",
    url: "https://cutout-bg.vercel.app",
    year: "2026",
    kind: "AI image tool",
    summary:
      "Removes photo backgrounds in seconds, with edge refinement, backdrop swaps and full-resolution export. No sign-up, and nothing is stored.",
    highlights: [],
    stack: ["React", "Vite", "Segmentation", "Vercel"],
    image: "/work/cutout",
  },
];

export type Platform = {
  id: string;
  name: string;
  url?: string;
  kind: string;
  summary: string;
  points: string[];
  visual: "meet" | "ledger" | "infra";
};

export const platforms: Platform[] = [
  {
    id: "meet",
    name: "Meet",
    url: "https://meet.mitsumi.ai",
    kind: "Meeting intelligence",
    summary:
      "A self-hosted meeting platform built on open-source Vexa. Meeting bots join calls and produce real-time transcripts on infrastructure we control.",
    points: ["Real-time transcripts", "Self-hosted", "Private"],
    visual: "meet",
  },
  {
    id: "accounts",
    name: "Accounts Management",
    url: "https://accounts-management.mitsumi.ai",
    kind: "Internal back-office",
    summary:
      "The internal back-office where teams manage customer and partner accounts across a suite of products.",
    points: ["Role-based access", "Audit trail", "Cross-product"],
    visual: "ledger",
  },
  {
    id: "infra",
    name: "Infra & internal tooling",
    kind: "Platform engineering",
    summary:
      "The plumbing behind the products: self-hosted deploys on Coolify, data scrapers, sales reporting, chatbot integrations and Kubernetes autoscaling experiments.",
    points: ["Self-hosted PaaS", "Scrapers & reports", "K8s autoscaling"],
    visual: "infra",
  },
];

export const openSource = [
  {
    name: "Cron Manager",
    desc: "Cron jobs with retries and backoff, live WebSocket status, auto-rescheduling and scoped API tokens.",
    stack: "NestJS · Prisma · Postgres",
    href: "https://github.com/Francis-Mwaniki/cron-manager",
  },
  {
    name: "AI Agent SDK Orchestrator",
    desc: "An SDK for composing and orchestrating multi-step AI agents, with usage docs.",
    stack: "TypeScript",
    href: "https://github.com/Franc-dev/ai-agent-sdk-orchestrator-v2",
  },
  {
    name: "Frachat",
    desc: "Embeddable AI support widgets that answer from your uploaded docs, with an analytics dashboard.",
    stack: "Next.js · Gemini",
    href: "https://frachat.vercel.app/",
  },
];

export const experience = [
  {
    company: "Mitsumi Distribution",
    role: "Senior Software Engineer",
    period: "2024 — Present",
    points: [
      "Build Forge, the company's AI developer platform: agent orchestration, sandboxed execution, and the desktop and web products",
      "Shipped the AI Store, TalentLens, Marketplace and Catalyst end to end, from API design to edge delivery",
      "Own internal platforms and infrastructure: accounts, meetings, deployment pipelines and reporting",
    ],
  },
  {
    company: "Acewears",
    role: "Full-stack Developer",
    period: "Jul 2023 — Dec 2023",
    points: [
      "Designed and built the NestJS API on Prisma and Postgres",
      "Built the Nuxt storefront and shopping experience",
    ],
  },
  {
    company: "Beannsoft Limited",
    role: "Software Developer",
    period: "May 2023 — Dec 2023",
    points: [
      "Engineered Vue.js interfaces and component libraries in an agile team",
      "Was productive in a new stack within the first month",
    ],
  },
];

export const capabilities = [
  { title: "AI & agents", items: ["Multi-agent orchestration", "RAG pipelines", "Tool calling & evals", "Claude · OpenAI · Gemini", "Local models (Ollama)"] },
  { title: "Product engineering", items: ["TypeScript", "React · Next.js", "Vue · Nuxt", "Design systems", "Web performance"] },
  { title: "Backend & data", items: ["Node · NestJS", "Python · FastAPI · Django", "PostgreSQL · Prisma", "MongoDB", "Payments & escrow"] },
  { title: "Infrastructure", items: ["AWS (S3, CloudFront)", "Docker · Kubernetes", "Vercel · Coolify", "CI/CD", "Observability"] },
];

export const principles = [
  { title: "Ship, then sharpen", body: "Get the smallest useful version to real users fast, then improve it based on how they actually use it." },
  { title: "Own it in production", body: "The job isn't finished at merge. I design for failure, add monitoring, and stay accountable for what I ship." },
  { title: "Design is engineering", body: "Performance, accessibility and polish are product requirements, not something to fix later." },
  { title: "Make the team faster", body: "Clear interfaces, good defaults and tooling that removes whole classes of work." },
];

export const allProjects = [...flagship, ...products];
