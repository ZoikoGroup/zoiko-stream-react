import React from 'react';
import Image from 'next/image';

export default function SecurityHero() {
  return (
    <section className="w-full relative bg-[#060B14] py-20 lg:py-24 px-6 flex items-center justify-center overflow-hidden min-h-[780px]">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-screen">
        <div className="absolute inset-0 bg-gradient-to-r from-[#060B14] via-transparent to-[#060B14] z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060B14] via-transparent to-[#060B14] z-10" />
        <img 
          src="/images/security/Architecture.png" 
          alt="" 
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 relative z-10">

        {/* Left Column: Content & CTAs */}
        <div className="flex-1 flex flex-col items-start gap-6 w-full max-w-2xl">
          
          {/* Badge */}
          <div className="w-fit px-3 py-1.5 rounded-full border border-[#00F0FF]/30 bg-[#00F0FF]/5 inline-flex items-center">
            <span className="text-[#00F0FF] text-[11px] md:text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wider">
              Security
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-white text-4xl md:text-5xl lg:text-[56px] font-bold font-['Space_Grotesk'] leading-tight md:leading-[1.1]">
            Security designed to be understood, reviewed, and verified
          </h1>

          {/* Description */}
          <p className="text-slate-400 text-base md:text-lg font-normal font-['Space_Grotesk'] leading-relaxed max-w-[95%]">
            Review the public-safe ZoikoStream security model, how security claims are governed, which control domains are supported by current sources, where evidence lives, which responsibilities are shared, and where to go for compliance, data protection, live status, advisories, and vulnerability reporting.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-4">
            <button className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-[#00E5FF] to-[#3B82F6] hover:opacity-90 transition-opacity rounded-[10px] text-slate-900 text-base font-bold font-['Space_Grotesk']">
              Explore security model
            </button>
            <button className="w-full sm:w-auto px-7 py-3.5 rounded-[10px] border border-white/20 hover:bg-white/5 transition-colors text-slate-200 text-base font-medium font-['Space_Grotesk']">
              Visit Trust Center
            </button>
          </div>

          {/* Disclaimer Box */}
          <div className="w-full p-4 bg-white/[0.02] rounded-lg border border-white/10 mt-6 backdrop-blur-sm">
            <p className="text-slate-500 text-xs font-normal font-['Space_Grotesk'] leading-relaxed">
              Public security information is scoped. Detailed architecture, customer-specific controls, assurance artifacts, and sensitive security operations may be limited or controlled.
            </p>
          </div>
        </div>

        {/* Right Column: Visual */}
        <div className="w-full max-w-xl lg:w-[540px] shrink-0 aspect-[54/46] bg-[#0A101C]/50 rounded-2xl border border-white/10 overflow-hidden relative shadow-2xl backdrop-blur-md">
          <Image
            src="/images/security/HeroVisual.png"
            alt="Security Overview Visual"
            fill
            className="object-cover"
            priority
          />
        </div>

      </div>
    </section>
  );
}
