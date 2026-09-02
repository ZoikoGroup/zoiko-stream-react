import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import proofImg1 from '@/public/images/enterprise-plans/section-6image (1).png';
import proofImg2 from '@/public/images/enterprise-plans/section-6image (2).png';
import proofImg3 from '@/public/images/enterprise-plans/section-6image (3).png';
import proofImg4 from '@/public/images/enterprise-plans/section-6image (4).png';

const PROOFS = [
  {
    title: 'Trust Center',
    cta: 'Security & compliance →',
    href: '/resource-security-compliance',
    image: proofImg1,
  },
  {
    title: 'Docs & API reference',
    cta: 'Technical documentation →',
    href: '/developer-documentation',
    image: proofImg2,
  },
  {
    title: 'Architecture overview',
    cta: 'How ZoikoStream is built →',
    href: '/resource-architecture',
    image: proofImg3,
  },
  {
    title: 'System status',
    cta: 'Live service health →',
    href: '/resource-system-status',
    image: proofImg4,
  },
];

export default function PricingEnterprisePlansProofSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-24 bg-white flex flex-col justify-start items-start gap-12 border-b border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="w-full flex flex-col justify-start items-start gap-3">
        <div className="flex items-center gap-2">
          <div className="size-1.5 bg-blue-400 rounded-[3px]" />
          <span className="text-blue-400 text-xs font-bold font-['Inter'] uppercase tracking-wider">
            Procurement & technical proof
          </span>
        </div>
        <h2 className="text-gray-800 text-3xl font-bold font-['Sora'] leading-tight">
          Review enterprise evidence before you talk to sales.
        </h2>
      </div>

      {/* 4 Cards Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PROOFS.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl outline outline-1 outline-offset-[-1px] outline-zinc-200 overflow-hidden flex flex-col justify-start items-start hover:shadow-lg transition-shadow group"
          >
            <div className="relative w-full h-44 bg-slate-100 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="w-full p-5 flex flex-col justify-start items-start gap-2">
              <h3 className="text-gray-800 text-sm font-bold font-['Sora']">
                {item.title}
              </h3>
              <Link
                href={item.href}
                className="text-blue-400 hover:text-blue-500 text-xs font-semibold font-['Inter'] transition-colors"
              >
                {item.cta}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
