/**
 * Everything the site says about Zaeem lives here.
 *
 * ─────────────────────────────────────────────────────────────────────────
 *  BEFORE YOU DEPLOY — fill in the five values marked `TODO`.
 *  Everything else is real and verified against the FounderCopilot repo,
 *  its git history, and the live deployment.
 * ─────────────────────────────────────────────────────────────────────────
 */

export const person = {
  name: "Zaeem Ather",
  role: "Product & Growth · builds what he specs",

  // The one line that has to land in three seconds.
  tagline: "Revenue Operations & Sales Ops. Shipped a full-stack AI product solo.",

  intro:
    "I spent the last year on both sides of a product — growing one at Vyro, running the revenue engine behind another at Podium. Then I wanted to know whether I could build one. FounderCopilot is the answer: a full-stack AI SaaS, live in production, built solo by directing AI coding tools while I made every product and architecture call myself.",

  // Add "· open to remote" here if you want that stated explicitly — left off
  // for now because it's a claim about your availability, not a fact I have.
  location: "Islamabad / Rawalpindi, Pakistan",

  links: {
    live: "https://founder-copilot-flame.vercel.app",
    github: "https://github.com/Zee-arch/founder-copilot",
    githubProfile: "https://github.com/Zee-arch",
    linkedin: "https://linkedin.com/in/zaeem-ather",
    email: "mailto:zaeemather7@gmail.com",
    emailLabel: "zaeemather7@gmail.com",
    // TODO — drop your CV into `public/` and set this to its path, e.g.
    // "/zaeem-ather-cv.pdf". Left as null, the download button just doesn't
    // render — nothing breaks.
    resume: null as string | null,
  },

  // TODO — drop a headshot into `public/` and set this to its path, e.g.
  // "/zaeem.jpg". Anything roughly square works; it renders at 112px.
  // Left as null, the hero lays out without it — nothing breaks.
  photo: null as string | null,

  education: {
    degree: "BBA with Computer Science",
    institution: "NUST — National University of Sciences and Technology",
    // TODO (optional) — add your years, e.g. "2020 — 2024". The row lays out
    // without it, so leaving this as-is is fine.
    period: "TODO_YEARS",
  },
};

/** Verified facts, used as the proof strip under the hero. */
export const proofPoints = [
  { value: "Live", label: "in production on Vercel" },
  { value: "27", label: "commits, 7 merged PRs" },
  { value: "~4k", label: "lines of TypeScript" },
  { value: "8", label: "scored factors per report" },
];

export const founderCopilot = {
  name: "FounderCopilot",
  status: "SHIPPED",
  period: "July 2026 — ongoing",
  oneLiner: "An AI co-founder that turns a one-sentence startup idea into a defensible validation report.",

  tags: [
    "Next.js 15",
    "TypeScript",
    "Tailwind v4",
    "Supabase",
    "Groq",
    "Portkey",
    "Upstash",
    "Vercel",
  ],

  pitch:
    "Type an idea in one sentence. FounderCopilot scores it across 8 independent factors, computes a GO / REFINE / PIVOT verdict in code, and generates a 7-part report — market sizing, financials, roadmap, competitors, a customer-validation kit, a build brief, and a full prose write-up. Real accounts, a saved-report dashboard, PDF export, live on Vercel.",

  // The three lines that separate "used AI to make an app" from
  // "understood what I was shipping."
  highlights: [
    {
      claim: "The verdict is computed, not asked for",
      detail:
        "The model scores 8 factors independently. The overall number is the rounded mean of those 8, calculated in application code — the model is never allowed to supply a top-line score directly.",
    },
    {
      claim: "Unsourced figures are structurally impossible",
      detail:
        "A competitor funding or valuation figure has no valid shape in the type system unless it carries a real source object. Enforced by the compiler, not by a prompt asking politely.",
    },
    {
      claim: "Diagnosed real production incidents",
      detail:
        "A serverless timeout killing requests mid-generation, a case-sensitive env var silently breaking prod, a merge that quietly restored false UI claims — each found by checking the live site, not by trusting a green build.",
    },
  ],
};

export const experience = [
  {
    company: "Podium",
    role: "Data Enrichment Specialist — Revenue Operations (Contract)",
    period: "Jul 2025 — Jul 2026",
    summary:
      "Revenue operations for a US SaaS sales org selling AI agents to local businesses.",
    bullets: [
      "Managed the CRM data layer in Salesforce and Salesloft for the sales org; resolved 100+ cross-functional tickets from SDRs, AEs and CSMs relating to CRM data accuracy and reporting.",
      "Administered Salesforce for the sales org: opportunity splits, appointment-setter and owner assignment, new-hire and promotion enrollments, and maintained critical records including demo logs, appointment data, Rules of Engagement ownership and user setups.",
      "Expanded the dealer-mapping database from 8,000 to 16,000+ validated accounts via web-based collection and validation, widening coverage across Auto, HVAC and Plumbing verticals.",
      "Ran QA on recorded sales calls in Gong, including DNC compliance review.",
      "Executed large-scale data cleaning and enrichment in Excel using Power Query, pivot tables and VLOOKUP; worked with the RevOps team to document recurring data-quality issues feeding future automation design.",
    ],
  },
  {
    company: "ImagineArt",
    role: "Growth Associate",
    period: "Mar 2025 — Nov 2025",
    summary:
      "Growth for an AI creative app (Shorts, Avatar, Video Studio) with a large consumer creator base.",
    bullets: [
      "Built and scaled an influencer program for ImagineArt Shorts, Avatar and Video Studio, onboarding 20+ AI/tech creators across YouTube, TikTok, Instagram and LinkedIn.",
      "Negotiated retainer contracts with creators, reducing CPMs by 25% while holding weekly content output; tracked affiliate links, CTRs, conversions and campaign ROI using Tolt.",
      "Managed content delivery via Growi.io (20+ daily conversations); ran video calls to close long-term partnerships and directed content strategy across carousels, reels and strategic link placement.",
      "Oversaw ~$100K influencer spend across H2 2025 and managed a $25K affiliate program across Rakuten, PAP and Tapfiliate, managing 1,200+ affiliates.",
      "Engineered lead-gen workflows using Phantombuster, Apollo, Hunter.io and ContactFinder across 15+ niche ICPs; executed 100+ daily outreaches and launched Twitter/X outreach for ImagineArt, engaging 50+ AI creators daily.",
    ],
  },
  {
    company: "Independent",
    role: "Builder — FounderCopilot",
    period: "2026",
    summary:
      "Designed, specced, and shipped a full-stack AI product solo.",
    bullets: [
      "Wrote the product spec, made every architecture call, and directed AI coding tools as the implementation layer.",
      "Shipped to production on Vercel with real auth, persistence, a provider gateway, and durable rate limiting.",
      "Ran competitive research across five tools in the category and let the findings set the roadmap.",
    ],
  },
];

/**
 * Tableau Public dashboards.
 *
 * `view` is the Tableau *embed* path (workbook/sheet) — note this differs
 * from the profile URL you see in the browser. It drives both the embed
 * `src` and the thumbnail:
 *   embed     https://public.tableau.com/views/<view>
 *   thumbnail https://public.tableau.com/thumb/views/<view>
 *
 * TODO — the descriptions below were written from the titles alone. They
 * describe each dashboard's subject, and deliberately claim nothing about
 * what the data showed, since that isn't mine to assert. Rewrite them with
 * the actual finding where you have one; a finding beats a description.
 *
 * The whole section hides while this array is empty.
 */
export type TableauProject = {
  title: string;
  description: string;
  /** Embed path: "<workbook>/<sheet>". */
  view: string;
  /** The public-facing profile URL, for the "View on Tableau Public" link. */
  url: string;
  /**
   * Locally-hosted preview image. Deliberately NOT hotlinked from
   * public.tableau.com/thumb/... — that endpoint throttles browser-originated
   * requests hard enough that the previews render broken. Refresh a preview by
   * re-downloading it from that URL and committing the file. Omit the field
   * and the card falls back to a plain panel; it never shows a broken image.
   */
  thumb?: string;
};

export const tableauProjects: TableauProject[] = [
  {
    title: "Traffic Analysis — Dashboard",
    description:
      "A multi-view dashboard built on traffic volume data, arranged so patterns across time periods and locations can be compared side by side rather than one chart at a time.",
    view: "Traffic_Analysis1/TrafficDashboard",
    thumb: "/shots/tableau/traffic-dashboard.png",
    url: "https://public.tableau.com/app/profile/zaeem.ather/viz/Traffic_Analysis1/TrafficDashboard",
  },
  {
    title: "Traffic Analysis — Detail View",
    description:
      "An earlier pass over the same traffic dataset, kept as a single focused worksheet rather than a full dashboard.",
    view: "Traffic_Analysis_17214236775320/Sheet4",
    thumb: "/shots/tableau/traffic-detail.png",
    url: "https://public.tableau.com/app/profile/zaeem.ather/viz/Traffic_Analysis_17214236775320/Sheet4",
  },
  {
    title: "Athens Rental Market",
    description:
      "Rental listings across Athens, mapped and segmented so price and availability can be read geographically instead of as a table of numbers.",
    view: "Athens_rental_visualisation/Dashboard1",
    thumb: "/shots/tableau/athens-rental.png",
    url: "https://public.tableau.com/app/profile/zaeem.ather/viz/Athens_rental_visualisation/Dashboard1",
  },
  {
    title: "World Happiness Report",
    description:
      "National happiness scores visualised against the contributing factors reported alongside them, so country-level differences can be traced to specific components.",
    view: "WorldHappiness_Zaeem/Dashboard2",
    thumb: "/shots/tableau/world-happiness.png",
    url: "https://public.tableau.com/app/profile/zaeem.ather/viz/WorldHappiness_Zaeem/Dashboard2",
  },
  {
    title: "World Happiness — Exploration",
    description:
      "A single-sheet exploration of the same World Happiness dataset, working through how different chart types change what the data appears to say.",
    view: "MyWorldHappinessDemo_16895957074290/Sheet2",
    thumb: "/shots/tableau/world-happiness-explore.png",
    url: "https://public.tableau.com/app/profile/zaeem.ather/viz/MyWorldHappinessDemo_16895957074290/Sheet2",
  },
];

export const tableauIntro =
  "Self-directed visualisation work on public datasets. Each dashboard below is live and interactive — filter it, hover it, drill into it — or open it full-screen on Tableau Public.";

/**
 * SQL learning projects.
 *
 * These followed AlexTheAnalyst's MySQL tutorial series rather than being
 * self-invented — say so plainly. "Followed a well-regarded tutorial, ran
 * it myself, and can explain every query" is a normal, positive thing to
 * show; claiming it as untutored original work is the one framing that
 * would actually damage credibility if noticed; this category of project is
 * widely recognized in data-analytics hiring.
 *
 * `findings` are real numbers, verified by independently re-running the
 * cleaning + EDA logic against the dataset — not quoted from the tutorial.
 */
export type SqlProject = {
  title: string;
  description: string;
  tools: string[];
  findings: string[];
  repo: string;
};

export const sqlProjects: SqlProject[] = [
  {
    title: "World Layoffs — Data Cleaning",
    description:
      "Cleaned a raw 2,361-row dataset in MySQL: deduplicated with window functions, standardized inconsistent industry and country labels, backfilled missing values via a self-join, and converted a text date column to a real date type.",
    tools: ["MySQL", "Window functions", "CTEs"],
    findings: [
      "Row-level dedup requires partitioning on every column — partitioning on just a few looked right but flagged genuinely distinct layoff rounds as duplicates.",
    ],
    repo: "https://github.com/Zee-arch/sql-world-layoffs-analysis",
  },
  {
    title: "World Layoffs — Exploratory Analysis",
    description:
      "Queried the cleaned dataset for layoff trends by company, industry, country, and time — including a year-by-year top-3 ranking and a rolling monthly total, both via window functions.",
    tools: ["MySQL", "Window functions", "CTEs"],
    findings: [
      "384,659 layoffs recorded, March 2020 – March 2023 — and January 2023 alone accounts for ~85,000 of that, the single largest monthly spike in the dataset.",
    ],
    repo: "https://github.com/Zee-arch/sql-world-layoffs-analysis",
  },
];

export const sqlIntro =
  "Learning projects — I followed AlexTheAnalyst's MySQL tutorial series to build these, on the Kaggle “Layoffs 2022” dataset. Full attribution and the runnable SQL are in the repo.";

export const principles = [
  {
    label: "Judgment over prompting",
    body: "The AI writes the code. I decide the architecture, what gets trusted, and what gets verified independently. That division is the whole job.",
  },
  {
    label: "Shipped isn't the same as working",
    body: "A green typecheck proves nothing. Every feature gets opened in a real browser against real infrastructure before I call it done — which is how I found the bugs on the case-study page.",
  },
  {
    label: "Write down what isn't true yet",
    body: "I keep a running engineering log with an explicit \"what's untested\" section. Naming the gap is what stops it from quietly becoming a claim.",
  },
  {
    label: "Refuse to dress up a guess",
    body: "Estimates get labeled as estimates. A number without a source doesn't render. It cost me features — it's also the reason the output can be trusted.",
  },
];

/** What I'm looking for — sits above the contact block. */
export const seeking = {
  headline: "What I'm looking for",
  body: "Roles where the business context and the product both matter — AI/technical product management, growth and GTM at an AI company, or revenue operations. I'm most useful where someone needs to sit between the people who decide what to build and the people who build it, and be credible to both.",
};
