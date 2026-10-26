import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="delusion"
      aria-labelledby="hero-title"
      className="relative overflow-hidden border-b border-rule"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_12%,rgba(180,35,24,0.07),transparent_34%)]"
      />
      <div
        aria-hidden="true"
        className="absolute right-5 top-36 hidden font-mono text-[9px] uppercase tracking-[0.28em] text-muted [writing-mode:vertical-rl] 2xl:block"
      >
        Pre-seed / Pre-revenue / Pre-caffeine
      </div>

      <div className="shell relative grid gap-12 pb-14 pt-10 lg:grid-cols-12 lg:gap-10 lg:pb-20 lg:pt-16">
        <div className="lg:col-span-8">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[9px] uppercase tracking-[0.17em] text-muted">
            <span className="h-1.5 w-1.5 shrink-0 bg-signal" aria-hidden="true" />
            <span>India&apos;s most unnecessarily ambitious startup</span>
            <span className="hidden h-px w-10 bg-rule sm:block" aria-hidden="true" />
            <span className="hidden sm:inline">Est. sometime last week</span>
          </div>

          <h1
            id="hero-title"
            className="mt-7 text-balance font-display text-[clamp(3.15rem,7.8vw,7.25rem)] font-extrabold leading-[0.88] tracking-[-0.065em]"
          >
            We&apos;re building the future.{" "}
            <span className="text-muted">
              We just don&apos;t know which future yet.
            </span>
          </h1>

          <div className="mt-9 grid gap-8 border-t border-rule pt-7 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:gap-10">
            <div>
              <p className="max-w-xl text-base leading-relaxed text-ink/80 sm:text-lg">
                We&apos;re an AI-powered, spiritually backed startup ecosystem
                transforming chai-fuelled delusion into disruptive innovation.
              </p>
              <p className="mt-4 max-w-xl border-l-2 border-signal pl-4 text-base leading-relaxed text-ink sm:text-lg">
                Our mission? To make every founder&apos;s parents finally say,{" "}
                <span className="font-display font-semibold italic">
                  &ldquo;Beta, naukri kab karega?&rdquo;
                </span>
              </p>
            </div>

            <div className="flex flex-col items-start justify-end">
              <div className="flex w-full flex-col gap-3">
                <a
                  href="#products"
                  className="group inline-flex w-full items-center justify-between gap-6 bg-ink px-5 py-4 font-mono text-[10px] uppercase tracking-[0.13em] text-paper transition hover:bg-signal"
                >
                  Explore our vision
                  <ArrowUpRight
                    size={15}
                    strokeWidth={2}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
                <a
                  href="#investors"
                  className="inline-flex w-full items-center justify-center border border-ink px-5 py-4 font-mono text-[10px] uppercase tracking-[0.13em] text-ink transition hover:bg-paper-deep"
                >
                  View our funding
                </a>
              </div>

              <p className="mt-6 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.13em] text-muted">
                <span className="relative flex h-1.5 w-1.5 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping bg-signal opacity-60" />
                  <span className="relative inline-flex h-1.5 w-1.5 bg-signal" />
                </span>
                Currently operational. Emotionally unstable.
              </p>
            </div>
          </div>
        </div>

        <aside aria-labelledby="snapshot-title" className="lg:col-span-4">
          <div className="lg:mt-2">
            <div className="border border-ink bg-paper-deep/45">
              <div className="flex items-center justify-between border-b border-ink px-4 py-3">
                <h2
                  id="snapshot-title"
                  className="font-mono text-[9px] uppercase tracking-[0.16em] text-ink"
                >
                  Company snapshot
                </h2>
                <span className="flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.15em] text-muted">
                  <span className="h-1.5 w-1.5 bg-signal" aria-hidden="true" />
                  Live
                </span>
              </div>

              <div className="px-5 pb-5 pt-5">
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                  Current MRR
                </p>
                <p className="mt-1 font-display text-6xl font-extrabold leading-none tracking-[-0.06em] sm:text-7xl">
                  ₹0
                </p>
                <p className="mt-2 text-xs text-muted">
                  A clean slate. Permanently.
                </p>
              </div>

              <dl className="divide-y divide-rule border-t border-ink">
                <div className="px-5 py-3">
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted">
                      Runway
                    </dt>
                    <dd className="text-right text-sm font-medium">
                      Please don&apos;t ask
                    </dd>
                  </div>
                </div>

                <div className="px-5 py-3">
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted">
                      Founder confidence
                    </dt>
                    <dd className="text-right text-sm font-medium">94%</dd>
                  </div>
                  <div className="mt-2 h-1 w-full bg-rule" aria-hidden="true">
                    <div className="h-full w-[94%] bg-ink" />
                  </div>
                  <p className="mt-1 text-right font-mono text-[8px] uppercase tracking-[0.12em] text-muted">
                    Self-reported
                  </p>
                </div>

                <div className="px-5 py-3">
                  <div className="flex items-baseline justify-between gap-4">
                    <dt className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted">
                      Funding status
                    </dt>
                    <dd className="text-right text-sm font-medium">Bhagwan knows</dd>
                  </div>
                </div>
              </dl>

              <div className="flex items-center justify-between gap-4 border-t border-ink bg-ink px-5 py-4 text-paper">
                <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-paper/60">
                  Last updated
                </span>
                <span className="font-mono text-[8px] uppercase tracking-[0.13em]">
                  4 minutes ago
                </span>
              </div>
            </div>
            <p className="mt-3 font-mono text-[8px] uppercase leading-relaxed tracking-[0.14em] text-muted">
              All figures self-reported. Audited by nobody. Reviewed by mom.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
