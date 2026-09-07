'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const POINTS = [
  'Custom multi-region streaming architectures',
  'Enterprise SLA and support tier configuration',
  'Dedicated account management and onboarding',
  'Volume licensing and procurement workflows',
];

export default function ArchitectureGuidanceSection() {
  return (
    <section className="relative w-full bg-[#070b14] text-white py-20 lg:py-28 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Header Title & Subtitle */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight mb-3">
            Need architecture-level guidance?
          </h2>
          <p className="text-slate-300/90 text-sm sm:text-base max-w-3xl leading-relaxed">
            For complex multi-region deployments, custom failover configurations, and enterprise procurement, connect with our solutions architecture team.
          </p>
        </div>

        {/* Content Row: Left Photo + Right Bullet Points & CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Photo */}
          <div className="lg:col-span-6 w-full">
            <div className="relative w-full h-[320px] sm:h-[380px] lg:h-[420px] rounded-2xl overflow-hidden border border-slate-800/90 shadow-[0_20px_50px_rgba(0,0,0,0.6)] bg-slate-900">
              <Image
                src="/images/community-resources/cr1.png"
                alt="Solutions Architecture Team"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Bullets & CTA */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* 4 Bullet Points */}
            <div className="space-y-4 mb-8">
              {POINTS.map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27c3a7] shrink-0" />
                  <span className="text-sm sm:text-base text-slate-200 font-medium">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#27c3a7] to-[#3b82f6] hover:opacity-95 text-[#06181f] font-bold text-sm sm:text-base shadow-[0_4px_20px_rgba(39,195,167,0.3)] transition-all duration-200"
            >
              Talk to Solutions Architecture
            </Link>

            {/* Footnote */}
            <span className="text-xs text-slate-400 mt-4 block">
              Available for qualified enterprise and architecture-level engagements only.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
