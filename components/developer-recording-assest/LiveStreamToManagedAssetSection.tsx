import React from 'react';
import Image from 'next/image';
import { Activity, Target, Database, Cpu, Globe, Lock, Users } from 'lucide-react';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const steps = [
  {
    num: '01',
    icon: Activity,
    title: 'Live Stream',
    desc: 'The continuous source signal broadcast from source capture.',
  },
  {
    num: '02',
    icon: Target,
    title: 'Recording Operation',
    desc: 'The active capture process binding blocks as they land.',
  },
  {
    num: '03',
    icon: Database,
    title: 'Asset',
    desc: 'Unified durable resource container registered in DB.',
  },
  {
    num: '04',
    icon: Cpu,
    title: 'Processing',
    desc: 'Transcoding, chunk packaging, & indexing generation.',
  },
  {
    num: '05',
    icon: Globe,
    title: 'Playback Output',
    desc: 'Durable manifest paths generated across protocol bounds.',
  },
  {
    num: '06',
    icon: Lock,
    title: 'Playback Auth',
    desc: 'Token boundary checking & temporary session keys.',
  },
  {
    num: '07',
    icon: Users,
    title: 'Player Session',
    desc: 'Client instance rendering telemetry & metrics telemetry.',
  },
];

export function LiveStreamToManagedAssetSection() {
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
          <h2 className="text-slate-950 text-3xl lg:text-4xl font-bold leading-tight">
            From live stream to managed asset.
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal leading-7">
            Understanding how live inputs map to durable static outputs. Recording, asset resources, and player delivery endpoints are related but represent completely decoupled operational states.
          </p>
        </div>

        {/* 7 Step Cards Grid */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
          {steps.map((st, idx) => {
            const IconComp = st.icon;
            return (
              <div
                key={idx}
                className="p-5 bg-slate-50 rounded-xl border border-gray-200 flex flex-col justify-between gap-4 shadow-xs"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <IconComp className="w-4 h-4 text-blue-500" />
                  </div>
                  <span className="text-slate-400 text-xs font-bold">{st.num}</span>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-slate-950 text-sm font-bold">{st.title}</h3>
                  <p className="text-slate-600 text-xs leading-4">{st.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
