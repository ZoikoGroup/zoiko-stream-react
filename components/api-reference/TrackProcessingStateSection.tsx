import React from 'react';
import Image from 'next/image';
import { Check, Clock, Cpu } from 'lucide-react';

const stateNodes = ['Pending', 'Processing', 'Ready'];
const stateIcons = [Clock, Cpu, Check];

const processingFeatures = [
  {
    title: 'State Transitions',
    desc: 'Clear pipelines routing asynchronous jobs gracefully from initial pending validation to active processing and ready states.',
    img: '/images/developer-api-reference/card-image (30).png',
  },
  {
    title: 'Webhook Events',
    desc: 'Reliable HTTP POST payloads pushed instantly upon job completion. Supports retry buffers and cryptographic signing signatures.',
    img: '/images/developer-api-reference/card-image (31).png',
  },
  {
    title: 'Partial Success',
    desc: 'When operations execute bulk requests, granular error codes and successful write tracking is mapped per item.',
    img: '/images/developer-api-reference/card-image (32).png',
  },
];

export function TrackProcessingStateSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-slate-900/80 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/developer-api-reference/bg (6).png"
          alt="Track Processing State Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Track processing state from acceptance to completion
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            Long-running operations, webhook events, partial success handling, and authoritative resource state tracking.
          </p>
        </div>

        {/* State Tracker Bar */}
        <div className="w-full flex justify-between items-center max-w-[720px] mx-auto py-4">
          {stateNodes.map((st, idx) => {
            const StateIcon = stateIcons[idx];
            return (
              <React.Fragment key={idx}>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 bg-gradient-to-b from-teal-400 to-blue-500 rounded-full border border-gray-500 flex items-center justify-center shadow-lg">
                    {StateIcon && <StateIcon className="w-5 h-5 text-white" />}
                  </div>
                  <span className="text-white text-xs font-bold">{st}</span>
                </div>
                {idx < stateNodes.length - 1 && (
                  <div className="flex-1 h-0.5 bg-gray-600 mx-4" />
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* 3 Feature Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {processingFeatures.map((item, idx) => {
            return (
              <div
                key={idx}
                className="bg-gray-950 rounded-xl border border-gray-800 overflow-hidden flex flex-col justify-between shadow-lg hover:border-gray-700 transition-colors"
              >
                <div className="w-full h-40 relative bg-slate-900">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-6 flex flex-col gap-3">
                  <div className="flex items-center gap-2">
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
