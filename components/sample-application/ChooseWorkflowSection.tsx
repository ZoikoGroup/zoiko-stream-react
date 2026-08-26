'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const workflows = [
  'Live product video',
  'Broadcast',
  'Private delivery',
  'On-demand',
  'Webhooks/events',
  'Analytics',
  'Player integration',
];

const langStacks = ['Node.js', 'Python', 'React', 'Swift', 'Kotlin', 'Go'];

const matchingCards = [
  {
    title: 'Product launch stream',
    tag: 'Live product video',
    lang: 'React',
    desc: 'A simple, low-latency workflow for live product demos with real-time chat and analytics.',
    img: '/images/sample-application/thumb.png',
  },
  {
    title: 'Live event broadcast',
    tag: 'Broadcast',
    lang: 'Node.js',
    desc: 'Reliable ingest, transcoding, and distribution with automated failover and monitoring.',
    img: '/images/sample-application/thumb (1).png',
  },
  {
    title: 'On-demand player',
    tag: 'On-demand',
    lang: 'React',
    desc: 'Fast HLS/VOD playback with subtitles, DRM, and seamless player integration.',
    img: '/images/sample-application/thumb (2).png',
  },
  {
    title: 'Webinar platform',
    tag: 'Interactive webinar',
    lang: 'Vue.js',
    desc: 'Engage audiences with live Q&A, polls, and screen sharing capabilities.',
    img: '/images/sample-application/thumb (3).png',
  },
];

export function ChooseWorkflowSection() {
  const [activeWorkflow, setActiveWorkflow] = useState('Live product video');
  const [activeLang, setActiveLang] = useState('React');

  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-10 overflow-hidden">
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

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-10">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Choose a workflow, not a technology popularity contest
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal leading-7">
            Filter by the result you need. No profiling, no hidden recommendations.
          </p>
        </div>

        {/* Filter Tags */}
        <div className="w-full flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-3">
            {workflows.map((wf) => (
              <button
                key={wf}
                onClick={() => setActiveWorkflow(wf)}
                className={`px-4 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeWorkflow === wf
                    ? 'bg-teal-400 text-gray-950 border border-teal-400'
                    : 'bg-slate-50 text-slate-600 border border-gray-200 hover:border-gray-400'
                }`}
              >
                {wf}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="text-slate-600 text-sm font-bold uppercase font-mono">LANGUAGE STACK:</span>
            {langStacks.map((lang) => (
              <button
                key={lang}
                onClick={() => setActiveLang(lang)}
                className={`px-3.5 py-2 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  activeLang === lang
                    ? 'bg-white text-blue-500 border-2 border-blue-500 font-semibold'
                    : 'bg-white text-slate-600 border border-gray-200 hover:border-gray-400'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {/* Matching Workflows Header */}
        <div className="w-full flex justify-between items-center pt-4">
          <div className="flex flex-col gap-1">
            <h3 className="text-slate-900 text-xl font-bold">Matching workflows</h3>
            <p className="text-slate-600 text-sm font-normal">Preview examples that fit your selected workflow and stack.</p>
          </div>
          <div className="px-3 py-1.5 bg-slate-50 rounded-full border border-gray-200">
            <span className="text-slate-600 text-xs font-semibold">3 results</span>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {matchingCards.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow p-4 gap-3"
            >
              <div className="w-full h-24 relative rounded-xl overflow-hidden bg-slate-900">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex items-center gap-2">
                <div className="px-2.5 py-1 bg-slate-50 rounded-full border border-gray-200">
                  <span className="text-slate-600 text-xs font-bold">{item.tag}</span>
                </div>
                <span className="text-gray-400 text-xs font-normal">• {item.lang}</span>
              </div>

              <h4 className="text-slate-900 text-base font-bold">{item.title}</h4>
              <p className="text-slate-600 text-sm font-normal leading-5">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
