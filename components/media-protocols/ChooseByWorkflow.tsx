import React from "react";

const workflows = [
  {
    id: "01",
    title: "Live Ingest",
    description:
      "Send a live media signal into ZoikoStream cleanly with low packet overhead.",
  },
  {
    id: "02",
    title: "Remote Contribution",
    description:
      "Real-time interactive contribution from remote high-fidelity sources.",
  },
  {
    id: "03",
    title: "Programmatic Control",
    description:
      "API-driven stream lifecycle management and automated endpoint control.",
  },
  {
    id: "04",
    title: "Playback Delivery",
    description:
      "Deliver media to viewers securely across dynamic edge caching locations.",
  },
  {
    id: "05",
    title: "Stream Health",
    description:
      "Monitor current stream status with sub-second telemetry analysis.",
  },
  {
    id: "06",
    title: "Not Sure",
    description:
      "Compare multiple protocols and obtain guidance tailored to your network profile.",
  },
];

export default function ChooseByWorkflow() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-28 py-16 lg:py-24 relative flex flex-col justify-start items-start gap-12 overflow-hidden bg-white">
      {/* Background Decorations */}
      <div className="w-[520px] h-[520px] left-[1112px] top-[418px] absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />
      <div className="w-96 h-96 left-[-70px] top-[-133px] absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="w-full flex flex-col justify-start items-start gap-3 relative z-10">
        <h2 className="text-zinc-950 text-3xl md:text-4xl font-bold font-['Space_Grotesk'] leading-tight md:leading-[60.80px]">
          Choose by workflow
        </h2>
        <p className="text-slate-600 text-base md:text-lg font-normal font-['Space_Grotesk'] leading-7 max-w-2xl">
          Select your intended media workflow to see only the protocols that
          apply.
        </p>
      </div>

      {/* Workflow Cards Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {workflows.map((workflow) => (
          <div
            key={workflow.id}
            className="w-full p-7 bg-slate-50 rounded-2xl outline outline-[1.50px] outline-offset-[-1.50px] outline-slate-200 flex flex-col justify-start items-start gap-4 hover:bg-slate-100 hover:outline-teal-400 hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="w-9 h-9 bg-gradient-to-b from-teal-400 to-blue-500 rounded-2xl flex justify-center items-center shrink-0 group-hover:scale-105 transition-transform">
              <span className="text-zinc-950 text-sm font-bold font-['Space_Grotesk']">
                {workflow.id}
              </span>
            </div>
            <div className="flex flex-col justify-start items-start gap-1.5">
              <h3 className="text-zinc-950 text-lg font-bold font-['Space_Grotesk']">
                {workflow.title}
              </h3>
              <p className="text-slate-600 text-sm font-normal font-['Space_Grotesk'] leading-5">
                {workflow.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
