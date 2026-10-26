import ProductLab from "@/components/product-lab";
import { SectionHeading } from "@/components/section-heading";

export default function Products() {
  return (
    <section
      id="products"
      aria-labelledby="products-title"
      className="border-b border-rule bg-paper-deep/35 py-16 sm:py-20 lg:py-24"
    >
      <div className="shell">
        <SectionHeading
          index="03"
          eyebrow="Our revolutionary products"
          titleId="products-title"
          title="Solutions to problems nobody asked us to solve."
          description="Four category-defining platforms. Zero category definition. Each one is a fully operational concept."
        />

        <ProductLab />

        <p className="mt-4 font-mono text-[9px] uppercase leading-relaxed tracking-[0.12em] text-muted">
          <span className="text-signal">*</span> All four products are fictional. The
          buttons open interactive jokes, not services. Please continue to use real
          software for real work.
        </p>
      </div>
    </section>
  );
}
