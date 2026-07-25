import Link from "next/link";
import {
  person,
  proofPoints,
  founderCopilot,
  experience,
  tableauProjects,
  tableauIntro,
  sqlProjects,
  sqlIntro,
  principles,
  seeking,
} from "@/lib/content";
import { TableauViz } from "@/components/TableauViz";
import {
  BrowserFrame,
  Divider,
  Eyebrow,
  LinkPill,
  PrimaryLink,
  Section,
  StatusTag,
  TagPill,
} from "@/components/UI";

const filled = (v: string | null | undefined): v is string =>
  Boolean(v) && !v!.startsWith("TODO");

export default function Home() {
  return (
    <>
      {/* ------------------------------------------------------------ nav */}
      <header className="sticky top-0 z-50 border-b border-paper-line/70 bg-paper/85 backdrop-blur-md">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3.5">
          <span className="font-mono text-xs tracking-tight text-ink">
            {person.name}
          </span>
          <div className="flex items-center gap-5 font-mono text-xs text-ink-faint">
            <a href="#work" className="transition-colors hover:text-ink">
              Work
            </a>
            <a href="#experience" className="hidden transition-colors hover:text-ink sm:inline">
              Experience
            </a>
            {tableauProjects.length > 0 && (
              <a href="#data" className="hidden transition-colors hover:text-ink sm:inline">
                Data
              </a>
            )}
            <a href="#contact" className="transition-colors hover:text-ink">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-6">
        {/* -------------------------------------------------------- hero */}
        <section className="animate-[fadein_0.6s_ease-out] py-16 sm:py-24">
          <div className="flex items-start gap-6">
            {filled(person.photo) && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={person.photo}
                alt={person.name}
                width={112}
                height={112}
                className="hidden h-28 w-28 shrink-0 rounded-full border border-paper-line object-cover sm:block"
              />
            )}
            <div className="min-w-0">
              <Eyebrow>{person.role}</Eyebrow>
              <h1 className="mt-5 max-w-3xl font-display text-[2.15rem] leading-[1.12] text-ink sm:text-5xl sm:leading-[1.08]">
                {person.tagline}
              </h1>
            </div>
          </div>

          <p className="mt-8 max-w-2xl text-[16.5px] leading-[1.75] text-ink-soft">
            {person.intro}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <PrimaryLink href="#work">See the work ↓</PrimaryLink>
            <LinkPill href={person.links.linkedin}>LinkedIn</LinkPill>
            <LinkPill href={person.links.email}>Email</LinkPill>
            <LinkPill href={person.links.resume}>Download CV</LinkPill>
          </div>

          {filled(person.location) && (
            <p className="mt-7 font-mono text-xs text-ink-faint">
              {person.location}
            </p>
          )}
        </section>

        {/* ------------------------------------------------ proof strip */}
        <div className="reveal grid grid-cols-2 gap-y-7 border-y border-paper-line py-7 sm:grid-cols-4">
          {proofPoints.map((p) => (
            <div key={p.label}>
              <p className="font-display text-2xl text-ink">{p.value}</p>
              <p className="mt-1 pr-4 text-[12.5px] leading-snug text-ink-faint">
                {p.label}
              </p>
            </div>
          ))}
        </div>
      </main>

      {/* ---------------------------------------------------- flagship */}
      <section id="work" className="reveal mt-20 scroll-mt-20 bg-night py-16 sm:mt-28 sm:py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-wrap items-center gap-3">
            <Eyebrow tone="night">Flagship project</Eyebrow>
            <StatusTag>{founderCopilot.status}</StatusTag>
            <span className="font-mono text-[11px] text-night-faint">
              {founderCopilot.period}
            </span>
          </div>

          <div className="mt-6 grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-start lg:gap-14">
            <div>
              <h2 className="font-display text-3xl text-night-ink sm:text-4xl">
                {founderCopilot.name}
              </h2>
              <p className="mt-3 max-w-lg font-display text-lg leading-snug text-night-soft">
                {founderCopilot.oneLiner}
              </p>
              <p className="mt-6 max-w-lg text-[15px] leading-[1.75] text-night-soft">
                {founderCopilot.pitch}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {founderCopilot.tags.map((tag) => (
                  <TagPill key={tag} tone="night">
                    {tag}
                  </TagPill>
                ))}
              </div>

              <dl className="mt-9 space-y-5 border-t border-night-line pt-7">
                {founderCopilot.highlights.map((h) => (
                  <div key={h.claim}>
                    <dt className="flex gap-2.5 font-display text-[15px] text-night-ink">
                      <span className="mt-px shrink-0 font-mono text-accent-soft">
                        →
                      </span>
                      {h.claim}
                    </dt>
                    <dd className="mt-1.5 pl-6 text-[13.5px] leading-relaxed text-night-soft">
                      {h.detail}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/work/founder-copilot"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 font-mono text-xs text-white transition-colors hover:bg-accent-soft"
                >
                  Read the full case study →
                </Link>
                <LinkPill href={person.links.live} tone="night">
                  Live app ↗
                </LinkPill>
                <LinkPill href={person.links.github} tone="night">
                  GitHub ↗
                </LinkPill>
              </div>
            </div>

            <div className="lg:sticky lg:top-24">
              <BrowserFrame
                src="/shots/fc-landing.png"
                alt="The FounderCopilot landing page, showing the idea input and an example validation report scoring 78 out of 100 with a GO verdict."
                url="founder-copilot-flame.vercel.app"
              />
              <p className="mt-3 font-mono text-[11px] text-night-faint">
                The live product, captured from production.
              </p>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-5xl px-6">
        {/* ---------------------------------------------- experience */}
        <Section id="experience" eyebrow="Experience" className="pt-20 sm:pt-28">
          <div className="mt-8 space-y-11">
            {experience.map((job) => (
              <div key={job.company} className="grid gap-3 sm:grid-cols-[7.5rem_1fr] sm:gap-8">
                <p className="font-mono text-xs leading-6 text-ink-faint">
                  {job.period}
                </p>
                <div>
                  <h3 className="font-display text-xl text-ink">{job.role}</h3>
                  <p className="mt-0.5 text-sm text-ink-faint">
                    {job.company} — {job.summary}
                  </p>
                  <ul className="mt-3.5 space-y-2">
                    {job.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex gap-2.5 text-[14.5px] leading-relaxed text-ink-soft"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-paper-line" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* ------------------------------------- data visualisation */}
        {tableauProjects.length > 0 && (
          <>
            <div className="my-16 sm:my-20">
              <Divider />
            </div>

            <Section
              id="data"
              eyebrow="Data visualisation"
              title="Tableau dashboards, live and interactive."
            >
              <p className="mt-5 max-w-2xl text-[15px] leading-[1.75] text-ink-soft">
                {tableauIntro}
              </p>

              <div className="mt-10 space-y-14">
                {tableauProjects.map((p) => (
                  <article key={p.view}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                      <h3 className="font-display text-xl leading-snug text-ink">
                        {p.title}
                      </h3>
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono text-xs text-accent underline-offset-4 hover:underline"
                      >
                        View on Tableau Public ↗
                      </a>
                    </div>
                    <p className="mt-2 max-w-2xl text-[14.5px] leading-relaxed text-ink-soft">
                      {p.description}
                    </p>
                    <div className="mt-5">
                      <TableauViz
                        title={p.title}
                        view={p.view}
                        url={p.url}
                        thumb={p.thumb}
                      />
                    </div>
                  </article>
                ))}
              </div>
            </Section>
          </>
        )}

        {/* ---------------------------------------------- sql projects */}
        {sqlProjects.length > 0 && (
          <>
            <div className="my-16 sm:my-20">
              <Divider />
            </div>

            <Section
              id="sql"
              eyebrow="SQL practice"
              title="Data cleaning and EDA in MySQL."
            >
              <p className="mt-5 max-w-2xl text-[15px] leading-[1.75] text-ink-soft">
                {sqlIntro}
              </p>

              <div className="mt-9 grid gap-x-10 gap-y-10 sm:grid-cols-2">
                {sqlProjects.map((p) => (
                  <article key={p.title}>
                    <h3 className="font-display text-lg leading-snug text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">
                      {p.description}
                    </p>
                    {p.findings.length > 0 && (
                      <ul className="mt-3 space-y-1.5">
                        {p.findings.map((f) => (
                          <li
                            key={f}
                            className="flex gap-2 text-[13.5px] leading-relaxed text-ink-soft"
                          >
                            <span className="mt-1.5 shrink-0 font-mono text-[10px] text-ink-faint">
                              ▸
                            </span>
                            {f}
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="mt-3.5 flex flex-wrap items-center gap-2">
                      {p.tools.map((t) => (
                        <TagPill key={t}>{t}</TagPill>
                      ))}
                    </div>
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3.5 inline-block font-mono text-xs text-accent underline-offset-4 hover:underline"
                    >
                      View the SQL on GitHub ↗
                    </a>
                  </article>
                ))}
              </div>
            </Section>
          </>
        )}

        <div className="my-16 sm:my-20">
          <Divider />
        </div>

        {/* --------------------------------------------- how I work */}
        <Section eyebrow="How I work" title="Four rules I actually held to.">
          <div className="mt-8 grid gap-x-10 gap-y-9 sm:grid-cols-2">
            {principles.map((p) => (
              <div key={p.label}>
                <h3 className="font-display text-lg text-ink">{p.label}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <div className="my-16 sm:my-20">
          <Divider />
        </div>

        {/* ----------------------------------------------- education */}
        {filled(person.education.degree) && (
          <>
            <Section eyebrow="Education">
              {/* Without a period there's nothing to fill the left gutter, so
                  drop the two-column grid rather than leaving the entry
                  floating against an empty column. */}
              <div
                className={
                  filled(person.education.period)
                    ? "mt-6 grid gap-3 sm:grid-cols-[7.5rem_1fr] sm:gap-8"
                    : "mt-6"
                }
              >
                {filled(person.education.period) && (
                  <p className="font-mono text-xs leading-6 text-ink-faint">
                    {person.education.period}
                  </p>
                )}
                <div>
                  <h3 className="font-display text-lg text-ink">
                    {person.education.degree}
                  </h3>
                  <p className="mt-0.5 text-sm text-ink-faint">
                    {person.education.institution}
                  </p>
                </div>
              </div>
            </Section>

            <div className="my-16 sm:my-20">
              <Divider />
            </div>
          </>
        )}

        {/* ------------------------------------------------- contact */}
        <Section id="contact" eyebrow="Contact" title={seeking.headline} className="pb-20 sm:pb-28">
          <p className="mt-5 max-w-2xl text-[16px] leading-[1.75] text-ink-soft">
            {seeking.body}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <PrimaryLink href={person.links.email}>
              {person.links.emailLabel}
            </PrimaryLink>
            <LinkPill href={person.links.linkedin}>LinkedIn ↗</LinkPill>
            <LinkPill href={person.links.githubProfile}>GitHub ↗</LinkPill>
            <LinkPill href={person.links.resume}>Download CV</LinkPill>
          </div>
        </Section>
      </main>

      <footer className="border-t border-paper-line">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 font-mono text-[11px] text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {person.name}</span>
          <span>Built with Next.js — the same stack as the project above.</span>
        </div>
      </footer>
    </>
  );
}
