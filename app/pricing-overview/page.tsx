import React from "react";
import Section1Hero from "@/components/pricing-overview/Section1Hero";
import Section2TruthBar from "@/components/pricing-overview/Section2TruthBar";
import Section3PricingPath from "@/components/pricing-overview/Section3PricingPath";
import Section4Snapshot from "@/components/pricing-overview/Section4Snapshot";
import Section5CostDrivers from "@/components/pricing-overview/Section5CostDrivers";
import Section6UsageBilling from "@/components/pricing-overview/Section6UsageBilling";
import Section7Comparison from "@/components/pricing-overview/Section7Comparison";
import Section8Boundaries from "@/components/pricing-overview/Section8Boundaries";
import Section9FAQ from "@/components/pricing-overview/Section9FAQ";
import Section10DecisionZone from "@/components/pricing-overview/Section10DecisionZone";

export default function PricingOverviewPage() {
  return (
    <main className="bg-[#0a0f1a] content-stretch flex flex-col items-start relative size-full">
      <Section1Hero />
      <Section2TruthBar />
      <Section3PricingPath />
      <Section4Snapshot />
      <Section5CostDrivers />
      <Section6UsageBilling />
      <Section7Comparison />
      <Section8Boundaries />
      <Section9FAQ />
      <Section10DecisionZone />
    </main>
  );
}
