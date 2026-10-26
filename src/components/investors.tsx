import { SectionHeading } from "@/components/section-heading";
import { INVESTORS } from "@/lib/content";

export default function Investors() {
  return (
    <section
      id="investors"
      aria-labelledby="investors-title"
      className="border-b border-rule bg-blueprint-soft/45 py-16 sm:py-20 lg:py-24"
    >
      <div className="shell">
        <SectionHeading
          index="05"
          eyebrow="Capital formation"
          titleId="investors-title"
          title="Backed by the best. Funded by absolutely nobody."
          description="A transparent capital table. Names have been left unchanged to maximise accountability."
        />

        <div className="mt-10 border border-ink bg-paper lg:mt-14">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink bg-ink px-4 py-3 text-paper">
            <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-paper/65">
              Cap table / FY2026 / All figures in ₹ and hope
            </p>
            <span className="border border-signal px-2 py-1 font-mono text-[8px] uppercase tracking-[0.15em] text-signal-soft">
              Unaudited
            </span>
          </div>

          <div
            tabIndex={0}
            role="region"
            aria-label="Fictional investor table."
            className="overflow-x-auto"
          >
            <table className="w-full border-collapse text-left sm:min-w-[590px]">
              <caption className="sr-only">
                Fictional investors and their contributions to Ya Rab Chala de
                Startups.
              </caption>
              <thead>
                <tr className="border-b border-rule bg-paper-deep/40">
                  <th
                    scope="col"
                    className="px-5 py-3 font-mono text-[8px] font-normal uppercase tracking-[0.15em] text-muted"
                  >
                    Investor
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 font-mono text-[8px] font-normal uppercase tracking-[0.15em] text-muted"
                  >
                    Contribution
                  </th>
                  <th
                    scope="col"
                    className="hidden px-5 py-3 text-right font-mono text-[8px] font-normal uppercase tracking-[0.15em] text-muted sm:table-cell"
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-rule">
                {INVESTORS.map((investor) => (
                  <tr
                    key={investor.investor}
                    className="transition-colors hover:bg-paper-deep/30"
                  >
                    <th
                      scope="row"
                      className="px-5 py-4 font-display text-lg font-semibold tracking-[-0.02em] text-ink"
                    >
                      {investor.investor}
                    </th>
                    <td className="px-5 py-4 text-sm leading-relaxed text-ink/75">
                      {investor.contribution}
                    </td>
                    <td className="hidden px-5 py-4 text-right font-mono text-[8px] uppercase tracking-[0.12em] text-muted sm:table-cell">
                      {investor.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid border-t border-ink md:grid-cols-[1fr_auto]">
            <div className="p-5 sm:p-7 lg:p-8">
              <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                Total funding raised
              </p>
              <p className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-2 font-display text-[clamp(2.4rem,5.8vw,5.6rem)] font-extrabold leading-none tracking-[-0.055em]">
                <span>₹500</span>
                <span className="text-muted">+ emotional support.</span>
              </p>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
                The ₹500 remains a sensitive internal matter. Emotional support is
                non-dilutive and has been marked to market at approximately one
                Sunday lunch.
              </p>
            </div>

            <div className="flex items-center justify-start border-t border-rule p-5 md:justify-center md:border-l md:border-t-0 md:p-7">
              <div className="rotate-[-4deg] border-2 border-signal px-3 py-2 text-center font-mono text-[9px] uppercase leading-relaxed tracking-[0.14em] text-signal">
                Unreviewed
                <br />
                Unaudited
                <br />
                Unbothered
              </div>
            </div>
          </div>
        </div>

        <p className="mt-4 max-w-3xl font-mono text-[9px] uppercase leading-relaxed tracking-[0.12em] text-muted">
          All investors, contributions, and cap-table entries are fictional. No
          actual equity was issued. Bhagwan has not responded to diligence requests.
        </p>
      </div>
    </section>
  );
}
