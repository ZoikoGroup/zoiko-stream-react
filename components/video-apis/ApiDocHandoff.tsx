'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function ApiDocHandoff() {
  const cards = [
    { title: 'Developer Quickstart', img: '/images/video-api/DocThumbnail.png' },
    { title: 'REST API Reference', img: '/images/video-api/DocThumbnail (1).png' },
    { title: 'Authentication Secrets', img: '/images/video-api/DocThumbnail (2).png' },
    { title: 'Errors & Limits Handbook', img: '/images/video-api/DocThumbnail (3).png' },
    { title: 'Code Sample Archives', img: '/images/video-api/DocThumbnail (4).png' },
    { title: 'Platform Changelog', img: '/images/video-api/DocThumbnail (5).png' }
  ];

  return (
    <section 
      id="api-doc-handoff"
      className="relative w-full py-16 sm:py-24 bg-white text-zinc-900 border-b border-gray-200 transition-colors duration-250 font-spaceGrotesk"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-3 max-w-3xl font-spaceGrotesk">
          <h2 className="text-zinc-955 text-3xl sm:text-4xl font-bold tracking-tight">
            Developer Documentation Handoff
          </h2>
          <p className="text-slate-655 text-base sm:text-lg font-normal leading-relaxed">
            All roads lead to authoritative implementation resources. Code frameworks, status boards, and error guides.
          </p>
        </div>

        {/* 6 Cards Grid (3 columns on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full font-spaceGrotesk">
          {cards.map((c, idx) => (
            <div 
              key={idx}
              className="bg-slate-50 rounded-xl  flex flex-col overflow-hidden hover:-translate-y-1 hover:shadow-md transition-all duration-300 min-h-[220px]"
            >
              {/* Thumbnail visual */}
              <div className="relative h-40 w-full bg-slate-200">
                <Image 
                  src={c.img} 
                  alt={c.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Title & icon */}
              <div className="p-4 flex justify-between items-center w-full bg-white">
                <span className="text-zinc-955 text-sm font-bold">
                  {c.title}
                </span>
                <ArrowUpRight className="size-4 text-blue-500 shrink-0" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
