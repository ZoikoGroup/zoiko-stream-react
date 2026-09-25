import React from "react";

// Import all sections (adjust the paths based on your actual folder structure)
import MediaProtocolsHero from "@/components/media-protocols/MediaProtocolsHero";
import ChooseByWorkflow from "@/components/media-protocols/ChooseByWorkflow";
import ProtocolCatalog from "@/components/media-protocols/ProtocolCatalog";
import ProtocolFitSection from "@/components/media-protocols/ProtocolFitSection";
import SecurityRequirements from "@/components/media-protocols/SecurityRequirements";
import MediaCompatibility from "@/components/media-protocols/MediaCompatibility";
import ReliabilitySemantics from "@/components/media-protocols/ReliabilitySemantics";
import AuthenticationSection from "@/components/media-protocols/AuthenticationSection";
import ObservabilitySection from "@/components/media-protocols/ObservabilitySection";
import ErrorTaxonomySection from "@/components/media-protocols/ErrorTaxonomySection";
import SecurityBoundaries from "@/components/media-protocols/SecurityBoundaries";
import VersioningSection from "@/components/media-protocols/VersioningSection";
import FAQSection from "@/components/media-protocols/FAQSection";
import FinalCTA from "@/components/media-protocols/FinalCTA";

export default function MediaProtocolsPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-zinc-950 font-['Space_Grotesk']">
      {/* 1. Hero Section */}
      <MediaProtocolsHero />

      {/* 2. Workflow Selection */}
      <ChooseByWorkflow />

      {/* 3. Catalog & Fit */}
      <ProtocolCatalog />
      <ProtocolFitSection />

      {/* 4. Connection & Requirements */}
      <SecurityRequirements />
      <MediaCompatibility />

      {/* 5. Reliability & Implementation Semantics */}
      <ReliabilitySemantics />
      <AuthenticationSection />

      {/* 6. Operations & Troubleshooting */}
      <ObservabilitySection />
      <ErrorTaxonomySection />

      {/* 7. Architecture & Lifecycle */}
      <SecurityBoundaries />
      <VersioningSection />

      {/* 8. FAQ */}
      <FAQSection />

      {/* 9. Final Call to Action */}
      <FinalCTA />
    </main>
  );
}
