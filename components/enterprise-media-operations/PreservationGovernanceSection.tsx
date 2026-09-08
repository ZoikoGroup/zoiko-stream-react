import React from "react";
import Image from "next/image";

interface PreservationCard {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}

const preservationData: PreservationCard[] = [
  {
    id: 23,
    title: "Recording lifecycle",
    description:
      "Automate redundant multi-region cloud captures. Save clean program masters instantly.",
    imageSrc: "/images/media/card-image (23).png",
  },
  {
    id: 24,
    title: "Replay continuity",
    description:
      "Configure custom DVR scrub access limits, allowing observers to rewind and catch up during live hours.",
    imageSrc: "/images/media/card-image (24).png",
  },
  {
    id: 25,
    title: "Preservation governance",
    description:
      "Establish explicit data storage periods—90 days, 1 year, or forever—to meet internal privacy mandates.",
    imageSrc: "/images/media/card-image (25).png",
  },
  {
    id: 26,
    title: "Asset management",
    description:
      "Package VOD streams and compile index assets within hours of event wrap-up.",
    imageSrc: "/images/media/card-image (26).png",
  },
];

export default function PreservationGovernanceSection() {
  return (
    <section className="relative w-full text-white font-sans py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-950">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/media/b4.png"
          alt="Preservation Governance Background"
          fill
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-slate-950/60" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-3">
            Decide what remains afterward
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-normal">
            Define recording lifecycle, replay access, and preservation
            governance with source-backed policies.
          </p>
        </div>

        {/* 4 Cards Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {preservationData.map((card) => (
            <div
              key={card.id}
              className="rounded-2xl border border-slate-800/80 bg-[#0d121f]/70 backdrop-blur-md overflow-hidden shadow-xl flex flex-col transition-all hover:border-slate-700"
            >
              <div className="relative w-full h-44 bg-slate-900">
                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-base font-bold text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
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
