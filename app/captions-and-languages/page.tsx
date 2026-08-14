import Hero from "@/components/captions-and-languages/Hero";
import OperatingModel from "@/components/captions-and-languages/OperatingModel";
import HowItWorks from "@/components/captions-and-languages/HowItWorks";
import CaptionTypes from "@/components/captions-and-languages/CaptionTypes";
import LanguageSupport from "@/components/captions-and-languages/LanguageSupport";
import ViewerExperience from "@/components/captions-and-languages/ViewerExperience";
import AccessibilityCompliance from "@/components/captions-and-languages/AccessibilityCompliance";
import Faq from "@/components/captions-and-languages/Faq";
import FinalCta from "@/components/captions-and-languages/FinalCta";

export const metadata = {
  title: "Captions & Languages | Zoiko Stream",
  description: "Add live captions, multi-language audio, and real-time translation to any event.",
};

export default function CaptionsAndLanguagesPage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#0a0d13]">
      <Hero />
      <OperatingModel />
      <HowItWorks />
      <CaptionTypes />
      <LanguageSupport />
      <ViewerExperience />
      <AccessibilityCompliance />
      <Faq />
      <FinalCta />
    </main>
  );
}
