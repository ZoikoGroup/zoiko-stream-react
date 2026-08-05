import { 
  AboutFaqSection, 
  AboutHeroSection, 
  ByTheNumbersSection, 
  CtaSection, 
  LeadershipSection, 
  OperatingPrinciplesSection, 
  WhoWeAreSection 
} from "@/components/about-us";

export default function Page() {
  return (
    <main >
      <AboutHeroSection />
      <WhoWeAreSection />
      <OperatingPrinciplesSection />
      <ByTheNumbersSection />
      <LeadershipSection />
      <AboutFaqSection />
      <CtaSection />
    </main>
  );
}