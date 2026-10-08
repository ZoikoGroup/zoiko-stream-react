import React from "react";

const authRules = [
  {
    id: "handling",
    title: "Credential Handling",
    description:
      "Only source-linked credential categories. No fabrication of usernames, tokens, or API keys.",
  },
  {
    id: "placement",
    title: "Secret Placement",
    description:
      "Environment variables and config references only. Never literal values in documentation.",
  },
  {
    id: "rotation",
    title: "Rotation & Expiry",
    description:
      "Current auth lifecycle source governs rotation policy and expiration rules.",
  },
];

export default function AuthenticationSection() {
  return (
    <section className="w-full px-6 md:px-12 lg:px-28 py-16 lg:py-24 flex flex-col justify-start items-start gap-12 bg-white">
      {/* Header Section */}
      <div className="w-full flex flex-col justify-start items-start gap-3">
        <h2 className="w-full text-zinc-950 text-3xl md:text-4xl font-bold font-['Space_Grotesk'] leading-tight md:leading-[60.80px]">
          Authentication boundary and configuration examples
        </h2>
        <p className="w-full text-slate-600 text-base md:text-lg font-normal font-['Space_Grotesk'] leading-7 max-w-4xl">
          Credentials route to the authentication authority. Protocol examples
          use synthetic placeholders with version-aware, secret-safe patterns.
        </p>
      </div>

      {/* Main Content Layout */}
      <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-12">
        {/* Left Column: Code Example Card */}
        <div className="w-full lg:flex-1 p-6 md:p-7 bg-slate-950 rounded-2xl border border-gray-800 flex flex-col justify-start items-start gap-5 shadow-xl">
          {/* Card Header & Badges */}
          <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h3 className="text-slate-100 text-lg font-bold font-['Space_Grotesk']">
              Protocol Configuration Example
            </h3>
            <div className="flex flex-wrap justify-start items-start gap-2">
              <div className="px-2.5 py-1 bg-teal-500/10 rounded-full flex justify-center items-center">
                <span className="text-teal-500 text-xs font-bold font-['IBM_Plex_Mono']">
                  Version-Aware
                </span>
              </div>
              <div className="px-2.5 py-1 bg-teal-500/10 rounded-full flex justify-center items-center">
                <span className="text-teal-500 text-xs font-bold font-['IBM_Plex_Mono']">
                  Secret-Safe
                </span>
              </div>
            </div>
          </div>

          {/* Code Snippet Block */}
          <div className="w-full p-4 bg-gray-950 rounded-lg flex flex-col justify-start items-start gap-3 overflow-x-auto border border-gray-900">
            <div className="text-teal-400 text-xs font-normal font-['IBM_Plex_Mono'] leading-relaxed whitespace-nowrap">
              # RTMPS Secure Ingest Configuration
            </div>
            <div className="text-slate-100 text-xs font-normal font-['IBM_Plex_Mono'] leading-relaxed whitespace-nowrap">
              export ZS_INGEST_URL="rtmps://ingest.example.zoikostream.net/live"
              <br />
              export ZS_STREAM_KEY="zs_live_"
              <br />
              export ZS_TLS_VERSION="1.2"
            </div>
            <div className="text-slate-400 text-xs font-normal font-['IBM_Plex_Mono'] leading-relaxed whitespace-nowrap">
              # Handshake auth token parameters
              <br />
              params:
              <br />
              &nbsp;&nbsp;auth_authority: "https://auth.zoikostream.net/v1"
              <br />
              &nbsp;&nbsp;token_expiry_sec: 3600
            </div>
          </div>

          {/* Card Footer (Action) */}
          <div className="w-full flex justify-between items-center mt-2">
            <span className="text-slate-400 text-xs font-normal font-['Space_Grotesk']">
              RTMPS Secure Standard Ingest
            </span>
            <button className="px-4 py-2 rounded-md border border-gray-800 flex justify-center items-center hover:bg-gray-800 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500">
              <span className="text-slate-100 text-xs font-normal font-['Space_Grotesk']">
                Copy example
              </span>
            </button>
          </div>
        </div>

        {/* Right Column: Rule Cards */}
        <div className="w-full lg:flex-1 flex flex-col justify-start items-start gap-4">
          {authRules.map((rule) => (
            <div
              key={rule.id}
              className="w-full p-5 bg-slate-50 rounded-xl border border-slate-200 flex flex-col justify-start items-start gap-2 hover:border-slate-300 hover:shadow-sm transition-all"
            >
              <h4 className="text-zinc-950 text-base font-bold font-['Space_Grotesk']">
                {rule.title}
              </h4>
              <p className="w-full text-slate-600 text-sm font-normal font-['Space_Grotesk'] leading-5">
                {rule.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="flex justify-start items-center gap-4 pt-2">
        <button className="px-7 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg flex justify-center items-center hover:opacity-90 hover:scale-[1.02] active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-white shadow-md">
          <span className="text-slate-950 text-base font-bold font-['Space_Grotesk']">
            View authentication docs
          </span>
        </button>
      </div>
    </section>
  );
}
