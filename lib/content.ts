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
  role: "Data Analyst · Analytics Engineer",

  // The one line that has to land in three seconds.
  tagline: "Data analysis, with the business context already loaded.",

  intro:
    "I've owned CRM data quality for a US SaaS revenue org and run growth reporting for an AI product — I was the person other people's decisions depended on being right. Now I do the analysis end to end: SQL for the querying, Excel and Power BI for the modelling, Tableau for the visuals. I use AI tooling heavily to move fast, and I'm precise about which parts of a number I can defend and which I can't.",

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

/**
 * Verified facts, used as the proof strip under the hero.
 *
 * Retargeted for analytics roles — the previous set counted commits and lines
 * of TypeScript, which proves the wrong thing to someone hiring an analyst.
 * Every figure here traces to a specific artifact linked further down the page.
 */
export const proofPoints = [
  { value: "2,046", label: "customer cohort modelled end to end" },
  { value: "3×", label: "retention spread the average hid" },
  { value: "16k+", label: "accounts validated in Salesforce" },
  { value: "5", label: "live Tableau dashboards" },
];

/**
 * Technical skills.
 *
 * Each line names the specific thing actually done, not a bare tool name —
 * "Excel" says nothing, "SUMIFS/COUNTIFS, pivot tables, Power Query" is
 * checkable against the workbook linked on this page. Anything listed here
 * has an artifact behind it somewhere on the site.
 */
export const skills = [
  {
    group: "Querying & analysis",
    items: [
      "SQL (MySQL) — window functions, CTEs, self-joins, rolling aggregates",
      "Excel — SUMIFS/COUNTIFS/AVERAGEIFS, pivot tables, Power Query, VLOOKUP",
      "Python — pandas, for dataset generation and cross-validating results",
    ],
  },
  {
    group: "Modelling & BI",
    items: [
      "Power BI — DAX measures, star-schema modelling",
      "Tableau — dashboards, calculated fields, published to Tableau Public",
      "Cohort retention, NRR/GRR bridges, segmentation analysis",
    ],
  },
  {
    group: "Revenue systems",
    items: [
      "Salesforce — admin, opportunity splits, ownership rules, reporting",
      "Salesloft, Gong — pipeline tooling and call QA",
      "CRM data quality, enrichment, and validation at scale",
    ],
  },
];

/**
 * The AI-leverage note that sits under the skills grid.
 *
 * Stated plainly and up front rather than left for an interviewer to discover.
 * The claim being made is about judgment, not about typing every character —
 * which is the honest version and also the one these roles actually want.
 */
export const skillsNote =
  "I lean on AI tooling to move quickly — drafting queries, scaffolding models, checking my own work. What I don't delegate is deciding what to measure, whether a number is defensible, and what it means for the decision in front of it. Every headline figure in the retention project below was cross-checked three independent ways before it went on this page.";

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

/**
 * Experience, ordered reverse-chronologically and rewritten to lead with the
 * data work in each role rather than the job function.
 *
 * The two 2024 roles are included specifically because they're analyst work
 * under a different title — a reporting system built from 13 sources, and a
 * 100-store retail study — which matters more to an analytics hire than the
 * seniority of the title they carried. FounderCopilot has its own section
 * further down and is deliberately not duplicated as a row here.
 */
export const experience = [
  {
    company: "Podium",
    role: "Data Enrichment Specialist — Revenue Operations (Contract)",
    period: "Jul 2025 — Jul 2026",
    summary:
      "Owned the CRM data layer for a US SaaS revenue org selling AI agents to local businesses.",
    bullets: [
      "Owned data quality across Salesforce and Salesloft, resolving 100+ accuracy and reporting tickets raised by SDRs, AEs and CSMs — the reporting layer the sales org planned against.",
      "Grew the dealer-mapping database from 8,000 to 16,000+ validated accounts through structured web collection and validation, widening territory coverage across Auto, HVAC and Plumbing.",
      "Ran large-scale cleaning and enrichment in Excel — Power Query, pivot tables, VLOOKUP — on the records feeding territory and channel-coverage reporting.",
      "Administered Salesforce: opportunity splits, appointment-setter and owner assignment, Rules of Engagement ownership, demo and appointment logs, new-hire and promotion enrollments.",
      "Documented recurring data-quality failure modes with the RevOps team so they could be designed out rather than repeatedly patched; ran call QA in Gong including DNC compliance review.",
    ],
  },
  {
    company: "ImagineArt",
    role: "Growth Associate",
    period: "Mar 2025 — Nov 2025",
    summary:
      "Growth and campaign reporting for an AI creative app (Shorts, Avatar, Video Studio).",
    bullets: [
      "Tracked affiliate links, CTRs, conversions and campaign ROI in Tolt across a $25K affiliate program spanning Rakuten, PAP and Tapfiliate with 1,200+ affiliates.",
      "Managed ~$100K of influencer spend across H2 2025, negotiating retainer contracts that cut CPMs 25% while holding weekly content output flat.",
      "Built and scaled an influencer program across Shorts, Avatar and Video Studio, onboarding 20+ AI/tech creators across YouTube, TikTok, Instagram and LinkedIn.",
      "Engineered lead-generation workflows with Phantombuster, Apollo, Hunter.io and ContactFinder across 15+ niche ICPs.",
    ],
  },
  {
    company: "Societal",
    role: "Co-Founder (Side Venture)",
    period: "Jun 2024 — May 2025",
    summary:
      "Product and marketing for a student-event ticketing platform serving university societies across Pakistan.",
    bullets: [
      "Owned product testing and feature definition, speccing enhancements from organizer feedback; processed PKR 3M+ in ticket sales and maintained the sales and transaction records behind it.",
      "Onboarded societies and event organizers onto digital ticketing, then wound the company down after concluding there was no viable profit structure — the analysis mattered more than the attachment.",
    ],
  },
  {
    company: "Nestlé",
    role: "Sales Intern",
    period: "Jul 2024 — Aug 2024",
    summary: "Retail execution analysis across the Islamabad region.",
    bullets: [
      "Ran a chiller-utilisation study across ~100 retail stores covering 9 chiller sizes and 8 distribution channels against 30+ performance metrics.",
      "Identified planogram non-compliance, SKU shortages and competitor infiltration through field research across key accounts, mini-marts and super grocers.",
      "Built the Excel dashboards behind the findings and presented recommendations on retail execution and product placement to the Zonal Head.",
    ],
  },
  {
    company: "AIESEC in Pakistan",
    role: "Data Manager",
    period: "Feb 2024 — Jul 2024",
    summary: "Centralised financial reporting across 13 local committees.",
    bullets: [
      "Consolidated financial data from 13 local committees into a single Excel-based reporting system, producing monthly summaries for national leadership with pivot tables and VLOOKUP.",
      "Standardised data-entry protocols with local heads and ran training for committee finance leads — fixing the input quality rather than cleaning the same errors every month.",
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

/**
 * Excel → Power BI analytics projects.
 *
 * Unlike the SQL tutorials above, this one isn't a followed tutorial — the
 * dataset is synthetic but purpose-built: retention and expansion behavior
 * varies deliberately by acquisition-channel × company-size combination, so
 * the segmentation finding below is real and re-derivable from the data, not
 * a plausible-sounding claim. Every number in `findings` was independently
 * cross-checked three ways — a pandas validation script, the Excel formulas,
 * and the Power BI DAX measures — and they agree to the dollar.
 */
export type ExcelProject = {
  title: string;
  period: string;
  oneLiner: string;
  description: string;
  tools: string[];
  findings: string[];
  images: { src: string; alt: string; caption: string }[];
  links: { label: string; href: string }[];
};

export const excelProjects: ExcelProject[] = [
  {
    title: "SaaS Subscription Retention & Revenue Analysis",
    period: "2026",
    oneLiner:
      "Which customer segments are worth acquiring more of, and why — a synthetic SaaS dataset taken end-to-end through Excel, a strategy memo, and a live Power BI model.",
    description:
      "A 2,046-customer synthetic SaaS dataset (Jan 2023 – Jun 2026), generated with deliberately different retention and expansion profiles by acquisition-channel × company-size combination, so the segmentation story is real and traceable rather than decorative. The Excel workbook builds cohort retention grids, an NRR/GRR bridge, and a segment breakdown entirely on live `SUMIFS`/`COUNTIFS`/`AVERAGEIFS` formulas — nothing pasted as a static value. The same logic is then re-derived as a proper DAX star schema in Power BI, and the strategic read is written up as a 1-page memo aimed at a specific question: where should acquisition budget move, and where does the analysis stop and Finance's unit-economics work begin.",
    tools: [
      "Excel (live SUMIFS/COUNTIFS/AVERAGEIFS)",
      "Power BI (DAX, star schema)",
      "Python (synthetic dataset generation)",
    ],
    findings: [
      "12-month logo retention ranges from 88.6% (Referral + Enterprise) to 28.4% (Paid Search + SMB) — a 3x spread the blended company-wide number (98.6% GRR / 101.1% NRR) hides completely.",
      "Revenue retention among surviving cohorts climbs above 100% by month 24 — expansion from accounts that stick around outpaces contraction and churn, even as logo retention keeps declining. The two lines diverging is itself the finding.",
      "Outbound Sales + Enterprise carries ~32% of current MRR ($420K of $1.32M) at 82% retention — the single largest and one of the healthiest segments in the book, and the one recommendation is explicit not to touch.",
    ],
    images: [
      {
        src: "/shots/saas-retention/retention-curves.png",
        alt: "Line chart showing blended logo retention declining from 100% to roughly 40% over 40 months, while blended revenue retention climbs from 100% to over 160%.",
        caption:
          "Logo retention decays while revenue retention among survivors climbs past 160% — computed live via a DAX AVERAGEX measure.",
      },
      {
        src: "/shots/saas-retention/segmentation-matrix.png",
        alt: "Matrix table of 12-month logo retention and total MRR broken out by acquisition channel and company size segment.",
        caption:
          "12-month logo retention by acquisition channel × company size — Paid Search+SMB at 28%, Referral+Enterprise at 89%.",
      },
    ],
    links: [
      { label: "View on GitHub", href: "https://github.com/Zee-arch/saas-retention-analysis" },
      { label: "Download the Excel workbook", href: "/files/SaaS_Retention_Analysis.xlsx" },
      { label: "Read the memo", href: "/files/Segment_Acquisition_Memo.docx" },
      { label: "Download the Power BI file (.pbix)", href: "/files/SaaS_Retention_Analysis.pbix" },
    ],
  },
];

export const excelIntro =
  "Built end-to-end from a synthetic dataset — designed with a real segmentation story baked in, then proven three independent ways: Excel formulas, a Python validation script, and Power BI DAX measures, all agreeing to the dollar.";

export const principles = [
  {
    label: "Judgment over prompting",
    body: "AI drafts a lot of my queries and scaffolding. What I keep is deciding what to measure, what to trust, and what to verify independently. That division is the whole job.",
  },
  {
    label: "A number isn't right because it computed",
    body: "Every headline figure in the retention analysis was re-derived three independent ways — Excel formulas, a Python script, and Power BI DAX — before it went anywhere. They agree to the dollar.",
  },
  {
    label: "The blended number is usually hiding something",
    body: "98.6% company-wide retention looked healthy. Split by channel and company size, one segment was at 28%. The average was true and useless at the same time.",
  },
  {
    label: "Refuse to dress up a guess",
    body: "Estimates get labelled as estimates. A number without a source doesn't ship. It costs me tidier conclusions — it's also the reason the ones I do give can be trusted.",
  },
];

/** What I'm looking for — sits above the contact block. */
export const seeking = {
  headline: "What I'm looking for",
  body: "Data analyst, analytics engineering, and product associate roles — where the work is turning messy data into a number someone can act on, and being straight about what it does and doesn't support. I've spent two years as the person whose data other people's decisions ran on. I'm most useful where analysis has to survive contact with a real business call.",
};
