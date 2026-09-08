import React from "react";
import Image from "next/image";

interface OwnershipCard {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}

const ownershipData: OwnershipCard[] = [
  {
    id: 8,
    title: "Customer-operated",
    description:
      "Your AV teams coordinate local physical cameras, mixer staging, and compression. We guarantee secure network ingestion.",
    imageSrc: "/images/media/card-image (8).png",
  },
  {
    id: 9,
    title: "Shared responsibility",
    description:
      "Physical staging belongs to you, while our engineering teams handle remote failovers and participant health.",
    imageSrc: "/images/media/card-image (9).png",
  },
  {
    id: 10,
    title: "Professionally managed",
    description:
      "Zoiko experts handle on-site setup, configure system redundancies, and monitor signal health actively.",
    imageSrc: "/images/media/card-image (10).png",
  },
  {
    id: 11,
    title: "Partner-operated",
    description:
      "Certified AV integration partners manage local physical deployments under our structured operations model.",
    imageSrc: "/images/media/card-image (11).png",
  },
];

export default function OwnershipOperationSection() {
  return (
    <section className="relative w-full text-white font-sans py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-950">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/media/b1.png"
          alt="Ownership Background"
          fill
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-slate-950/50" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-3">
            Understand who owns each part of the operation
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-normal">
            Source-backed operating paths ensure responsibilities are clear
            before workflows begin.
          </p>
        </div>

        {/* 4 Cards Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ownershipData.map((card) => (
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
