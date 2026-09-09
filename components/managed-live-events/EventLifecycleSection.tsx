import React from "react";
import Image from "next/image";

const stages = [
  { step: "01", title: "Discover", desc: "Align core goals" },
  { step: "02", title: "Plan", desc: "Timeline lock" },
  { step: "03", title: "Prepare", desc: "Build layouts" },
  { step: "04", title: "Rehearse", desc: "Dry-run latency" },
  { step: "05", title: "Go live", desc: "Launch stream" },
  { step: "06", title: "Monitor", desc: "Track telemetry" },
  { step: "07", title: "VOD Replay", desc: "Compile archives" },
  { step: "08", title: "Close", desc: "Sovereign retention" },
] as const;

export default function EventLifecycleSection() {
  return (
    <section className="relative w-full overflow-hidden text-white font-sans py-16 px-4 sm:px-6 lg:px-8">
      {/* Background Image - Clean overlay without dark filters or overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/event/bg2.png"
          alt="Event Lifecycle Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-[38px] font-bold tracking-tight text-white mb-2">
            Event lifecycle
          </h2>
          <p className="text-sm sm:text-base text-gray-300 font-normal">
            Source-backed stages from discovery through close
          </p>
        </div>

        {/* Timeline Horizontal Workflow */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 sm:gap-4 relative mb-16">
          {stages.map((stage, idx) => (
            <div
              key={stage.step}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Connector line between steps */}
              {idx < stages.length - 1 && (
                <div className="hidden lg:block absolute top-[18px] left-[50%] w-full h-[1.5px] bg-[#34D4CA]/60 z-0" />
              )}

              {/* Number Badge Circle */}
              <div className="relative z-10 w-9 h-9 rounded-full border border-[#34D4CA] bg-[#030712] flex items-center justify-center text-[#34D4CA] text-xs font-semibold mb-4 shadow-[0_0_12px_rgba(52,212,202,0.3)]">
                {stage.step}
              </div>

              {/* Step Title & Description */}
              <h3 className="text-sm font-bold text-white mb-1">
                {stage.title}
              </h3>
              <p className="text-[11px] text-gray-400 font-normal leading-tight max-w-[100px]">
                {stage.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Text */}
        <div className="text-center mx-auto">
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
            Every phase incorporates rigorous automated sanity gates. We lock
            down next-step deployment parameters only after preceding milestones
            register valid green status.
          </p>
        </div>
      </div>
    </section>
  );
}
