import Link from "next/link";

/* ---------------------------------------------------------------- labels */

export function Eyebrow({
  children,
  tone = "ink",
}: {
  children: React.ReactNode;
  tone?: "ink" | "night";
}) {
  return (
    <p
      className={`font-mono text-[11px] font-semibold uppercase tracking-[0.22em] ${
        tone === "night" ? "text-night-faint" : "text-ink-faint"
      }`}
    >
      {children}
    </p>
  );
}

export function TagPill({
  children,
  tone = "ink",
}: {
  children: React.ReactNode;
  tone?: "ink" | "night";
}) {
  return (
    <span
      className={`rounded-full border px-2.5 py-1 font-mono text-[11px] ${
        tone === "night"
          ? "border-night-line text-night-soft"
          : "border-paper-line text-ink-soft"
      }`}
    >
      {children}
    </span>
  );
}

export function StatusTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-shipped-dim px-2.5 py-1 font-mono text-[11px] font-semibold tracking-wide text-shipped">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full rounded-full bg-go opacity-60" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-shipped" />
      </span>
      {children}
    </span>
  );
}

export function Divider({ tone = "ink" }: { tone?: "ink" | "night" }) {
  return (
    <hr
      className={`border-t ${
        tone === "night" ? "border-night-line" : "border-paper-line"
      }`}
    />
  );
}

/* ----------------------------------------------------------------- links */

const isExternal = (href: string) => href.startsWith("http") || href.startsWith("mailto:");

/** Renders nothing when `href` is still a TODO placeholder, so an unfilled
 *  value can never ship as a dead link. */
function hrefIsReady(href: string | null | undefined): href is string {
  return Boolean(href) && !href!.startsWith("TODO");
}

export function LinkPill({
  href,
  children,
  tone = "ink",
}: {
  href: string | null | undefined;
  children: React.ReactNode;
  tone?: "ink" | "night";
}) {
  if (!hrefIsReady(href)) return null;

  const styles =
    tone === "night"
      ? "border-night-line text-night-soft hover:border-night-ink hover:text-night-ink"
      : "border-paper-line text-ink-soft hover:border-ink hover:text-ink";

  return (
    <a
      href={href}
      target={isExternal(href) ? "_blank" : undefined}
      rel={isExternal(href) ? "noreferrer" : undefined}
      className={`inline-flex items-center gap-1.5 rounded-full border bg-transparent px-4 py-2 font-mono text-xs transition-colors ${styles}`}
    >
      {children}
    </a>
  );
}

export function PrimaryLink({
  href,
  children,
}: {
  href: string | null | undefined;
  children: React.ReactNode;
}) {
  if (!hrefIsReady(href)) return null;

  const external = isExternal(href);
  const className =
    "inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 font-mono text-xs text-paper transition-colors hover:bg-accent";

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

/* -------------------------------------------------------------- sections */

export function Section({
  id,
  eyebrow,
  title,
  children,
  className = "",
}: {
  id?: string;
  eyebrow: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`reveal scroll-mt-24 ${className}`}>
      <Eyebrow>{eyebrow}</Eyebrow>
      {title && (
        <h2 className="mt-4 font-display text-2xl leading-snug text-ink sm:text-3xl">
          {title}
        </h2>
      )}
      {children}
    </section>
  );
}

/* ------------------------------------------------------------- rich text */

/** Renders `backticked` spans in prose as inline code. Keeps the copy in
 *  lib/ as plain strings rather than JSX, while still letting identifiers
 *  like `maxDuration` read as identifiers. */
export function RichText({ children }: { children: string }) {
  const parts = children.split(/`([^`]+)`/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <code
            key={i}
            className="rounded bg-paper-line-soft px-1.5 py-0.5 font-mono text-[0.86em] text-ink"
          >
            {part}
          </code>
        ) : (
          part
        ),
      )}
    </>
  );
}

/* ----------------------------------------------------------------- frame */

/** A screenshot in minimal browser chrome — signals "this is a real running
 *  thing" far faster than a caption saying so. */
export function BrowserFrame({
  src,
  alt,
  url,
  priority = false,
}: {
  src: string;
  alt: string;
  url: string;
  priority?: boolean;
}) {
  return (
    <figure className="overflow-hidden rounded-xl border border-night-line bg-night-raised shadow-2xl shadow-black/25">
      <div className="flex items-center gap-2 border-b border-night-line px-3 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-night-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-night-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-night-line" />
        <span className="ml-2 truncate rounded-md bg-night px-2.5 py-1 font-mono text-[10px] text-night-faint">
          {url}
        </span>
      </div>
      {/* Plain <img>: these are pre-sized static captures, and this keeps the
          page renderable as a pure static export with no image optimizer. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        width={1440}
        height={900}
        loading={priority ? "eager" : "lazy"}
        className="block w-full"
      />
    </figure>
  );
}
