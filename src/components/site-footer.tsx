import { NAV_LINKS } from "@/lib/content";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-paper">
      <div className="shell">
        <div className="grid gap-10 border-b border-paper/15 py-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <a href="#top" className="inline-flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center bg-paper font-display text-[11px] font-black tracking-[-0.04em] text-ink">
                YR
              </span>
              <span className="font-display text-[13px] font-extrabold uppercase leading-none tracking-[-0.02em]">
                Ya Rab Chala de Startups
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-paper/55">
              India&apos;s most unnecessarily ambitious startup. Building the future,
              one unexplained pivot at a time.
            </p>
            <p className="mt-5 font-mono text-[8px] uppercase tracking-[0.14em] text-paper/55">
              Current MRR: ₹0 / Current mood: fundraising
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-paper/55">
              Navigate
            </p>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-paper/65 transition hover:text-paper"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#investors"
                  className="text-sm text-paper/65 transition hover:text-paper"
                >
                  Investors
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-paper/55">
              Status
            </p>
            <div className="mt-4 border border-paper/15 p-4">
              <p className="flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.13em] text-paper/55">
                <span className="h-1.5 w-1.5 bg-signal" aria-hidden="true" />
                Operational. Emotionally unstable.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-paper/70">
                Built with ambition, questionable decisions, and an unreasonable
                amount of chai.
              </p>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-paper/55">
              This is a fictional satirical project. No real products, investments,
              spiritual services, or ₹500 were harmed.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[8px] uppercase tracking-[0.12em] text-paper/55">
            © {year} Ya Rab Chala de Startups. All rights reserved. Mostly
            delusions.
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.12em] text-paper/55 transition hover:text-paper"
          >
            Back to delusion
            <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
