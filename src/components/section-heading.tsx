import type { ReactNode } from "react";

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  titleId: string;
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  titleId,
}: SectionHeadingProps) {
  return (
    <div className="grid gap-5 md:grid-cols-12 md:gap-8">
      <div className="md:col-span-3">
        <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
          <span className="text-signal">{index}</span>
          <span className="mx-2 text-rule">/</span>
          {eyebrow}
        </p>
      </div>
      <div className="md:col-span-9">
        <h2
          id={titleId}
          className="max-w-4xl text-balance font-display text-[clamp(2.35rem,4.2vw,4.6rem)] font-extrabold leading-[0.94] tracking-[-0.055em]"
        >
          {title}
        </h2>
        {description ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
