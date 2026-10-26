import { FOUNDER_STATUS } from "@/lib/content";

export default function FounderConfession() {
  return (
    <section
      id="confession"
      aria-labelledby="confession-title"
      className="border-b border-rule bg-paper-deep/30 py-16 sm:py-20 lg:py-24"
    >
      <div className="shell">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-8">
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
              <span className="text-signal">08</span>
              <span className="mx-2 text-rule">/</span>
              Founder confession
            </p>
            <h2
              id="confession-title"
              className="mt-5 font-display text-[clamp(2.6rem,5.2vw,5.2rem)] font-extrabold leading-[0.92] tracking-[-0.06em]"
            >
              A word from our founder.
            </h2>

            <blockquote className="mt-9 border-l-2 border-signal pl-5 sm:pl-8">
              <p className="text-balance font-display text-[clamp(1.55rem,3.1vw,3.1rem)] font-semibold leading-[1.12] tracking-[-0.04em]">
                &ldquo;We started with a vision to change the world. Six months
                later, we changed our business model{" "}
                <mark className="bg-signal-soft px-1 text-ink">fourteen times</mark>,
                launched three products nobody asked for, and discovered that
                building software is{" "}
                <mark className="bg-signal-soft px-1 text-ink">
                  significantly easier
                </mark>{" "}
                than getting someone to pay for it.&rdquo;
              </p>
              <footer className="mt-6 flex items-center gap-3">
                <span className="h-px w-8 bg-ink" aria-hidden="true" />
                <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
                  Founder, Ya Rab Chala de Startups
                </span>
              </footer>
            </blockquote>

            <div className="mt-10 flex flex-col justify-between gap-4 border-y border-ink py-5 sm:flex-row sm:items-center">
              <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-muted">
                Current valuation
              </p>
              <p className="font-display text-2xl font-bold tracking-[-0.03em] sm:text-right sm:text-3xl">
                One emotional breakdown and two cups of chai.
              </p>
            </div>

            <p className="mt-4 max-w-2xl font-mono text-[8px] uppercase leading-relaxed tracking-[0.12em] text-muted">
              Fictional brand storytelling, not a statement about an actual
              company&apos;s finances. There is no actual company.
            </p>
          </div>

          <aside className="lg:col-span-4 lg:self-start" aria-label="Founder status">
            <div className="border border-ink bg-paper">
              <div className="flex items-center justify-between border-b border-ink px-4 py-3">
                <p className="font-mono text-[9px] uppercase tracking-[0.15em]">
                  Founder status
                </p>
                <span className="flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.13em] text-signal">
                  <span className="h-1.5 w-1.5 bg-signal" aria-hidden="true" />
                  Live
                </span>
              </div>
              <ul className="divide-y divide-rule">
                {FOUNDER_STATUS.map((status, index) => (
                  <li key={status} className="flex items-center gap-3 px-4 py-4">
                    <span className="font-mono text-[8px] tracking-[0.1em] text-muted">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm leading-snug text-ink/85">{status}</span>
                    <span
                      aria-hidden="true"
                      className="ml-auto h-1.5 w-1.5 shrink-0 bg-signal"
                    />
                  </li>
                ))}
              </ul>
              <div className="border-t border-ink bg-ink px-4 py-3 text-paper">
                <p className="font-mono text-[8px] uppercase leading-relaxed tracking-[0.12em] text-paper/55">
                  Last updated while avoiding sales.
                </p>
              </div>
            </div>

            <p className="mt-3 font-mono text-[8px] uppercase leading-relaxed tracking-[0.13em] text-muted">
              All statuses are real. The company is not.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
