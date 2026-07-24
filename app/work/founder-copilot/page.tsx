import type { Metadata } from "next";
import Link from "next/link";
import { person, founderCopilot } from "@/lib/content";
import {
  decisions,
  incidents,
  limitations,
  reportSteps,
  timeline,
  verification,
} from "@/lib/case-study";
import {
  BrowserFrame,
  Divider,
  Eyebrow,
  LinkPill,
  RichText,
  Section,
  StatusTag,
  TagPill,
} from "@/components/UI";
import { VerdictMath } from "@/components/VerdictMath";

export const metadata: Metadata = {
  // The root layout appends "| Zaeem Ather" via its title template — repeating
  // the name here produces it twice in the tab.
  title: "FounderCopilot — case study",
  description:
    "How a full-stack AI SaaS got specced, built, shipped to production, and debugged — including the decisions and the incidents.",
};

const toneStyles: Record<string, string> = {
  ship: "bg-shipped",
  fix: "bg-accent",
  plain: "bg-paper-line",
};

export default function FounderCopilotCaseStudy() {
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-paper-line/70 bg-paper/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-3.5">
          <Link
            href="/"
            className="font-mono text-xs text-ink-faint transition-colors hover:text-ink"
          >
            ← {person.name}
          </Link>
          <div className="flex gap-5 font-mono text-xs text-ink-faint">
            <a href="#decisions" className="transition-colors hover:text-ink">
              Decisions
            </a>
            <a href="#incidents" className="transition-colors hover:text-ink">
              Incidents
            </a>
          </div>
        </nav>
      </header>

      <main>
        {/* ------------------------------------------------------- intro */}
        <div className="mx-auto max-w-3xl px-6">
          <section className="animate-[fadein_0.6s_ease-out] pt-16 sm:pt-24">
            <div className="flex flex-wrap items-center gap-3">
              <Eyebrow>Case study</Eyebrow>
              <StatusTag>{founderCopilot.status}</StatusTag>
              <span className="font-mono text-[11px] text-ink-faint">
                {founderCopilot.period}
              </span>
            </div>

            <h1 className="mt-5 font-display text-4xl leading-[1.1] text-ink sm:text-5xl">
              {founderCopilot.name}
            </h1>
            <p className="mt-4 max-w-xl font-display text-xl leading-snug text-ink-soft">
              {founderCopilot.oneLiner}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {founderCopilot.tags.map((tag) => (
                <TagPill key={tag}>{tag}</TagPill>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <LinkPill href={person.links.live}>Live app ↗</LinkPill>
              <LinkPill href={person.links.github}>GitHub ↗</LinkPill>
            </div>
          </section>
        </div>

        <div className="mx-auto mt-12 max-w-4xl px-6 sm:mt-16">
          <div className="reveal">
            <BrowserFrame
              src="/shots/fc-landing.png"
              alt="The FounderCopilot landing page in production: an idea input on the left, and an example report card on the right scoring 78 out of 100 with a GO verdict and four visible factor scores."
              url="founder-copilot-flame.vercel.app"
              priority
            />
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-6">
          {/* --------------------------------------------------- brief */}
          <Section eyebrow="The brief I set myself" className="pt-16 sm:pt-24">
            <p className="mt-5 text-[16px] leading-[1.8] text-ink-soft">
              I&rsquo;d just finished a year split between two roles — growth at
              an AI creative app, sales operations at a company selling AI agents
              to local businesses. I understood how products get sold and how
              revenue actually gets operated. What I hadn&rsquo;t tested was
              whether I could build one.
            </p>
            <p className="mt-5 text-[16px] leading-[1.8] text-ink-soft">
              So the constraint was deliberate: AI coding tools would write every
              line, and I would supply everything else — the spec, the
              architecture, the decisions about what to trust, and the
              verification. If that division works, it&rsquo;s a genuinely
              different way to ship software. If it doesn&rsquo;t, I&rsquo;d find
              out fast. The rest of this page is what happened.
            </p>
          </Section>

          <div className="my-16 sm:my-20">
            <Divider />
          </div>

          {/* ------------------------------------------------ research */}
          <Section eyebrow="Research first" title="The category had already picked its fault line.">
            <p className="mt-5 text-[16px] leading-[1.8] text-ink-soft">
              Before scoping a single feature I mapped the field — Preuve AI,
              DimeADozen, IdeaProof, ValidatorAI and others — and one pattern
              dominated: the entire category was competing on whether its output
              could be believed. Tools handing back a confident score with
              nothing behind it were being publicly called out for it, including
              the most visible player in the space.
            </p>
            <p className="mt-5 text-[16px] leading-[1.8] text-ink-soft">
              That set the roadmap. Source-backed competitor data, a verdict a
              user can recompute by hand, and estimates that are labeled as
              estimates weren&rsquo;t features I thought sounded nice — they were
              the specific thing the market was punishing people for getting
              wrong. It also set a rule I held for the rest of the build:{" "}
              <span className="text-ink">
                no interface that dresses AI output up as verified data
              </span>
              , however good it looks in a screenshot.
            </p>
          </Section>

          <div className="my-16 sm:my-20">
            <Divider />
          </div>

          {/* ---------------------------------------------- what it is */}
          <Section eyebrow="What it does">
            <p className="mt-5 text-[16px] leading-[1.8] text-ink-soft">
              One sentence in. Eight factors scored independently. A verdict
              computed from them in code. Then a seven-part report, each part on
              its own URL, exportable to PDF:
            </p>
            <ol className="mt-7 space-y-0">
              {reportSteps.map((step, i) => (
                <li
                  key={step.name}
                  className="flex gap-4 border-t border-paper-line-soft py-3.5 last:border-b"
                >
                  <span className="mt-0.5 w-5 shrink-0 font-mono text-xs text-ink-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="w-28 shrink-0 font-display text-[15px] text-ink">
                    {step.name}
                  </span>
                  <span className="text-[14px] leading-relaxed text-ink-soft">
                    {step.detail}
                  </span>
                </li>
              ))}
            </ol>
            <div className="mt-10">
              <BrowserFrame
                src="/shots/fc-how.png"
                alt="The FounderCopilot 'How it works' page, describing the three steps and stating that the overall score and verdict are computed from the eight factor scores in code."
                url="founder-copilot-flame.vercel.app/how-it-works"
              />
            </div>
          </Section>

          <div className="my-16 sm:my-20">
            <Divider />
          </div>
        </div>

        {/* -------------------------------------------- verdict diagram */}
        <section className="reveal mx-auto max-w-4xl px-6">
          <div className="mx-auto max-w-3xl">
            <Eyebrow>The core decision, drawn</Eyebrow>
            <h2 className="mt-4 font-display text-2xl leading-snug text-ink sm:text-3xl">
              The model fills in the bars. It never writes the number.
            </h2>
          </div>
          <div className="mt-8">
            <VerdictMath />
          </div>
        </section>

        <div className="mx-auto max-w-3xl px-6">
          <div className="my-16 sm:my-20">
            <Divider />
          </div>

          {/* ------------------------------------------------ decisions */}
          <Section
            id="decisions"
            eyebrow="Decisions that mattered"
            title="Six calls I had to make, and why."
          >
            <div className="mt-10 space-y-12">
              {decisions.map((d) => (
                <article key={d.n}>
                  <div className="flex gap-4">
                    <span className="mt-1 font-mono text-xs text-accent">{d.n}</span>
                    <div className="min-w-0">
                      <h3 className="font-display text-xl leading-snug text-ink">
                        {d.title}
                      </h3>
                      <p className="mt-3 text-[15px] leading-[1.75] text-ink-soft">
                        {d.body}
                      </p>
                      <p className="mt-4 border-l-2 border-accent/30 py-1 pl-4 font-display text-[15px] italic leading-relaxed text-ink">
                        {d.takeaway}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </Section>

          <div className="my-16 sm:my-20">
            <Divider />
          </div>

          {/* ------------------------------------------------ incidents */}
          <Section
            id="incidents"
            eyebrow="Found in production"
            title="Five things that were broken, and how I knew."
          >
            <p className="mt-5 text-[16px] leading-[1.8] text-ink-soft">
              None of these were caught by the build. Every one was found by
              opening the deployed thing and checking whether it did what it
              claimed.
            </p>
            <div className="mt-10 space-y-11">
              {incidents.map((b) => (
                <article key={b.title}>
                  <h3 className="font-display text-xl leading-snug text-ink">
                    {b.title}
                  </h3>
                  <p className="mt-2 font-mono text-[12px] leading-relaxed text-ink-faint">
                    SYMPTOM — {b.symptom}
                  </p>
                  <p className="mt-3 text-[15px] leading-[1.75] text-ink-soft">
                    <RichText>{b.body}</RichText>
                  </p>
                </article>
              ))}
            </div>
          </Section>

          <div className="my-16 sm:my-20">
            <Divider />
          </div>

          {/* --------------------------------------------- verification */}
          <Section eyebrow="How things got verified" title="Testing the mechanism, not the happy path.">
            <div className="mt-9 space-y-9">
              {verification.map((v) => (
                <div key={v.title}>
                  <h3 className="font-display text-lg text-ink">{v.title}</h3>
                  <p className="mt-2 text-[15px] leading-[1.75] text-ink-soft">
                    {v.body}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          <div className="my-16 sm:my-20">
            <Divider />
          </div>

          {/* -------------------------------------------------- timeline */}
          <Section eyebrow="Build log">
            <ol className="mt-7">
              {timeline.map((t, i) => (
                <li key={i} className="flex gap-4 py-2.5">
                  <span className="w-14 shrink-0 font-mono text-xs leading-6 text-ink-faint">
                    {t.date}
                  </span>
                  <span
                    className={`mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                      toneStyles[t.tone] ?? toneStyles.plain
                    }`}
                    aria-hidden
                  />
                  <span className="text-[14.5px] leading-6 text-ink-soft">
                    {t.event}
                  </span>
                </li>
              ))}
            </ol>
          </Section>

          <div className="my-16 sm:my-20">
            <Divider />
          </div>

          {/* ----------------------------------------------- limitations */}
          <Section
            eyebrow="What it doesn't do"
            title="The honest list."
          >
            <p className="mt-5 text-[16px] leading-[1.8] text-ink-soft">
              The project keeps an explicit &ldquo;what&rsquo;s untested&rdquo;
              section in its engineering log. Naming a gap is what stops it from
              quietly turning into a claim. These are current:
            </p>
            <ul className="mt-7 space-y-4">
              {limitations.map((l) => (
                <li
                  key={l}
                  className="flex gap-3 text-[15px] leading-[1.75] text-ink-soft"
                >
                  <span className="mt-1.5 shrink-0 font-mono text-xs text-ink-faint">
                    —
                  </span>
                  {l}
                </li>
              ))}
            </ul>
          </Section>

          <div className="my-16 sm:my-20">
            <Divider />
          </div>

          {/* ---------------------------------------------------- close */}
          <section id="status" className="reveal scroll-mt-24 pb-20 sm:pb-28">
            <Eyebrow>Where it stands</Eyebrow>
            <p className="mt-5 text-[16px] leading-[1.8] text-ink-soft">
              It&rsquo;s live, it works end to end, and people other than me have
              generated reports with it. The next phases — PRD generation,
              landing page generation, marketing plans, investor decks — are
              specced and not started, because shipping the validation loop
              properly mattered more than starting four more.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <LinkPill href={person.links.live}>Try it ↗</LinkPill>
              <LinkPill href={person.links.github}>Read the code ↗</LinkPill>
              <LinkPill href={person.links.email}>Get in touch</LinkPill>
            </div>
          </section>
        </div>
      </main>

      <footer className="border-t border-paper-line">
        <div className="mx-auto flex max-w-3xl flex-col gap-2 px-6 py-8 font-mono text-[11px] text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="transition-colors hover:text-ink">
            ← Back to {person.name}
          </Link>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </>
  );
}
