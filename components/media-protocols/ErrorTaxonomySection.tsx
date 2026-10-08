import React from "react";

const errorTaxonomy = [
  {
    id: "auth-error",
    title: "Authentication Error",
    description: "Auth/access error → Authentication / access docs",
    dotColor: "bg-red-500",
  },
  {
    id: "network-blocked",
    title: "Network Blocked",
    description: "Connection/network error → Network checklist / support",
    dotColor: "bg-red-500",
  },
  {
    id: "media-incompatible",
    title: "Media Incompatible",
    description: "Validation error → Compatibility section / encode guidance",
    dotColor: "bg-red-500",
  },
  {
    id: "timeout",
    title: "Timeout",
    description: "Timed out; outcome Unknown → Reconcile/check monitoring",
    dotColor: "bg-amber-500",
  },
  {
    id: "connection-dropped",
    title: "Connection Dropped",
    description: "Disconnected/recovering → Reconnect guidance",
    dotColor: "bg-amber-500",
  },
  {
    id: "platform-incident",
    title: "Platform Incident",
    description: "Status-correlated → System status",
    dotColor: "bg-blue-500",
  },
];

export default function ErrorTaxonomySection() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-28 py-16 lg:py-24 relative bg-white flex flex-col justify-start items-start gap-12 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="w-[520px] h-[520px] left-[1112px] top-[418px] absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />
      <div className="w-96 h-96 left-[-70px] top-[-133px] absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

      {/* Header Section */}
      <div className="w-full flex flex-col justify-start items-start gap-3 relative z-10">
        <h2 className="w-full text-zinc-950 text-3xl md:text-4xl font-bold font-['Space_Grotesk'] leading-tight md:leading-[60.80px]">
          Error taxonomy and recovery paths
        </h2>
        <p className="w-full text-slate-600 text-base md:text-lg font-normal font-['Space_Grotesk'] leading-7 max-w-4xl">
          Structured failure classes with safe next steps — from authentication
          errors to unknown server receipt outcomes.
        </p>
      </div>

      {/* Grid of Error Cards */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 relative z-10">
        {errorTaxonomy.map((error) => (
          <div
            key={error.id}
            className="w-full p-6 bg-slate-50 rounded-xl border border-slate-200 flex flex-col justify-start items-start gap-3 hover:border-slate-300 hover:shadow-sm transition-all duration-200"
          >
            <div className="flex justify-start items-center gap-2">
              <div
                className={`w-2 h-2 rounded-full ${error.dotColor} shrink-0`}
              />
              <h3 className="text-zinc-950 text-base font-bold font-['Space_Grotesk']">
                {error.title}
              </h3>
            </div>
            <p className="w-full text-slate-600 text-sm font-normal font-['Space_Grotesk'] leading-relaxed">
              {error.description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="relative z-10 flex justify-start items-center">
        <button className="px-7 py-3.5 rounded-lg border border-slate-600 flex justify-center items-center hover:bg-slate-50 hover:border-zinc-950 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2">
          <span className="text-zinc-950 text-base font-bold font-['Space_Grotesk']">
            View troubleshooting guide
          </span>
        </button>
      </div>
    </section>
  );
}
