import React from 'react';

export default function SecurityBoundaries() {
  const boundaryCards = [
    {
      title: "Provider in registry ≠ Provider is 'approved secure'",
      description: "Listing simply registers legal processing presence. Security verification is handled exclusively through our active SOC 2 / ISO 27001 portals.",
      imageSrc: "/images/subprocessors/listing.png",
    },
    {
      title: "Provider certification ≠ ZoikoStream inherits certification",
      description: "A subprocessor's individual certification does not automatically extend to our platform. Each framework is reviewed within its own scope boundary.",
      imageSrc: "/images/subprocessors/inherits.png",
    },
    {
      title: "Provider is compliant ≠ ZoikoStream is compliant",
      description: "Compliance alignments are separate legal and technical audits. Each entity is assessed individually without automatic inherited status.",
      imageSrc: "/images/subprocessors/compliat.png",
    },
    {
      title: "Provider is reliable ≠ ZoikoStream SLA guaranteed",
      description: "While we utilize robust infrastructure, individual partner performance is governed by separate telemetry, not our unified platform SLA.",
      imageSrc: "/images/subprocessors/utilize.png",
    },
    {
      title: "Provider region ≠ ZoikoStream data residency",
      description: "Processing location fields state geographical boundaries but do not constitute comprehensive data residency covenants, which live in your DPA.",
      imageSrc: "/images/subprocessors/location.png",
    },
    {
      title: "Provider removal ≠ Data immediately deleted",
      description: "De-provisioning is a phased technical protocol. Removed subprocessors cease active processing immediately, but logs clean up on distinct cycles.",
      imageSrc: "/images/subprocessors/deleted.png",
    },
  ];

  return (
    <section className="relative w-full bg-zinc-950 py-16 md:py-24 px-6 md:px-12 lg:px-28 border-y border-gray-800 overflow-hidden">

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-zinc-950/90 pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-12">

        {/* Header Section */}
        <div className="flex flex-col gap-3 max-w-4xl">
          <h2 className="text-slate-100 text-3xl md:text-4xl font-bold font-['Space_Grotesk'] leading-tight md:leading-[60px]">
            Security, Compliance and Reliability Boundaries
          </h2>
          <p className="text-slate-400 text-base md:text-lg font-normal font-['Space_Grotesk'] leading-7">
            Provider inclusion in the subprocessor registry does not constitute security certification, compliance endorsement, or reliability guarantee. Each domain maintains its own evidence authority.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {boundaryCards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col bg-zinc-900/80 rounded-2xl border border-gray-800 overflow-hidden group shadow-lg hover:border-gray-700 transition-colors h-full"
            >
              {/* Card Image */}
              <div className="w-full h-40 relative overflow-hidden bg-zinc-800 shrink-0">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={card.imageSrc}
                  alt={`${card.title} illustration`}
                />
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col gap-3 flex-grow">
                <h3 className="text-slate-100 text-base font-bold font-['Space_Grotesk'] leading-snug">
                  {card.title}
                </h3>

                <p className="text-slate-400 text-xs font-normal font-['Space_Grotesk'] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
