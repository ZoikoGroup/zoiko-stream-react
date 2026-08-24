import React from 'react';
import Image from 'next/image';

const nextPaths = [
  {
    title: 'Talk to an Expert',
    desc: 'Initiate custom enterprise integration requirements and baseline compliance mapping.',
    btn: 'INQUIRE',
    btnCls: 'border-teal-400 text-teal-400',
  },
  {
    title: 'Capabilities',
    desc: 'Review detailed media operating blueprints and global multi-CDN routing specifications.',
    btn: 'EXPLORE',
    btnCls: 'border-slate-400 text-slate-400',
  },
  {
    title: 'Enterprise Support',
    desc: 'Access the dedicated hotline, check support rosters, or request event-concierge resources.',
    btn: 'ENGAGE',
    btnCls: 'border-slate-400 text-slate-400',
  },
  {
    title: 'System Status',
    desc: 'Verify active stream health indicators and live incident logs across global edges.',
    btn: 'MONITOR',
    btnCls: 'border-slate-400 text-slate-400',
  },
  {
    title: 'Live Events',
    desc: 'Establish parameters and register scopes for highly critical, high-concurrency broadcasts.',
    btn: 'LAUNCH',
    btnCls: 'border-slate-400 text-slate-400',
  },
];

const faqs = [
  {
    q: 'How is multi-CDN failover managed during live broadcasts?',
    a: 'We maintain active-active ingress streams across three global CDNs. Our player SDK monitors buffer rates and automatically shifts tracks to secondary routes if degradation thresholds are breached.',
  },
  {
    q: 'Can our internal security team inspect the policy ledger?',
    a: 'Yes. The governance policy ledger is recorded cryptographically and can be exported as raw JSON evidence logs directly from the administrative security center.',
  },
  {
    q: 'What accessibility standards does ZoikoStream support?',
    a: 'All client-facing components comply with WCAG 2.2 AA standards. We verify keyboard trapping, aria-label currency, and assistive reader focus paths during pre-live validation.',
  },
  {
    q: 'Are custom service level agreements available?',
    a: 'Enterprise contracts can establish custom SLAs with explicitly signed uptime parameters, incident reporting protocols, and dedicated architect engineering availability.',
  },
];

export function FinalDecisionSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-slate-900/90 border-t border-gray-800 flex flex-col justify-start items-start gap-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/Enterprises/bg (173).png"
          alt="Final Section Background"
          fill
          className="object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-16">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
            Bring governance, operations, and evidence into the same media decision.
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal font-['Inter'] leading-7">
            Evaluate the controls, responsibilities, continuity, accessibility, lifecycle, analytics, support and evidence your organization needs — then choose the next real path.
          </p>
        </div>

        {/* 5 Cards Row */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {nextPaths.map((card, idx) => (
            <div
              key={idx}
              className="p-6 bg-zinc-900 rounded-xl border border-gray-800 flex flex-col justify-between items-start gap-5 hover:border-gray-700 transition-colors min-h-[220px]"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-lg font-bold font-['Space_Grotesk']">{card.title}</h3>
                <p className="text-slate-400 text-xs font-normal font-['Inter'] leading-5">{card.desc}</p>
              </div>
              <div className={`px-3 py-2 rounded-md border text-xs font-bold font-['Space_Grotesk'] ${card.btnCls} cursor-pointer`}>
                {card.btn}
              </div>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <div className="w-full flex flex-col justify-start items-start gap-8">
          <h3 className="text-white text-2xl font-bold font-['Space_Grotesk']">Frequently Asked Questions</h3>
          <div className="w-full flex flex-col justify-start items-start divide-y divide-neutral-700 border-t border-b border-neutral-700">
            {faqs.map((faq, idx) => (
              <div key={idx} className="w-full py-5 flex flex-col justify-start items-start gap-3">
                <h4 className="text-white text-base font-bold font-['Space_Grotesk']">{faq.q}</h4>
                <p className="text-slate-400 text-sm font-normal font-['Inter'] leading-5">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Zoiko Verification Standard Bar */}
        <div className="w-full p-5 bg-slate-900 rounded-lg border border-gray-800 flex items-center gap-4 text-sm">
          <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
            <div className="w-3.5 h-4 border-2 border-teal-400 rounded-xs" />
          </div>
          <div>
            <span className="text-white font-bold font-['Inter']">Zoiko Verification Standard: </span>
            <span className="text-slate-400 font-normal font-['Inter']">
              No hidden enterprise score. No invented guarantees. Current evidence and unresolved requirements stay visible.
            </span>
          </div>
        </div>

        {/* Dual CTAs */}
        <div className="inline-flex justify-start items-center gap-4 flex-wrap">
          <div className="px-7 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg flex justify-center items-center cursor-pointer">
            <span className="text-white text-base font-bold font-['Space_Grotesk']">
              Talk to an Expert
            </span>
          </div>
          <div className="px-7 py-3.5 rounded-lg border border-gray-800 flex justify-center items-center cursor-pointer">
            <span className="text-white text-base font-bold font-['Space_Grotesk']">
              Explore Enterprise Capabilities
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
