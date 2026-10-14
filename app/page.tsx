import { BoxShowcase } from "@/components/feirabox/BoxShowcase";
import { Differentials } from "@/components/feirabox/Differentials";
import { Faq } from "@/components/feirabox/Faq";
import { ForProducers } from "@/components/feirabox/ForProducers";
import { SiteHeader, TopBanner } from "@/components/feirabox/Header";
import { HeroSection } from "@/components/feirabox/HeroSection";
import { HowItWorks } from "@/components/feirabox/HowItWorks";
import { ImpactStats } from "@/components/feirabox/ImpactStats";
import { Partners } from "@/components/feirabox/Partners";
import { SiteFooter } from "@/components/feirabox/SiteFooter";
import { StickyMobileCta } from "@/components/feirabox/StickyMobileCta";
import { Testimonials } from "@/components/feirabox/Testimonials";
import { UfmsImpact } from "@/components/feirabox/UfmsImpact";
import { WaitlistCta } from "@/components/feirabox/WaitlistCta";
import { IMAGES } from "@/components/feirabox/images";
import { faqJsonLd, productListJsonLd } from "@/lib/site";

export default function Home() {
  return (
    <div id="topo" className="w-full bg-background min-h-screen flex flex-col">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-xl focus:bg-primary focus:text-on-primary"
      >
        Pular para o conteúdo
      </a>
      <TopBanner />
      <SiteHeader logoSrc={IMAGES.logoHeader} />
      <main id="conteudo" className="w-full bg-background flex-1">
        <div className="flex flex-col w-full">
          <HeroSection />
          <ImpactStats />
          <HowItWorks />
          <BoxShowcase />
          <ForProducers />
          <Testimonials />
          <Differentials />
          <UfmsImpact />
          <Partners />
          <Faq />
          <WaitlistCta />
        </div>
      </main>
      <SiteFooter />
      {/* Espaço para o CTA fixo mobile não cobrir o rodapé */}
      <div aria-hidden="true" className="h-20 md:hidden" />
      <StickyMobileCta />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productListJsonLd()),
        }}
      />
    </div>
  );
}
