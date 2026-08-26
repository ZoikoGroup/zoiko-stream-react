import React from 'react';
import Image from 'next/image';

const testingRows = [
  {
    concern: 'Environment configuration',
    support: 'SANDBOX SUPPORTED',
    supportCls: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30',
    resp: 'Set environment flag to sandbox to test mock operations.',
    link: 'Environment Guide →',
  },
  {
    concern: 'Mock Responses',
    support: 'FULLY MOCKABLE',
    supportCls: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30',
    resp: 'Mock client interface using published mock models.',
    link: 'Mocking Docs →',
  },
  {
    concern: 'VCR Fixture Recording',
    support: 'TESTED PLUGINS',
    supportCls: 'bg-teal-400/10 text-teal-400 border-teal-400/30',
    resp: 'Record HTTP fixtures to replay live calls in isolation.',
    link: 'Recorded Fixtures →',
  },
  {
    concern: 'Credentials safety',
    support: 'MANDATORY POLICY',
    supportCls: 'bg-amber-500/10 text-amber-500 border-amber-500/30',
    resp: 'Strict warning: Never commit production API keys to source.',
    link: 'Secret Safety →',
  },
];

export function TestingEnvironmentsFixturesSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-gray-950/90 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/developer-sdk/bg (6).png"
          alt="Testing Environments Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0  " />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight">
            Testing, environments, fixtures, and local development.
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            Integrate mock structures and mock HTTP calls locally without hitting live servers.
          </p>
        </div>

        {/* Testing Table */}
        <div className="w-full bg-zinc-900/80 rounded-2xl border border-gray-800 p-6 flex flex-col overflow-hidden shadow-2xl backdrop-blur-md">
          <div className="p-3 bg-slate-900 rounded-lg grid grid-cols-12 text-xs font-bold font-mono text-white">
            <div className="col-span-3">Testing Concern</div>
            <div className="col-span-3">Verified SDK Support</div>
            <div className="col-span-4">Application Responsibility</div>
            <div className="col-span-2 text-right">Canonical Route</div>
          </div>

          <div className="divide-y divide-gray-800">
            {testingRows.map((row, idx) => (
              <div key={idx} className="p-4 grid grid-cols-12 text-xs items-center">
                <div className="col-span-3 font-bold text-white">{row.concern}</div>
                <div className="col-span-3">
                  <span className={`px-2.5 py-1 rounded-full border text-[10px] font-bold font-mono ${row.supportCls}`}>
                    {row.support}
                  </span>
                </div>
                <div className="col-span-4 text-slate-400">{row.resp}</div>
                <div className="col-span-2 text-right text-teal-400 font-bold font-mono cursor-pointer hover:underline">
                  {row.link}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
