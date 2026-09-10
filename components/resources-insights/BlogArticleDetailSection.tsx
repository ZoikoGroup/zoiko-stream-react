import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';
import lightBgPattern from '@/public/images/Organization-overview/bg (147).png';
import articleImage from '@/public/images/resources-insights/sectionbackground_sources.png'; // Placeholder
import authorAvatar from '@/public/images/resources-insights/sectionbackground_content.png'; // Placeholder

export default function BlogArticleDetailSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-16 lg:py-24 border-b border-gray-200 flex flex-col justify-start items-stretch gap-12 bg-white overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={lightBgPattern}
          alt="Pattern"
          fill
          className="object-cover opacity-50 mix-blend-multiply"
        />
      </div>

      {/* Header Row */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        <div className="flex-1 flex flex-col justify-start items-start gap-6">
          <h2 className="text-slate-950 text-3xl sm:text-4xl lg:text-[40px] font-bold font-['Space_Grotesk'] leading-tight tracking-tight">
            Why Adaptive Bitrate Alone Won't Solve Latency at Scale
          </h2>
          <p className="text-slate-600 text-lg font-normal font-['Inter'] leading-relaxed">
            A deep look at the architectural tradeoffs between ABR algorithms and real-time delivery constraints when operating at 100K+ concurrent viewers.
          </p>
          
          <div className="flex items-center gap-3 mt-2">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-200 relative shrink-0">
              <Image src={authorAvatar} alt="Author" fill className="object-cover" />
            </div>
            <div className="flex flex-col">
              <p className="text-slate-950 text-sm font-bold font-['Space_Grotesk']">Sarah Chen</p>
              <p className="text-slate-500 text-xs font-normal font-['Space_Grotesk']">
                Principal Engineer · Published Aug 15, 2026 · 12 min read
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[560px] shrink-0 h-[340px] rounded-xl overflow-hidden relative shadow-lg">
          <Image
            src={articleImage}
            alt="Article Hero"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Content Row */}
      <div className="relative z-10 w-full flex flex-col lg:flex-row items-start justify-center gap-12 lg:gap-16">
        
        {/* Prose */}
        <div className="w-full max-w-[595px] flex flex-col gap-6 text-slate-600 text-base font-normal font-['Inter'] leading-relaxed">
          <h3 className="text-slate-950 text-2xl font-bold font-['Space_Grotesk']">
            The Latency Problem at Scale
          </h3>
          <p>
            Traditional Adaptive Bitrate (ABR) solutions like HLS and DASH were built for reliability, not speed. By segmenting video streams into multi-second chunks, they create a buffer shield against network jitter. However, when scale exceeds 100K+ concurrent streams, that buffer turns into a latency penalty.
          </p>
          <p>
            To push stream delay below sub-second thresholds without sacrificing quality, engineers must bypass classic segment-based chunks entirely. We must transition to chunked transfer encoding and ultra-low-latency protocols (like SRT or WebRTC ingest) operating under strict server-side pacing constraints.
          </p>
          <p>
            Adaptive bitrate can only react to congestion once packet loss occurs; a scalable real-time strategy must predict jitter anomalies at the network edge before the frame master is compromised.
          </p>
        </div>

        {/* Sidebar Callout */}
        <div className="w-full lg:w-[320px] shrink-0 bg-slate-50 border border-slate-200 rounded-2xl p-7 flex flex-col gap-5 shadow-sm">
          <div className="flex justify-between items-center w-full">
            <h4 className="text-slate-950 text-sm font-bold font-['Space_Grotesk']">
              Source Verification
            </h4>
            <ShieldCheck className="w-4 h-4 text-slate-950" />
          </div>
          
          <p className="text-slate-600 text-[13px] leading-relaxed font-normal font-['Space_Grotesk']">
            Source: ZoikoStream Architecture documentation (current) · Last verified Aug 2026
          </p>
          
          <hr className="border-slate-200" />
          
          <Link
            href="#architecture"
            className="text-blue-600 hover:text-blue-700 text-sm font-bold font-['Space_Grotesk'] flex items-center gap-2 transition-colors"
          >
            View current Architecture reference <span>&rarr;</span>
          </Link>
        </div>
      </div>
      
    </section>
  );
}
