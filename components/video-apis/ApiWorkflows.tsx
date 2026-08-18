'use client';

import React from 'react';
import Image from 'next/image';

export default function ApiWorkflows() {
  const cards = [
    {
      title: 'Live Workflow',
      subtitle: 'Create or control a live stream programmatically',
      desc: 'API configurations for ingestion routing, transcoding rules, and adaptive live streaming pipelines globally.',
      img: '/images/video-api/CardImg (7).png'
    },
    {
      title: 'Real-Time Contribution',
      subtitle: 'Bring approved real-time sources into a workflow',
      desc: 'Seamless ingestion of zero-latency WebRTC and high-res SRT contribution endpoints for remote presenters.',
      img: '/images/video-api/CardImg (8).png'
    },
    {
      title: 'On-Demand Media',
      subtitle: 'Create, manage, retrieve media assets',
      desc: 'Automated VOD transcode requests, asset listing, tagging, and cloud storage pipeline operations.',
      img: '/images/video-api/CardImg (9).png'
    },
    {
      title: 'Playback & Access',
      subtitle: 'Create authorized playback configuration',
      desc: 'Control geo-restrictions, generate HMAC playback tokens, and set token lifetimes dynamically via API.',
      img: '/images/video-api/CardImg (10).png'
    },
    {
      title: 'Analytics',
      subtitle: 'Retrieve operational or audience analytics',
      desc: 'Pull QoS statistics, real-time viewer concurrency, CDN egress telemetry, and error rates via REST queries.',
      img: '/images/video-api/CardImg (11).png'
    },
    {
      title: 'Automation & Events',
      subtitle: 'Respond to workflow events or automate operations',
      desc: 'Configure webhooks, failovers, and global event listeners.',
      img: '/images/video-api/CardImg (12).png'
    }
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-white dark:bg-zinc-955 text-zinc-900 dark:text-white border-b border-gray-200 dark:border-zinc-900 transition-colors duration-250 font-spaceGrotesk">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <h2 className="text-zinc-955 dark:text-white text-3xl sm:text-4xl font-bold tracking-tight">
            Choose Your Workflow
          </h2>
          <p className="text-slate-655 dark:text-zinc-400 text-base sm:text-lg font-normal leading-relaxed">
            Select the path that fits your job. Each card routes to verified capability detail or developer authority.
          </p>
        </div>

        {/* 6 Cards Grid (3 columns on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {cards.map((c, idx) => (
            <div 
              key={idx}
              className="bg-slate-50 dark:bg-zinc-900 rounded-2xl border border-gray-255 dark:border-zinc-800 flex flex-col overflow-hidden hover:-translate-y-1 hover:shadow-md transition-all duration-300 min-h-[360px]"
            >
              {/* Image Box */}
              <div className="relative h-40 w-full bg-slate-100 dark:bg-zinc-950">
                <Image 
                  src={c.img} 
                  alt={c.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text Padding */}
              <div className="p-6 flex flex-col justify-start items-start gap-2 flex-1 text-left">
                <div className="flex justify-between items-center w-full">
                  <h3 className="text-zinc-955 dark:text-white text-base sm:text-lg font-bold">
                    {c.title}
                  </h3>
                  <span className="px-2 py-0.5 bg-teal-400/10 text-teal-500 dark:text-teal-400 text-[10px] font-bold rounded-sm tracking-wider uppercase shrink-0">
                    VERIFIED
                  </span>
                </div>
                
                <span className="text-zinc-955 dark:text-slate-200 text-xs sm:text-sm font-bold leading-snug">
                  {c.subtitle}
                </span>
                
                <p className="text-slate-600 dark:text-zinc-400 text-xs font-normal leading-relaxed pt-1">
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
