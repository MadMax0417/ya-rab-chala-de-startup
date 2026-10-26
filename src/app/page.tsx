import FinalCta from "@/components/final-cta";
import FounderConfession from "@/components/founder-confession";
import FounderReality from "@/components/founder-reality";
import Hero from "@/components/hero";
import Investors from "@/components/investors";
import Products from "@/components/products";
import Roadmap from "@/components/roadmap";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import SurvivalSimulator from "@/components/survival-simulator";
import Traction from "@/components/traction";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Traction />
        <Products />
        <FounderReality />
        <Investors />
        <Roadmap />
        <SurvivalSimulator />
        <FounderConfession />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
