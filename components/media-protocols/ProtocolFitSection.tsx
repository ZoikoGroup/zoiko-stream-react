import React from "react";

const profileParameters = [
  { label: "Protocol Identity", value: "RTMPS (RTMP over TLS)" },
  { label: "Lifecycle State", value: "Current Approved Ingest Standard" },
  { label: "Direction Type", value: "Secure Media Ingest Node" },
  { label: "Version Profile", value: "v1.2 compliant TLS envelope" },
  { label: "Last Verified Record", value: "March 2026 — Zoiko Registry" },
];

export default function ProtocolFitSection() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-28 py-16 lg:py-24 relative bg-white border-y border-slate-200 flex flex-col justify-start items-start gap-12 overflow-hidden">
      {/* Decorative Background Blurs */}
      <div className="w-[520px] h-[520px] left-[1112px] top-[418px] absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />
      <div className="w-96 h-96 left-[-70px] top-[-133px] absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

      {/* Header Section */}
      <div className="w-full flex flex-col justify-start items-start gap-3 relative z-10">
        <h2 className="text-zinc-950 text-3xl md:text-4xl font-bold font-['Space_Grotesk'] leading-tight md:leading-[60.80px]">
          Understand protocol fit before you build
        </h2>
        <p className="text-slate-600 text-base md:text-lg font-normal font-['Space_Grotesk'] leading-7 max-w-3xl">
          Compare protocol applicability, connection semantics, and limitations
          from approved sources — not assumptions.
        </p>
      </div>

      {/* Content Section */}
      <div className="w-full flex flex-col-reverse lg:flex-row justify-start items-center gap-12 relative z-10">
        {/* Left Column: Parameters Card */}
        <div className="w-full lg:w-[600px] p-6 md:p-7 bg-slate-50 rounded-2xl border-[1.5px] border-slate-200 flex flex-col justify-start items-start gap-5 shadow-sm">
          <h3 className="text-zinc-950 text-lg font-bold font-['Space_Grotesk']">
            Approved Profile Parameters
          </h3>
          <div className="w-full flex flex-col justify-start items-start gap-3">
            {profileParameters.map((param, index) => (
              <div
                key={index}
                className="w-full p-3 bg-white rounded-lg border border-slate-200 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4"
              >
                <span className="text-slate-600 text-xs font-bold font-['Space_Grotesk']">
                  {param.label}
                </span>
                <span className="text-zinc-950 text-xs font-normal font-['Space_Grotesk']">
                  {param.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Text and CTA */}
        <div className="flex-1 flex flex-col justify-start items-start gap-6">
          <h3 className="text-zinc-950 text-2xl md:text-3xl font-bold font-['Space_Grotesk'] leading-tight md:leading-9">
            Facts and limitations, not generic recommendations
          </h3>
          <p className="text-slate-600 text-base font-normal font-['Space_Grotesk'] leading-7">
            Our platform evaluates network performance using deterministic
            profiles verified by live operations engineers. We document packet
            limits, failover paths, and required handshakes directly from tested
            production deployments.
          </p>
          <button className="px-7 py-3.5 rounded-[10px] border border-slate-600 flex justify-center items-center hover:bg-slate-50 hover:border-zinc-950 transition-colors focus:ring-2 focus:ring-slate-400 focus:outline-none">
            <span className="text-zinc-950 text-base font-bold font-['Space_Grotesk']">
              View full comparison &rarr;
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
