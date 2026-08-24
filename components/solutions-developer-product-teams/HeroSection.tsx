import React from 'react';
import Image from 'next/image';

import bg156 from '@/public/images/Developers-product-teams/bg (164).png';

const roles = [
  'Product Manager',
  'Frontend',
  'Backend',
  'Platform',
  'Media',
  'Security',
  'SRE',
  'QA',
];

export default function HeroSection() {
  return (
    <section className="relative w-full  text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg156}
          alt="Developers & Product Teams Background"
          fill
          className="object-cover "
          priority
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-7 flex flex-col gap-7">
            <div className="inline-flex">
              <span className="px-3.5 py-1.5 rounded-full border border-teal-400 text-teal-400 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wide">
                DEVELOPERS &amp; PRODUCT TEAMS
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] text-white leading-tight">
              Ship video features without building the media layer yourself.
            </h1>

            <p className="text-slate-400 text-lg font-normal font-['Inter'] leading-relaxed">
              Use programmable media infrastructure for live, real-time, and on-demand product experiences — with clear implementation, security, operational, and support handoffs for the team that has to own the result.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-base font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity"
              >
                Start Building
              </button>
              <button
                type="button"
                className="px-7 py-3.5 rounded-lg border border-slate-400 text-white text-base font-bold font-['Space_Grotesk'] hover:bg-white/5 transition-colors"
              >
                Read the Documentation
              </button>
            </div>
          </div>

          {/* Right Code & Directory Window */}
          <div className="lg:col-span-5 p-7 bg-zinc-900/90 rounded-2xl border border-gray-800 backdrop-blur-md flex flex-col gap-5 shadow-2xl">
            {/* Top Bar */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1.5">
                <div className="size-2.5 bg-red-400 rounded-full" />
                <div className="size-2.5 bg-amber-400 rounded-full" />
                <div className="size-2.5 bg-green-500 rounded-full" />
              </div>
              <span className="text-white text-xs font-normal font-['Space_Grotesk']">
                zoikostream.config.json
              </span>
            </div>

            {/* Code Block */}
            <div className="flex flex-col gap-2 font-mono text-xs leading-relaxed bg-slate-950 p-4 rounded-lg border border-gray-800">
              <div>
                <span className="text-blue-500 font-normal">const</span>{' '}
                <span className="text-slate-300">stream =</span>{' '}
                <span className="text-teal-400">new</span>{' '}
                <span className="text-slate-300">ZoikoClient(&#123;</span>
              </div>
              <div className="pl-4 text-slate-300">
                apiKey: process.env.ZOIKO_API_KEY,
              </div>
              <div className="pl-4">
                <span className="text-slate-300">workflow:</span>{' '}
                <span className="text-teal-400">&quot;live-product-video&quot;</span>
                <span className="text-slate-300">,</span>
              </div>
              <div className="pl-4">
                <span className="text-slate-300">security: &#123; mode:</span>{' '}
                <span className="text-teal-400">&quot;SSO-token-gated&quot;</span>{' '}
                <span className="text-slate-300">&#125;</span>
              </div>
              <div className="text-slate-300">&#125;);</div>
              <div className="text-slate-300 pt-1">
                await stream.initializePipeline();
              </div>
            </div>

            <div className="w-full h-px bg-gray-800" />

            {/* Role Directory */}
            <div className="flex flex-col gap-3">
              <span className="text-white text-xs font-bold font-['Space_Grotesk'] tracking-wider">
                TEAM ROLE DIRECTORY
              </span>

              <div className="flex flex-wrap gap-2">
                {roles.map((r, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1.5 rounded-full text-xs font-normal font-['Inter'] ${
                      idx === 0
                        ? 'bg-teal-400 text-slate-950 font-bold'
                        : 'bg-gray-800 text-white'
                    }`}
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
