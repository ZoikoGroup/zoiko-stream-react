import React from "react";

const lifecycleStates = [
  {
    id: "01",
    badgeText: "CURRENT",
    badgeColor: "text-emerald-500",
    badgeBg: "bg-emerald-500/10",
    title: "Current State",
    description: "Approved public protocol contract for stated scope",
  },
  {
    id: "02",
    badgeText: "PREVIEW",
    badgeColor: "text-blue-500",
    badgeBg: "bg-blue-500/10",
    title: "Preview State",
    description: "Approved lifecycle policy defines limitations",
  },
  {
    id: "03",
    badgeText: "DEPRECATED",
    badgeColor: "text-amber-500",
    badgeBg: "bg-amber-500/10",
    title: "Deprecated State",
    description: "Still documented for transition, replacement preferred",
  },
  {
    id: "04",
    badgeText: "SUNSET",
    badgeColor: "text-red-500",
    badgeBg: "bg-red-500/10",
    title: "Sunset State",
    description: "Approved retirement date/policy exists",
  },
  {
    id: "05",
    badgeText: "WITHDRAWN",
    badgeColor: "text-red-600",
    badgeBg: "bg-red-600/10",
    title: "Withdrawn State",
    description: "No current use; history only if approved",
  },
  {
    id: "06",
    badgeText: "REVIEW REQUIRED",
    badgeColor: "text-amber-600",
    badgeBg: "bg-amber-600/10",
    title: "Review Required State",
    description: "Technical source conflict or stale verification",
  },
  {
    id: "07",
    badgeText: "UNKNOWN",
    badgeColor: "text-gray-500",
    badgeBg: "bg-gray-500/10",
    title: "Unknown State",
    description: "No current authoritative state",
  },
  {
    id: "08",
    badgeText: "UNAVAILABLE",
    badgeColor: "text-gray-900",
    badgeBg: "bg-gray-900/10",
    title: "Unavailable State",
    description: "Documentation source cannot be served",
  },
];

export default function VersioningSection() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-28 py-16 lg:py-24 relative bg-white flex flex-col justify-start items-start gap-12 overflow-hidden">
      {/* Decorative Background Blurs */}
      <div className="w-[520px] h-[520px] left-[1112px] top-[418px] absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />
      <div className="w-96 h-96 left-[-70px] top-[-133px] absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

      {/* Header Section */}
      <div className="w-full flex flex-col justify-start items-start gap-3 relative z-10">
        <h2 className="w-full text-zinc-950 text-3xl md:text-4xl font-bold font-['Space_Grotesk'] leading-tight md:leading-[60.80px]">
          Versioning, lifecycle, and change transparency
        </h2>
        <p className="w-full text-slate-600 text-base md:text-lg font-normal font-['Space_Grotesk'] leading-7 max-w-4xl">
          Protocol lifecycle states govern what documentation is current,
          deprecated, or withdrawn. Changes invalidate stale examples
          atomically.
        </p>
      </div>

      {/* Lifecycle States Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
        {lifecycleStates.map((state) => (
          <div
            key={state.id}
            className="w-full p-5 bg-slate-50 rounded-xl border border-slate-200 flex flex-col justify-start items-start gap-3 hover:border-slate-300 hover:shadow-sm transition-all duration-200"
          >
            <div className="w-full flex justify-between items-center gap-2">
              <span className="text-blue-500 text-lg font-bold font-['Space_Grotesk']">
                {state.id}
              </span>
              <div
                className={`px-2.5 py-1 ${state.badgeBg} rounded-full flex justify-center items-center shrink-0`}
              >
                <span
                  className={`${state.badgeColor} text-xs font-bold font-['IBM_Plex_Mono'] whitespace-nowrap`}
                >
                  {state.badgeText}
                </span>
              </div>
            </div>

            <div className="w-full flex flex-col justify-start items-start gap-1">
              <h3 className="text-zinc-950 text-base font-bold font-['Space_Grotesk']">
                {state.title}
              </h3>
              <p className="text-slate-600 text-xs font-normal font-['Space_Grotesk'] leading-5">
                {state.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Change Invalidation Footer Card */}
      <div className="w-full p-6 bg-slate-100 rounded-xl border border-slate-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
        <div className="flex-1 flex flex-col justify-start items-start gap-1">
          <h3 className="text-zinc-950 text-base font-bold font-['Space_Grotesk']">
            Change Invalidation
          </h3>
          <p className="text-slate-600 text-xs font-normal font-['Space_Grotesk'] max-w-3xl">
            Protocol lifecycle or behavior change invalidates stale examples,
            SEO/AEO answers, architecture relations and cached snippets
            atomically.
          </p>
        </div>
        <button className="px-7 py-3.5 bg-transparent rounded-lg border border-slate-600 flex justify-center items-center hover:bg-slate-200 hover:border-zinc-950 transition-colors shrink-0 focus:outline-none focus:ring-2 focus:ring-slate-400">
          <span className="text-zinc-950 text-base font-medium font-['Space_Grotesk']">
            View Changelog
          </span>
        </button>
      </div>
    </section>
  );
}
