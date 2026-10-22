import {
  person,
  proofPoints,
  experience,
  leadership,
  stories,
  skills,
  principles,
  seeking,
} from "@/lib/content";
import {
  Divider,
  Eyebrow,
  LinkPill,
  PrimaryLink,
  Section,
} from "@/components/UI";

const filled = (v: string | null | undefined): v is string =>
  Boolean(v) && !v!.startsWith("TODO");

/**
 * Section order is the argument this page makes, for a management-trainee or
 * commercial hiring manager at a Pakistani corporate:
 *   1. who he is and what he's done (hero + proof strip)
 *   2. real jobs (experience)
 *   3. leadership and sponsorship record (what MT programmes screen for)
 *   4. stories he can tell in an interview
 *   5. how he works, tools, education, contact
 */
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
            <a href="#experience" className="transition-colors hover:text-ink">
              Experience
            </a>
            <a href="#leadership" className="hidden transition-colors hover:text-ink sm:inline">
              Leadership
            </a>
            <a href="#stories" className="hidden transition-colors hover:text-ink sm:inline">
              Stories
            </a>
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
            <PrimaryLink href="#experience">See my experience ↓</PrimaryLink>
            <LinkPill href={person.links.linkedin}>LinkedIn</LinkPill>
            <LinkPill href={person.links.email}>Email</LinkPill>
            <LinkPill href={person.links.resume}>Download CV</LinkPill>
          </div>

          <p className="mt-7 font-mono text-xs text-ink-faint">{person.location}</p>
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

        {/* ---------------------------------------------- experience */}
        <Section
          id="experience"
          eyebrow="Experience"
          title="Two years of commercial work."
          className="pt-20 sm:pt-28"
        >
          <div className="mt-10 space-y-11">
            {experience.map((job) => (
              <div key={job.company} className="grid gap-3 sm:grid-cols-[7.5rem_1fr] sm:gap-8">
                <p className="font-mono text-xs leading-6 text-ink-faint">{job.period}</p>
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
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-faint" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </main>

      {/* ------------------------------------- leadership (dark band) */}
      <section
        id="leadership"
        className="reveal mt-20 scroll-mt-20 bg-night py-14 sm:mt-28 sm:py-20"
      >
        <div className="mx-auto max-w-5xl px-6">
          <Eyebrow tone="night">Leadership &amp; sponsorships</Eyebrow>
          <h2 className="mt-4 max-w-3xl font-display text-2xl leading-snug text-night-ink sm:text-3xl">
            Raising money for NUST&rsquo;s biggest student events.
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-[1.75] text-night-soft">
            {leadership.intro}
          </p>

          <div className="mt-9 grid grid-cols-1 gap-y-6 border-y border-night-line py-7 sm:grid-cols-3">
            {leadership.stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl text-night-ink">{s.value}</p>
                <p className="mt-1 text-[12.5px] leading-snug text-night-faint">{s.label}</p>
              </div>
            ))}
          </div>

          <ul className="mt-9 grid gap-x-10 gap-y-7 sm:grid-cols-2">
            {leadership.roles.map((r) => (
              <li key={r.org}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="font-display text-lg text-night-ink">{r.org}</h3>
                  <span className="font-mono text-[11px] text-night-faint">{r.period}</span>
                </div>
                <p className="mt-0.5 text-sm text-night-soft">{r.title}</p>
                {"note" in r && r.note && (
                  <p className="mt-2 text-[13.5px] leading-relaxed text-night-faint">{r.note}</p>
                )}
              </li>
            ))}
          </ul>

          <p className="mt-9 max-w-2xl text-[13.5px] leading-relaxed text-night-faint">
            {leadership.extras}
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-5xl px-6">
        {/* ------------------------------------------------- stories */}
        <Section
          id="stories"
          eyebrow="Ask me about"
          title="Three things I'd happily talk through in an interview."
          className="pt-20 sm:pt-28"
        >
          <div className="mt-9 grid gap-x-10 gap-y-9 sm:grid-cols-3">
            {stories.map((s) => (
              <article key={s.title}>
                <h3 className="font-display text-lg leading-snug text-ink">{s.title}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">{s.body}</p>
              </article>
            ))}
          </div>
        </Section>

        <div className="my-16 sm:my-20">
          <Divider />
        </div>

        {/* --------------------------------------------- how I work */}
        <Section eyebrow="How I work" title="Four habits, with the proof behind each.">
          <div className="mt-8 grid gap-x-10 gap-y-9 sm:grid-cols-2">
            {principles.map((p) => (
              <div key={p.label}>
                <h3 className="font-display text-lg text-ink">{p.label}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">{p.body}</p>
              </div>
            ))}
          </div>
        </Section>

        <div className="my-16 sm:my-20">
          <Divider />
        </div>

        {/* ------------------------------------------------- skills */}
        <Section id="skills" eyebrow="Toolkit" title="What I work with.">
          <div className="mt-8 grid gap-x-10 gap-y-9 sm:grid-cols-3">
            {skills.map((group) => (
              <div key={group.group}>
                <h3 className="font-display text-lg text-ink">{group.group}</h3>
                <ul className="mt-3 space-y-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-[13.5px] leading-relaxed text-ink-soft"
                    >
                      <span className="mt-1.5 shrink-0 font-mono text-[10px] text-ink-faint">
                        ▸
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <div className="my-16 sm:my-20">
          <Divider />
        </div>

        {/* ----------------------------------------------- education */}
        <Section eyebrow="Education">
          <div className="mt-6 grid gap-3 sm:grid-cols-[7.5rem_1fr] sm:gap-8">
            <p className="font-mono text-xs leading-6 text-ink-faint">
              {person.education.period}
            </p>
            <div>
              <h3 className="font-display text-lg text-ink">{person.education.degree}</h3>
              <p className="mt-0.5 text-sm text-ink-faint">{person.education.institution}</p>
            </div>
          </div>
        </Section>

        <div className="my-16 sm:my-20">
          <Divider />
        </div>

        {/* ------------------------------------------------- contact */}
        <Section id="contact" eyebrow="Contact" title={seeking.headline} className="pb-20 sm:pb-28">
          <p className="mt-5 max-w-2xl text-[16px] leading-[1.75] text-ink-soft">
            {seeking.body}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <PrimaryLink href={person.links.email}>{person.links.emailLabel}</PrimaryLink>
            <LinkPill href={person.links.linkedin}>LinkedIn ↗</LinkPill>
            <LinkPill href={person.links.resume}>Download CV</LinkPill>
          </div>
        </Section>
      </main>

      <footer className="border-t border-paper-line">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 py-8 font-mono text-[11px] text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {person.name}</span>
          <span>Islamabad, Pakistan</span>
        </div>
      </footer>
    </>
  );
}
