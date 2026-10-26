import { METRICS } from "@/lib/content";
import { CountUp } from "@/components/count-up";
import { SectionHeading } from "@/components/section-heading";

export default function Traction() {
  return (
    <section
      id="traction"
      aria-labelledby="traction-title"
      className="border-b border-rule py-16 sm:py-20 lg:py-24"
    >
      <div className="shell">
        <SectionHeading
          index="02"
          eyebrow="Traction"
          titleId="traction-title"
          title="Numbers don't lie. Founders sometimes do."
          description="A transparent look at our extraordinary progress toward absolutely nowhere."
        />

        <div className="mt-10 grid grid-cols-1 gap-px border border-rule bg-rule min-[480px]:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {METRICS.map((metric) => {
            const featured = Boolean(metric.featured);

            return (
              <article
                key={metric.id}
                className={`reveal group relative flex min-h-[210px] flex-col overflow-hidden ${
                  featured ? "bg-ink text-paper" : "bg-paper text-ink"
                }`}
              >
                <div
                  className={`flex items-center justify-between gap-3 border-b px-4 py-3 font-mono text-[8px] uppercase tracking-[0.15em] ${
                    featured ? "border-paper/20 text-paper/55" : "border-rule text-muted"
                  }`}
                >
                  <span>{metric.meta}</span>
                  <span
                    aria-hidden="true"
                    className={`h-1.5 w-1.5 ${
                      metric.pending ? "bg-signal" : featured ? "bg-paper/35" : "bg-ink/20"
                    }`}
                  />
                </div>

                <div className="flex flex-1 flex-col px-4 pb-4 pt-5 sm:px-5">
                  <p
                    className={`text-sm font-medium ${
                      featured ? "text-paper/65" : "text-muted"
                    }`}
                  >
                    {metric.label}
                  </p>

                  <div className="mt-5 flex flex-wrap items-end gap-x-2 gap-y-1">
                    {metric.value !== undefined ? (
                      <CountUp
                        value={metric.value}
                        prefix={metric.prefix}
                        className="font-display text-[3.35rem] font-extrabold leading-none tracking-[-0.06em] sm:text-6xl"
                      />
                    ) : (
                      <span className="font-display text-[3.35rem] font-extrabold leading-none tracking-[-0.06em] sm:text-6xl">
                        {metric.display}
                      </span>
                    )}
                    {metric.pending ? (
                      <span className="mb-1 font-mono text-[8px] uppercase tracking-[0.13em] text-signal">
                        (pending)
                      </span>
                    ) : null}
                  </div>

                  <p
                    className={`mt-auto pt-7 text-xs leading-relaxed ${
                      featured ? "text-paper/60" : "text-muted"
                    }`}
                  >
                    {metric.note}
                  </p>
                </div>

                <div
                  aria-hidden="true"
                  className={`flex h-9 items-end gap-1 border-t px-4 py-2 ${
                    featured ? "border-paper/15" : "border-rule"
                  }`}
                >
                  {metric.bars.map((bar, index) => (
                    <span
                      key={index}
                      style={{ height: `${Math.max(bar, 3)}%` }}
                      className={`min-h-px flex-1 ${
                        featured
                          ? index === metric.bars.length - 1
                            ? "bg-signal"
                            : "bg-paper/25"
                          : index === metric.bars.length - 1
                            ? "bg-signal/80"
                            : "bg-ink/15"
                      }`}
                    />
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-4 flex flex-col justify-between gap-2 font-mono text-[9px] uppercase leading-relaxed tracking-[0.12em] text-muted sm:flex-row sm:items-center">
          <p>
            <span className="text-signal">*</span> All metrics are fictional. Our
            accountant is a calculator.
          </p>
          <p className="text-muted">Source: founder memory, lightly edited.</p>
        </div>
      </div>
    </section>
  );
}
