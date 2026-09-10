import React from "react";

const compatibilityData = [
  {
    title: "Video Codec",
    badge: "H.264 / HEVC",
    description:
      "Current protocol/workflow profile only. Advanced container compression verified by source standards.",
    image: "/images/media-protocols/CardImage.png",
  },
  {
    title: "Audio Codec",
    badge: "AAC / Opus",
    description:
      "Current profile parameters only. Strict AAC and Opus constraints verified from media compatibility records.",
    image: "/images/media-protocols/CardImage (1).png",
  },
  {
    title: "Container Format",
    badge: "MP4 / TS",
    description:
      "Only current supported container, fragmentation, and packetization parameters applied natively.",
    image: "/images/media-protocols/CardImage (2).png",
  },
  {
    title: "Timing & Sync",
    badge: "A/V Unified",
    description:
      "Source-defined timebase, timestamps, and sub-millisecond audio/video sync alignment.",
    image: "/images/media-protocols/CardImage (3).png",
  },
];

export default function MediaCompatibility() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-28 py-16 lg:py-24 relative bg-white flex flex-col justify-start items-start gap-12 overflow-hidden">
      {/* Background Decorators */}
      <div className="w-[520px] h-[520px] left-[1112px] top-[418px] absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />
      <div className="w-96 h-96 left-[-70px] top-[-133px] absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

      {/* Header Section */}
      <div className="w-full flex flex-col justify-start items-start gap-3 relative z-10">
        <h2 className="text-zinc-950 text-3xl md:text-4xl font-bold font-['Space_Grotesk'] leading-tight md:leading-[60.80px]">
          Media compatibility contract
        </h2>
        <p className="text-slate-600 text-base md:text-lg font-normal font-['Space_Grotesk'] leading-7">
          Transport connectivity and codec/container/media acceptance are
          separate compatibility layers.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {compatibilityData.map((item, index) => (
          <div
            key={index}
            className="w-full bg-slate-50 rounded-2xl border border-slate-200 flex flex-col justify-start items-start overflow-hidden hover:border-blue-400/50 hover:shadow-sm transition-all duration-300"
          >
            <div className="w-full h-40 overflow-hidden relative">
              <img
                className="w-full h-full object-cover"
                src={item.image}
                alt={`${item.title} representation`}
              />
            </div>
            <div className="w-full p-5 flex flex-col justify-start items-start gap-3 flex-1">
              <div className="w-full flex justify-between items-center gap-2">
                <h3 className="text-zinc-950 text-base font-bold font-['Space_Grotesk'] truncate">
                  {item.title}
                </h3>
                <div className="px-2 py-0.5 bg-blue-500/10 rounded-sm flex justify-center items-center shrink-0">
                  <span className="text-blue-500 text-[10px] font-bold font-['IBM_Plex_Mono'] uppercase">
                    {item.badge}
                  </span>
                </div>
              </div>
              <p className="text-slate-600 text-xs font-normal font-['Space_Grotesk'] leading-5 flex-1">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action Button */}
      <div className="relative z-10">
        <button className="px-6 py-4 rounded-[10px] border border-slate-600 flex justify-center items-center hover:bg-slate-50 hover:border-zinc-950 transition-colors focus:ring-2 focus:ring-slate-400 focus:outline-none">
          <span className="text-zinc-950 text-base font-bold font-['Space_Grotesk']">
            View full compatibility matrix
          </span>
        </button>
      </div>
    </section>
  );
}
