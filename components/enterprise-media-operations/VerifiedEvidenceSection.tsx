import React from "react";
import Image from "next/image";

interface EvidenceCard {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}

const evidenceData: EvidenceCard[] = [
  {
    id: 49,
    title: "Architecture diagrams",
    description:
      "Detailed cloud ingestion mapping, failover pathways schematics, and secure SAML handshake blueprints.",
    imageSrc: "/images/media/card-image (49).png",
  },
  {
    id: 50,
    title: "Case studies",
    description:
      "Direct, source-verified reviews tracing how complex organizations centralized their media operating models.",
    imageSrc: "/images/media/card-image (50).png",
  },
  {
    id: 51,
    title: "Operational metrics",
    description:
      "Transparent telemetry datasets capturing average buffering times, failover recovery windows, and system uptimes.",
    imageSrc: "/images/media/card-image (51).png",
  },
];

export default function VerifiedEvidenceSection() {
  return (
    <section className="w-full bg-white text-slate-900 font-sans py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-950 mb-3">
            Verified evidence and architecture proof
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-normal">
            Only current, approved evidence — no fabricated enterprise success
            claims.
          </p>
        </div>

        {/* 3 Cards Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {evidenceData.map((card) => (
            <div
              key={card.id}
              className="rounded-2xl border border-slate-200/80 bg-slate-50/60 overflow-hidden shadow-sm flex flex-col transition-all hover:shadow-md"
            >
              <div className="relative w-full h-52 bg-slate-900">
                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-base font-bold text-slate-950 mb-3">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
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
