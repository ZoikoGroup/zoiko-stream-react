import React from 'react';
import { ShieldCheck, Globe, Radio, Headset } from 'lucide-react';

const HIGHLIGHTS = [
  {
    title: 'Secure by design',
    desc: 'Built with security and privacy at the core.',
    icon: ShieldCheck,
    bgColor: 'bg-emerald-50',
    iconColor: 'text-teal-600',
  },
  {
    title: 'Global reach',
    desc: 'Deliver to audiences anywhere in the world.',
    icon: Globe,
    bgColor: 'bg-indigo-50',
    iconColor: 'text-blue-500',
  },
  {
    title: 'Professional quality',
    desc: 'HD streaming, captions, recording and replay.',
    icon: Radio,
    bgColor: 'bg-violet-50',
    iconColor: 'text-violet-500',
  },
  {
    title: 'Human support',
    desc: 'Real experts from planning to go-live.',
    icon: Headset,
    bgColor: 'bg-emerald-50',
    iconColor: 'text-teal-600',
  },
];

export default function RequestEnterpriseQuoteHighlightsSection() {
  return (
    <section className="w-full bg-slate-100 border-t border-gray-200 py-10 lg:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {HIGHLIGHTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-start gap-4">
                <div
                  className={`size-10 ${item.bgColor} rounded-3xl flex items-center justify-center shrink-0`}
                >
                  <Icon className={`size-5 ${item.iconColor}`} />
                </div>
                <div className="flex flex-col gap-1">
                  <h4 className="text-zinc-900 text-sm font-bold font-['Space_Grotesk'] leading-6">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-xs font-normal font-['Inter'] leading-5">
                    {item.desc}
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
