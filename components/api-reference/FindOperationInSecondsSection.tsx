import React from 'react';
import Image from 'next/image';
import { Search,  Link2, Filter, Folder } from 'lucide-react';

const searchFeatures = [
  {
    title: 'Domain Tree Navigation',
    desc: 'Hierarchical visual tree maps every route back to its base product domain naturally.',
    img: '/images/developer-api-reference/card-image (6).png',
    icon: Folder,
  },
  {
    title: 'Stable Deep Links',
    desc: 'Share specific operation parameters or errors with immutable cryptographic schema anchors.',
    img: '/images/developer-api-reference/card-image (7).png',
    icon: Link2,
  },
  {
    title: 'Smart Filters',
    desc: 'Isolate operations by lifecycle state, authentication scheme, or write side-effect categories.',
    img: '/images/developer-api-reference/card-image (8).png',
    icon: Filter,
  },
];

export function FindOperationInSecondsSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-slate-900/80 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/developer-api-reference/bg (2).png"
          alt="Find Operation Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Find any operation in seconds
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            Search by operation, schema, field, error, or stable identifier — public entries only.
          </p>
        </div>

        {/* Search Input Box */}
        <div className="w-full p-6 bg-zinc-900/90 rounded-2xl border border-gray-800 flex flex-col gap-4 shadow-xl backdrop-blur-md">
          <div className="p-3.5 bg-gray-800/80 rounded-lg border border-teal-400/80 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 flex-1">
              <Search className="w-5 h-5 text-teal-400 flex-shrink-0" />
              <span className="text-white text-base font-normal">GET /streams/{"{stream_id}"}/analytics</span>
            </div>
            <div className="px-2.5 py-1 bg-gray-900 rounded border border-gray-700 text-slate-400 text-xs font-mono">
              ⌘ K
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs flex-wrap">
            <span className="text-teal-400 font-bold uppercase">SUGGESTIONS:</span>
            <span className="text-slate-400 underline cursor-pointer hover:text-white">Authentication headers</span>
            <span className="text-slate-400 underline cursor-pointer hover:text-white">Rate limiting policies</span>
            <span className="text-slate-400 underline cursor-pointer hover:text-white">HTTP 429 remediation</span>
          </div>
        </div>

        {/* 3 Feature Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {searchFeatures.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className="bg-gray-950 rounded-xl border border-gray-800 overflow-hidden flex flex-col justify-between shadow-lg hover:border-gray-700 transition-colors"
              >
                <div className="w-full h-36 relative bg-slate-900">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6 flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    <IconComponent className="w-5 h-5 text-teal-400 flex-shrink-0" />
                    <h3 className="text-white text-lg font-bold">{item.title}</h3>
                  </div>
                  <p className="text-slate-400 text-sm font-normal leading-5">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
