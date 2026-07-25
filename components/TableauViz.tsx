"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const API_SRC =
  "https://public.tableau.com/javascripts/api/tableau.embedding.3.latest.min.js";

/**
 * Loads Tableau's Embedding API v3 exactly once per page, however many vizzes
 * ask for it. The script registers the <tableau-viz> custom element; it's a
 * module, so it can only be evaluated once anyway — this just makes the
 * "already loading" case await the same promise instead of racing.
 */
let apiPromise: Promise<void> | null = null;

function loadTableauApi(): Promise<void> {
  if (apiPromise) return apiPromise;

  apiPromise = new Promise<void>((resolve, reject) => {
    // Survives a React remount, where module state persists but the DOM may
    // already carry the tag from a previous mount.
    const existing = document.querySelector<HTMLScriptElement>(
      `script[src="${API_SRC}"]`,
    );
    if (existing) {
      if (customElements.get("tableau-viz")) {
        resolve();
        return;
      }
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("load")), {
        once: true,
      });
      return;
    }

    const script = document.createElement("script");
    script.type = "module";
    script.src = API_SRC;
    script.addEventListener("load", () => resolve(), { once: true });
    script.addEventListener("error", () => reject(new Error("load")), {
      once: true,
    });
    document.head.appendChild(script);
  });

  return apiPromise;
}

type Status = "idle" | "loading" | "ready" | "error";

export function TableauViz({
  title,
  view,
  url,
  thumb,
}: {
  title: string;
  view: string;
  url: string;
  thumb?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [thumbFailed, setThumbFailed] = useState(false);
  const hostRef = useRef<HTMLDivElement>(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  const activate = useCallback(() => {
    if (status !== "idle") return;
    setStatus("loading");

    loadTableauApi()
      .then(() => customElements.whenDefined("tableau-viz"))
      .then(() => {
        if (!mountedRef.current || !hostRef.current) return;

        // Created imperatively rather than through JSX: <tableau-viz> is a
        // custom element, so React would only pass attributes through anyway,
        // and this keeps a third-party tag out of the type system.
        const viz = document.createElement("tableau-viz");
        viz.setAttribute("src", `https://public.tableau.com/views/${view}`);
        viz.setAttribute("toolbar", "bottom");
        viz.setAttribute("hide-tabs", "");
        viz.style.width = "100%";
        viz.style.height = "100%";
        viz.style.display = "block";

        hostRef.current.appendChild(viz);
        setStatus("ready");
      })
      .catch(() => {
        if (mountedRef.current) setStatus("error");
      });
  }, [status, view]);

  const showThumb = Boolean(thumb) && !thumbFailed;

  return (
    <div>
      <div className="relative overflow-hidden rounded-lg border border-paper-line bg-paper-raised">
        {/*
          Two strictly separate layers, and the separation is load-bearing:

          - This host div is owned by Tableau. React renders it with NO
            children, ever, so React has nothing here to reconcile and the
            imperative appendChild below can't desync its virtual DOM.
          - The preview layer below is owned by React and sits on top.

          Mutating a node React also renders children into throws
          "removeChild: node is not a child of this node" on the next render
          and unmounts the whole subtree. Keep these layers apart.
        */}
        <div
          ref={hostRef}
          className="h-[420px] w-full sm:h-[560px]"
          aria-hidden={status !== "ready"}
        />

        {status !== "ready" && (
          <div className="absolute inset-0" aria-live="polite">
            {showThumb && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={thumb}
                alt={`Preview of the ${title} dashboard`}
                loading="lazy"
                onError={() => setThumbFailed(true)}
                className="h-full w-full object-cover object-top"
              />
            )}

            <div
              className={`absolute inset-0 flex items-center justify-center ${
                showThumb ? "bg-ink/25 backdrop-blur-[1px]" : "bg-paper-raised"
              }`}
            >
              {status === "error" ? (
                <div className="mx-6 rounded-lg bg-paper px-5 py-4 text-center">
                  <p className="text-sm text-ink">
                    The interactive viz couldn&rsquo;t load here.
                  </p>
                  <a
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1.5 inline-block font-mono text-xs text-accent underline underline-offset-4"
                  >
                    Open it on Tableau Public ↗
                  </a>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={activate}
                  disabled={status === "loading"}
                  aria-label={`Load the interactive ${title} dashboard`}
                  className="inline-flex items-center gap-2 rounded-full bg-paper px-5 py-2.5 font-mono text-xs text-ink shadow-lg transition-colors hover:bg-accent hover:text-white disabled:opacity-70"
                >
                  {status === "loading"
                    ? "Loading…"
                    : "▶ Load interactive dashboard"}
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      <p className="mt-2.5 font-mono text-[11px] text-ink-faint">
        {status === "ready"
          ? "Live embed — filter and hover to explore."
          : "Preview image. Loads on demand to keep this page fast."}
      </p>
    </div>
  );
}
