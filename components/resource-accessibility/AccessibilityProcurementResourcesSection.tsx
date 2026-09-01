import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import bg147 from '@/public/images/Organization-overview/bg (147).png';
import img40 from '@/public/images/resource-accessibility/card-image (40).png';
import img41 from '@/public/images/resource-accessibility/card-image (41).png';
import img42 from '@/public/images/resource-accessibility/card-image (42).png';
import img43 from '@/public/images/resource-accessibility/card-image (43).png';

const RESOURCES = [
  {
    title: 'VPAT / ACR Reports',
    badge: 'Controlled',
    badgeBg: 'bg-slate-200 text-slate-600',
    description:
      'Comprehensive Accessibility Conformance Reports structured under Section 508 VPAT specifications.',
    actionText: 'Request Access →',
    href: '#vpat-request',
    image: img40,
  },
  {
    title: 'Conformance Report',
    badge: 'Public',
    badgeBg: 'bg-emerald-100 text-emerald-600',
    description:
      'External third-party evaluation executive summaries and testing methodologies checklist.',
    actionText: 'Download PDF →',
    href: '#download-pdf',
    image: img41,
  },
  {
    title: 'Accessibility Policy',
    badge: 'Public',
    badgeBg: 'bg-emerald-100 text-emerald-600',
    description:
      "Our organization's core pledge, evaluation frequency, and product integration commitments.",
    actionText: 'View Policy →',
    href: '#view-policy',
    image: img42,
  },
  {
    title: 'Trust Center',
    badge: 'Public',
    badgeBg: 'bg-emerald-100 text-emerald-600',
    description:
      'Access core privacy certificates, encryption audits, SLA performance metrics, and GDPR logs.',
    actionText: 'Browse Trust →',
    href: '/resource-security-trust-center',
    image: img43,
  },
];

export default function AccessibilityProcurementResourcesSection() {
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
          Procurement and evidence resources
        </h2>
        <p className="text-slate-600 text-base sm:text-lg font-normal font-['Inter'] leading-7">
          Official artifact files, audit logs, and compliance documentation ready for download.
        </p>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {RESOURCES.map((item, index) => (
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

            <div className="w-full p-6 flex flex-col justify-between items-start gap-3 flex-1">
              <div className="flex flex-col gap-2">
                <div className="w-full flex justify-between items-center">
                  <h3 className="text-slate-900 text-base font-bold font-['Space_Grotesk']">
                    {item.title}
                  </h3>
                  <div className={`px-2 py-1 ${item.badgeBg} rounded-md shrink-0`}>
                    <span className="text-xs font-semibold font-['Inter']">
                      {item.badge}
                    </span>
                  </div>
                </div>

                <p className="text-slate-600 text-xs font-normal font-['Inter'] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-2 border-t border-gray-200 w-full">
                <Link
                  href={item.href}
                  className="text-blue-600 hover:text-blue-700 text-xs font-bold font-['Space_Grotesk'] underline transition-colors"
                >
                  {item.actionText}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
