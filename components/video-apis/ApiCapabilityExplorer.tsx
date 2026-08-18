'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function ApiCapabilityExplorer() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'verified' | 'rest'>('all');

  const capabilities = [
    {
      title: 'Stream Initialization',
      desc: 'Instantly deploy adaptive live stream pipelines with transcoding parameters.',
      img: '/images/video-api/CapImg.png',
      stage: '02 Ingest',
      version: 'v1.4',
      badge: { text: 'Verified', style: 'text-teal-500 bg-teal-500/10' }
    },
    {
      title: 'SAML SSO Whitelist',
      desc: 'Restrict playback authorization to whitelisted enterprise directories.',
      img: '/images/video-api/CapImg (1).png',
      stage: '04 Secure',
      version: 'v1.2',
      badge: { text: 'Verified', style: 'text-teal-500 bg-teal-500/10' }
    },
    {
      title: 'QoS Diagnostic Pull',
      desc: 'Retrieve active node telemetry, latency spikes, and frame drops.',
      img: '/images/video-api/CapImg (2).png',
      stage: '06 Understand',
      version: 'v2.0',
      badge: { text: 'Verified', style: 'text-teal-500 bg-teal-500/10' }
    },
    {
      title: 'VOD Packager',
      desc: 'Assemble clean streams, raw video, and audio tracks into on-demand assets.',
      img: '/images/video-api/CapImg (3).png',
      stage: '07 Preserve',
      version: 'v1.1',
      badge: { text: 'Verified', style: 'text-teal-500 bg-teal-500/10' }
    },
    {
      title: 'Graphic Overlay Trigger',
      desc: 'Inject lower-thirds, sponsor logos, and broadcast alerts on active feeds.',
      img: '/images/video-api/CapImg (4).png',
      stage: '03 Produce',
      version: 'v1.5',
      badge: { text: 'Limited', style: 'text-slate-400 bg-slate-400/10' }
    },
    {
      title: 'Global CDN Multi-Route',
      desc: 'Trigger failovers and program alternate latency routing protocols.',
      img: '/images/video-api/CapImg (5).png',
      stage: '05 Deliver',
      version: 'v2.1',
      badge: { text: 'Enterprise', style: 'text-slate-405 bg-slate-405/10' }
    }
  ];

  // Filtering Logic
  const filtered = capabilities.filter(c => {
    const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.stage.toLowerCase().includes(searchQuery.toLowerCase());
    if (!matchesSearch) return false;
    
    if (filterType === 'verified') {
      return c.badge.text === 'Verified';
    }
    if (filterType === 'rest') {
      // Mock category filter mapping, keep all for rest reference list
      return true;
    }
    return true;
  });

  return (
    <section className="relative w-full py-16 sm:py-24 bg-slate-950 text-white overflow-hidden border-b border-zinc-900 font-spaceGrotesk">
      {/* Background Image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none opacity-20"
        style={{ backgroundImage: "url('/images/video-api/bg (51).png')" }}
      />
      <div className="absolute inset-0 bg-black/60 pointer-events-none z-0" />
      <div className="absolute left-[-100px] top-[-100px] w-[500px] h-[500px] bg-gradient-to-tr from-teal-555/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title & Filter Block */}
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-3 max-w-3xl">
            <h2 className="text-slate-101 text-3xl sm:text-4xl font-bold tracking-tight">
              API Capability Explorer
            </h2>
            <p className="text-slate-400 text-base sm:text-lg font-normal leading-relaxed">
              Discover verified programmable capabilities backed by the registry.
            </p>
          </div>

          {/* Interactive Search Bar / Buttons */}
          <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 w-full relative z-20">
            <div className="flex-1 p-3 bg-slate-900 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-800 flex items-center gap-2.5">
              <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search active endpoints (e.g., POST /streams)"
                className="w-full bg-transparent border-none text-white text-sm font-normal focus:outline-none placeholder-slate-500 font-spaceGrotesk"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <button 
                onClick={() => setFilterType('all')}
                className={`px-4 py-2.5 rounded-lg text-xs font-bold font-spaceGrotesk transition-colors cursor-pointer border-none ${
                  filterType === 'all' ? 'bg-blue-500 text-white' : 'bg-slate-900 text-slate-400 hover:text-white'
                }`}
              >
                All Workflows
              </button>
              <button 
                onClick={() => setFilterType('verified')}
                className={`px-4 py-2.5 rounded-lg text-xs font-bold font-spaceGrotesk transition-colors cursor-pointer border border-gray-800 ${
                  filterType === 'verified' ? 'bg-blue-500 text-white border-blue-500' : 'bg-slate-900 text-slate-400 hover:text-white'
                }`}
              >
                Verified Only
              </button>
              <button 
                onClick={() => setFilterType('rest')}
                className={`px-4 py-2.5 rounded-lg text-xs font-bold font-spaceGrotesk transition-colors cursor-pointer border border-gray-800 ${
                  filterType === 'rest' ? 'bg-blue-500 text-white border-blue-500' : 'bg-slate-900 text-slate-400 hover:text-white'
                }`}
              >
                REST Reference
              </button>
            </div>
          </div>
        </div>

        {/* Capability Explorer Grid (3 columns on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {filtered.map((c, idx) => (
            <div 
              key={idx}
              className="bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col overflow-hidden hover:border-teal-400 transition-all duration-300 shadow-md min-h-[350px]"
            >
              {/* Card Image */}
              <div className="relative h-36 w-full bg-slate-950">
                <Image 
                  src={c.img} 
                  alt={c.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text Padding */}
              <div className="p-5 flex flex-col justify-start items-start gap-3 flex-1 text-left">
                <div className="flex justify-between items-center w-full">
                  <h3 className="text-slate-101 text-base font-bold">
                    {c.title}
                  </h3>
                  <span className={`px-2 py-0.5 rounded-sm text-[10px] font-bold tracking-wider uppercase shrink-0 ${c.badge.style}`}>
                    {c.badge.text}
                  </span>
                </div>
                
                <p className="text-slate-400 text-xs font-normal leading-relaxed flex-1">
                  {c.desc}
                </p>

                <div className="h-px bg-gray-800 w-full" />
                
                <div className="flex justify-between items-center w-full text-xs font-normal">
                  <span className="text-slate-500">{c.stage}</span>
                  <span className="text-teal-400 font-bold">{c.version}</span>
                </div>

                <a 
                  href="#api-doc-handoff" 
                  className="text-teal-400 text-xs font-bold hover:underline self-start pt-1 font-spaceGrotesk"
                >
                  View Docs →
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
