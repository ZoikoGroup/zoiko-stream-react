import React from "react";
import Image from "next/image";

interface GovernanceCard {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}

const governanceData: GovernanceCard[] = [
  {
    id: 35,
    title: "Readiness checklists",
    description:
      "Mandatory preflight gate sheets require green status approvals for all contribution feeds and network routes before broadcast sign-off.",
    imageSrc: "/images/media/card-image (35).png",
  },
  {
    id: 36,
    title: "Change management",
    description:
      "Isolate and validate only new variables—new physical venue parameters—while duplicating proven, stable audience settings.",
    imageSrc: "/images/media/card-image (36).png",
  },
  {
    id: 37,
    title: "Post-run reviews",
    description:
      "Debrief after every run, evaluate run logs, address platform anomalies, and incorporate key operational learnings.",
    imageSrc: "/images/media/card-image (37).png",
  },
];

export default function ContinuousImprovementSection() {
  return (
    <section className="w-full bg-white text-slate-900 font-sans py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-950 mb-3">
            Govern readiness, change, and continuous improvement
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-normal">
            Structured operational governance without invented workflow names or
            fixed procedures.
          </p>
        </div>

        {/* 3 Cards Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {governanceData.map((card) => (
            <div
              key={card.id}
              className="rounded-2xl border border-slate-200/80 bg-slate-50/60 overflow-hidden shadow-sm flex flex-col transition-all hover:shadow-md"
            >
              <div className="relative w-full h-48 bg-slate-900">
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
