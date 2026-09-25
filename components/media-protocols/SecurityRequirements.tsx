import React from "react";

const requirements = [
  {
    id: "endpoint",
    title: "Endpoint Template",
    description:
      "Public-safe connection template with synthetic placeholders. Never exposes real customer hostnames.",
    // Lock/Server icon placeholder
    topIcon: (
      <svg
        className="w-3.5 h-3.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
        />
      </svg>
    ),
  },
  {
    id: "port",
    title: "Port & Transport",
    description:
      "Only current approved port and transport protocol values configured in the network profile.",
    // Network/Globe icon placeholder
    topIcon: (
      <svg
        className="w-3.5 h-3.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
        />
      </svg>
    ),
  },
  {
    id: "encryption",
    title: "Encryption Model",
    description:
      "Exact source-controlled security mode. No generic or speculative secure protocol shorthand.",
    // Shield icon placeholder
    topIcon: (
      <svg
        className="w-3.5 h-3.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    id: "authentication",
    title: "Authentication Gate",
    description:
      "Links directly to approved credential relationships. Strict verification checks required.",
    // Key icon placeholder
    topIcon: (
      <svg
        className="w-3.5 h-3.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"
        />
      </svg>
    ),
  },
];

export default function SecurityRequirements() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-28 py-16 lg:py-24 relative bg-zinc-950 flex flex-col justify-start items-start gap-12 overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-zinc-950/75 pointer-events-none" />

      {/* Header Content */}
      <div className="w-full flex flex-col justify-start items-start gap-3 relative z-10">
        <h2 className="text-slate-100 text-3xl md:text-4xl font-bold font-['Space_Grotesk'] leading-tight md:leading-[60.80px]">
          Connection, network, and security requirements
        </h2>
        <p className="text-slate-400 text-base md:text-lg font-normal font-['Space_Grotesk'] leading-7 max-w-4xl">
          Exact source-controlled endpoint templates, port requirements,
          encryption modes, and authentication boundaries.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
        {requirements.map((req) => (
          <div
            key={req.id}
            className="w-full h-auto md:h-56 p-6 bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col justify-start items-start gap-4 hover:border-gray-600 transition-colors duration-300"
          >
            {/* Top row: Label + Icon */}
            <div className="w-full flex justify-between items-center">
              <span className="text-teal-500 text-[10px] font-bold font-['IBM_Plex_Mono'] tracking-widest uppercase">
                Secure Path
              </span>
              <div className="w-7 h-7 bg-blue-500/10 text-blue-500 rounded-lg flex justify-center items-center">
                {req.topIcon}
              </div>
            </div>

            {/* Content block */}
            <div className="w-full flex flex-col justify-start items-start gap-3 flex-1">
              <h3 className="text-slate-100 text-base font-bold font-['Space_Grotesk']">
                {req.title}
              </h3>
              <p className="text-slate-400 text-xs font-normal font-['Space_Grotesk'] leading-5">
                {req.description}
              </p>
            </div>

            {/* Bottom Indicator Icon */}
            <div className="pt-2 mt-auto text-teal-500 flex justify-start items-center">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
