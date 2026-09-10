import React from "react";

const protocols = [
  {
    id: "rtmps",
    title: "RTMPS",
    status: "CURRENT",
    description:
      "Encrypted contribution over RTMP tunneled via TLS. Mandatory handshake with static token params.",
    direction: "Ingest Direction",
    image: "/images/media-protocols/CardVisual.png",
  },
  {
    id: "srt",
    title: "SRT",
    status: "CURRENT",
    description:
      "Reliable UDP-based transport with forward error correction and sub-second hardware contribution.",
    direction: "Ingest & Egress",
    image: "/images/media-protocols/CardVisual (1).png",
  },
  {
    id: "whip",
    title: "WHIP",
    status: "CURRENT",
    description:
      "WebRTC-based HTTP ingest for real-time browser contribution with Opus and H.264 dynamic fallback.",
    direction: "WebRTC Ingest",
    image: "/images/media-protocols/CardVisual (2).png",
  },
];

export default function ProtocolCatalog() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-28 py-16 lg:py-24 relative bg-zinc-950 flex flex-col justify-start items-start gap-12 overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-zinc-950/80 pointer-events-none" />

      {/* Header Content */}
      <div className="w-full flex flex-col justify-start items-start gap-3 relative z-10">
        <h2 className="text-slate-100 text-3xl md:text-4xl font-bold font-['Space_Grotesk'] leading-tight md:leading-[60.80px]">
          Protocol catalog
        </h2>
        <p className="text-slate-400 text-base md:text-lg font-normal font-['Space_Grotesk'] leading-7 max-w-3xl">
          Current protocol records with lifecycle state, direction, version, and
          verification status.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {protocols.map((protocol) => (
          <div
            key={protocol.id}
            className="w-full bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col justify-start items-start overflow-hidden hover:border-gray-600 transition-colors duration-300 group cursor-pointer"
          >
            {/* Card Image */}
            <div className="w-full h-40 overflow-hidden relative">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                src={protocol.image}
                alt={`${protocol.title} protocol visualization`}
              />
            </div>

            {/* Card Content */}
            <div className="w-full p-6 flex flex-col justify-start items-start gap-5 flex-1">
              {/* Title & Status Badge */}
              <div className="w-full flex justify-between items-center gap-4">
                <h3 className="text-slate-100 text-2xl font-bold font-['Space_Grotesk']">
                  {protocol.title}
                </h3>
                <div className="px-2.5 py-1 bg-teal-500/10 rounded-full flex justify-center items-center shrink-0">
                  <span className="text-teal-500 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wide">
                    {protocol.status}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="w-full text-slate-400 text-sm font-normal font-['Inter'] leading-relaxed flex-1">
                {protocol.description}
              </p>

              {/* Direction Metadata */}
              <div className="w-full flex justify-start items-center gap-2 pt-2 border-t border-gray-800/50">
                <span className="text-teal-500 text-xs font-bold font-['Space_Grotesk'] tracking-wide">
                  DIRECTION:
                </span>
                <span className="text-slate-100 text-xs font-normal font-['Inter']">
                  {protocol.direction}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
