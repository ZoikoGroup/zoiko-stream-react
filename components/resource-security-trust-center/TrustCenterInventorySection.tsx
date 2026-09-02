import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import bg147 from '@/public/images/Organization-overview/bg (147).png';

const INVENTORY = [
  {
    title: 'Security Governance Framework',
    type: 'Policy',
    domain: 'Security Domain',
    status: 'Current',
    access: 'Public',
    accessBg: 'bg-sky-100 text-sky-700',
    meta: 'Effective: Jan 2026',
    href: '#evidence-details',
  },
  {
    title: 'SOC 2 Type II Report',
    type: 'Report',
    domain: 'Security Domain',
    status: 'Current',
    access: 'Controlled',
    accessBg: 'bg-red-100 text-red-700',
    meta: 'Review period: 2025-2026',
    href: '#evidence-details',
  },
  {
    title: 'Data Processing Agreement Template',
    type: 'Legal Artifact',
    domain: 'Privacy Domain',
    status: 'Current',
    access: 'Public',
    accessBg: 'bg-sky-100 text-sky-700',
    meta: 'Updated Q1 2026',
    href: '#evidence-details',
  },
  {
    title: 'Penetration Testing Summary',
    type: 'Assessment',
    domain: 'Security Domain',
    status: 'Current',
    access: 'Controlled',
    accessBg: 'bg-red-100 text-red-700',
    meta: 'Tested Dec 2025',
    href: '#evidence-details',
  },
  {
    title: 'WCAG 2.2 AA Conformance Statement',
    type: 'Public Statement',
    domain: 'Accessibility Domain',
    status: 'Current',
    access: 'Public',
    accessBg: 'bg-sky-100 text-sky-700',
    meta: 'Verified Jan 2026',
    href: '#evidence-details',
  },
  {
    title: 'Media Architecture Trust Boundaries',
    type: 'Mapping',
    domain: 'Security Domain',
    status: 'Current',
    access: 'Public',
    accessBg: 'bg-sky-100 text-sky-700',
    meta: 'Version 3.4',
    href: '#evidence-details',
  },
];

export default function TrustCenterInventorySection() {
  return (
    <section id="evidence-inventory" className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 border-b border-gray-200 flex flex-col justify-start items-start gap-8 bg-white overflow-hidden">
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
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-3">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
          Current evidence inventory
        </h2>
      </div>

      {/* Inventory Item Rows */}
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-3">
        {INVENTORY.map((item, index) => (
          <div
            key={index}
            className="w-full p-4 bg-slate-50/90 backdrop-blur-xs rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-blue-500/50 transition-all shadow-xs"
          >
            <div className="flex-1 flex flex-col justify-start items-start gap-1">
              <h3 className="text-slate-900 text-base font-bold font-['Space_Grotesk']">
                {item.title}
              </h3>
              <div className="flex items-center gap-2">
                <span className="text-slate-600 text-xs font-normal font-['Inter']">
                  {item.type}
                </span>
                <div className="size-1 bg-slate-400 rounded-full" />
                <span className="text-slate-600 text-xs font-normal font-['Inter']">
                  {item.domain}
                </span>
              </div>
            </div>

            <div className="w-24 flex items-center gap-2 shrink-0">
              <div className="size-2 bg-emerald-500 rounded-full" />
              <span className="text-slate-900 text-xs font-medium font-['Inter']">
                {item.status}
              </span>
            </div>

            <div className={`w-24 px-2.5 py-1 ${item.accessBg} rounded-sm flex justify-center items-center shrink-0`}>
              <span className="text-xs font-bold font-['Space_Grotesk']">
                {item.access}
              </span>
            </div>

            <div className="w-36 text-slate-600 text-xs font-normal font-['Inter'] shrink-0">
              {item.meta}
            </div>

            <div className="flex items-center gap-1 shrink-0">
              <Link
                href={item.href}
                className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 text-sm font-bold font-['Space_Grotesk'] transition-colors"
              >
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5 text-blue-600" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
