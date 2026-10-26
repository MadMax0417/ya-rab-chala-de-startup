"use client";

import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PRODUCTS, type Product, type ProductId } from "@/lib/content";
import { Dialog } from "@/components/ui/dialog";
import {
  FundMyDelusionDemo,
  LinkedInifyDemo,
  PivotGptDemo,
  PrayerDemo,
} from "@/components/product-demos";

function ProductDemo({ id }: { id: ProductId }) {
  switch (id) {
    case "pivotgpt":
      return <PivotGptDemo />;
    case "fundmydelusion":
      return <FundMyDelusionDemo />;
    case "linkedinify":
      return <LinkedInifyDemo />;
    case "prayer":
      return <PrayerDemo />;
  }
}

function ProductDetails({ product }: { product: Product }) {
  return (
    <div className="mt-6 border-t border-rule pt-5">
      <p className="font-mono text-[8px] uppercase tracking-[0.15em] text-muted">
        {product.detailLabel}
      </p>

      {product.bullets ? (
        <ul className="mt-3 space-y-2">
          {product.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2.5 text-sm leading-snug text-ink/80">
              <span
                aria-hidden="true"
                className="mt-[0.45rem] h-1 w-1 shrink-0 bg-signal"
              />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {product.example ? (
        <div className="mt-3 space-y-3">
          {product.example.map((example) => (
            <div
              key={example.label}
              className="grid grid-cols-[4.4rem_1fr] gap-3 border-l-2 border-rule pl-3"
            >
              <span className="font-mono text-[8px] uppercase leading-relaxed tracking-[0.1em] text-muted">
                {example.label}
              </span>
              <span className="text-sm leading-snug text-ink/80">{example.text}</span>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default function ProductLab() {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <div className="mt-10 grid gap-px border border-rule bg-rule md:grid-cols-2 lg:mt-14">
        {PRODUCTS.map((product) => (
          <article
            key={product.id}
            className="reveal group flex flex-col bg-paper p-5 transition-colors duration-300 hover:bg-[#f8f4ec] sm:p-7 lg:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
                <span className="text-signal">{product.number}</span>
                <span className="h-px w-5 bg-rule" aria-hidden="true" />
                <span>{product.category}</span>
              </div>
              <span className="shrink-0 border border-rule px-2 py-1 font-mono text-[7px] uppercase tracking-[0.13em] text-muted">
                Fictional
              </span>
            </div>

            <h3 className="mt-8 font-display text-[clamp(2rem,3.6vw,3.4rem)] font-extrabold leading-none tracking-[-0.05em]">
              {product.name}
            </h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted sm:text-[15px]">
              {product.description}
            </p>

            <ProductDetails product={product} />

            <div className="mt-auto pt-8">
              <button
                type="button"
                onClick={(event) => {
                  triggerRef.current = event.currentTarget;
                  setActiveProduct(product);
                }}
                className="group/cta flex w-full items-center justify-between gap-4 border-t border-ink pt-4 text-left font-mono text-[10px] uppercase tracking-[0.12em] text-ink transition hover:text-signal"
              >
                {product.cta}
                <ArrowUpRight
                  size={15}
                  strokeWidth={2}
                  aria-hidden="true"
                  className="shrink-0 transition-transform duration-300 group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5"
                />
              </button>
              <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.12em] text-muted">
                {product.footnote}
              </p>
            </div>
          </article>
        ))}
      </div>

      <Dialog
        open={Boolean(activeProduct)}
        onClose={() => setActiveProduct(null)}
        labelledBy="product-demo-title"
        returnFocusRef={triggerRef}
      >
        {activeProduct ? (
          <>
            <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-signal">
              Product {activeProduct.number} / Interactive demo
            </p>
            <h3
              id="product-demo-title"
              className="mt-3 font-display text-4xl font-extrabold leading-none tracking-[-0.045em] sm:text-5xl"
            >
              {activeProduct.name}
            </h3>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted">
              {activeProduct.description}
            </p>

            <div className="mt-7">
              <ProductDemo id={activeProduct.id} />
            </div>

            <div className="mt-7 border border-rule bg-paper-deep/55 p-3">
              <p className="font-mono text-[8px] uppercase leading-relaxed tracking-[0.12em] text-muted">
                Interactive satire. This is not a real product, service, AI model, or
                spiritual offering. Nothing is submitted anywhere. No divine SLA is
                implied.
              </p>
            </div>
          </>
        ) : null}
      </Dialog>
    </>
  );
}
