import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import { Activity, Clock, Cpu, Database, RefreshCcw, RefreshCw, Server, Shield } from 'lucide-react';

const reasons = [
  {
    num: '01',
    title: 'Source Compatibility',
    desc: 'Ensure immediate compatibility with your existing hardware and software setups without extra translation layers.',
    icon:Cpu
  },
  {
    icon:Activity,
    num: '02',
    title: 'Network Behavior',
    desc: 'Manage packets deterministically across congested public connections using customized error recovery algorithms.',
  },
  {
    icon: Clock,
    num: '03',
    title: 'Latency Class',
    desc: 'Choose the appropriate scale from sub-second real-time interactions to global broadcast delivery latency tiers.',
  },
  {
    icon:Server,
    num: '04',
    title: 'Firewall / NAT',
    desc: 'Ensure reliable transit past corporate firewalls and complex institutional security gateway routing.',
  },
  {
    icon:Shield,
    num: '05',
    title: 'Security & Credentials',
    desc: 'Encrypt payload pipelines natively with secure credential profiles and real-time authentication logs.',
  },
  {
    icon:RefreshCcw,
    num: '06',
    title: 'Operational Recovery',
    desc: 'Establish clear fallback strategies, automatic stream reconnection parameters, and active monitoring paths.',
  },
];

export function WhyProtocolChoiceMattersSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg147}
          alt="Media Lifecycle Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 " />
      </div>
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold leading-tight">
            Why protocol choice matters
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal leading-7">
            The protocol is part of your production architecture, not just an encoder dropdown.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, idx) => {
            const Icon=item.icon;
            return(
            <div
              key={idx}
              className="p-8 bg-slate-50 rounded-xl border border-gray-200 flex flex-col justify-start items-start gap-5 shadow-xs"
            >
              <div className="w-full flex justify-between items-center">
                <div className=" flex items-center justify-center">
                  <Icon className="w-4 h-4 text-blue-500 " />
                </div>
                <span className="text-blue-500 text-xs font-bold font-mono">{item.num}</span>
              </div>

              <div className="flex flex-col gap-3">
                <h3 className="text-slate-900 text-xl font-bold">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-5">{item.desc}</p>
              </div>
            </div>
          )})}
        </div>

        <div className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex items-center justify-center cursor-pointer shadow-md">
          <span className="text-slate-950 text-base font-bold">Compare RTMPS, SRT, and WHIP</span>
        </div>
      </div>
    </section>
  );
}
