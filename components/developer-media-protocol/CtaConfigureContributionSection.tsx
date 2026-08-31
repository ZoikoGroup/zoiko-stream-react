import React from 'react';
import Image from 'next/image';

export function CtaConfigureContributionSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-slate-950/90 border-t border-gray-800 flex flex-col justify-start items-center gap-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/developer-media-protocol/bg 16.png"
          alt="Ready to Configure Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 " />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-center gap-14">
        <div className="w-full flex flex-col justify-start items-center gap-4 text-center">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight">
            Ready to configure your live contribution path?
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            You have evaluated protocols, qualified your source, and reviewed network and security requirements. Choose your next step.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* Card 1: Developer-led */}
          <div className="p-8 bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col justify-between items-start gap-6 shadow-xl backdrop-blur-md">
            <div className="flex flex-col gap-3">
              <h3 className="text-white text-xl font-bold   ">Developer-led</h3>
              <p className="text-slate-400 text-sm leading-5">
                Open the Live Streaming API quickstart and begin configuring your stream.
              </p>
            </div>
            <div className="px-6 py-3 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 font-bold    text-sm cursor-pointer shadow-md">
              Start building
            </div>
          </div>

          {/* Card 2: Self-Guided */}
          <div className="p-8 bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col justify-between items-start gap-6 shadow-xl backdrop-blur-md">
            <div className="flex flex-col gap-3">
              <h3 className="text-white text-xl font-bold   ">Self-Guided</h3>
              <p className="text-slate-400 text-sm leading-5">
                Explore the full API reference and integration guides to plan your architecture.
              </p>
            </div>
            <div className="px-6 py-3 rounded-lg border border-slate-400 text-white font-bold    text-sm text-center cursor-pointer hover:border-white transition-colors">
              Read documentation
            </div>
          </div>

          {/* Card 3: Assisted */}
          <div className="p-8 bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col justify-between items-start gap-6 shadow-xl backdrop-blur-md">
            <div className="flex flex-col gap-3">
              <h3 className="text-white text-xl font-bold   ">Assisted</h3>
              <p className="text-slate-400 text-sm leading-5">
                For protocol qualification, enterprise network architecture, or large event planning.
              </p>
            </div>
            <div className="text-teal-400 font-bold    text-sm cursor-pointer hover:underline flex items-center gap-1">
              Talk to an expert →
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
