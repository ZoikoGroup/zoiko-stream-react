import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import bg147 from '@/public/images/Organization-overview/bg (147).png';
import img21 from '@/public/images/resources-security-trust-center/Rectangle (21).png';
import img22 from '@/public/images/resources-security-trust-center/Rectangle (22).png';
import img23 from '@/public/images/resources-security-trust-center/Rectangle (23).png';
import img24 from '@/public/images/resources-security-trust-center/Rectangle (24).png';
import img25 from '@/public/images/resources-security-trust-center/Rectangle (25).png';
import img26 from '@/public/images/resources-security-trust-center/Rectangle (26).png';

const ROUTES = [
  {
    title: 'System Status',
    description: 'Live availability metrics and incident logs.',
    href: '/resource-system-status',
    image: img21,
  },
  {
    title: 'Security Reporting',
    description: 'How to disclose vulnerabilities under safe harbor rules.',
    href: '/resources',
    image: img22,
  },
  {
    title: 'Accessibility',
    description: 'Review WCAG conformance statements and testing reports.',
    href: '/resources',
    image: img23,
  },
  {
    title: 'Developer Docs',
    description: 'Technical integration guidelines, SDK details and parameters.',
    href: '/developer-documentation',
    image: img24,
  },
  {
    title: 'Privacy & Legal',
    description: 'DPA and compliance framework handoffs.',
    href: '/resources',
    image: img25,
  },
  {
    title: 'Enterprise Procurement',
    description: 'Request dedicated expert review and custom assessments.',
    href: '/contact-us',
    image: img26,
  },
];

export default function TrustCenterSpecialistRoutesSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 border-b border-gray-200 flex flex-col justify-start items-start gap-12 bg-white overflow-hidden">
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
          Specialist routes
        </h2>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {ROUTES.map((item, index) => (
          <div
            key={index}
            className="bg-slate-50/90 backdrop-blur-xs rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start overflow-hidden shadow-xs hover:border-blue-500/50 transition-all group"
          >
            <div className="relative w-full h-36 bg-gray-100 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="w-full p-4 flex flex-col justify-between items-start gap-2 flex-1">
              <div className="flex flex-col gap-1">
                <h3 className="text-slate-900 text-base font-bold font-['Space_Grotesk']">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-xs font-normal font-['Inter'] line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <Link
                href={item.href}
                className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-xs font-bold font-['Space_Grotesk'] pt-1 transition-colors"
              >
                <span>Access Route</span>
                <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
