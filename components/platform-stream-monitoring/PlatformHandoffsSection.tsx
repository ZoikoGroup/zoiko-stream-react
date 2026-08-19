import React from 'react';
import { ChevronRight } from 'lucide-react';
import TopoBackground from './TopoBackground';

const destinations = [
  {
    image: 'handoff-system-status.png',
    title: 'System Status',
    badge: 'PUBLIC',
    badgeColor: '#4c86ff',
    description:
      'Provider-confirmed operational status. If the entire global CDN egress network experiences an outage, it is registered publicly on our global status registry immediately.',
    link: 'View Public Status',
    linkColor: '#4c86ff',
  },
  {
    image: 'handoff-support-portal.png',
    title: 'Support Portal',
    badge: 'AUTHORIZED',
    badgeColor: '#d97706',
    description:
      'Customer-specific assistance. Active stream diagnostic problems undergo immediate routing to senior systems engineering directly. No diversion to marketing or sales groups during outages.',
    link: 'Get Scoped Support',
    linkColor: '#d97706',
  },
  {
    image: 'handoff-developer-hub.png',
    title: 'Developer Hub',
    badge: 'ENGINEERING',
    badgeColor: '#00a184',
    description:
      'Implementation details, technical guides, API references, active changelogs, and sandbox controls. Read structural integration properties cleanly without marketing bias.',
    link: 'Read Technical Docs',
    linkColor: '#00a184',
  },
];

export default function PlatformHandoffsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white px-6 py-20 md:px-[112px] md:py-24">
      <TopoBackground />

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col gap-12">
        <div className="flex flex-col gap-3">
          <h2 className="text-3xl font-bold leading-[1.2] tracking-[-0.4px] text-[#0d1117] md:text-[37.9px]">
            Clear ownership. Task-safe routing.
          </h2>
          <p className="text-base text-[#475569] md:text-[18px] md:leading-7">
            Stop blending company health with developer debug flows. Resolve exactly where problem
            lives.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {destinations.map((card) => (
            <article
              key={card.title}
              className="flex flex-col overflow-hidden rounded-xl border border-[#e2e8f0] bg-[#f8fafc]"
            >
              <img
                src={`/images/platform-stream-monitoring/${card.image}`}
                alt=""
                className="h-[190px] w-full object-cover"
              />
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-bold text-[#0d1117]">{card.title}</h3>
                  <span
                    className="rounded-sm px-2 py-[3px] text-[10px] font-bold tracking-[0.5px]"
                    style={{ color: card.badgeColor, backgroundColor: `${card.badgeColor}1a` }}
                  >
                    {card.badge}
                  </span>
                </div>
                <p className="flex-1 text-[13px] leading-[1.6] text-[#475569]">{card.description}</p>
                <span
                  className="flex items-center gap-1.5 text-[13px] font-bold"
                  style={{ color: card.linkColor }}
                >
                  {card.link}
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="flex items-start gap-3 rounded-xl border border-[#e2e8f0] bg-[#f8fafc] p-5">
          <img src="/images/platform-stream-monitoring/shield.svg" alt="" className="mt-0.5 h-5 w-5" />
          <p className="text-[13px] leading-[1.7] text-[#475569]">
            <span className="font-bold text-[#0d1117]">ROUTING LAW:</span> Broad cloud or system
            outage transitions to <span className="font-bold text-[#0d1117]">System Status</span>{' '}
            immediately. Specific isolated stream issues route cleanly to{' '}
            <span className="font-bold text-[#0d1117]">Support</span> or your scoped{' '}
            <span className="font-bold text-[#0d1117]">Developer Monitoring sandboxes</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
