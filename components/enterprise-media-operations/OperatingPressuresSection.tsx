import React from "react";
import Image from "next/image";

interface ChallengeCard {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}

const challengesData: ChallengeCard[] = [
  {
    id: 0,
    title: "Recurring live programs",
    description:
      "Repeatable preparation, contribution, production, delivery, monitoring, replay.",
    imageSrc: "/images/media/card-image (0).png",
  },
  {
    id: 1,
    title: "Distributed teams/sources",
    description:
      "Clear source intake requirements and well-defined operational responsibility boundaries.",
    imageSrc: "/images/media/card-image (1).png",
  },
  {
    id: 2,
    title: "Private or controlled audiences",
    description:
      "Enterprise-grade current access controls, SAML whitelists, and security decisions.",
    imageSrc: "/images/media/card-image (2).png",
  },
  {
    id: 3,
    title: "Operational visibility",
    description:
      "Current-health telemetry signals and instant priority issue routing pathways.",
    imageSrc: "/images/media/card-image (3).png",
  },
  {
    id: 4,
    title: "Post-live continuity",
    description:
      "Source-backed automated recording and instant replay archive workflows.",
    imageSrc: "/images/media/card-image (4).png",
  },
  {
    id: 5,
    title: "Accessibility/language rules",
    description:
      "Pre-planned multi-language captioning and translation workflows native to players.",
    imageSrc: "/images/media/card-image (5).png",
  },
  {
    id: 6,
    title: "Decision/reporting needs",
    description:
      "Defined operational analytics and telemetry data currentness.",
    imageSrc: "/images/media/card-image (6).png",
  },
  {
    id: 7,
    title: "Governance/change",
    description:
      "Clear system ownership, audit/evidence logs, release awareness, and support.",
    imageSrc: "/images/media/card-image (7).png",
  },
];

export default function OperatingPressuresSection() {
  return (
    <section className="w-full bg-white text-slate-900 font-sans py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-950 mb-3">
            Recognize the enterprise operating pressures you face
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-normal">
            Help your organization identify recurring operational challenges
            without fear language.
          </p>
        </div>

        {/* 8 Cards Grid Container (4x2 on large screens) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {challengesData.map((card) => (
            <div
              key={card.id}
              className="rounded-2xl border border-slate-200/80 bg-slate-50/60 overflow-hidden shadow-sm flex flex-col transition-all hover:shadow-md"
            >
              <div className="relative w-full h-40 bg-slate-900">
                <Image
                  src={card.imageSrc}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-sm font-bold text-slate-950 mb-2">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
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
