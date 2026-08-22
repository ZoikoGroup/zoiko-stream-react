import React from 'react';
import Link from 'next/link';

const stewards = [
  {
    letter: 'B',
    title: 'Build',
    desc: 'Design and engineer the platform capabilities that power video workflows, playback, management experiences, APIs, and Live Events.',
    linkText: 'Platform / Developers →',
    href: '/sdks',
    boxBg: 'bg-blue-500',
  },
  {
    letter: 'O',
    title: 'Operate',
    desc: 'Run the platform through governed production practices, service management, reliability engineering, and controlled change.',
    linkText: 'System Status / Company Updates →',
    href: '/faqs-and-support',
    boxBg: 'bg-teal-400',
  },
  {
    letter: 'S',
    title: 'Secure',
    desc: 'Embed security, privacy, identity, access, and evidence practices into the platform lifecycle and operating model.',
    linkText: 'Trust Center / Privacy →',
    href: '/platform-media-security',
    boxBg: 'bg-indigo-500',
  },
  {
    letter: 'E',
    title: 'Evolve',
    desc: 'Improve performance, usability, developer experience, product capability, and operational resilience through measured releases and feedback.',
    linkText: 'Company Updates / Developers →',
    href: '/company-overview',
    boxBg: 'bg-violet-500',
  },
];

export default function CoreAccountabilitySection() {
  return (
    <section className="w-full bg-slate-50 py-20 md:py-28 border-b border-slate-200 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="size-1.5 bg-blue-500 rounded-full" />
            <span className="text-blue-600 text-xs font-bold    uppercase tracking-wider">
              Core accountability
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold    text-slate-900">
            The Zoiko Tech stewardship system.
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-normal    leading-relaxed max-w-3xl">
            Four areas of technical stewardship — described in outcomes, not internal team names, tools, or control identifiers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {stewards.map((st, idx) => (
            <div
              key={idx}
              className="p-8 bg-white rounded-2xl border border-slate-200 flex flex-col justify-between gap-6 hover:shadow-md transition-shadow group"
            >
              <div className="flex flex-col gap-4">
                <div
                  className={`size-9 rounded-lg ${st.boxBg} flex items-center justify-center text-white font-bold    text-base shrink-0`}
                >
                  {st.letter}
                </div>
                <h3 className="text-slate-900 text-xl font-bold   ">
                  {st.title}
                </h3>
                <p className="text-slate-600 text-sm font-normal    leading-relaxed">
                  {st.desc}
                </p>
              </div>

              <Link
                href={st.href}
                className="text-blue-600 text-sm font-semibold    group-hover:underline"
              >
                {st.linkText}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
