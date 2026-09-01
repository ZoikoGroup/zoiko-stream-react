import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import bg147 from '@/public/images/Organization-overview/bg (147).png';
import img44 from '@/public/images/resource-help-center/card-image (44).png';
import img45 from '@/public/images/resource-help-center/card-image (45).png';
import img46 from '@/public/images/resource-help-center/card-image (46).png';
import img47 from '@/public/images/resource-help-center/card-image (47).png';
import img48 from '@/public/images/resource-help-center/card-image (50).png';
import img49 from '@/public/images/resource-help-center/card-image (48).png';
import img50 from '@/public/images/resource-help-center/card-image (49).png';
import img51 from '@/public/images/resource-help-center/card-image (51).png';

const PATHWAYS = [
  {
    category: 'DIAGNOSTICS',
    title: 'Troubleshoot a Problem',
    description:
      'Interactive diagnostic flows to resolve connection, source ingest, and playback errors.',
    href: '#guided-troubleshooting',
    image: img44,
  },
  {
    category: 'DEVELOPER',
    title: 'Build or Integrate',
    description:
      'Developer handoff resources, API keys, webhook schema validation, and SDK setups.',
    href: '/developer-documentation',
    image: img45,
  },
  {
    category: 'SYSTEM HEALTH',
    title: 'Check Service Status',
    description:
      'Live operational telemetry across ingestion nodes, CDN distributions, and processing loops.',
    href: '/resource-system-status',
    image: img46,
  },
  {
    category: 'PRODUCTION',
    title: 'Plan a Live Event',
    description:
      'Concierge live support planning, fallback pathways, and post-event archive strategies.',
    href: '/resources',
    image: img47,
  },
  {
    category: 'CHANGELOG',
    title: 'Understand a Change',
    description:
      'Release logs, technical migrations, platform deprecation periods, and system notices.',
    href: '/resource-change-log',
    image: img48,
  },
  {
    category: 'ACCESSIBILITY',
    title: 'Accessibility Help',
    description:
      'Submit conformance barriers, read WCAG evidence, or request alternative audio configurations.',
    href: '/resource-accessibility',
    image: img49,
  },
  {
    category: 'GOVERNANCE',
    title: 'Security & Trust',
    description:
      'SSO enforcement, detailed audit trails, compliance artifacts, and penetration results.',
    href: '/resource-security-trust-center',
    image: img50,
  },
  {
    category: 'ESCALATION',
    title: 'Contact Support',
    description:
      'Escalate complex problems to human support engineers. SLA-backed responses based on plan tier.',
    href: '#human-support',
    image: img51,
  },
];

export default function HelpCenterPathwaysSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 border-b border-gray-200 flex flex-col justify-start items-start gap-14 bg-white overflow-hidden">
      {/* Background overlay snippet */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg147}
          alt="Media Lifecycle Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 " />
      </div>
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Where do you need help?
        </h2>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PATHWAYS.map((item, index) => (
          <div
            key={index}
            className="bg-slate-50/90 backdrop-blur-xs rounded-xl shadow-[0px_4px_16px_0px_rgba(11,8,16,0.04)] outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start overflow-hidden hover:border-blue-500/50 transition-all group"
          >
            <div className="relative w-full h-36 bg-gray-100 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="w-full p-5 flex flex-col justify-between items-start gap-3 flex-1">
              <div className="flex flex-col gap-2">
                <span className="text-blue-600 text-xs font-bold font-['Space_Grotesk'] tracking-wider">
                  {item.category}
                </span>
                <h3 className="text-slate-900 text-lg font-bold font-['Space_Grotesk']">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs font-normal font-['Inter'] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-xs font-bold font-['Space_Grotesk'] transition-colors"
                >
                  <span>Open Path</span>
                  <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
