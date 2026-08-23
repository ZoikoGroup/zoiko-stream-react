import React from 'react';
import Link from 'next/link';

const resources = [
  {
    title: 'Developer documentation',
    desc: 'Public API and integration documentation for building or validating a ZoikoStream integration.',
    link: 'Explore Developers →',
    href: '/sdks',
  },
  {
    title: 'Integration validation',
    desc: 'Eligible technology partners can request technical validation once test criteria and ownership are documented.',
    link: 'Start a partner application →',
    href: '/talk-to-an-expert',
  },
  {
    title: 'Brand & enablement',
    desc: 'Partner-specific brand-use resources and technical, sales, or Live Events enablement, where available by partner type.',
    link: 'Talk to an expert →',
    href: '/talk-to-an-expert',
  },
];

export default function PartnerResourcesSection() {
  return (
    <section className="w-full bg-slate-50 py-20 border-b border-gray-200 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="size-1.5 bg-blue-400 rounded-full" />
            <span className="text-blue-400 text-xs font-bold   uppercase tracking-wider">
              FOR EXISTING &amp; PROSPECTIVE PARTNERS
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold   text-gray-800 leading-tight">
            Partner resources.
          </h2>
        </div>

        {/* 3 Resource Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.map((res, idx) => (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl border border-zinc-200 shadow-xs flex flex-col justify-between gap-4 h-48 hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-gray-800 text-base font-bold  ">
                  {res.title}
                </h3>
                <p className="text-gray-500 text-sm font-normal   leading-relaxed">
                  {res.desc}
                </p>
              </div>

              <div>
                <Link
                  href={res.href}
                  className="text-blue-400 text-sm font-semibold   hover:underline"
                >
                  {res.link}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
