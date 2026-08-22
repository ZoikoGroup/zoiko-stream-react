import React from 'react';

const policies = [
  { title: 'Office-based', desc: 'The primary work location is the named office/location.' },
  { title: 'Hybrid', desc: 'The role combines location-based attendance with remote work under the job-specific policy.' },
  { title: 'Remote eligible', desc: 'The role can be performed remotely only from the countries, states, or regions listed on the posting.' },
  { title: 'Field / event-based', desc: 'The role requires travel or work at event/customer locations; the posting states expected scope.' },
  { title: 'Relocation & sponsorship', desc: 'Never inferred — stated explicitly on the role page if offered, unavailable, or determined case by case.' },
  { title: 'Location detection', desc: 'We do not auto-filter by IP address or prompt for location permission on page load.' },
];

export default function GlobalClaritySection() {
  return (
    <section className="w-full bg-slate-100 py-20 border-b border-gray-200 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="size-1.5 bg-blue-500 rounded-full" />
            <span className="text-blue-500 text-xs font-normal font-['IBM_Plex_Mono'] uppercase tracking-wide">
              GLOBAL CLARITY
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold   text-zinc-900 leading-tight">
            Locations &amp; work arrangements.
          </h2>

          <p className="text-gray-500 text-base font-normal    leading-relaxed max-w-2xl">
            ZoikoStream hires through Zoiko Group companies in approved markets. Eligibility depends on the specific role, employing entity, and work location.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {policies.map((pol, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl border border-gray-200 shadow-xs flex flex-col justify-between gap-3 h-28"
            >
              <h3 className="text-zinc-900 text-base font-bold  ">
                {pol.title}
              </h3>
              <p className="text-gray-500 text-sm font-normal    leading-relaxed">
                {pol.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
