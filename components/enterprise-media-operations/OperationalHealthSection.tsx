import React from "react";
import Image from "next/image";

interface OperationalHealthCard {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}

const healthData: OperationalHealthCard[] = [
  {
    id: 19,
    title: "Current stream health",
    description:
      "Map active ingest speeds, resolution metrics, and packet jitter in real-time.",
    imageSrc: "/images/media/card-image (19).png",
  },
  {
    id: 20,
    title: "Platform incidents",
    description:
      "Isolate network failures instantly and route anomalies to assigned L1 on-shift engineers.",
    imageSrc: "/images/media/card-image (20).png",
  },
  {
    id: 21,
    title: "Historical trends",
    description:
      "Compile run-time metadata over cycles to identify patterns and strengthen reliability.",
    imageSrc: "/images/media/card-image (21).png",
  },
  {
    id: 22,
    title: "Technical support",
    description:
      "Open instant operations chats directly with ZoikoStream's expert engineering desk.",
    imageSrc: "/images/media/card-image (22).png",
  },
];

export default function OperationalHealthSection() {
  return (
    <section className="w-full bg-white text-slate-900 font-sans py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-950 mb-3">
            Route operational health to the right authority
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-normal">
            Separate current-health monitoring from contractual obligations and
            analytics.
          </p>
        </div>

        {/* 4 Cards Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {healthData.map((card) => (
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
