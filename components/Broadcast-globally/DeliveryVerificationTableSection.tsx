import React from 'react';

const stats = [
  { val: '142', label: 'VERIFIED REGIONS' },
  { val: '24', label: 'EDGE PEERINGS ACTIVE' },
  { val: '3', label: 'RESTRICTED ZONES' },
  { val: '99.99%', label: 'TESTED DELIVERY' },
];

const regions = [
  {
    name: 'North America (Lumen Mesh)',
    state: 'VERIFIED',
    stateStyle: 'bg-emerald-500/10 text-emerald-500',
    source: 'Equinix Ashburn',
    scope: 'Direct multi-CDN mapping + HLS low latency fallback',
    lastReviewed: 'Feb 2026',
  },
  {
    name: 'Europe West (Dublin Edge)',
    state: 'VERIFIED',
    stateStyle: 'bg-emerald-500/10 text-emerald-500',
    source: 'AWS Frankfurt Interconnect',
    scope: 'Primary transit pathway with automated regional load shedding',
    lastReviewed: 'Jan 2026',
  },
  {
    name: 'Mainland China (Ingest Gate)',
    state: 'REQUIRES REVIEW',
    stateStyle: 'bg-amber-500/10 text-amber-500',
    source: 'ICP License Node',
    scope: 'Subject to local firewalls; latency targets unverified without proxy',
    lastReviewed: 'Feb 2026',
  },
  {
    name: 'Asia Pacific (Tokyo Hub)',
    state: 'AVAILABLE',
    stateStyle: 'bg-blue-500/10 text-blue-500',
    source: 'Softbank Peering',
    scope: 'SLA-active routing for standard mobile networks',
    lastReviewed: 'Jan 2026',
  },
  {
    name: 'Restricted Sandbox (Test Area)',
    state: 'RESTRICTED',
    stateStyle: 'bg-red-500/10 text-red-500',
    source: 'Internal Lab IP',
    scope: 'Restricted administrative sandbox testing only',
    lastReviewed: 'Dec 2025',
  },
  {
    name: 'South America (São Paulo)',
    state: 'NOT EVALUATED',
    stateStyle: 'bg-slate-400/20 text-slate-500',
    source: 'Pending Transit',
    scope: 'Edge routing pending secondary telemetry verification',
    lastReviewed: 'Never',
  },
];

export default function DeliveryVerificationTableSection() {
  return (
    <section className="relative w-full bg-slate-50 py-20 md:py-28 border-b border-gray-200 text-slate-900 overflow-hidden">
      {/* Background Accent Glows */}
      <div className="size-96 -left-44 -top-28 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold   text-slate-900 leading-tight">
            Where is delivery verified, review-required, restricted, or not yet evaluated?
          </h2>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((st, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col gap-2"
            >
              <span className="text-slate-900 text-3xl font-bold  ">
                {st.val}
              </span>
              <span className="text-slate-500 text-xs font-bold   tracking-wide">
                {st.label}
              </span>
            </div>
          ))}
        </div>

        {/* Region Table */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 bg-slate-50 border-b-2 border-gray-200 grid grid-cols-12 gap-3 text-slate-900 text-xs font-bold  ">
            <span className="col-span-3">Region/Channel</span>
            <span className="col-span-2">State</span>
            <span className="col-span-2">Source</span>
            <span className="col-span-3">Scope</span>
            <span className="col-span-2 text-right">Last Reviewed</span>
          </div>

          <div className="flex flex-col divide-y divide-gray-200">
            {regions.map((r, idx) => (
              <div
                key={idx}
                className="p-4 grid grid-cols-12 gap-3 items-center text-xs   hover:bg-slate-50 transition-colors"
              >
                <span className="col-span-3 text-slate-900 text-sm font-bold  ">
                  {r.name}
                </span>
                <div className="col-span-2 flex items-center">
                  <span className={`px-2.5 py-1 rounded text-xs font-bold   ${r.stateStyle}`}>
                    {r.state}
                  </span>
                </div>
                <span className="col-span-2 text-slate-700 font-normal">
                  {r.source}
                </span>
                <span className="col-span-3 text-slate-700 font-normal leading-relaxed">
                  {r.scope}
                </span>
                <span className="col-span-2 text-right text-slate-700 font-normal">
                  {r.lastReviewed}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
