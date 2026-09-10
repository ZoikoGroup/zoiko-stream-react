import React from "react";

const observabilityFeatures = [
  {
    title: "Connection State",
    badge: "Source-Defined",
    description:
      "Only source-defined diagnostic states and protocol error fields. No fabricated live dashboards.",
    image: "/images/media-protocols/CardImage (7).png",
  },
  {
    title: "Stream Monitoring",
    badge: "Separate Authority",
    description:
      "Live health routes to Stream Monitoring. Protocol docs are not status pages.",
    image: "/images/media-protocols/CardImage (9).png",
  },
  {
    title: "Support Handoff",
    badge: "Safe Diagnostics",
    description:
      "Developer support with minimum diagnostic bundle and explicit redaction guidance.",
    image: "/images/media-protocols/CardImage (8).png",
  },
];

export default function ObservabilitySection() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-28 py-16 lg:py-24 bg-gray-950 border-y border-gray-800 flex flex-col justify-start items-start gap-12 overflow-hidden">
      {/* Header Content */}
      <div className="w-full flex flex-col justify-start items-start gap-3">
        <h2 className="w-full text-slate-100 text-3xl md:text-4xl font-bold font-['Space_Grotesk'] leading-tight md:leading-[60.80px]">
          Observability, diagnostics, and operational boundaries
        </h2>
        <p className="w-full text-slate-400 text-base md:text-lg font-normal font-['Space_Grotesk'] leading-7 max-w-4xl">
          What can be observed from protocol signals, and where to route for
          live health, incidents, and human support.
        </p>
      </div>

      {/* Feature Cards Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {observabilityFeatures.map((feature, index) => (
          <div
            key={index}
            className="w-full bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col justify-start items-start overflow-hidden hover:border-gray-600 transition-colors duration-300 group"
          >
            {/* Card Image */}
            <div className="w-full h-40 overflow-hidden relative">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={feature.image}
                alt={`${feature.title} illustration`}
              />
            </div>

            {/* Card Body */}
            <div className="w-full p-6 flex flex-col justify-start items-start gap-3 flex-1">
              <div className="w-full flex justify-between items-start gap-4">
                <h3 className="text-slate-100 text-lg font-bold font-['Space_Grotesk']">
                  {feature.title}
                </h3>
                <div className="px-2.5 py-1 bg-teal-500/10 rounded-full flex justify-center items-center shrink-0">
                  <span className="text-teal-500 text-xs font-bold font-['IBM_Plex_Mono']">
                    {feature.badge}
                  </span>
                </div>
              </div>
              <p className="w-full text-slate-400 text-xs font-normal font-['Space_Grotesk'] leading-5">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="w-full flex justify-start items-center">
        <button className="px-7 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg flex justify-center items-center hover:opacity-90 hover:scale-[1.02] active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-gray-950 shadow-md">
          <span className="text-slate-950 text-base font-bold font-['Space_Grotesk']">
            View Stream monitoring
          </span>
        </button>
      </div>
    </section>
  );
}
