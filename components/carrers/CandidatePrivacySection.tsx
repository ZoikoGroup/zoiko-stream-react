import React from 'react';

const privacyItems = [
  {
    title: 'Application notice',
    desc: 'A Candidate Privacy Notice is reachable before personal information is submitted and linked at the application form.',
  },
  {
    title: 'Data minimization',
    desc: 'Only data necessary for the recruitment purpose and stage is collected. Optional demographic questions are separated and clearly voluntary where applicable.',
  },
  {
    title: 'Retention',
    desc: 'The applicable retention policy is displayed or linked. Closed applications follow the approved jurisdiction/entity schedule.',
  },
  {
    title: 'Talent network',
    desc: 'A separate opt-in — never a silent reuse of your application for indefinite future recruiting.',
  },
];

export default function CandidatePrivacySection() {
  return (
    <section className="w-full bg-slate-100 py-20 border-b border-gray-200 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="size-1.5 bg-blue-500 rounded-full" />
            <span className="text-blue-500 text-xs font-normal font-['IBM_Plex_Mono'] uppercase tracking-wide">
              DATA RESPECT
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold   text-zinc-900 leading-tight">
            Candidate privacy.
          </h2>

          <p className="text-gray-500 text-base font-normal     leading-relaxed max-w-2xl">
            Browsing and filtering roles never requires an account. Data collection begins only when you start an application.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {privacyItems.map((p, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-xl border border-gray-200 shadow-xs flex flex-col justify-between gap-3 h-28"
            >
              <h3 className="text-zinc-900 text-sm font-bold  ">
                {p.title}
              </h3>
              <p className="text-gray-500 text-xs font-normal     leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
