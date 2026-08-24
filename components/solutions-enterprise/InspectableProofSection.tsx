import React from 'react';
import Image from 'next/image';

const proofs = [
  {
    title: 'Security',
    desc: 'SAML Single Sign-On parameters, edge TLS termination rules, and private keys rotation schedule.',
    badge: 'CURRENT',
    badgeCls: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30',
    date: 'Last reviewed: Feb 2026',
    img: '/images/Enterprises/Card-Image (92).png',
  },
  {
    title: 'Privacy & Legal',
    desc: 'GDPR/CCPA boundary rules, viewer pseudonymization paths, and system-wide data collection limits.',
    badge: 'CURRENT',
    badgeCls: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30',
    date: 'Last reviewed: Jan 2026',
    img: '/images/Enterprises/Card-Image (93).png',
  },
  {
    title: 'Accessibility',
    desc: 'VPAT documentation, keyboard-nav tests report, and WCAG evaluation ledger.',
    badge: 'EXPIRING',
    badgeCls: 'bg-blue-500/10 text-blue-500 border-blue-500/30',
    date: 'Last reviewed: Dec 2025',
    img: '/images/Enterprises/Card-Image (94).png',
  },
  {
    title: 'System Status',
    desc: 'Historical incident reports, uptime logs, and failover validation test results.',
    badge: '99.99% UPTIME',
    badgeCls: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30',
    date: 'Real-time telemetry',
    img: '/images/Enterprises/Card-Image (95).png',
  },
  {
    title: 'Architecture',
    desc: 'Data pipeline maps, multi-CDN topologies, and ingress points definitions.',
    badge: 'VERIFIED',
    badgeCls: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30',
    date: 'Last reviewed: Jan 2026',
    img: '/images/Enterprises/Card-Image (96).png',
  },
  {
    title: 'Support',
    desc: 'SLA parameters documentation, team roster schedules, and escalation endpoints.',
    badge: '24/7 ENFORCED',
    badgeCls: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30',
    date: 'Hotline available',
    img: '/images/Enterprises/Card-Image (97).png',
  },
];

export function InspectableProofSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-gray-950/80 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/Enterprises/bg (172).png"
          alt="Inspectable Proof Background"
          fill
          className="object-cover opacity-30"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
            Make public proof inspectable before a sales conversation.
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal font-['Inter'] leading-7">
            Security, privacy, accessibility, system status, architecture, support, data residency, certifications and commercial artifacts — all evidence-gated.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {proofs.map((pf, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/80 rounded-xl border border-gray-800 flex flex-col justify-start items-start overflow-hidden hover:border-gray-700 transition-colors"
            >
              <div className="relative w-full h-24 bg-zinc-950">
                <Image
                  src={pf.img}
                  alt={pf.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full p-4 flex flex-col justify-start items-start gap-2.5">
                <h3 className="text-white text-base font-bold font-['Space_Grotesk']">{pf.title}</h3>
                <p className="text-slate-400 text-xs font-normal font-['Inter'] leading-4">{pf.desc}</p>
                <div className="flex items-center gap-2 pt-1">
                  <span className={`px-2 py-1 rounded-sm border text-[10px] font-bold font-['Space_Grotesk'] uppercase ${pf.badgeCls}`}>
                    {pf.badge}
                  </span>
                  <span className="text-slate-500 text-[10px] font-normal font-['Inter']">{pf.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
