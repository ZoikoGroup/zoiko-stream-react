import React from "react";

const semanticsData = [
  {
    id: "latency",
    title: "Latency & Buffering",
    badge: "Source-Defined",
    description:
      "Only measured or contractual latency class with complete methodology context. No generic low-latency claims.",
    image: "/images/media-protocols/CardImage (4).png",
  },
  {
    id: "recovery",
    title: "Reconnect & Recovery",
    badge: "Contract-Governed",
    description:
      "Transport recovery separated from media continuity. Quick reconnect does not guarantee uninterrupted media.",
    image: "/images/media-protocols/CardImage (5).png",
  },
  {
    id: "outcomes",
    title: "Unknown Outcomes",
    badge: "Fail-Closed",
    description:
      "First-class unknown state implementation. Unsafe speculative duplicate connection instructions strictly prohibited.",
    image: "/images/media-protocols/CardImage (6).png",
  },
];

export default function ReliabilitySemantics() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-28 py-16 lg:py-24 relative bg-zinc-950 flex flex-col justify-start items-start gap-12 overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-zinc-950/60 pointer-events-none" />

      {/* Header Content */}
      <div className="w-full flex flex-col justify-start items-start gap-3 relative z-10">
        <h2 className="w-full text-slate-100 text-3xl md:text-4xl font-bold font-['Space_Grotesk'] leading-tight md:leading-[60.80px]">
          Timing, reliability, and recovery semantics
        </h2>
        <p className="w-full text-slate-400 text-base md:text-lg font-normal font-['Space_Grotesk'] leading-7 max-w-4xl">
          Source-defined latency classes, reconnect behavior, and unknown
          outcome handling — no fabricated guarantees.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {semanticsData.map((item) => (
          <div
            key={item.id}
            className="w-full bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col justify-start items-start overflow-hidden hover:border-gray-600 transition-colors duration-300 group"
          >
            {/* Card Image Area */}
            <div className="w-full h-44 bg-zinc-950/30 relative flex justify-center items-center overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-500/20 via-transparent to-transparent group-hover:scale-110 transition-transform duration-700" />
              <img
                className="w-full h-full object-cover"
                src={item.image}
                alt={`${item.title} representation`}
              />
            </div>

            {/* Content Area */}
            <div className="w-full p-6 flex flex-col justify-start items-start gap-4 flex-1">
              <div className="w-full flex justify-between items-start gap-4">
                <h3 className="text-slate-100 text-lg font-bold font-['Space_Grotesk']">
                  {item.title}
                </h3>
                <div className="px-2.5 py-1 bg-teal-500/10 rounded-full flex justify-center items-center shrink-0">
                  <span className="text-teal-500 text-xs font-bold font-['Space_Grotesk']">
                    {item.badge}
                  </span>
                </div>
              </div>
              <p className="w-full text-slate-400 text-xs font-normal font-['Space_Grotesk'] leading-5">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="relative z-10">
        <button className="px-6 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-[10px] flex justify-center items-center hover:opacity-90 hover:scale-[1.02] active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-zinc-950">
          <span className="text-slate-950 text-base font-bold font-['Space_Grotesk']">
            Explore reliability profiles
          </span>
        </button>
      </div>
    </section>
  );
}
