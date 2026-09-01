import React from 'react';
import Link from 'next/link';

const ACCESS_STATES = [
  'Available — you can authenticate now',
  'Request required — submit a request first',
  'Approval required — a review is in progress',
  'Unavailable — not enabled for your account yet',
];

const AUTH_STACK = [
  'Credential type — key, token, or equivalent',
  'Scope / permission — what the credential can do',
  'Request context — environment and identity',
  'Rotation / revocation — how you retire a credential',
];

export default function DevelopersPrerequisitesAuthoritiesSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 border-b border-gray-200 flex flex-col justify-start items-start gap-12 bg-slate-100 overflow-hidden">
      {/* Header */}
      <div className="w-full flex flex-col justify-start items-start gap-3">
        <div className="flex items-center gap-2">
          <div className="size-1.5 bg-blue-500 rounded-[3px]" />
          <span className="text-blue-500 text-xs font-normal font-['IBM_Plex_Mono'] uppercase tracking-wide">
            PREREQUISITES, SEPARATE AUTHORITIES
          </span>
        </div>
        <h2 className="text-zinc-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight">
          Know what you can use, and how.
        </h2>
        <p className="text-gray-500 text-base font-normal font-['Inter'] leading-relaxed max-w-3xl">
          Account/access state and authentication are prerequisites with separate authorities — this page explains the model, not open sign-up.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Card: Developer access state */}
        <div className="p-7 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-between gap-6 shadow-sm">
          <div className="flex flex-col gap-4">
            <h3 className="text-zinc-900 text-base font-bold font-['Space_Grotesk']">
              Developer access state
            </h3>

            <div className="flex flex-col">
              {ACCESS_STATES.map((item, idx) => (
                <div
                  key={idx}
                  className="py-3 border-b border-gray-100 flex items-center gap-3 last:border-b-0"
                >
                  <div className="size-6 bg-slate-100 rounded-xl flex justify-center items-center shrink-0">
                    <span className="text-gray-500 text-xs font-normal font-['IBM_Plex_Mono']">
                      •
                    </span>
                  </div>
                  <span className="text-gray-500 text-xs font-normal font-['Inter']">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Link
              href="/developer-access-page"
              className="px-6 py-3 bg-zinc-100 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-800 text-zinc-900 text-base font-semibold font-['Inter'] inline-flex hover:bg-zinc-200 transition-colors"
            >
              View Developer access
            </Link>
          </div>
        </div>

        {/* Right Card: Authentication concept stack */}
        <div className="p-7 bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-between gap-6 shadow-sm">
          <div className="flex flex-col gap-4">
            <h3 className="text-zinc-900 text-base font-bold font-['Space_Grotesk']">
              Authentication concept stack
            </h3>

            <div className="flex flex-col">
              {AUTH_STACK.map((item, idx) => (
                <div
                  key={idx}
                  className="py-3 border-b border-gray-100 flex items-center gap-3 last:border-b-0"
                >
                  <div className="size-6 bg-slate-100 rounded-xl flex justify-center items-center shrink-0">
                    <span className="text-gray-500 text-xs font-normal font-['IBM_Plex_Mono']">
                      {idx + 1}
                    </span>
                  </div>
                  <span className="text-gray-500 text-xs font-normal font-['Inter']">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Link
              href="/authentication"
              className="px-6 py-3 bg-zinc-100 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-800 text-zinc-900 text-base font-semibold font-['Inter'] inline-flex hover:bg-zinc-200 transition-colors"
            >
              Read Authentication
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
