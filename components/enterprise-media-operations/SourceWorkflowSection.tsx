import React from "react";
import Image from "next/image";

interface SourceWorkflowCard {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}

const sourceWorkflowData: SourceWorkflowCard[] = [
  {
    id: 12,
    title: "Remote/distributed contribution",
    description:
      "Leverage WebRTC ultra-low-latency capture or high-fidelity SRT connections to bring remote experts into the program natively.",
    imageSrc: "/images/media/card-image (12).png",
  },
  {
    id: 13,
    title: "Source readiness validation",
    description:
      "Structured preflight checks test connection bandwidth, audio clarity, and camera resolution before authorizing streams.",
    imageSrc: "/images/media/card-image (13).png",
  },
  {
    id: 14,
    title: "Production coordination",
    description:
      "Automate graphics overlays, coordinate speaker cues, and prioritize sound feeds through clean web operations dashboards.",
    imageSrc: "/images/media/card-image (14).png",
  },
];

export default function SourceWorkflowSection() {
  return (
    <section className="w-full bg-white text-slate-900 font-sans py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-950 mb-3">
            Know how every source reaches the workflow
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-normal">
            Track contribution paths with clear ownership and specialist
            authority handoffs.
          </p>
        </div>

        {/* 3 Cards Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sourceWorkflowData.map((card) => (
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
