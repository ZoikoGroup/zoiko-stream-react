import React from 'react';
import Image from 'next/image';
const externalModels = [
  { title: 'Temporary Access', desc: 'Scoped invitations with automatic expiry and purpose-limited identity collection.',image:"/images/secure-enterprise/bg (132).png" },
  { title: 'Partner Portals', desc: 'Organization/domain boundaries with controlled content visibility.',image:"/images/secure-enterprise/bg (133).png" },
  { title: 'Customer Access', desc: 'Entitlement-based viewing with tokenized session management.',image:"/images/secure-enterprise/bg (134).png" },
  { title: 'Guest Viewing', desc: 'Minimal-data access paths with explicit scope and revocation capability.',image:"/images/secure-enterprise/bg (135).png" },
];

const externalStateTable = [
  { state: 'PENDING', stateStyle: 'bg-slate-600/10 text-slate-600', action: 'Awaiting domain verification', scope: 'Single Stream', expiry: '24 Hours' },
  { state: 'ACTIVE', stateStyle: 'bg-emerald-500/10 text-emerald-500', action: 'Federated SAML verification', scope: 'Portal Access', expiry: 'Session Limit' },
  { state: 'EXPIRED', stateStyle: 'bg-slate-600/10 text-slate-600', action: 'Automatic token dissolution', scope: 'All Assets', expiry: 'Immediate' },
  { state: 'REVOKED', stateStyle: 'bg-slate-600/10 text-slate-600', action: 'Administrative explicit block', scope: 'Selected Channel', expiry: 'Instant' },
  { state: 'REVIEW', stateStyle: 'bg-slate-600/10 text-slate-600', action: 'Failed posture telemetry check', scope: 'Playback Gate', expiry: 'Suspended' },
];

export default function ExternalAccessNoOverexposureSection() {
  return (
    <section className="relative w-full bg-slate-50 py-20 md:py-28 border-b border-gray-200 text-slate-900 overflow-hidden">
      {/* Background Accent Glows */}
      <div className="size-96 -left-44 -top-28 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold   text-slate-900 leading-tight">
            External access without overexposure
          </h2>
          <p className="text-slate-600 text-lg font-normal   leading-relaxed max-w-3xl">
            Bring contractors, partners, and viewers into secure boundaries without risking internal policy drift or link leakages.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {externalModels.map((m, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl border border-gray-200 shadow-xs flex flex-col gap-3 hover:shadow-md transition-shadow"
            >
              <div className="relative w-full h-36  overflow-hidden">
                              <Image
                                src={m.image}
                                alt={m.title}
                                fill
                                className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                              />
                            </div>

              <h3 className="text-slate-900 text-lg font-bold  ">
                {m.title}
              </h3>
              <p className="text-slate-600 text-sm font-normal   leading-relaxed">
                {m.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Access State Lifecycle Table */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 bg-slate-50 border-b border-gray-200 grid grid-cols-12 gap-3 text-slate-900 text-xs font-bold  ">
            <span className="col-span-3">ACCESS STATE</span>
            <span className="col-span-4">VERIFICATION ACTION</span>
            <span className="col-span-3">SCOPE BOUNDARY</span>
            <span className="col-span-2 text-right">EXPIRY PATH</span>
          </div>

          <div className="flex flex-col divide-y divide-gray-200">
            {externalStateTable.map((row, idx) => (
              <div key={idx} className="p-4 grid grid-cols-12 gap-3 items-center text-xs  ">
                <div className="col-span-3">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold   uppercase ${row.stateStyle}`}>
                    {row.state}
                  </span>
                </div>
                <span className="col-span-4 text-slate-600 font-normal">{row.action}</span>
                <span className="col-span-3 text-slate-600 font-normal">{row.scope}</span>
                <span className="col-span-2 text-right text-slate-600 font-normal">{row.expiry}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
