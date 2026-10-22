/**
 * Everything the site says about Zaeem lives here.
 *
 * Positioned for management-trainee, commercial / sales-operations and growth
 * roles at large Pakistani companies (Oct 2026).
 *
 * Source of truth: Zaeem's LinkedIn (linkedin.com/in/zaeem-ather) plus his
 * own answers, Oct 2026. Rule for every line on this site: if he can't
 * explain it in an interview from memory, it doesn't go on the page.
 * Personal figures are kept separate from team totals.
 */

export const person = {
  name: "Zaeem Ather",
  role: "Commercial · Sales Operations · Partnerships",

  tagline: "I've sold, sourced sponsors, cleaned the CRM and walked the stores.",

  intro:
    "NUST business graduate with two years of commercial work: sales operations for a US software company, growth and creator partnerships for an AI product, a student ticketing start-up I co-founded and later shut down, and a Nestlé field internship. At university I raised sponsorships for NUST's biggest events by meeting senior people at telecom, banking and real-estate companies in Islamabad. I'm looking for a management trainee or commercial role where that mix is useful.",

  location: "Islamabad, Pakistan · open to roles anywhere in Pakistan",

  links: {
    linkedin: "https://linkedin.com/in/zaeem-ather",
    email: "mailto:zaeemather7@gmail.com",
    emailLabel: "zaeemather7@gmail.com",
    // Set to e.g. "/zaeem-ather-cv.pdf" once the master CV is in public/.
    // Left as null, the download button doesn't render.
    resume: null as string | null,
    // Used only by the FounderCopilot case-study page, which is no longer
    // linked from the homepage.
    live: "https://founder-copilot-flame.vercel.app",
    github: "https://github.com/Zee-arch/founder-copilot",
    githubProfile: "https://github.com/Zee-arch",
  },

  // Set to e.g. "/zaeem.jpg" once a headshot is in public/. Renders at 112px.
  photo: null as string | null,

  education: {
    degree: "BBA, with a minor in Computer Science",
    institution: "NUST — National University of Sciences and Technology",
    period: "Nov 2021 — May 2025",
  },
};

/** Proof strip under the hero. Every figure is his own, not a team total. */
export const proofPoints = [
  { value: "16,000+", label: "dealer accounts validated for Podium's sales team (from 8,000)" },
  { value: "PKR 3M+", label: "ticket sales processed at Societal, the start-up I co-founded" },
  { value: "~PKR 2M", label: "in sponsorships I brought in personally, across ~50 meetings" },
  { value: "~100", label: "retail stores in Nestlé's chiller-utilisation study" },
];

export type Job = {
  company: string;
  role: string;
  period: string;
  summary: string;
  bullets: string[];
};

/** Reverse-chronological. Titles and dates match LinkedIn exactly. */
export const experience: Job[] = [
  {
    company: "Podium (US, remote)",
    role: "Sales Operations Associate",
    period: "Jul 2025 — Jul 2026",
    summary:
      "Sales operations for a US software company selling AI agents to local businesses. Joined part-time alongside ImagineArt; full-time from Nov 2025.",
    bullets: [
      "Kept Salesforce and Salesloft records accurate for the sales and customer success teams — opportunity splits, owner assignment, demo and appointment logs, new-hire setups.",
      "Resolved 100+ data and reporting requests from sales reps, account executives and customer success managers.",
      "Doubled the dealer-mapping database from 8,000 to 16,000+ validated accounts, widening sales coverage in Auto, HVAC and Plumbing.",
      "Reviewed recorded sales calls in Gong for quality and Do-Not-Call compliance, and flagged recurring data-quality problems to the RevOps team.",
    ],
  },
  {
    company: "ImagineArt (by Vyro), Islamabad",
    role: "Growth Associate",
    period: "Mar 2025 — Nov 2025",
    summary: "Growth and creator partnerships for an AI creative platform.",
    bullets: [
      "Built and ran an influencer programme for the video and avatar products — 20+ AI/tech creators onboarded across YouTube, TikTok, Instagram and LinkedIn.",
      "Spent around $70K of the company's influencer budget across 15–20 campaigns, and negotiated retainer contracts that brought CPMs down by about 25%.",
      "Ran a $25K affiliate programme across Rakuten, PAP and Tapfiliate with 1,200+ affiliates, tracking clicks, conversions and return.",
      "Closed long-term creator partnerships through daily calls and outreach; built lead lists with Apollo, Phantombuster and Hunter.io across 15+ niches.",
    ],
  },
  {
    company: "Societal, Islamabad",
    role: "Co-Founder (side venture)",
    period: "Jun 2024 — May 2025",
    summary: "A ticketing platform for university society events across Pakistan.",
    bullets: [
      "Ran marketing and product — onboarded societies and event organisers onto digital ticketing, and specced new features from organiser feedback.",
      "Processed PKR 3M+ in ticket sales and kept the sales and transaction records.",
      "Shut the company down after concluding there was no viable profit structure.",
    ],
  },
  {
    company: "BoostHive, Islamabad",
    role: "Business Development Executive",
    period: "Aug 2024 — Nov 2024",
    summary: "Outbound sales of Amazon marketing services to UK and US sellers.",
    bullets: [
      "Made 150+ cold calls a day to Amazon store owners, pitching ad campaigns, product launches and A+ content.",
      "Took leads from first call through to contract negotiation, tracking pipeline in the CRM.",
    ],
  },
  {
    company: "Nestlé Pakistan, Islamabad",
    role: "Sales Intern",
    period: "Jul 2024 — Aug 2024",
    summary: "Retail execution and trade marketing in the Islamabad region.",
    bullets: [
      "Analysed chiller utilisation across ~100 retail stores, 9 chiller sizes and 8 distribution channels using 30+ performance metrics.",
      "Visited key accounts, mini-marts, super grocers and 4 distribution hubs; found planogram non-compliance, SKU shortages and competitor stock in Nestlé chillers.",
      "Presented findings and product-placement recommendations to the Zonal Head.",
    ],
  },
  {
    company: "AIESEC in Pakistan",
    role: "Marketing Team Lead → Partnerships Manager → Sales Team Lead & Data Manager",
    period: "Feb 2023 — Jul 2024",
    summary: "Four roles over a year and a half in the student-run exchange organisation.",
    bullets: [
      "Marketing Team Lead: led a team of 3 to 413 recruitment and 364 exchange sign-ups.",
      "Partnerships Manager: led a team of 4 targeting 55+ companies in the National Science & Technology Park, pitching and onboarding partners.",
      "Sales Team Lead: led a team of 5 on outbound sales for exchange programmes; 4 placements; trained the team on objection handling.",
      "Data Manager: brought financial data from 13 local committees into one Excel reporting system for national leadership.",
    ],
  },
];

/** University leadership and sponsorship work. Personal vs team figures kept apart. */
export const leadership = {
  intro:
    "Most of my sponsorship experience comes from NUST's flagship student events. My job was to walk into companies, often in Blue Area, and get director- and VP-level people at telecoms, banks and real-estate firms to put money, print or media support behind a student event.",
  stats: [
    { value: "~PKR 2M", label: "brought in personally" },
    { value: "~50", label: "sponsor meetings, alone or with my team" },
    { value: "PKR 15M+", label: "raised by the sponsorship teams I was part of" },
  ],
  roles: [
    {
      title: "Director of Sponsorships",
      org: "NUST Olympiad",
      period: "2024",
    },
    {
      title: "Director of Sponsorships",
      org: "NUST Science Society",
      period: "2024",
    },
    {
      title: "Director of Sponsorships",
      org: "NUST Literary Festival",
      period: "2023",
    },
    {
      title: "Vice President Outreach",
      org: "NUST Alumni Homecoming",
      period: "2023",
      note: "Led two teams: external relations, who brought in the guests, and sponsorships, who brought in monetary, print and media sponsors.",
    },
    {
      title: "Outreach Manager",
      org: "HAAMI NUST",
      period: "Nov — Dec 2024",
      note: "Outreach for a campaign that raised PKR 3M in donations and PKR 1.5M in sponsorships for underprivileged students.",
    },
  ],
  extras:
    "Also helped Student Affairs and the NUST Placement Office run two job fairs (2023, 2024), and was a campus ambassador for Devsinc, Career Pakistan and Linkstar.",
};

/** Things he'd happily be asked about in an interview. Facts only. */
export const stories = [
  {
    title: "Shutting down my own company",
    body: "Societal processed over PKR 3M in ticket sales, and I still closed it. Sales volume isn't the same as a business that makes money, and we couldn't find a viable profit structure. Deciding to stop was harder than anything I did building it.",
  },
  {
    title: "What a chiller tells you",
    body: "At Nestlé I went store to store across ~100 outlets checking how chillers were actually used: the wrong products on the shelves, missing SKUs, competitor stock inside Nestlé chillers. The report I took to the Zonal Head came from what I saw in the stores, not from a spreadsheet alone.",
  },
  {
    title: "Getting CPMs down",
    body: "At ImagineArt I negotiated retainer contracts with our creators. Weekly content output held steady while the cost per thousand views fell by about a quarter.",
  },
];

/** Tools, stated at the level he actually uses them. */
export const skills = [
  {
    group: "Sales & CRM",
    items: [
      "Salesforce, Salesloft — daily use at Podium",
      "Gong — call review and compliance",
      "Apollo, Phantombuster, Hunter.io — lead sourcing",
    ],
  },
  {
    group: "Growth & partnerships",
    items: [
      "Influencer and creator programmes",
      "Affiliate networks — Rakuten, PAP, Tapfiliate",
      "Sponsorship pitching and negotiation",
    ],
  },
  {
    group: "Data",
    items: [
      "Google Sheets — my everyday tool",
      "Excel — pivot tables, VLOOKUP",
      "SQL — foundations, DataCamp certified",
    ],
  },
];

export const principles = [
  {
    label: "Go and look",
    body: "The Nestlé findings came from standing in front of the chillers, not from the dashboard. I'd rather visit the store, take the meeting or listen to the call.",
  },
  {
    label: "Fix the input, not just the output",
    body: "At AIESEC I standardised how 13 committees entered data instead of cleaning the same errors every month. At Podium I flagged recurring problems to RevOps for the same reason.",
  },
  {
    label: "Stop when the numbers say stop",
    body: "I shut down a company I co-founded because the economics didn't work. I'd rather say that out loud than pretend it was a pivot.",
  },
  {
    label: "Separate my number from the team's",
    body: "The sponsorship teams I was in raised PKR 15M+. My share was about PKR 2M. Both are true, and I'll always tell you which is which.",
  },
];

export const seeking = {
  headline: "What I'm looking for",
  body: "Management trainee programmes, and commercial, sales-operations or growth roles at established companies in Pakistan: FMCG, telecom, fintech, tech. On-site or hybrid, anywhere in the country. I want a role where I'm out talking to customers and partners as much as I'm working on the numbers.",
};

/* ───────────────────────────────────────────────────────────────────────────
 * FounderCopilot — kept only because the case-study page at
 * /work/founder-copilot still imports it. Not linked from the homepage.
 * ─────────────────────────────────────────────────────────────────────────── */
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
