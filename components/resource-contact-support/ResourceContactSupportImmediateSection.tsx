import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import { Accessibility, Activity, Key, Lock, Play, ShieldAlert } from 'lucide-react';

const URGENT_ITEMS = [
  {
    title: 'Service outage',
    desc: 'Check real-time service status and report account-specific issues.',
    icon: Activity,
  },
  {
    title: 'Security vulnerability',
    desc: 'Report a security concern through our responsible disclosure process.',
    icon: ShieldAlert,
  },
  {
    title: 'Account compromise',
    desc: 'Recover access through our protected account recovery workflow.',
    icon: Lock,
  },
  {
    title: 'Accessibility barrier',
    desc: 'Report an access barrier or get accessibility help — no sales, no disclosure required.',
    icon: Accessibility,
  },
  {
    title: 'Active Live Event issue',
    desc: 'Get operational support for an event that is currently live.',
    icon: Play,
  },
  {
    title: 'Account recovery',
    desc: 'Restore access to your account with guided recovery steps.',
    icon: Key,
  },
];

export default function ResourceContactSupportImmediateSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-24 border-b border-gray-200 flex flex-col justify-start items-start gap-14 bg-white overflow-hidden z-10">
      {/* Background Snippet */}
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

      {/* Header */}
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4 max-w-4xl">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight sm:leading-[60px]">
          Need immediate help?
        </h2>
        <p className="text-gray-500 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-7">
          Urgent and specialist issues have dedicated paths. Choose the one that fits your situation.
        </p>
      </div>

      {/* 6 Cards Grid */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {URGENT_ITEMS.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="p-8 bg-white rounded-xl shadow-xs outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col justify-start items-start gap-4 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="size-8 bg-gray-950 rounded-lg flex justify-center items-center shrink-0">
                <Icon className="size-5 text-blue-500" />
              </div>

              <h3 className="text-slate-900 text-xl font-bold font-['Space_Grotesk'] leading-7">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm font-normal font-['Space_Grotesk'] leading-6">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
