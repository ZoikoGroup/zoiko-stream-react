import React from 'react';

const teamRoles = [
  {
    role: 'Product Manager',
    q: 'Does the feature set scale commercially?',
    dec: 'Interactive capabilities',
    handoff: 'UX verification logs',
    img:"/images/Developers-product-teams/Rectangle  (11).png"
  },
  {
    role: 'Frontend Developer',
    q: 'Is the player SDK fully customisable?',
    dec: 'UI components customisation',
    handoff: 'SDK & UI Guides',
    img:"/images/Developers-product-teams/Rectangle  (10).png"
  },
  {
    role: 'Backend Developer',
    q: 'How are authorization secrets managed?',
    dec: 'Secret store allocation',
    handoff: 'API Documentation',
        img:"/images/Developers-product-teams/Rectangle  (9).png"

  },
  {
    role: 'Platform Engineer',
    q: 'Where does the media processing run?',
    dec: 'Compute location rules',
    handoff: 'Regional map boundary',
        img:"/images/Developers-product-teams/Rectangle  (8).png"

  },
  {
    role: 'Media Specialist',
    q: 'What is the expected target latency?',
    dec: 'Encoding profile setup',
    handoff: 'Latency SLA sheet',
        img:"/images/Developers-product-teams/Rectangle  (7).png"

  },
  {
    role: 'Security Architect',
    q: 'How are token-gated sessions signed?',
    dec: 'SSO mapping credentials',
    handoff: 'SSO / OIDC setup',
        img:"/images/Developers-product-teams/Rectangle  (6).png"

  },
  {
    role: 'SRE / Operations',
    q: 'Is there proactive latency monitoring?',
    dec: 'Telemetry alerts strategy',
    handoff: 'Real-time logging dashboard',
        img:"/images/Developers-product-teams/Rectangle  (12).png"

  },
  {
    role: 'QA Engineer',
    q: 'Does it support automated transcriptions?',
    dec: 'WCAG accessibility tools',
    handoff: 'Compliance score matrix',
        img:"/images/Developers-product-teams/Rectangle  (13).png"

  },
];

export default function TeamDecisionSection() {
  return (
    <section className="relative w-full bg-slate-50 py-20 md:py-24 border-b border-gray-200 text-slate-900 overflow-hidden">
      {/* Background Accent Glows */}
      <div className="size-96 -left-44 -top-28 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-slate-900 leading-tight">
            Product video is a team decision, not a single API decision.
          </h2>
          <p className="text-slate-600 text-lg font-normal font-['Inter'] leading-relaxed max-w-4xl">
            The product experience, application architecture, identity model, media behavior, operational support, accessibility, and launch plan usually cross role boundaries. Make those boundaries visible before implementation starts.
          </p>
        </div>

        {/* 8 Team Role Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamRoles.map((r, idx) => (
            <div
              key={idx}
              className="p-6 bg-slate-50 rounded-xl border border-gray-200 flex flex-col justify-between gap-5 shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-center">
                <h3 className="text-slate-900 text-base font-bold font-['Space_Grotesk']">
                  {r.role}
                </h3>
                <img className="size-8 "
                src={r.img}>
                  
                </img>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <span className="text-slate-600 text-[10px] font-bold font-['Inter'] uppercase tracking-wider">
                    Question Owned
                  </span>
                  <p className="text-slate-900 text-xs font-normal font-['Inter']">
                    {r.q}
                  </p>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-slate-600 text-[10px] font-bold font-['Inter'] uppercase tracking-wider">
                    Decisions Required
                  </span>
                  <p className="text-slate-900 text-xs font-normal font-['Inter']">
                    {r.dec}
                  </p>
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-slate-600 text-[10px] font-bold font-['Inter'] uppercase tracking-wider">
                    Verify Handoff
                  </span>
                  <p className="text-blue-500 text-xs font-normal font-['Inter'] underline">
                    {r.handoff}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
