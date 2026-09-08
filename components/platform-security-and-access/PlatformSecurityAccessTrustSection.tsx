import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const DOMAINS = [
  {
    title: 'Privacy & Data Protection',
    desc: 'Data classification, retention, subject access requests, GDPR/CCPA compliance, and cross-border transfers.',
    linkText: 'Privacy documentation',
    href: '/cookie-notice',
  },
  {
    title: 'Compliance & Certifications',
    desc: 'SOC 2, ISO 27001, penetration testing, vulnerability management, and compliance attestations.',
    linkText: 'Compliance documentation',
    href: '/company-trust-center',
  },
  {
    title: 'Incident Response',
    desc: 'Security incident classification, response procedures, notification timelines, and post-incident review.',
    linkText: 'Incident response documentation',
    href: '/security-advisories',
  },
];

export default function PlatformSecurityAccessTrustSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-24 bg-white border-b border-slate-200 flex flex-col justify-start items-start gap-14 overflow-hidden z-10">
      {/* White Background Snippet */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg147}
          alt="Media Lifecycle Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0" />
      </div>
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />
      <div className="size-96 -left-36 -top-20 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl flex flex-col justify-start items-start gap-14">
        {/* Header Text */}
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="w-full text-zinc-950 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight sm:leading-[48px]">
            Trust, privacy and compliance handoff
          </h2>
          <p className="w-full text-slate-600 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-relaxed">
            Security and access documentation stays within its authority. Adjacent domains are referenced but not owned here.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {DOMAINS.map((item, idx) => (
            <div
              key={idx}
              className="p-8 bg-slate-50/90 rounded-xl outline outline-1 outline-offset-[-1px] outline-slate-200 backdrop-blur-xs flex flex-col justify-between items-start gap-6 shadow-xs hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col gap-3">
                <h3 className="text-zinc-950 text-xl font-bold font-['Space_Grotesk']">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-base font-normal font-['Space_Grotesk'] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <Link
                href={item.href}
                className="inline-flex items-center gap-1 text-teal-600 text-sm font-bold font-['Space_Grotesk'] hover:underline"
              >
                <span>→ {item.linkText}</span>
              </Link>
            </div>
          ))}
        </div>

        <div className="w-full py-4 border-t border-slate-200">
          <p className="text-slate-600 text-sm font-normal font-['Space_Grotesk']">
            Each domain maintains its own source-of-truth documentation. Cross-references point to the owning authority.
          </p>
        </div>
      </div>
    </section>
  );
}
