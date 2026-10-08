import React from "react";

const securityFeatures = [
  {
    id: "encryption",
    title: "Encryption",
    description:
      "Exact ZoikoStream implementation must be source-backed. Protocol standard does not prove security mode.",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
  },
  {
    id: "secret-safety",
    title: "Secret Safety",
    description:
      "No production secret, token, stream key, or private endpoint appears in public docs or analytics.",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
        />
      </svg>
    ),
  },
  {
    id: "architecture-role",
    title: "Architecture Role",
    description:
      "Protocol block placement in approved patterns only. No full architecture tree duplication.",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zM14 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM14 15a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z"
        />
      </svg>
    ),
  },
  {
    id: "vulnerability",
    title: "Vulnerability",
    description:
      "Security issues route to Responsible Disclosure, not ordinary protocol support.",
    icon: (
      <svg
        className="w-4 h-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
    ),
  },
];

export default function SecurityBoundaries() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-28 py-16 lg:py-24 bg-zinc-950/80 border-y border-gray-800 flex flex-col justify-start items-start gap-12 overflow-hidden">
      {/* Header Section */}
      <div className="w-full flex flex-col justify-start items-start gap-3">
        <h2 className="w-full text-slate-100 text-3xl md:text-4xl font-bold font-['Space_Grotesk'] leading-tight md:leading-[60.80px]">
          Security boundaries and architecture patterns
        </h2>
        <p className="w-full text-slate-400 text-base md:text-lg font-normal font-['Space_Grotesk'] leading-7 max-w-4xl">
          Encryption, authentication, and secret-handling boundaries from
          approved sources. Protocol role in approved architecture patterns.
        </p>
      </div>

      {/* Grid Cards Section */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {securityFeatures.map((feature) => (
          <div
            key={feature.id}
            className="w-full h-auto min-h-[14rem] p-6 bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col justify-start items-start gap-4 hover:border-gray-600 transition-colors duration-300 group cursor-pointer"
          >
            {/* Top row with Badge and Icon */}
            <div className="w-full flex justify-between items-center">
              <span className="text-teal-500 text-[10px] font-bold font-['IBM_Plex_Mono'] tracking-widest uppercase">
                Secure Path
              </span>
              <div className="w-7 h-7 bg-blue-500/10 text-teal-500 rounded-lg flex justify-center items-center group-hover:bg-blue-500/20 transition-colors">
                {feature.icon}
              </div>
            </div>

            {/* Title and Description */}
            <h3 className="text-slate-100 text-base font-bold font-['Space_Grotesk'] mt-2">
              {feature.title}
            </h3>
            <p className="w-full text-slate-400 text-xs font-normal font-['Space_Grotesk'] leading-5">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
