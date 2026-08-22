import React from 'react';

const boundaries = [
  { label: 'Download payload:', tag: 'BLOCKED BY DEFAULT', style: 'bg-red-500/10 text-red-500' },
  { label: 'Share session link:', tag: 'DYNAMIC TOKEN ONLY', style: 'bg-amber-500/10 text-amber-500' },
  { label: 'Embed externally:', tag: 'DOMAIN WHITELIST REQUIRED', style: 'bg-blue-500/10 text-blue-500' },
  { label: 'Direct VOD extract:', tag: 'SLA VERIFIED ONLY', style: 'bg-emerald-500/10 text-emerald-500' },
];

export default function AccessControlVsProtectionSection() {
  return (
    <section className="relative w-full bg-slate-50 py-20 md:py-28 border-b border-gray-200 text-slate-900 overflow-hidden">
      {/* Background Accent Glows */}
      <div className="size-96 -left-44 -top-28 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold   text-slate-900 leading-tight">
            Separate what you control from how you protect it.
          </h2>
          <p className="text-slate-600 text-lg font-normal   leading-relaxed max-w-3xl">
            Media security comprises two distinct mechanics. Understand access routing policies versus the physical protection matrix.
          </p>
        </div>

        {/* 2 Side-by-Side Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Access Control */}
          <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-xs flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <h3 className="text-slate-900 text-xl font-bold  ">
                Access Control
              </h3>
              <span className="px-2 py-1 bg-blue-500/10 text-blue-500 text-xs font-bold   uppercase rounded">
                IDENTITY-DRIVEN
              </span>
            </div>

            <p className="text-slate-600 text-sm font-normal   leading-relaxed">
              Determines exactly <em>who</em> has authorization to trigger the stream based on SAML credentials, dynamic IP routing parameters, and active exception policies.
            </p>

            <div className="w-full h-px bg-gray-200" />

            <ul className="flex flex-col gap-2.5 text-slate-600 text-xs font-normal  ">
              <li>• Federate custom SSO platforms</li>
              <li>• Regional geo-fencing parameter options</li>
              <li>• Dynamic time-based token expirations</li>
            </ul>
          </div>

          {/* Right: Content Protection */}
          <div className="p-8 bg-white rounded-xl border border-gray-200 shadow-xs flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <h3 className="text-slate-900 text-xl font-bold  ">
                Content Protection
              </h3>
              <span className="px-2 py-1 bg-emerald-500/10 text-emerald-500 text-xs font-bold   uppercase rounded">
                DELIVERY MECHANICS
              </span>
            </div>

            <p className="text-slate-600 text-sm font-normal   leading-relaxed">
              Controls <em>how</em> the media payload is delivered to prevent extraction, unauthorized recording, redistribution, or visual replication in public domains.
            </p>

            <div className="w-full h-px bg-gray-200" />

            <ul className="flex flex-col gap-2.5 text-slate-600 text-xs font-normal  ">
              <li>• Dynamic watermarking (email/IP overlay)</li>
              <li>• Verified DRM integrations (FairPlay, Widevine)</li>
              <li>• Screen capture prevention controls</li>
            </ul>
          </div>
        </div>

        {/* Content Security Boundaries Pills */}
        <div className="flex flex-col gap-4 pt-4 border-t border-gray-200">
          <span className="text-slate-600 text-sm font-bold  ">
            CONTENT SECURITY BOUNDARIES
          </span>

          <div className="flex flex-wrap gap-4">
            {boundaries.map((b, idx) => (
              <div key={idx} className="px-4 py-2 bg-white rounded-full border border-gray-200 shadow-2xs flex items-center gap-2">
                <span className="text-slate-900 text-xs font-bold  ">
                  {b.label}
                </span>
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold   uppercase ${b.style}`}>
                  {b.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
