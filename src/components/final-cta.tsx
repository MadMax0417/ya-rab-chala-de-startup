import { ArrowUp, ArrowUpRight } from "lucide-react";

export default function FinalCta() {
  return (
    <section
      aria-labelledby="final-cta-title"
      className="relative overflow-hidden bg-ink py-16 text-paper sm:py-20 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(180,35,24,0.28),transparent_32%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 top-1/2 hidden -translate-y-1/2 select-none font-display text-[28rem] font-extrabold leading-none text-paper/[0.035] lg:block"
      >
        ↗
      </div>

      <div className="shell relative">
        <div className="flex items-center justify-between border-b border-paper/20 pb-4">
          <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-paper/55">
            <span className="text-signal-soft">09</span>
            <span className="mx-2 text-paper/20">/</span>
            Final board meeting
          </p>
          <p className="hidden font-mono text-[8px] uppercase tracking-[0.14em] text-paper/55 sm:block">
            Action item 01 / Close the laptop
          </p>
        </div>

        <div className="grid gap-10 pt-10 lg:grid-cols-12 lg:gap-12 lg:pt-14">
          <div className="lg:col-span-8">
            <h2
              id="final-cta-title"
              className="max-w-4xl text-balance font-display text-[clamp(2.8rem,6.4vw,6.8rem)] font-extrabold leading-[0.9] tracking-[-0.065em]"
            >
              Still building? May the odds be ever in your favour.
            </h2>
            <div className="mt-7 max-w-xl border-l border-paper/25 pl-5">
              <p className="text-base leading-relaxed text-paper/65 sm:text-lg">
                The market is uncertain. The runway is shrinking. The vision deck
                is beautiful.
              </p>
              <p className="mt-2 text-base leading-relaxed text-paper/90 sm:text-lg">
                But hey, at least the landing page is done.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-end gap-3 lg:col-span-4">
            <a
              href="#survival"
              className="group flex items-center justify-between gap-4 bg-signal px-5 py-4 font-mono text-[10px] uppercase tracking-[0.12em] text-paper transition hover:bg-paper hover:text-ink"
            >
              Check your startup survival score
              <ArrowUpRight
                size={16}
                strokeWidth={2}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#top"
              className="flex items-center justify-between gap-4 border border-paper/25 px-5 py-4 font-mono text-[10px] uppercase tracking-[0.12em] text-paper/70 transition hover:border-paper hover:text-paper"
            >
              Return to delusion
              <ArrowUp size={15} strokeWidth={1.8} aria-hidden="true" />
            </a>
            <p className="mt-2 font-mono text-[8px] uppercase leading-relaxed tracking-[0.12em] text-paper/55">
              Results delivered instantly. Follow-up funding not included.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
