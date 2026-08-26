import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

export function TellsTruthBeforeCodeSection() {
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
      <div className="size-96 -left-44 -top-24 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            One page that tells the truth before code
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal leading-7">
            Every sample detail page shows exactly what the sample does, what it requires, and what it proves.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Box */}
          <div className="p-8 bg-slate-50/90 rounded-2xl border border-gray-200 flex flex-col gap-6 shadow-sm backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 relative rounded-lg overflow-hidden bg-slate-900 flex-shrink-0">
                <Image
                  src="/images/sample-application/Rectangle (7).png"
                  alt="Live Stream Player Icon"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-0.5">
                <h3 className="text-slate-900 text-lg font-bold">Live Stream Player (React)</h3>
                <span className="text-slate-600 text-xs font-normal">
                  Last updated: 2 days ago • Compatible with v3.2 API
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <span className="text-slate-600 text-xs font-bold font-mono">PREREQUISITES</span>
                <p className="text-slate-900 text-sm font-normal">
                  Node.js v18.0+, active ZoikoStream credentials with player tokens permission.
                </p>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-slate-600 text-xs font-bold font-mono">STEPS AT A GLANCE</span>
                <p className="text-slate-900 text-sm font-normal leading-5">
                  1. Clone canonical repository URL • 2. Configure environment with variables • 3. Install packages and run locally • 4. Verify player loads securely.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200 flex justify-between items-center text-xs">
              <span className="text-blue-500 font-bold font-mono">Platform services used:</span>
              <span className="text-slate-600 font-semibold">Live Delivery CDN • Auth API</span>
            </div>
          </div>

          {/* Right Shell Terminal Box */}
          <div className="p-8 bg-gray-950 rounded-2xl border border-gray-800 flex flex-col gap-5 shadow-xl font-mono text-xs overflow-hidden">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-400 rounded-full" />
              <div className="w-3 h-3 bg-amber-400 rounded-full" />
              <div className="w-3 h-3 bg-emerald-500 rounded-full" />
              <span className="text-slate-400 text-xs ml-2">bash - zoikostream-react-player</span>
            </div>

            <div className="flex flex-col gap-2.5 pt-2">
              <span className="text-teal-400">$ git clone https://github.com/zoikostream/react-player-sample.git</span>
              <span className="text-slate-400">Cloning into &apos;react-player-sample&apos;... done.</span>
              <span className="text-teal-400">$ cd react-player-sample &amp;&amp; cp .env.example .env</span>
              <span className="text-teal-400">$ npm install &amp;&amp; npm run dev</span>
              <span className="text-emerald-500">✔ Server running on http://localhost:5173</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
