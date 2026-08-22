import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Lock, Activity, HelpCircle } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full bg-gray-950 text-white py-20 md:py-28 border-b border-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/platform-media-security/bg (97).png"
          alt="Media Security Hero Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gray-950/60" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <div className="px-3.5 py-1 rounded-full border border-teal-400 bg-teal-400/10 inline-flex items-center">
              <span className="text-teal-400 text-xs font-bold font-mono uppercase tracking-wider">
                Media security
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold font-['Space_Grotesk'] text-white leading-tight md:leading-[62px]">
              Protect media workflows across access, playback, delivery, operations, and evidence.
            </h1>

            <p className="text-slate-400 text-lg md:text-xl font-normal font-['Inter'] leading-relaxed">
              Media-specific controls, shared responsibility boundaries, and qualified evidence — not generic cybersecurity promises.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/company-overview"
                className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-slate-950 text-base font-bold font-['Inter'] hover:opacity-90 transition-opacity"
              >
                Explore security evidence
              </Link>
              <Link
                href="/talk-to-an-expert"
                className="px-7 py-3.5 rounded-lg border border-slate-400 text-white text-base font-bold font-['Inter'] hover:bg-white/10 transition-colors"
              >
                Talk to an expert
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[580px] h-[400px] md:h-[480px] rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
              <Image
                src="/images/platform-media-security/hero-right-visual.png"
                alt="Security Hero Visual"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Bottom Nav Pill Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            href="/company-overview"
            className="px-6 py-4 bg-zinc-900/80 rounded-xl border border-gray-800 flex items-center gap-4 backdrop-blur-md hover:border-teal-400/40 transition-colors"
          >
            <ShieldCheck className="size-5 text-teal-400 shrink-0" />
            <span className="text-white text-base font-bold font-['Space_Grotesk']">
              Trust Center
            </span>
          </Link>

          <Link
            href="/platform-media-security"
            className="px-6 py-4 bg-zinc-900/80 rounded-xl border border-gray-800 flex items-center gap-4 backdrop-blur-md hover:border-teal-400/40 transition-colors"
          >
            <Lock className="size-5 text-teal-400 shrink-0" />
            <span className="text-white text-base font-bold font-['Space_Grotesk']">
              Security Architecture
            </span>
          </Link>

          <Link
            href="/faqs-and-support"
            className="px-6 py-4 bg-zinc-900/80 rounded-xl border border-gray-800 flex items-center gap-4 backdrop-blur-md hover:border-teal-400/40 transition-colors"
          >
            <Activity className="size-5 text-teal-400 shrink-0" />
            <span className="text-white text-base font-bold font-['Space_Grotesk']">
              System Status
            </span>
          </Link>

          <Link
            href="/faqs-and-support"
            className="px-6 py-4 bg-zinc-900/80 rounded-xl border border-gray-800 flex items-center gap-4 backdrop-blur-md hover:border-teal-400/40 transition-colors"
          >
            <HelpCircle className="size-5 text-teal-400 shrink-0" />
            <span className="text-white text-base font-bold font-['Space_Grotesk']">
              Support &amp; Disclosure
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
