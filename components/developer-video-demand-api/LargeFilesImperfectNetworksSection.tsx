'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const states = ['Interrupted', 'Paused', 'Retrying', 'Expired authorization'];

export function LargeFilesImperfectNetworksSection() {
  const [progress, setProgress] = useState(0);
  const [activeState, setActiveState] = useState<string | null>(null);

  const handleSimulate = () => {
    setProgress(0);
    setActiveState(null);
    let current = 0;
    const interval = setInterval(() => {
      current += 20;
      if (current >= 100) {
        setProgress(100);
        clearInterval(interval);
      } else {
        setProgress(current);
      }
    }, 400);
  };

  return (
    <section className="w-full px-6 lg:px-28 py-20 lg:py-24 bg-slate-100 border-b border-gray-200 flex flex-col justify-start items-start gap-14">
      <div className="w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
            <span className="text-blue-500 text-xs font-mono font-bold uppercase tracking-wide">
              LARGE FILES, IMPERFECT NETWORKS
            </span>
          </div>

          <h2 className="text-zinc-900 text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Move media reliably, even when the network is not perfect.
          </h2>

          <p className="text-gray-500 text-base lg:text-lg font-normal leading-7 max-w-[760px]">
            Progress is exposed only from trustworthy client signals, and is distinguished from server-side processing. If an upload authorization expires, request a fresh one before resuming.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Simulation Card */}
          <div className="p-8 bg-white rounded-2xl border border-gray-200 flex flex-col gap-6 shadow-sm">
            <div className="flex justify-between items-center text-xs font-mono">
              <span className="text-gray-500">source.mp4</span>
              <span className="text-gray-500 font-bold">{progress}%</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-teal-400 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* State Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {states.map((st) => (
                <button
                  key={st}
                  onClick={() => setActiveState(activeState === st ? null : st)}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono transition-colors cursor-pointer ${
                    activeState === st
                      ? 'bg-blue-500 text-white font-bold'
                      : 'bg-slate-100 text-gray-500 border border-gray-200 hover:border-gray-400'
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>

            <button
              onClick={handleSimulate}
              className="px-6 py-3 bg-zinc-100 rounded-lg border border-gray-800 text-zinc-900 text-sm font-semibold hover:bg-zinc-200 transition-colors w-fit cursor-pointer"
            >
              Simulate upload
            </button>
          </div>

          {/* Right Image */}
          <div className="w-full h-64 relative rounded-2xl overflow-hidden bg-slate-900 shadow-md">
            <Image
              src="/images/developer-vod-api/image (1).png"
              alt="Network Transfer Visual"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
