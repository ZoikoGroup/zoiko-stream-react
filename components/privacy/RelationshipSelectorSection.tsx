import React from 'react';
import { User, Eye, Calendar, Building2 } from 'lucide-react';

const relationships = [
  {
    title: 'I use ZoikoStream directly',
    desc: 'Account, billing, product usage, support and direct communications.',
    icon: User,
  },
  {
    title: 'I watch content from a ZoikoStream customer',
    desc: 'The customer may determine why viewer information is collected.',
    icon: Eye,
  },
  {
    title: 'I attended or plan a Live Event',
    desc: 'Event organizer and ZoikoStream roles can differ by workflow.',
    icon: Calendar,
  },
  {
    title: 'I am an enterprise / developer / partner contact',
    desc: 'Business, evaluation, API, procurement and relationship data.',
    icon: Building2,
  },
];

export function RelationshipSelectorSection() {
  return (
    <section className="w-full px-6 lg:px-28 py-20 bg-white border-b border-zinc-200 flex flex-col justify-start items-start gap-10">
      <div className="w-full max-w-[1216px] mx-auto flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
          <span className="text-blue-400 text-xs font-bold uppercase tracking-wider">
            Start here
          </span>
        </div>
        <h2 className="text-neutral-700 text-3xl font-bold">
          Which ZoikoStream relationship describes you?
        </h2>
        <p className="max-w-[600px] text-gray-500 text-base font-normal leading-6">
          Your data relationship shapes what applies to you. This is a navigation aid, not a legal determination.
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="w-full max-w-[1216px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {relationships.map((rel, idx) => {
          const IconComponent = rel.icon;
          return (
            <div
              key={idx}
              className="p-6 bg-white rounded-2xl border border-zinc-200 flex flex-col justify-start gap-4 min-h-[192px] shadow-xs hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="w-9 h-9 bg-slate-100 rounded-lg flex items-center justify-center">
                <IconComponent className="w-4 h-4 text-indigo-500" />
              </div>
              <h3 className="text-neutral-700 text-sm font-bold leading-6">{rel.title}</h3>
              <p className="text-gray-500 text-xs font-normal leading-5">{rel.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Bottom Disclaimer */}
      <div className="w-full max-w-[1216px] mx-auto pt-2">
        <p className="max-w-[760px] text-gray-400 text-xs font-normal leading-5">
          The relationship selector is a navigation aid. It does not make a binding legal determination about controller, processor, business, service-provider or similar statutory roles. The authoritative role is determined by the service, contract, processing purpose and applicable law.
        </p>
      </div>
    </section>
  );
}
