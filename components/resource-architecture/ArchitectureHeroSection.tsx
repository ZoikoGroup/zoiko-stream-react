import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search } from 'lucide-react';
import bg1 from '@/public/images/resources-architecture/bg (1).png';

export default function ArchitectureHeroSection() {
  return (
    <section className="relative w-full min-h-[600px] lg:h-[946px] px-4 sm:px-8 lg:px-28 py-12 lg:py-24 bg-gray-950/90 border-b border-gray-800 flex flex-col justify-center items-start gap-12 overflow-hidden">
      {/* Background Image - Section One bg (1) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg1}
          alt="Resource Architecture Background"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/80 to-transparent" />
      </div>

      <div className="relative z-10 w-full inline-flex flex-col lg:flex-row justify-between items-center gap-12">
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-8 max-w-3xl">
          {/* Badge */}
          <div className="px-3 py-1.5 rounded-full outline outline-1 outline-offset-[-1px] outline-teal-400 inline-flex justify-start items-start bg-teal-400/10">
            <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wide">
              ARCHITECTURE
            </span>
          </div>

          {/* Title */}
          <h1 className="self-stretch text-white text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[56px]">
            Reference architectures for building and operating better video.
          </h1>

          {/* Subtitle */}
          <p className="self-stretch text-slate-400 text-base sm:text-lg font-normal font-['Inter'] leading-relaxed">
            Explore source-governed patterns for composing published ZoikoStream capabilities across live streaming, video on demand, real-time contribution, playback, media operations, security, and enterprise workflows.
          </p>

          {/* Search Box */}
          <div className="w-full max-w-lg p-3.5 bg-gray-800/90 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-700 inline-flex justify-start items-center gap-3">
            <Search className="w-5 h-5 text-slate-400 shrink-0" />
            <input
              type="text"
              placeholder="Search architecture patterns..."
              className="w-full bg-transparent text-slate-200 placeholder-slate-400 text-base font-normal font-['Inter'] outline-none"
            />
          </div>

          {/* CTAs */}
          <div className="w-full flex flex-wrap justify-start items-center gap-4">
            <Link
              href="#patterns"
              className="px-7 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg flex justify-center items-center hover:opacity-90 transition-opacity"
            >
              <span className="text-slate-950 text-base font-bold font-['Space_Grotesk']">
                Browse all patterns
              </span>
            </Link>
            <Link
              href="/developer-documentation"
              className="px-7 py-3.5 rounded-lg outline outline-[1.50px] outline-offset-[-1.50px] outline-slate-400 flex justify-center items-center hover:bg-white/5 transition-colors"
            >
              <span className="text-white text-base font-bold font-['Space_Grotesk']">
                Developer documentation
              </span>
            </Link>
          </div>
        </div>

        {/* Right side Card: CORE MEDIA PIPELINE */}
        <div className="w-full lg:w-[480px] p-6 sm:p-8 bg-zinc-900/90 rounded-2xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-800 flex flex-col justify-start items-start gap-6 backdrop-blur-sm">
          <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk'] tracking-wide uppercase">
            CORE MEDIA PIPELINE
          </span>
          <div className="self-stretch flex flex-col justify-start items-start gap-3">
            <div className="self-stretch p-3.5 bg-gray-800/80 rounded-lg outline outline-1 outline-offset-[-1px] outline-teal-400 inline-flex justify-between items-center">
              <div className="flex justify-start items-center gap-2">
                <div className="size-2 bg-teal-400 rounded-full" />
                <span className="text-white text-sm font-bold font-['Space_Grotesk']">
                  Contribute &amp; Ingest
                </span>
              </div>
              <span className="text-teal-400 text-xs font-normal font-['Space_Grotesk']">
                SRT / WHIP
              </span>
            </div>

            <div className="self-stretch p-3.5 bg-gray-800/80 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-700 inline-flex justify-between items-center">
              <div className="flex justify-start items-center gap-2">
                <div className="size-2 bg-blue-500 rounded-full" />
                <span className="text-white text-sm font-bold font-['Space_Grotesk']">
                  Process &amp; Secure
                </span>
              </div>
              <span className="text-blue-500 text-xs font-normal font-['Space_Grotesk']">
                TRANSCODE
              </span>
            </div>

            <div className="self-stretch p-3.5 bg-gray-800/80 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-700 inline-flex justify-between items-center">
              <div className="flex justify-start items-center gap-2">
                <div className="size-2 bg-teal-400 rounded-full" />
                <span className="text-white text-sm font-bold font-['Space_Grotesk']">
                  Deliver &amp; Replay
                </span>
              </div>
              <span className="text-teal-400 text-xs font-normal font-['Space_Grotesk']">
                EDGE MULTI-CDN
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
