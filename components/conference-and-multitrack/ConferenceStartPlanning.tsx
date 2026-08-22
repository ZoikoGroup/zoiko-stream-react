'use client';

import React from 'react';
import Link from 'next/link';

export default function ConferenceStartPlanning() {
  const cards = [
    {
      category: 'I NEED THE OVERALL PLANNING SEQUENCE',
      title: 'Workflow Overview',
      desc: 'Align event briefs, timelines, and operator assignments ahead of technical setup.',
      link: '/live-events-overview',
      linkLabel: 'View Overview',
      active: false
    },
    {
      category: 'I WANT END-TO-END OPERATION',
      title: 'Managed Streaming',
      desc: 'White-glove operational support from program build to archive execution.',
      link: '/managed-live-event-streaming',
      linkLabel: 'Explore Managed Ops',
      active: false
    },
    {
      category: 'I NEED REMOTE SPEAKERS GATED',
      title: 'Remote Contribution',
      desc: 'Secure, low-latency browser-based ingest links for offsite executives.',
      link: '/remote-contribution-landing',
      linkLabel: 'View Contribution',
      active: false
    },
    {
      category: 'I NEED SWITCHING AND GRAPHICS',
      title: 'Production Control',
      desc: 'Deploy cloud switchers, lower-thirds, and real-time canvas overrides.',
      link: '/production-switching-graphics',
      linkLabel: 'See Production',
      active: false
    },
    {
      category: 'MANY TRACKS THAT MUST STAY COORDINATED',
      title: 'Conferences & Multi-Track',
      desc: 'Govern concurrent stages, personalized attendee timelines, and role-gated replays.',
      link: '/conference-and-multitrack',
      linkLabel: 'Currently Viewing',
      active: true
    },
    {
      category: 'I NEED FAILURE RESILIENCE PLANNING',
      title: 'Event Resilience',
      desc: 'Simulate outages, deploy dry-run environments, and manage hot backups.',
      link: '/event-resilience',
      linkLabel: 'Learn Resilience',
      active: false
    },
    {
      category: 'I NEED SECURE CLOSED ROOMS',
      title: 'Private Streaming',
      desc: 'Restrict streams behind corporate SSO, SAML V2, and dynamic geo-blocks.',
      link: '/private-streaming',
      linkLabel: 'Review Security',
      active: false
    },
    {
      category: 'I NEED ACCESSIBILITY DESIGN',
      title: 'Accessibility & Inclusion',
      desc: 'Stenography, sign overlays, and WCAG 2.2 auditable compliance matrixes.',
      link: '/accessibility-inclusion',
      linkLabel: 'Verify Accessibility',
      active: false
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-zinc-950 text-white overflow-hidden border-b border-zinc-900">
      {/* Background Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none "
        style={{ backgroundImage: "url('/images/conferences-and-multitrack/bg (22).png')" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-4 max-w-3xl">
          <h2 className="text-slate-50 text-3xl sm:text-4xl font-bold font-spaceGrotesk leading-tight tracking-tight">
            Find the right starting point for your event
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-normal font-spaceGrotesk leading-relaxed">
            Each ZoikoStream capability is designed around exact operational models. Choose the interface that fits your stream&apos;s specific requirements.
          </p>
        </div>

        {/* Starting points grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {cards.map((c, idx) => (
            <div 
              key={idx}
              className={`p-7 bg-zinc-900 rounded-xl flex flex-col justify-between items-start gap-4 transition-all duration-300 ${
                c.active 
                  ? 'shadow-[0px_8px_24px_0px_rgba(76,134,255,0.20)] outline outline-1 outline-blue-500 scale-[1.02]' 
                  : 'outline outline-1 outline-offset-[-1px] outline-gray-800 hover:border-zinc-700/50 hover:bg-zinc-900/80'
              }`}
            >
              <div className="flex flex-col gap-2 w-full">
                <span className="text-blue-500 text-[10px] font-bold font-spaceGrotesk uppercase tracking-wide leading-tight">
                  {c.category}
                </span>
                <h3 className="text-slate-50 text-lg font-bold font-spaceGrotesk leading-snug">
                  {c.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm font-normal font-spaceGrotesk leading-relaxed">
                  {c.desc}
                </p>
              </div>

              {c.active ? (
                <span className="text-teal-400 text-xs font-bold font-spaceGrotesk tracking-wide uppercase select-none">
                  {c.linkLabel}
                </span>
              ) : (
                <Link 
                  href={c.link}
                  className="inline-flex items-center gap-1.5 text-blue-500 hover:text-blue-400 text-xs sm:text-sm font-bold font-spaceGrotesk transition-colors"
                >
                  <span>{c.linkLabel}</span>
                  <span className="text-[10px]" aria-hidden>→</span>
                </Link>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
