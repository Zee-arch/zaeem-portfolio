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
  tagline: "I ran growth and revenue ops for AI companies. Now I ship the products too.",

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
    company: "Vyro / ImagineArt",
    role: "Growth Associate",
    period: "2025 — 2026",
    summary:
      "Growth for an AI creative app with a large consumer creator base.",
    bullets: [
      "Ran the creator community across social platforms for ImagineArt, Vyro's AI image and video product.",
      "Managed the affiliate program on Rakuten — partner recruitment, tracking, and payout operations.",
      "Led influencer marketing to bring established AI creators onto the platform.",
    ],
  },
  {
    company: "Podium",
    role: "Sales Operations Specialist (Contract)",
    period: "2025",
    summary:
      "Revenue operations for a US sales org selling AI agents to local businesses.",
    bullets: [
      "Administered Salesforce for the sales org: opportunity splits, appointment-setter and owner assignment, new-hire and promotion enrollments.",
      "Ran QA on recorded sales calls in Gong, including DNC compliance review.",
      "Built dealer-mapping projects in Excel supporting territory and channel coverage.",
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
