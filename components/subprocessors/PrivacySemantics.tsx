import React from 'react';

export default function PrivacySemantics() {
  const semanticRules = [
    {
      title: 'Processing location ≠ Data residency guarantee',
      description: 'Our registry lists active processing geographies to comply with legal disclosure rules. This context does not constitute a solid data residency contract, which is strictly governed by your specific Data Processing Addendum.',
    },
    {
      title: 'Provider removal ≠ Immediate data deletion',
      description: 'Phasing out a vendor triggers active de-provisioning, but temporary backups and archival caches clean up only on defined, audited data retention cycles. Immediate erasure requires separate explicit requests.',
    },
    {
      title: 'Registry presence ≠ Retention authority',
      description: "A subprocessor's registry listing does not establish active retention conclusions. How long your payload or logging data is kept is controlled entirely by our master platform data lifecycle policy.",
    },
    {
      title: 'Location field ≠ Transfer mechanism',
      description: 'Listing a country or cloud region identifies geographical processing boundaries. It does not replace or summarize international transfer safety mechanisms like Standard Contractual Clauses (SCCs).',
    },
  ];

  return (
    <section className="relative w-full bg-slate-950 border-y border-gray-800 py-16 md:py-24 px-6 md:px-12 lg:px-28 overflow-hidden">
      {/* Decorative Background Blurs */}
      <div className="absolute w-[300px] h-[300px] md:w-[520px] md:h-[520px] right-[-10%] md:right-[-5%] top-[60%] md:top-[40%] bg-blue-500/10 rounded-full blur-[55px] pointer-events-none z-0" />
      <div className="absolute w-[200px] h-[200px] md:w-96 md:h-96 left-[-10%] md:left-[-5%] top-[-5%] bg-teal-400/10 rounded-full blur-[60px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-12 lg:gap-14">
        {/* Header Section */}
        <div className="flex flex-col gap-3 max-w-4xl">
          <h2 className="text-slate-100 text-3xl md:text-4xl font-bold font-['Space_Grotesk'] leading-tight md:leading-[60px]">
            Retention, Deletion, Residency and Privacy Semantics
          </h2>
          <p className="text-slate-400 text-base md:text-lg font-normal font-['Space_Grotesk'] leading-7">
            Broader data lifecycle governance — including retention policies, deletion procedures, data residency commitments, and privacy rights — remains with the Data Protection authority. The subprocessor registry provides processing-location context but does not establish residency guarantees or retention conclusions.
          </p>
        </div>

        {/* Content Split Grid */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full items-start">
          {/* Left Column: Rules List */}
          <div className="flex-1 flex flex-col gap-6 w-full">
            {semanticRules.map((rule, index) => (
              <div
                key={index}
                className="w-full p-5 md:p-6 bg-zinc-900/80 rounded-xl border border-gray-800 flex flex-col gap-2 hover:shadow-sm hover:border-gray-700 transition-all duration-300"
              >
                <h3 className="text-slate-100 text-base md:text-lg font-bold font-['Space_Grotesk']">
                  {rule.title}
                </h3>
                <p className="text-slate-400 text-xs md:text-sm font-normal font-['Space_Grotesk'] leading-relaxed">
                  {rule.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column: CTA Card */}
          <div className="w-full lg:w-[480px] p-6 md:p-8 bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col gap-6 shadow-sm shrink-0">
            {/* Card Image */}
            <div className="w-full h-48 md:h-56 relative rounded-lg overflow-hidden bg-zinc-800">
              <img
                className="w-full h-full object-cover"
                src="/images/subprocessors/BoundaryHeroImage.png"
                alt="Data Protection Dashboard Preview"
              />
            </div>

            {/* Card Content */}
            <div className="flex flex-col gap-3">
              <h3 className="text-slate-100 text-lg md:text-xl font-bold font-['Space_Grotesk']">
                Data Protection & Governance
              </h3>
              <p className="text-slate-400 text-sm font-normal font-['Space_Grotesk'] leading-relaxed">
                Learn more about our global privacy policies, CCPA/GDPR compliance frameworks, and secure deletion protocols on our data protection dashboard.
              </p>
            </div>

            {/* CTA Button */}
            <a
              href="#"
              className="w-full px-6 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 hover:opacity-90 transition-opacity rounded-[10px] text-center text-slate-950 text-base font-bold font-['Space_Grotesk'] shadow-sm"
            >
              Explore Data Protection Page
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
