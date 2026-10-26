import { SectionHeading } from "@/components/section-heading";
import { REALITY_PAIRS } from "@/lib/content";

export default function FounderReality() {
  return (
    <section
      id="founder"
      aria-labelledby="founder-title"
      className="border-b border-rule py-16 sm:py-20 lg:py-24"
    >
      <div className="shell">
        <SectionHeading
          index="04"
          eyebrow="Founder reality"
          titleId="founder-title"
          title="A founder's journey. Slightly edited for investors."
          description="The same week, described twice. One version is for the group chat. The other is for the cap table."
        />

        <div className="mt-10 border-y border-ink lg:mt-14">
          <div className="hidden grid-cols-2 border-b border-rule md:grid">
            <div className="px-5 py-3 font-mono text-[9px] uppercase tracking-[0.16em] text-signal">
              The reality
            </div>
            <div className="border-l border-rule px-5 py-3 font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
              The LinkedIn version
            </div>
          </div>

          {REALITY_PAIRS.map((pair, index) => (
            <div
              key={pair.reality}
              className="group grid border-b border-rule last:border-b-0 md:grid-cols-2"
            >
              <div className="relative px-5 py-5 transition-colors group-hover:bg-paper-deep/35 sm:py-6">
                <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-muted md:hidden">
                  The reality
                </p>
                <div className="mt-2 flex gap-4 md:mt-0">
                  <span className="pt-1 font-mono text-[9px] tracking-[0.12em] text-signal">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="font-display text-xl font-semibold leading-snug tracking-[-0.025em] text-ink sm:text-2xl">
                    {pair.reality}
                  </p>
                </div>
              </div>

              <div className="border-t border-rule px-5 py-5 transition-colors group-hover:bg-paper-deep/60 sm:py-6 md:border-l md:border-t-0">
                <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-muted md:hidden">
                  The LinkedIn version
                </p>
                <div className="mt-2 flex gap-4 md:mt-0">
                  <span
                    aria-hidden="true"
                    className="mt-[0.7rem] hidden h-px w-4 shrink-0 bg-signal md:block"
                  />
                  <p className="text-base leading-relaxed text-ink/75 sm:text-lg">
                    {pair.linkedin}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-6 border-t border-ink pt-8 md:grid-cols-12 md:items-end">
          <p className="md:col-span-2 font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
            Official takeaway
          </p>
          <blockquote className="md:col-span-10">
            <p className="text-balance font-display text-[clamp(2.15rem,4.6vw,4.8rem)] font-extrabold leading-[0.96] tracking-[-0.055em]">
              &ldquo;Every setback is a setup for a{" "}
              <span className="text-signal">Series A</span>.&rdquo;
            </p>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
