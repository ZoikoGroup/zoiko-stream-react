import React from 'react';
import {
  Video,
  ArrowRightLeft,
  Sliders,
  Globe2,
  Activity,
  ShieldCheck,
} from 'lucide-react';

const connectionCategories = [
  {
    title: 'Source class',
    desc: 'Define your connection source: hardware encoder, browser interface, or virtual appliance.',
    icon: Video,
  },
  {
    title: 'Direction & job',
    desc: 'Specify contribution to ingest servers, direct media routing, or egress transport tasks.',
    icon: ArrowRightLeft,
  },
  {
    title: 'Environment',
    desc: 'Select target endpoint landscape: high-security Production, Testing environment, or Sandbox.',
    icon: Sliders,
  },
  {
    title: 'Network context',
    desc: 'Map network environment constraints: managed transit, public internet, or private secure tunnel.',
    icon: Globe2,
  },
  {
    title: 'Operational need',
    desc: 'Select performance expectations: zero-delay monitoring, adaptive reconnect, or hot-redundancy.',
    icon: Activity,
  },
  {
    title: 'Security need',
    desc: 'Verify cryptographic identity requirements: token authorization, rotating keys, or TLS encryption.',
    icon: ShieldCheck,
  },
];

export default function DescribeConnectionSection() {
  return (
    <section className="w-full bg-white border-b border-slate-200 py-20 md:py-24 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-slate-900 leading-tight">
            Describe your connection before choosing a protocol
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-normal font-['Space_Grotesk'] max-w-3xl">
            Start with what you need — source, workflow, and network context — not a protocol name.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {connectionCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-slate-50 rounded-xl border border-slate-200 flex flex-col gap-4 hover:border-teal-500/50 hover:shadow-md transition-all group"
              >
                <div className="size-9 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-600 shrink-0">
                  <Icon className="size-5" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-slate-900 text-lg font-bold font-['Space_Grotesk'] group-hover:text-teal-600 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-slate-600 text-sm font-normal   leading-relaxed">
                    {cat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
