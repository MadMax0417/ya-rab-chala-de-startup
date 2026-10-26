import { Check } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { ROADMAP, type RoadmapStatus } from "@/lib/content";

const statusStyles: Record<RoadmapStatus, string> = {
  completed: "border-ink/15 bg-paper-deep text-ink",
  "in-progress": "border-signal/25 bg-signal-soft text-signal",
  planned: "border-rule bg-transparent text-muted",
};

function StatusBadge({ status, label }: { status: RoadmapStatus; label: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 border px-2 py-1 font-mono text-[8px] uppercase tracking-[0.12em] ${statusStyles[status]}`}
    >
      {status === "completed" ? (
        <Check size={10} strokeWidth={2.2} aria-hidden="true" />
      ) : (
        <span
          aria-hidden="true"
          className={`h-1.5 w-1.5 ${
            status === "in-progress" ? "bg-signal" : "border border-current"
          }`}
        />
      )}
      {label}
    </span>
  );
}

function NodeMarker({ status }: { status: RoadmapStatus }) {
  return (
    <span
      aria-hidden="true"
      className={`relative z-10 grid h-3 w-3 shrink-0 place-items-center rounded-full border-2 ${
        status === "completed"
          ? "border-ink bg-ink"
          : status === "in-progress"
            ? "border-signal bg-paper"
            : "border-ink/35 bg-paper"
      }`}
    >
      {status === "in-progress" ? (
        <span className="h-1 w-1 rounded-full bg-signal" />
      ) : null}
    </span>
  );
}

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      aria-labelledby="roadmap-title"
      className="border-b border-rule py-16 sm:py-20 lg:py-24"
    >
      <div className="shell">
        <SectionHeading
          index="06"
          eyebrow="The roadmap"
          titleId="roadmap-title"
          title="Our path to global domination."
          description="Five decisive phases. Three of them are still being defined by the previous phase."
        />

        <div className="mt-12 hidden lg:mt-16 lg:block">
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute left-[6px] right-0 top-[5px] h-px bg-ink/25"
            />
            <ol className="grid grid-cols-5 gap-6">
              {ROADMAP.map((item) => (
                <li key={item.period} className="relative">
                  <div className="relative flex items-center">
                    <NodeMarker status={item.status} />
                  </div>
                  <div className="mt-7 border-t border-rule pt-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                        {item.period}
                      </p>
                      <StatusBadge status={item.status} label={item.statusLabel} />
                    </div>
                    <h3 className="mt-4 font-display text-2xl font-bold leading-tight tracking-[-0.035em]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm font-medium leading-snug text-ink/80">
                      {item.note}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-muted">
                      {item.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <ol className="mt-10 border-l border-rule lg:hidden">
          {ROADMAP.map((item) => (
            <li key={item.period} className="relative pb-8 pl-6 last:pb-0">
              <span className="absolute -left-[6px] top-1">
                <NodeMarker status={item.status} />
              </span>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-muted">
                  {item.period}
                </p>
                <StatusBadge status={item.status} label={item.statusLabel} />
              </div>
              <h3 className="mt-3 font-display text-2xl font-bold leading-tight tracking-[-0.035em]">
                {item.title}
              </h3>
              <p className="mt-2 text-sm font-medium leading-snug text-ink/80">
                {item.note}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-muted">{item.detail}</p>
            </li>
          ))}
        </ol>

        <p className="mt-10 flex items-center gap-2 border-t border-rule pt-4 font-mono text-[9px] uppercase tracking-[0.12em] text-muted">
          <span className="h-1.5 w-1.5 bg-signal" aria-hidden="true" />
          Dates are aspirational. Time is a construct. So is product-market fit.
        </p>
      </div>
    </section>
  );
}
