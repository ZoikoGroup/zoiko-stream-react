import React from "react";
import Image from "next/image";

interface DutyCard {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}

const dutiesData: DutyCard[] = [
  {
    id: 38,
    title: "Content/program",
    description:
      "Establishes initial event parameters, inputs base objectives, and whitelists access.",
    imageSrc: "/images/media/card-image (38).png",
  },
  {
    id: 39,
    title: "Source readiness",
    description:
      "Supplies high-definition physical sources and tests connection latency.",
    imageSrc: "/images/media/card-image (39).png",
  },
  {
    id: 40,
    title: "Production operation",
    description:
      "Designs visual overlays, loads logo assets, and coordinates transition cues.",
    imageSrc: "/images/media/card-image (40).png",
  },
  {
    id: 41,
    title: "Access & security",
    description:
      "Enforces passcode keys, SAML integration, and IP whitelist restrictions.",
    imageSrc: "/images/media/card-image (41).png",
  },
  {
    id: 42,
    title: "Monitoring/response",
    description:
      "Monitors active stream metrics and failover cellular connection channels.",
    imageSrc: "/images/media/card-image (42).png",
  },
  {
    id: 43,
    title: "Recording/replay",
    description:
      "Authorizes lifetime storage retention tiers and compiles VOD master downloads.",
    imageSrc: "/images/media/card-image (43).png",
  },
  {
    id: 44,
    title: "Accessibility/language",
    description:
      "Reviews real-time captions accuracy and configures multi-lingual audio routes.",
    imageSrc: "/images/media/card-image (44).png",
  },
  {
    id: 45,
    title: "Analytics/reporting",
    description:
      "Monitors run-time drop-offs and delivers post-run audit telemetry.",
    imageSrc: "/images/media/card-image (45).png",
  },
];

export default function SeparationOfDutiesSection() {
  return (
    <section className="relative w-full text-white font-sans py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-950">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/media/b6.png"
          alt="Separation of Duties Background"
          fill
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-slate-950/60" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-3">
            Clarify ownership and separation of duties
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-normal">
            Responsibility domains define accountability without inventing role
            names.
          </p>
        </div>

        {/* 8 Cards Grid Container (4 columns x 2 rows on large screens) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dutiesData.map((card) => (
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
