"use client";

import { useEffect, useRef } from "react";

type CountUpProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
};

const numberFormatter = new Intl.NumberFormat("en-IN");

export function CountUp({ value, prefix = "", suffix = "", className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const textNode = node;

    const finalValue = `${prefix}${numberFormatter.format(value)}${suffix}`;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion || value === 0) {
      textNode.textContent = finalValue;
      return;
    }

    let frame = 0;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;
        observer.disconnect();

        const startedAt = performance.now();
        const duration = 950;

        function tick(now: number) {
          const progress = Math.min((now - startedAt) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          textNode.textContent = `${prefix}${numberFormatter.format(
            Math.round(eased * value),
          )}${suffix}`;

          if (progress < 1) {
            frame = requestAnimationFrame(tick);
          }
        }

        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {`${prefix}${numberFormatter.format(value)}${suffix}`}
    </span>
  );
}
