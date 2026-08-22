import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Activity, FileText, HelpCircle } from 'lucide-react';

const evidenceRoutes = [
  {
    title: 'Trust Center',
    desc: 'Compliance verification, SOC 2 certificates',
    action: 'Open trust interface',
    href: '/company-overview',
    icon: ShieldCheck,
  },
  {
    title: 'System Status',
    desc: 'Live platform availability telemetry',
    action: 'View health metrics',
    href: '/faqs-and-support',
    icon: Activity,
  },
  {
    title: 'Documentation',
    desc: 'API pathways and configuration routes',
    action: 'Explore architecture',
    href: '/sdks',
    icon: FileText,
  },
  {
    title: 'Support Portal',
    desc: 'Account-specific issue resolution checks',
    action: 'Contact operations',
    href: '/faqs-and-support',
    icon: HelpCircle,
  },
];

export default function WhereEvidenceLivesSection() {
  return (
    <section className="relative w-full bg-gray-950 text-white py-20 md:py-24 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/platform-delivery-trust-overview/bg (72).png"
          alt="Where Evidence Lives Background"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gray-950/70" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold   text-white">
            Where Evidence Lives
          </h2>
          <p className="text-slate-400 text-base md:text-lg font-normal   max-w-3xl">
            Four authoritative routes for inspecting trust
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {evidenceRoutes.map((route, idx) => {
            const Icon = route.icon;
            return (
              <div
                key={idx}
                className="p-7 bg-gray-900/90 rounded-2xl border border-slate-800 backdrop-blur-sm flex flex-col justify-between gap-5 hover:border-teal-400/40 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <div className="size-10 bg-teal-400/10 rounded-lg border border-teal-400/20 flex items-center justify-center text-teal-400 shrink-0">
                    <Icon className="size-5" />
                  </div>
                  <span className="text-teal-400 text-xs font-bold  ">
                    AUTHORITATIVE
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-white text-lg font-bold  ">
                    {route.title}
                  </h3>
                  <p className="text-slate-400 text-xs font-normal   leading-relaxed">
                    {route.desc}
                  </p>
                </div>

                <Link
                  href={route.href}
                  className="w-full py-2.5 rounded-lg border border-slate-400 text-white text-center text-xs font-bold   hover:bg-white/10 transition-colors"
                >
                  {route.action}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
