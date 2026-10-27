"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/content";
import { Dialog } from "@/components/ui/dialog";

const VALUATION_ROWS = [
  ["Round being raised", "₹5,00,00,000"],
  ["Implied valuation", "₹50,00,00,000"],
  ["Current MRR", "₹0"],
  ["Revenue multiple", "Not applicable"],
  ["Investor interest", "Bhagwan knows"],
  ["Due diligence", "Vibes, mostly"],
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [valuationOpen, setValuationOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const valuationTriggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const firstLink = mobileMenuRef.current?.querySelector<HTMLAnchorElement>("a");
    firstLink?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  function openValuation(trigger: HTMLButtonElement | null) {
    valuationTriggerRef.current = trigger;
    if (menuOpen) {
      menuButtonRef.current?.focus();
    }
    setMenuOpen(false);
    setValuationOpen(true);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/92 backdrop-blur-md">
      <div className="shell flex h-[68px] items-center justify-between gap-4">
        <a
          href="#top"
          aria-label="Ya Rab Chala de Startups, back to top"
          className="group flex min-w-0 items-center gap-3"
        >
          <span className="grid h-9 w-9 shrink-0 place-items-center bg-ink font-display text-[11px] font-black tracking-[-0.04em] text-paper">
            YR
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-[11.5px] font-extrabold uppercase leading-none tracking-[-0.02em] min-[360px]:text-[13px]">
              Ya Rab Chala de Startups
            </span>
            <span className="mt-1 hidden font-mono text-[8px] uppercase tracking-[0.22em] text-muted sm:block">
              A very serious company
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-6 xl:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-[10px] uppercase tracking-[0.13em] text-ink/70 transition hover:text-signal"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={(event) => openValuation(event.currentTarget)}
            className="hidden items-center gap-2 bg-ink px-3.5 py-2.5 font-mono text-[10px] uppercase tracking-[0.1em] text-paper transition hover:bg-signal sm:inline-flex"
          >
            Check our valuation
            <ArrowUpRight size={13} strokeWidth={2} aria-hidden="true" />
          </button>

          <button
            ref={menuButtonRef}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMenuOpen((current) => !current)}
            className="grid h-10 w-10 place-items-center border border-ink text-ink transition hover:bg-ink hover:text-paper xl:hidden"
          >
            {menuOpen ? (
              <X size={18} strokeWidth={1.8} aria-hidden="true" />
            ) : (
              <Menu size={18} strokeWidth={1.8} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div
          id="mobile-navigation"
          ref={mobileMenuRef}
          className="absolute inset-x-0 top-full border-b border-ink bg-paper shadow-[0_18px_40px_rgba(20,19,15,0.12)] xl:hidden"
        >
          <nav aria-label="Mobile primary" className="shell py-3">
            <ul className="divide-y divide-rule">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between py-4 font-display text-xl font-semibold tracking-[-0.02em] text-ink"
                  >
                    {link.label}
                    <ArrowUpRight size={17} strokeWidth={1.6} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => openValuation(menuButtonRef.current)}
              className="mt-4 flex w-full items-center justify-between bg-ink px-4 py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-paper"
            >
              Check our valuation
              <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />
            </button>
          </nav>
        </div>
      ) : null}

      <Dialog
        open={valuationOpen}
        onClose={() => setValuationOpen(false)}
        labelledBy="valuation-title"
        returnFocusRef={valuationTriggerRef}
      >
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-signal">
          Internal memo / Valuation / 2026
        </p>
        <h2
          id="valuation-title"
          className="mt-3 font-display text-4xl font-extrabold leading-[0.96] tracking-[-0.045em] sm:text-5xl"
        >
          The valuation.
        </h2>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted">
          Prepared by the founder. Reviewed by the founder. Approved by the founder.
          Independently audited by nobody.
        </p>

        <div className="mt-7 border border-ink">
          <div className="flex items-center justify-between bg-ink px-4 py-2.5 font-mono text-[9px] uppercase tracking-[0.14em] text-paper">
            <span>Valuation report</span>
            <span>Unaudited</span>
          </div>
          <dl className="divide-y divide-rule">
            {VALUATION_ROWS.map(([label, value]) => (
              <div key={label} className="flex items-baseline justify-between gap-4 px-4 py-3">
                <dt className="text-sm text-muted">{label}</dt>
                <dd className="text-right font-mono text-xs text-ink">{value}</dd>
              </div>
            ))}
          </dl>
          <div className="flex items-baseline justify-between gap-4 border-t border-ink bg-signal-soft px-4 py-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.13em] text-ink">
              Implied value
            </span>
            <span className="font-display text-2xl font-extrabold tracking-[-0.03em] text-signal sm:text-3xl">
              ₹50 crore
            </span>
          </div>
        </div>

        <p className="mt-4 text-xs leading-relaxed text-muted">
          This is satire. It is not an offer to invest, a financial projection, or a
          request to wire money. Please do not wire money.
        </p>

        <a
          href="#investors"
          onClick={() => setValuationOpen(false)}
          className="mt-6 inline-flex items-center gap-2 border border-ink px-4 py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-ink transition hover:bg-ink hover:text-paper"
        >
          See the actual funding
          <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />
        </a>
      </Dialog>
    </header>
  );
}
