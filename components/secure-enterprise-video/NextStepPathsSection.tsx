import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import bg130 from '@/public/images/secure-enterprise/bg (138).png';

const paths = [
  { path: 'PATH 01', title: 'Enterprise consultation', desc: 'Talk to an expert about your specific enterprise requirements.', btn: 'Schedule review', href: '/talk-to-an-expert' },
  { path: 'PATH 02', title: 'Developer path', desc: 'Start building immediately with documented, verified APIs and SDKs.', btn: 'Read the docs', href: '/sdks' },
  { path: 'PATH 03', title: 'Live events concierge', desc: 'Plan a managed, zero-fail live broadcast with our production team.', btn: 'Explore live events', href: '/live-events' },
  { path: 'PATH 04', title: 'Security evidence', desc: 'Download SOC2 reports, penetration audits, and architecture matrices.', btn: 'Visit Trust Center', href: '/delivery-and-trust-overview' },
  { path: 'PATH 05', title: 'Existing customer', desc: 'Access the help center or open a direct priority support ticket.', btn: 'Contact support', href: '/talk-to-an-expert' },
];

export default function NextStepPathsSection() {
  return (
    <section className="relative w-full bg-gray-950 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg130}
          alt="Next Step Background"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold   text-white leading-tight">
            Choose your next step with confidence
          </h2>
          <p className="text-slate-400 text-lg font-normal   leading-relaxed max-w-3xl">
            Whether you are an architect deploying API features, an administrator setting up federated policy, or planning a live broadcast—we have a path.
          </p>
        </div>

        {/* 5 Path Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {paths.map((p, idx) => (
            <div
              key={idx}
              className="p-6 bg-zinc-900/80 rounded-xl border border-gray-800 backdrop-blur-md flex flex-col justify-between gap-5 hover:border-gray-700 transition-colors"
            >
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <span className="text-teal-400 text-xs font-bold  ">
                    {p.path}
                  </span>
                </div>
                <h3 className="text-white text-base font-bold  ">
                  {p.title}
                </h3>
                <p className="text-slate-400 text-xs font-normal   leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href={p.href}
                  className="w-full px-4 py-2.5 rounded-md border border-gray-800 text-white text-xs font-bold   inline-block text-center hover:bg-white/10 transition-colors"
                >
                  {p.btn}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full h-px bg-gray-800" />

        {/* Compliance Boundary Footer Callout */}
        <div className="flex flex-col gap-2">
          <span className="text-white/60 text-sm font-medium   uppercase tracking-wide">
            GUARANTEED COMPLIANCE BOUNDARY
          </span>
          <p className="text-slate-400 text-sm font-normal   leading-relaxed max-w-4xl">
            Private video infrastructure built for enterprise operation. Every capability, lifecycle outcome, and security architecture outcome asserted on this page maps to empirical validation logs.
          </p>
        </div>
      </div>
    </section>
  );
}
