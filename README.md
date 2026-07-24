# Zaeem Ather — portfolio

A two-page site: a homepage a recruiter can skim in 30 seconds, and a
FounderCopilot case study for anyone who wants the depth.

Built with Next.js 16 (App Router), TypeScript, and Tailwind v4 — deliberately
the same stack as FounderCopilot, so the site is itself a small second proof
point.

```bash
npm install
npm run dev      # http://localhost:3000
```

---

## Before you deploy — 5 things to fill in

All of them live in **`lib/content.ts`**, at the top, marked `TODO`. Anything
left as a `TODO` simply doesn't render — no broken links, no broken images — so
the site is safe to deploy half-filled and finish later.

| What | Where | Notes |
|---|---|---|
| **LinkedIn URL** | `person.links.linkedin` | The important one — every LinkedIn button stays hidden until it's set. |
| **Location** | `person.location` | e.g. `"Lahore, Pakistan · open to remote"` |
| **Education** | `person.education` | Degree, institution, years. The whole section hides until `degree` is set. |
| **CV** | `person.links.resume` | Put the PDF in `public/`, then set this to e.g. `"/zaeem-ather-cv.pdf"`. |
| **Photo** | `person.photo` | Put a roughly-square image in `public/`, then set this to e.g. `"/zaeem.jpg"`. Renders at 112px in the hero. |

One more, in **`app/layout.tsx`**: set `SITE_URL` to your real domain after the
first deploy, so link previews resolve absolutely.

## Deploying

Same flow as FounderCopilot: push to GitHub, import the repo on Vercel, deploy.
No environment variables, no database — every route is statically prerendered.

## Where the content lives

- **`lib/content.ts`** — your details, experience, the flagship summary, working principles.
- **`lib/case-study.ts`** — the FounderCopilot deep-dive: decisions, incidents, verification, limitations, timeline.
- **`components/UI.tsx`** — shared primitives. `RichText` renders backticked spans in the copy as inline code.
- **`components/VerdictMath.tsx`** — the 8-factors-to-verdict diagram, built in code rather than screenshotted.
- **`public/shots/`** — real screenshots captured from the live production app.

Everything on the case-study page is drawn from the FounderCopilot repo's own
engineering log, its git history, or the live deployment. If you change how the
product works, update `lib/case-study.ts` to match — the whole argument of that
page is that its claims are checkable.

## Two decisions worth knowing before you change them

**The reveal-on-scroll animation uses the `cover` range, not `entry`.** An
`entry` range only completes once an element has fully entered the viewport,
which the last element on a page can never do — the document runs out of scroll
first and strands it at zero opacity. This hid the closing call-to-action
during the build. See the comment in `app/globals.css`.

**Font variables live on `<html>`, not `<body>`.** Tailwind's `@theme` emits
`--font-display` onto `:root`, and it references `--font-fraunces`. If the
next/font classes sit on `<body>`, that reference resolves against nothing and
every serif heading silently falls back to system sans. See the comment in
`app/layout.tsx`.
