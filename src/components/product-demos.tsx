"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check, Copy, RefreshCw } from "lucide-react";
import { copyTextToClipboard } from "@/lib/share";

const actionClass =
  "inline-flex items-center justify-center gap-2 bg-ink px-4 py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-paper transition hover:bg-signal disabled:cursor-not-allowed disabled:bg-ink/35";
const monoLabelClass =
  "font-mono text-[9px] uppercase tracking-[0.15em] text-muted";

export function PivotGptDemo() {
  const excuses = [
    "The market wasn't ready.",
    "We were too early.",
    "We're pivoting to AI.",
    "Actually, we're building an AI agent now.",
  ];
  const [index, setIndex] = useState(0);
  const [run, setRun] = useState(1);

  function generateAnother() {
    setIndex((current) => (current + 1) % excuses.length);
    setRun((current) => current + 1);
  }

  return (
    <div className="space-y-4">
      <div className="border border-rule bg-paper-deep/55 p-4">
        <p className={monoLabelClass}>Prompt</p>
        <p className="mt-2 font-mono text-sm text-ink">
          Explain why my startup failed. Be gentle.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {["context: pre-revenue", "tone: supportive", "evidence: optional"].map((chip) => (
            <span
              key={chip}
              className="border border-rule px-2 py-1 font-mono text-[8px] uppercase tracking-[0.12em] text-muted"
            >
              {chip}
            </span>
          ))}
        </div>
      </div>

      <button type="button" onClick={generateAnother} className={actionClass}>
        Generate another explanation
        <RefreshCw size={13} strokeWidth={2} aria-hidden="true" />
      </button>

      <div className="border border-ink bg-ink p-5 text-paper">
        <div className="flex items-center justify-between gap-4 font-mono text-[8px] uppercase tracking-[0.14em] text-paper/50">
          <span>Output / run {String(run).padStart(2, "0")}</span>
          <span>Confidence 94%</span>
        </div>
        <p className="mt-5 font-display text-2xl font-semibold leading-tight tracking-[-0.03em] sm:text-3xl">
          &ldquo;{excuses[index]}&rdquo;
        </p>
        <p className="mt-4 border-t border-paper/15 pt-3 text-xs leading-relaxed text-paper/55">
          Evidence supplied: none. Emotional accuracy: high. Investor readiness:
          technically a sentence.
        </p>
      </div>
    </div>
  );
}

export function FundMyDelusionDemo() {
  const [idea, setIdea] = useState("Uber, but for chai");
  const [submittedIdea, setSubmittedIdea] = useState("Uber, but for chai");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextIdea = idea.trim();
    if (!nextIdea) return;
    setSubmittedIdea(nextIdea);
  }

  return (
    <div className="space-y-5">
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="fundmydelusion-idea"
          className={monoLabelClass}
        >
          Your idea
        </label>
        <div className="mt-2 flex flex-col gap-2 sm:flex-row">
          <input
            id="fundmydelusion-idea"
            type="text"
            maxLength={90}
            value={idea}
            onChange={(event) => setIdea(event.target.value)}
            placeholder="Uber, but for chai"
            className="min-w-0 flex-1 border border-ink bg-paper px-3 py-3 text-sm text-ink outline-none placeholder:text-muted focus:border-signal"
          />
          <button type="submit" disabled={!idea.trim()} className={actionClass}>
            Generate deck
            <ArrowRight size={13} strokeWidth={2} aria-hidden="true" />
          </button>
        </div>
        <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.12em] text-muted">
          Input stays in your browser. Unfortunately, so does the idea.
        </p>
      </form>

      <div className="border border-ink">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-ink bg-ink px-4 py-3 font-mono text-[8px] uppercase tracking-[0.14em] text-paper/60">
          <span>Deck generated</span>
          <span>47 slides / 0 due diligence</span>
        </div>
        <div className="p-4 sm:p-5">
          <p className={monoLabelClass}>Concept</p>
          <p className="mt-2 font-display text-2xl font-semibold leading-tight tracking-[-0.03em] text-ink">
            &ldquo;{submittedIdea}&rdquo;
          </p>

          <dl className="mt-5 grid grid-cols-1 gap-px border border-rule bg-rule sm:grid-cols-2">
            {[
              ["Ask", "₹5 crore"],
              ["Valuation", "₹50 crore"],
              ["Market size", "Everyone who drinks chai"],
              ["Moat", "First-mover advantage (unverified)"],
            ].map(([label, value]) => (
              <div key={label} className="bg-paper px-3 py-3">
                <dt className={monoLabelClass}>{label}</dt>
                <dd className="mt-1 text-sm font-medium text-ink">{value}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-4 text-xs leading-relaxed text-muted">
            Generated in 0.3 seconds. The investor reply will take six to eight
            weeks, or one lifetime.
          </p>
        </div>
      </div>
    </div>
  );
}

const LINKEDIN_PRESETS = [
  {
    reality: "Three customers left.",
    linkedin:
      "After an incredible journey serving our first three customers, we're making the difficult decision to focus on our next chapter.",
  },
  {
    reality: "The cofounder wants to discuss something.",
    linkedin:
      "We're restructuring our leadership alignment to unlock the next phase of our journey.",
  },
  {
    reality: "The server bill is due.",
    linkedin:
      "We're optimizing our infrastructure economics to build a more sustainable future.",
  },
  {
    reality: "Our revenue is ₹0.",
    linkedin:
      "We're pre-monetisation, with a strong focus on value creation and long-term stakeholder alignment.",
  },
];

export function LinkedInifyDemo() {
  const [index, setIndex] = useState(0);
  const [copyStatus, setCopyStatus] = useState("");
  const preset = LINKEDIN_PRESETS[index];

  function nextReality() {
    setIndex((current) => (current + 1) % LINKEDIN_PRESETS.length);
    setCopyStatus("");
  }

  async function copyRewrite() {
    const copied = await copyTextToClipboard(`“${preset.linkedin}”`);
    setCopyStatus(
      copied
        ? "Copied. Your reality is now investor-ready."
        : "Could not copy automatically. Select the text manually.",
    );
  }

  return (
    <div className="space-y-4">
      <div className="grid gap-px border border-ink bg-rule sm:grid-cols-2">
        <div className="bg-paper p-4">
          <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-signal">
            Reality
          </p>
          <p className="mt-3 font-display text-xl font-semibold leading-tight tracking-[-0.02em] text-ink">
            {preset.reality}
          </p>
        </div>
        <div className="bg-ink p-4 text-paper">
          <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-paper/50">
            LinkedIn version
          </p>
          <p className="mt-3 text-sm leading-relaxed text-paper/90">
            &ldquo;{preset.linkedin}&rdquo;
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row">
        <button type="button" onClick={nextReality} className={actionClass}>
          Rewrite another reality
          <RefreshCw size={13} strokeWidth={2} aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={copyRewrite}
          className="inline-flex items-center justify-center gap-2 border border-ink px-4 py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-ink transition hover:bg-paper-deep"
        >
          Copy the rewrite
          <Copy size={13} strokeWidth={1.8} aria-hidden="true" />
        </button>
      </div>
      <p aria-live="polite" className="min-h-4 font-mono text-[9px] uppercase tracking-[0.12em] text-muted">
        {copyStatus}
      </p>
      <p className="text-xs leading-relaxed text-muted">
        Side effects may include unsolicited advice, inbound recruiter messages,
        and a sudden urge to use the word &ldquo;journey.&rdquo;
      </p>
    </div>
  );
}

const PRAYER_CRISES = [
  "Waiting for a client to pay.",
  "Preparing for an investor meeting.",
  "Watching the AWS bill increase.",
  "Waiting for a cofounder to reply.",
  "Surviving another month without revenue.",
];

export function PrayerDemo() {
  const [crisis, setCrisis] = useState(PRAYER_CRISES[0]);
  const [requestCount, setRequestCount] = useState(0);

  function requestIntervention() {
    setRequestCount((current) => current + 1);
  }

  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="prayer-crisis" className={monoLabelClass}>
          Select your crisis
        </label>
        <select
          id="prayer-crisis"
          value={crisis}
          onChange={(event) => setCrisis(event.target.value)}
          className="mt-2 w-full appearance-none border border-ink bg-paper px-3 py-3 text-sm text-ink outline-none focus:border-signal"
        >
          {PRAYER_CRISES.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <button type="button" onClick={requestIntervention} className={actionClass}>
        Request divine intervention
        <span aria-hidden="true">↗</span>
      </button>

      {requestCount > 0 ? (
        <div className="border border-ink bg-paper-deep/50 p-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-rule pb-3 font-mono text-[8px] uppercase tracking-[0.14em] text-muted">
            <span className="flex items-center gap-2 text-signal">
              <Check size={12} strokeWidth={2} aria-hidden="true" />
              Request received
            </span>
            <span>Ticket #YR-{String(requestCount).padStart(4, "0")}</span>
          </div>
          <p className="mt-4 font-display text-xl font-semibold leading-tight tracking-[-0.02em]">
            &ldquo;{crisis}&rdquo;
          </p>
          <dl className="mt-4 grid grid-cols-1 gap-2 text-xs sm:grid-cols-3">
            <div>
              <dt className={monoLabelClass}>Department</dt>
              <dd className="mt-1 font-medium">The Universe</dd>
            </div>
            <div>
              <dt className={monoLabelClass}>Status</dt>
              <dd className="mt-1 font-medium">Escalated</dd>
            </div>
            <div>
              <dt className={monoLabelClass}>Expected response</dt>
              <dd className="mt-1 font-medium">3–5 days or one funding cycle</dd>
            </div>
          </dl>
          <p className="mt-5 border-t border-rule pt-4 font-display text-lg font-semibold tracking-[-0.02em] text-signal">
            Ya Rab, chala de ye startup.
          </p>
          <p className="mt-1 text-xs leading-relaxed text-muted">
            No actual prayer is transmitted. No divine SLA is implied. Please pray
            independently if you wish.
          </p>
        </div>
      ) : (
        <div className="border border-dashed border-rule p-5">
          <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
            Awaiting your crisis
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            Select a situation and request intervention. The universe is currently
            reviewing last quarter&apos;s tickets.
          </p>
        </div>
      )}
    </div>
  );
}
