'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#070b14] text-white pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-28 lg:pb-32 border-b border-slate-800/60">
      {/* Background Cyber Grid */}
      <div
        className="absolute inset-0 pointer-events-none -z-0 opacity-40 bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/community-resources/cr-bg1.png')`,
        }}
        aria-hidden="true"
      />

      {/* Dark gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-[#070b14] via-[#070b14]/90 to-[#070b14]/75 pointer-events-none -z-0"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top Tag */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
              <span className="text-[11px] font-mono font-semibold tracking-wider text-teal-400 uppercase">
                COMMUNITY RESOURCES
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold text-white tracking-tight leading-[1.08] mb-6">
              Connect with other builders.
            </h1>

            {/* Subtext */}
            <p className="text-slate-300/90 text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
              Find approved community spaces and peer-learning resources for video, live events, APIs, media operations, and implementation conversations.
            </p>

            {/* Search Input Bar */}
            <div className="w-full max-w-xl mb-7">
              <div className="relative flex items-center bg-[#0c1322]/90 backdrop-blur-md border border-slate-700/80 rounded-xl p-1.5 shadow-lg">
                <Search className="w-4 h-4 text-slate-400 ml-3 mr-2 shrink-0" />
                <input
                  type="text"
                  placeholder="Search community resources by name, purpose, topic, or operator..."
                  className="w-full bg-transparent text-white placeholder:text-slate-500 text-xs sm:text-sm focus:outline-none py-1.5"
                />
                <button
                  type="button"
                  className="bg-[#27c3a7] hover:bg-[#22b298] text-[#06181f] font-semibold text-xs px-4 py-2 rounded-lg transition-colors shrink-0"
                >
                  Search
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <Link
                href="#community-spaces"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#27c3a7] hover:bg-[#22b298] text-[#06181f] font-semibold text-sm transition-all duration-150 shadow-[0_4px_16px_rgba(39,195,167,0.25)] hover:shadow-[0_6px_22px_rgba(39,195,167,0.35)]"
              >
                Browse community resources
              </Link>
              <Link
                href="#before-you-post"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#0e1422] hover:bg-slate-800/80 text-white font-semibold text-sm border border-slate-300/80 transition-all duration-150 shadow-sm"
              >
                See community guidelines
              </Link>
            </div>

            {/* Helper Note with Links */}
            <p className="text-xs text-slate-400 max-w-xl leading-relaxed">
              For official product behavior, use{' '}
              <Link href="/developer-documentation" className="text-teal-400 underline hover:text-teal-300">
                Developer documentation
              </Link>{' '}
              and{' '}
              <Link href="/resources-api-reference" className="text-teal-400 underline hover:text-teal-300">
                API reference
              </Link>
              . For private or urgent issues, use{' '}
              <Link href="/contact-us" className="text-teal-400 underline hover:text-teal-300">
                Support
              </Link>{' '}
              or{' '}
              <Link href="/zoikostream-status" className="text-teal-400 underline hover:text-teal-300">
                System status
              </Link>
              .
            </p>
          </div>

          {/* Right Column: Developers Photo Widget */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg h-[340px] sm:h-[380px] lg:h-[400px] rounded-2xl overflow-hidden border border-slate-800/90 shadow-[0_20px_50px_rgba(0,0,0,0.6)] bg-slate-900">
              <Image
                src="/images/community-resources/cr1.png"
                alt="Community Builders Collaborating"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
