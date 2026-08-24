import React from 'react';
import Image from 'next/image';
import { Share, Share2, ShareIcon } from 'lucide-react';

const items = [
  {
    title: 'Documentation',
    desc: 'Direct current documentation/guides route.',
    action: 'Browse Docs →',
  },
  {
    title: 'System Status',
    desc: 'Direct status/incident-history route for operational truth.',
    action: 'Check Status →',
  },
  {
    title: 'Enterprise Support',
    desc: 'Direct existing-customer support; never loop incidents into lead generation.',
    action: 'Submit Ticket →',
  },
  {
    title: 'Accessibility Help',
    desc: 'Direct barrier-report/accessibility contact; no sales gate.',
    action: 'Get Help →',
  },
];

export function SupportOperationsSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-gray-950/40 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/Education-Page/bg (196).png"
          alt="Support Operations Background"
          fill
          className="object-cover opacity-30"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-50 text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
            Support, change and ongoing operations
          </h2>
          <p className="text-slate-300 text-base lg:text-lg font-normal font-['Inter'] leading-7">
            Documentation, system status, support, accessibility help, and release governance - directly accessible, never gated behind sales.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-900 rounded-xl border border-gray-800 flex flex-col justify-between items-start gap-4 min-h-[192px] hover:border-gray-700 transition-colors"
            >
              <div className="w-full flex justify-between items-center">
                <h3 className="text-slate-50 text-lg font-bold font-['Space_Grotesk']">{it.title}</h3>
                <div className="w-5 h-5 rounded border border-blue-500 flex items-center justify-center text-blue-500 text-xs">
                  ↗
                </div>
                
              </div>
              <p className="text-slate-300 text-xs font-normal font-['Inter'] leading-5">{it.desc}</p>
              <div className="w-full border-t border-gray-800 pt-3">
                <span className="text-blue-500 text-sm font-bold font-['Space_Grotesk'] cursor-pointer">{it.action}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
