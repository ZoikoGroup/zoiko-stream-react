import React from "react";
import Image from "next/image";

interface AnalyticsCard {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}

const analyticsData: AnalyticsCard[] = [
  {
    id: 31,
    title: "Post-run review",
    description:
      "Gain exact telemetry reports tracing participant attendance, stream drop-offs, and buffering metrics cleanly.",
    imageSrc: "/images/media/card-image (31).png",
  },
  {
    id: 32,
    title: "Program comparison",
    description:
      "Compare execution metrics across recurrent broadcasts to isolate bottlenecks and validate improvements.",
    imageSrc: "/images/media/card-image (32).png",
  },
  {
    id: 33,
    title: "Developer analytics API",
    description:
      "Query and extract source-backed telemetry streams directly through our robust developer API interfaces.",
    imageSrc: "/images/media/card-image (33).png",
  },
  {
    id: 34,
    title: "Executive reporting",
    description:
      "Consolidate performance outcomes, compliance adherence, and operational audits into clear, secure executive briefs.",
    imageSrc: "/images/media/card-image (34).png",
  },
];

export default function GovernedAnalyticsSection() {
  return (
    <section className="relative w-full text-white font-sans py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-950">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/media/b5.png"
          alt="Governed Analytics Background"
          fill
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-slate-950/60" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-3">
            Understand outcomes with governed analytics
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-normal">
            Source-approved metrics, definitions, and reporting without
            fabricated engagement claims.
          </p>
        </div>

        {/* 4 Cards Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {analyticsData.map((card) => (
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
