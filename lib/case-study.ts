/**
 * FounderCopilot case study.
 *
 * Every claim here is drawn from the repo's own engineering log, its git
 * history, or the live deployment — not reconstructed from memory. Where
 * something is a limitation, it says so.
 */

export const scoreFactors = [
  "Problem Urgency",
  "Market Size",
  "Market Timing",
  "Competitive Advantage",
  "MVP Feasibility",
  "Capital Efficiency",
  "Regulatory Ease",
  "Revenue Clarity",
];

export const reportSteps = [
  { name: "Summary", detail: "Verdict, 8-factor radar, TAM/SAM/SOM, go and stop signals" },
  { name: "Financials", detail: "Startup cost, break-even, CAC/LTV, revenue streams" },
  { name: "Roadmap", detail: "MVP timeline, phased milestones, quick wins" },
  { name: "Competitors", detail: "Named players, strengths and weaknesses, your edge" },
  { name: "Validate", detail: "Interview guide, cold outreach drafts, pre-sell copy" },
  { name: "Build Brief", detail: "MVP scope, a reasoned stack, a paste-ready starter prompt" },
  { name: "Full Report", detail: "10-section prose write-up — market, ICP, SWOT, GTM, risks" },
];

export const decisions = [
  {
    n: "01",
    title: "Never let the model report its own score",
    body: "The model scores 8 factors independently — Problem Urgency, Market Size, Market Timing, Competitive Advantage, MVP Feasibility, Capital Efficiency, Regulatory Ease, Revenue Clarity. The headline number is then the rounded mean of those 8, computed in application code, and the verdict is a threshold on it: 70 and above is GO, 45 and above is REFINE, below that is PIVOT. The model is never asked for a top-line number and structurally cannot supply one. The arithmetic behind every verdict is checkable — which is the difference between a score and an opinion with a number on it.",
    takeaway: "A number a user will act on shouldn't come from the same place as the prose explaining it.",
  },
  {
    n: "02",
    title: "Make fabricated figures impossible, not discouraged",
    body: "Competitor funding, valuation, and user-count numbers were disabled outright at first — they can't be verified from a model's training data, and they go stale immediately. When live search grounding was added, I didn't just add \"please cite your sources\" to the prompt. The type carries the constraint: a figure is a SourcedFigure, which cannot exist at all without a Source object attached, and the parser cross-checks that source against the real retrieved results from that same session before anything renders. No match means the field is silently omitted rather than shown as a best guess. When grounding was later switched off, those fields stopped appearing on their own — no prompt change, no code change, no risk of the guard being forgotten.",
    takeaway: "A rule in a prompt is a request. A rule in a type is a guarantee.",
  },
  {
    n: "03",
    title: "Tier the failure behaviour by what's load-bearing",
    body: "Every model response is parsed defensively, but not uniformly. The 8 scores and the 10 prose sections hard-fail if malformed — they're the product, and shipping a report missing them silently would be worse than shipping nothing. Market sizing, financials, roadmap, and competitor data degrade to clearly-labeled fallbacks instead of taking down the whole report. One bad optional field shouldn't cost the user a two-minute generation.",
    takeaway: "\"Handle errors gracefully\" is not one decision. It's a different decision per field.",
  },
  {
    n: "04",
    title: "Research the tool before adopting it",
    body: "I brought in a four-item infrastructure list from outside reading. Two items didn't survive checking. The suggested observability tool, Helicone, had been acquired and moved into maintenance mode months earlier — the current writing about it was largely about migrating away. I switched to Portkey, which does the same gateway job and is actively developed, and flagged that Portkey has its own pending acquisition as a known, lower-severity risk with self-hosting as the fallback. The second item was Gemini context caching, which is meaningless on a Groq-hosted model — shelved rather than built.",
    takeaway: "Half of a good infra decision is finding out what you shouldn't build.",
  },
  {
    n: "05",
    title: "Optional integrations fail open, never closed",
    body: "Requests route through Portkey's gateway when a key is configured and fall back to calling Groq directly when it isn't. Rate limiting runs on Upstash Redis when configured, and falls back to the pre-existing in-memory limiter when it isn't — and if a live Upstash call throws mid-request, middleware lets the request through rather than taking down report generation over a third-party network blip. This pattern was adopted deliberately after a deploy broke on a not-yet-configured service: shipping a hard dependency on infrastructure that isn't set up yet turns every deploy into a coordination problem.",
    takeaway: "New infrastructure should be able to be absent. Especially on the deploy that introduces it.",
  },
  {
    n: "06",
    title: "Hold the line on honest UI copy",
    body: "The landing page originally advertised \"Grounded with live web search\" and \"Powered by Claude.\" The moment the provider changed and grounding went off, both became false — so both were rewritten in the same commit as the swap. This sounds obvious and mostly isn't: the claims lived in a different file from the change that invalidated them, nothing in the build would have caught it, and leaving them would have violated the product's own core promise while the product was arguing for honest AI output.",
    takeaway: "Marketing copy is part of the system. It can regress like anything else.",
  },
];

export const incidents = [
  {
    title: "A serverless timeout was killing requests mid-generation",
    symptom: "Reports failed in production, but succeeded locally.",
    body: "Under provider load, a single generation attempt could take 60–80 seconds before even erroring, and a real successful request measured 124 seconds end to end. The function's `maxDuration` had been set from one local timing run and was far too low — Vercel killed the function mid-retry, and the frontend then crashed trying to parse Vercel's HTML timeout page as JSON. Two fixes: raise the limit to a value measured under real load rather than assumed, and make the frontend handle a non-JSON error response instead of exploding on it. The limit has since been tuned down again after moving to a faster provider — it's a measured number now, revisited per provider, not a constant someone guessed once.",
  },
  {
    title: "A case-sensitive env var silently broke production",
    symptom: "New code was confirmed live, but every generation returned \"API key is missing.\"",
    body: "The deploy was correct: right branch, right build, variable present and scoped to Production. The variable was named `GROQ_API_Key`. The code reads `GROQ_API_KEY`. Environment variable names are case-sensitive, so it never resolved, and nothing anywhere reported an error more specific than the key being absent. Found by reading the actual Vercel dashboard rather than reasoning about what should have worked.",
  },
  {
    title: "A clean merge quietly reintroduced false claims",
    symptom: "No conflicts, no failures, and two false statements back on the live site.",
    body: "After the provider swap, the UI's trust badges were corrected to stop claiming a search-grounding feature that had been turned off. A stale branch merged later brought two more \"grounded in live search\" claims back into the shipped UI. Git had nothing to complain about — both sides were valid code. Caught only by opening the deployed site and reading it. A merge without conflicts is not a merge without regressions.",
  },
  {
    title: "A reasoning model was silently truncating the report",
    symptom: "The last section of the report kept coming back cut off.",
    body: "The model spends hidden tokens on reasoning before it emits any output. Left at its default, enough of the completion budget went to that hidden reasoning that the final section of the JSON was truncated — a valid-looking response, just missing its tail. Setting `reasoning_effort` low fixed it. It reads like a cosmetic tuning parameter and is load-bearing; it's now documented as such so nobody \"cleans it up\" later.",
  },
  {
    title: "The SDK was swallowing the error that explained everything",
    symptom: "A 400 from the gateway with, apparently, no response body.",
    body: "The thrown error message read as though the upstream had returned nothing. Going around the SDK with a raw `fetch()` to the same endpoint and headers returned a completely clear message: the credential slug in the request didn't exist. The gateway auto-names a newly added provider after your account username unless you override it, so the documented default in the example config was simply wrong for this account. One-line config fix — but only after the real error was recovered.",
  },
];

export const verification = [
  {
    title: "Rate limiting, tested away from the app",
    body: "Rather than driving 8+ real generations through the UI to test the limiter — slow, expensive, and it only proves the happy path — a standalone script called the limiter's underlying Redis setup directly with a fixed identity, ten times in a row. The first eight succeeded with the remaining count stepping down to zero; the ninth and tenth were correctly rejected. That isolates the mechanism from whether the app happens to be calling it correctly, which is the part worth proving.",
  },
  {
    title: "Sources, opened by hand",
    body: "When search grounding was live, the returned source URLs were checked by actually opening several of them and confirming the page titles matched what the report claimed they said. A citation that looks like a URL is not evidence that the URL exists.",
  },
  {
    title: "A login \"bug\" that wasn't",
    body: "Password login failed consistently for one account. Rather than patching the auth code, I queried the identity tables on the live project directly: that account had only ever been created through Google OAuth, so it has no password credential and password login must fail. Nothing was broken. Nothing was changed. The lesson stayed in the log — check which providers an account actually has before assuming the code is wrong.",
  },
];

export const limitations = [
  "PDF export is screenshot-based — it photographs the rendered report and places the image into a PDF. It looks right, but the text isn't selectable or searchable. A true text PDF means generating from the data directly; that's a real rework, and it hasn't been done.",
  "Market sizing, financials, and roadmap figures are the model's own labeled estimates. Grounding can inform a number; it doesn't certify it, and the UI never presents them as verified data.",
  "The current provider has no live web access, so source citations are empty by design until grounding is switched back on. The UI copy reflects that rather than papering over it.",
  "Provider choice is still open. Claude, Gemini, and Groq have all run this app; the current one was picked for testing reliability, not output quality, and that comparison is deliberately still to be made.",
];

export const timeline = [
  { date: "Jul 12", event: "Product spec written — one input, one button, one report", tone: "plain" },
  { date: "Jul 17", event: "First commit, deployed to Vercel, live end-to-end", tone: "ship" },
  { date: "Jul 17", event: "Search grounding added, sources self-reported and rendered", tone: "plain" },
  { date: "Jul 18", event: "Landing redesign; Supabase auth foundation merged", tone: "plain" },
  { date: "Jul 21", event: "Reports persist; dashboard ships", tone: "ship" },
  { date: "Jul 21", event: "Provider swapped under load; timeout bug found and fixed", tone: "fix" },
  { date: "Jul 22", event: "Sourced competitor figures; category-aware emphasis; Validate + Build Brief steps", tone: "plain" },
  { date: "Jul 22", event: "Mobile layout audited at 375px and fixed", tone: "fix" },
  { date: "Jul 23", event: "Portkey gateway and Upstash rate limiting, both live-verified", tone: "ship" },
];
