import React from 'react';
import Image from 'next/image';
import { GitMerge } from 'lucide-react';

const anatomyItems = [
  {
    title: 'Dataset',
    value: 'VIEWERSHIP_QOS_RAW',
    dotCls: 'bg-teal-400',
    valCls: 'text-teal-400',
  },
  {
    title: 'Metric',
    value: 'play_beacons, error_count',
    dotCls: 'bg-blue-500',
    valCls: 'text-blue-500',
  },
  {
    title: 'Time & Filters',
    value: "last_24h, geo_country='US'",
    dotCls: 'bg-teal-400',
    valCls: 'text-teal-400',
  },
  {
    title: 'Breakdown & Response',
    value: 'JSON Structure (Standard Contract)',
    dotCls: 'bg-violet-500',
    valCls: 'text-violet-500',
  },
];

export function HeroSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-20 bg-gray-950/40 border-b border-gray-800 flex flex-col lg:flex-row justify-between items-center gap-12 overflow-hidden">
      <div className="absolute inset-0 ">
        <Image
          src="/images/developer-analytics-api/bg.png"
          alt="Analytics API Hero Background"
          fill
          className="object-cover "
          priority
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 flex-1 max-w-[680px] flex flex-col justify-start items-start gap-8">
        <div className="px-3 py-1.5 rounded-full border border-teal-400 w-fit">
          <span className="text-teal-400 text-xs font-bold font-mono uppercase tracking-wide">
            ANALYTICS API
          </span>
        </div>

        <h1 className="text-white text-4xl lg:text-5xl font-bold leading-tight lg:leading-[60px]">
          Query viewer and playback-quality data with a governed analytics model.
        </h1>

        <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
          Use ZoikoStream analytics interfaces to explore viewership, segment results, and investigate playback quality. Every published metric, dimension, time rule, and query example is tied to a source-of-truth contract.
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <div className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex items-center justify-center cursor-pointer shadow-md">
            <span className="text-gray-950 text-base font-bold">Start building</span>
          </div>
          <div className="px-7 py-3.5 rounded-lg border border-slate-400 flex items-center justify-center cursor-pointer hover:border-white transition-colors">
            <span className="text-white text-base font-bold">Read API reference</span>
          </div>
        </div>
      </div>

      {/* Right Box: INTERACTIVE QUERY ANATOMY */}
      <div className="relative z-10 w-full lg:w-[480px] h-96 p-10 bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col justify-center items-start gap-6 shadow-2xl backdrop-blur-md">
        <span className="text-white text-sm font-bold font-mono tracking-wide uppercase">
          INTERACTIVE QUERY ANATOMY
        </span>

        <div className="w-full flex flex-col gap-2.5">
          {anatomyItems.map((item, idx) => (
            <div
              key={idx}
              className="p-3.5 bg-gray-800 rounded-lg border border-gray-800 flex justify-between items-center"
            >
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${item.dotCls}`} />
                <span className="text-white text-base font-bold font-mono">{item.title}</span>
              </div>
              <span className={`text-xs font-mono font-normal ${item.valCls}`}>{item.value}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <GitMerge className="w-4 h-4 text-teal-400 " />
          <span className="text-teal-400 ">
            Unified Schema Resolution
          </span>
        </div>
      </div>
    </section>
  );
}
