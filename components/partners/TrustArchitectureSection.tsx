import React from 'react';

const trustMarkers = [
  {
    marker: 'ZoikoStream Partner',
    meaning: 'An active, approved partner relationship exists under the applicable program or agreement.',
    evidence: 'Canonical status = Active; agreement/approval basis present; public brand use approved; review not stale.',
  },
  {
    marker: 'Validated Integration',
    meaning: "A named integration has passed ZoikoStream's documented technical validation for a defined version/scope.",
    evidence: 'Test evidence; supported versions; technical owner; revalidation trigger after material change.',
  },
  {
    marker: 'Live Events Capability',
    meaning: 'The partner is approved to be discovered for one or more Live Events capability categories.',
    evidence: 'Capability review; operating contact; scope/region data; no implication of guaranteed event outcome.',
  },
  {
    marker: 'Specialization',
    meaning: 'A defined specialization has formal criteria and current evidence.',
    evidence: 'Published internal criteria, assessment record, renewal period, controlled badge asset.',
  },
  {
    marker: 'Strategic Alliance',
    meaning: 'A specific alliance has been approved for public description.',
    evidence: 'Executive/legal approval, current relationship statement, agreed naming/brand language.',
  },
];

export default function TrustArchitectureSection() {
  return (
    <section className="w-full bg-white py-20 border-b border-gray-200 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="size-1.5 bg-blue-400 rounded-full" />
            <span className="text-blue-400 text-xs font-bold   uppercase tracking-wider">
              TRUST ARCHITECTURE
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold   text-gray-800 leading-tight">
            Partner status &amp; trust markers.
          </h2>

          <p className="text-gray-500 text-base font-normal   leading-relaxed max-w-2xl">
            Every marker below requires documented evidence before it can appear on a public profile.
          </p>
        </div>

        {/* 5 Trust Marker Rows Table */}
        <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden flex flex-col">
          <div className="p-4 bg-slate-50 border-b border-zinc-200 grid grid-cols-12 gap-3 text-gray-400 text-xs font-bold   uppercase tracking-wider">
            <span className="col-span-3">MARKER</span>
            <span className="col-span-5">MEANING</span>
            <span className="col-span-4">MINIMUM EVIDENCE</span>
          </div>

          <div className="flex flex-col divide-y divide-zinc-200">
            {trustMarkers.map((row, idx) => (
              <div key={idx} className="p-5 grid grid-cols-12 gap-3 items-center text-sm  ">
                <span className="col-span-3 text-gray-800 font-bold  ">{row.marker}</span>
                <span className="col-span-5 text-gray-500 font-normal">{row.meaning}</span>
                <span className="col-span-4 text-gray-400 font-normal">{row.evidence}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer Card */}
        <div className="p-6 bg-slate-50 rounded-xl border border-zinc-200">
          <p className="text-gray-500 text-sm font-normal   leading-relaxed">
            Partners are independent organizations. A listing or relationship marker does not by itself guarantee a partner&apos;s services, security, availability, compliance, or commercial terms.
          </p>
        </div>
      </div>
    </section>
  );
}
