import React from 'react';
import Link from 'next/link';
import { Activity, Cpu, Database, GitBranch, Globe, Key, Shield, Users2 } from 'lucide-react';

const outcomes = [
  { num: '01', title: 'Internal communications', desc: 'Town halls, all-hands meetings, and secure product update webcasts.', icon: Users2 },
  { num: '02', title: 'Leadership broadcasts', desc: 'Highly sensitive executive reports, quarterly projections, and board updates.', icon: Shield },
  { num: '03', title: 'Partner/customer access', desc: 'Externally facing technical workshops, confidential partner channels.', icon: Globe },
  { num: '04', title: 'Training & learning', desc: 'Mandatory compliance videos, educational courses, and audit histories.', icon: Database },
  { num: '05', title: 'Confidential project media', desc: 'Durable design reviews, system mockups, and early stage demos.', icon: Cpu },
  { num: '06', title: 'Paid/member access', desc: 'Restricted payload delivery with tokenized session expiration metrics.', icon: Key },
  { num: '07', title: 'Private Live Events', desc: 'Concierge live production with alternate path failover boundaries.', icon: Activity },
  { num: '08', title: 'Defining a custom model', desc: 'Let our engineering team construct a hybrid delivery policy for you.', icon: GitBranch },
];

export default function ControlledOutcomesSection() {
  return (
    <section className="relative w-full bg-slate-50 py-20 md:py-28 border-b border-gray-200 text-slate-900 overflow-hidden">
      {/* Background Accent Glows */}
      <div className="size-96 -left-44 -top-28 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            What must stay controlled?
          </h2>
          <p className="text-slate-600 text-lg font-normal leading-relaxed max-w-3xl">
            Identify the primary outcome you need to secure. Each path utilizes tailored identity verification and playback protection mechanisms.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {outcomes.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-white rounded-xl border border-gray-200 shadow-xs flex flex-col justify-between gap-4 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-center">
                  <div className="size-8 bg-slate-100 rounded-md flex items-center justify-center text-blue-500 text-xs font-bold">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-blue-500 text-xs font-bold">
                    {item.num}
                  </span>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-slate-900 text-base font-bold">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-xs font-normal leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-start pt-2">
          <Link
            href="#access-model"
            className="text-slate-900 text-base font-bold  transition-colors"
          >
            Continue to access model 
          </Link>
        </div>
      </div>
    </section>
  );
}