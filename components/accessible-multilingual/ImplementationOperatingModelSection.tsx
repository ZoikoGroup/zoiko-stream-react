import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import modelImg from '@/public/images/accessible-multilingual/model-image.png';
import modelImg1 from '@/public/images/accessible-multilingual/model-image (1).png';
import modelImg2 from '@/public/images/accessible-multilingual/model-image (2).png';

const models = [
  {
    title: 'Developer-Managed',
    desc: 'Integrate accessible streams natively into custom applications via developer APIs and responsive player SDK controls.',
    image: modelImg,
    btn: 'Start Building',
    href: '/sdks',
  },
  {
    title: 'Enterprise-Operated',
    desc: 'Empower administrative staff and local operators to manage language workflows, review transcriptions, and run corporate town halls.',
    image: modelImg1,
    btn: 'Talk to an Expert',
    href: '/talk-to-an-expert',
  },
  {
    title: 'Managed Live Events',
    desc: 'Ensure zero-fail global broadcasts with concierge setup, dedicated signal monitoring, and absolute hot standby protection.',
    image: modelImg2,
    btn: 'Plan a Live Event',
    href: '/live-events',
  },
];

export default function ImplementationOperatingModelSection() {
  return (
    <section className="relative w-full bg-slate-50 py-20 md:py-28 border-b border-gray-200 text-slate-900 overflow-hidden">
      {/* Background Accent Glows */}
      <div className="size-96 -left-44 -top-28 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-slate-900 leading-tight">
            Implementation &amp; Operating Model
          </h2>
          <p className="text-slate-600 text-lg font-normal font-['Space_Grotesk'] leading-relaxed max-w-3xl">
            From self-service developer SDK setups to white-glove managed broadcasts.
          </p>
        </div>

        {/* 3 Operating Model Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {models.map((m, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow group"
            >
              <div className="relative w-full h-44 bg-slate-100">
                <Image
                  src={m.image}
                  alt={m.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-6 flex flex-col justify-between gap-5 flex-1">
                <div className="flex flex-col gap-3">
                  <h3 className="text-slate-900 text-xl font-bold font-['Space_Grotesk']">
                    {m.title}
                  </h3>
                  <p className="text-slate-600 text-sm font-normal   leading-relaxed">
                    {m.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <Link
                    href={m.href}
                    className="px-7 py-3.5 rounded-lg border border-slate-900 text-slate-900 text-base font-bold font-['Space_Grotesk'] inline-block hover:bg-slate-900 hover:text-white transition-colors"
                  >
                    {m.btn}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom 2 Columns: Launch Readiness & Ongoing Access Maintenance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Launch Readiness Checklist */}
          <div className="lg:col-span-7 p-7 bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col gap-5">
            <h3 className="text-slate-900 text-lg font-bold font-['Space_Grotesk']">
              Launch Readiness Checklist
            </h3>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="size-5 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500 text-xs font-bold shrink-0">
                  ✓
                </div>
                <span className="text-slate-600 text-sm font-normal  ">Audio Source Pipeline verified</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-5 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500 text-xs font-bold shrink-0">
                  ✓
                </div>
                <span className="text-slate-600 text-sm font-normal  ">Mandatory human review loops assigned</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-5 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500 text-xs font-bold shrink-0">
                  ✓
                </div>
                <span className="text-slate-600 text-sm font-normal  ">Keyboard focus and screen reader styling tested</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-5 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500 text-xs font-bold shrink-0">
                  ✓
                </div>
                <span className="text-slate-600 text-sm font-normal  ">Fallback language routes established</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="size-5 bg-amber-500/10 rounded-full flex items-center justify-center text-amber-500 text-xs font-bold shrink-0">
                  !
                </div>
                <span className="text-slate-600 text-sm font-normal  ">VPAT / compliance records archived</span>
              </div>
            </div>
          </div>

          {/* Ongoing Access Maintenance */}
          <div className="lg:col-span-5 p-7 bg-white rounded-xl border border-gray-200 shadow-sm flex flex-col gap-5">
            <h3 className="text-slate-900 text-lg font-bold font-['Space_Grotesk']">
              Ongoing Access Maintenance
            </h3>
            <p className="text-slate-600 text-sm font-normal   leading-relaxed">
              Accessibility is not a point-in-time check. ZoikoStream tracks ongoing player performance, automatic language drift, citizen support tickets, and post-live correction streams asynchronously.
            </p>

            <div className="pt-2">
              <Link
                href="/talk-to-an-expert"
                className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-base font-bold font-['Space_Grotesk'] inline-block hover:opacity-90 transition-opacity"
              >
                Explore Platform Service Level SLAs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
