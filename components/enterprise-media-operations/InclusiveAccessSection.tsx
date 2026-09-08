import React from "react";
import Image from "next/image";

interface AccessibilityCard {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}

const accessibilityData: AccessibilityCard[] = [
  {
    id: 27,
    title: "Accessibility planning",
    description:
      "Identify audio-only failover channels, telephone bridge links, and caption profiles prior to broadcast launch.",
    imageSrc: "/images/media/card-image (27).png",
  },
  {
    id: 28,
    title: "Captions capability",
    description:
      "Incorporate low-latency, speech-to-text live automated subtitles directly inside player displays.",
    imageSrc: "/images/media/card-image (28).png",
  },
  {
    id: 29,
    title: "Translation pathways",
    description:
      "Inject secondary translation audio feeds or multiple subtitle tracks for global operations.",
    imageSrc: "/images/media/card-image (29).png",
  },
  {
    id: 30,
    title: "Accessible player widget",
    description:
      "Ensure fully responsive player layouts compliant with screen-reader targets and keyboard navigation models.",
    imageSrc: "/images/media/card-image (30).png",
  },
];

export default function InclusiveAccessSection() {
  return (
    <section className="w-full bg-white text-slate-900 font-sans py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-950 mb-3">
            Plan captions, languages, and inclusive access
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-normal">
            Make accessibility a readiness requirement, not a decorative
            compliance badge.
          </p>
        </div>

        {/* 4 Cards Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {accessibilityData.map((card) => (
            <div
              key={card.id}
              className="rounded-2xl border border-slate-200/80 bg-slate-50/60 overflow-hidden shadow-sm flex flex-col transition-all hover:shadow-md"
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
