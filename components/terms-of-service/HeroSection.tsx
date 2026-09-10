import React from 'react';

export function HeroSection() {
  return (
    <section className="w-full bg-[#0b1329] px-6 sm:px-12 lg:px-20 py-14 flex flex-col justify-start items-start">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-8 pt-1.5 flex flex-col justify-start items-start gap-3">
        
        {/* Sub-badge */}
        <div className="inline-flex justify-start items-center gap-2">
          <div className="w-1.5 h-1.5 bg-[#4483f9] rounded-[3px]"></div>
          <span className="text-[#4483f9] text-xs font-normal font-['IBM_Plex_Mono'] uppercase leading-5 tracking-wide">
            TERMS OF SERVICE
          </span>
        </div>

        {/* Title */}
        <div className="w-full max-w-[660px] pt-1 pb-[0.69px]">
          <h1 className="text-[#f8fafc] text-3xl sm:text-4xl font-semibold font-['Space_Grotesk'] leading-tight sm:leading-[44px]">
            The agreement between you and<br className="hidden sm:inline" /> ZoikoStream.
          </h1>
        </div>

        {/* Subtitle */}
        <div className="w-full max-w-[640px]">
          <p className="text-[#94a3b8] text-base font-normal font-['Inter'] leading-6">
            These Terms of Service govern your access to and use of zoikostream.com and the ZoikoStream platform, including the video APIs, developer tools, and Live Events capabilities. By creating an account or using the services, you agree to these terms.
          </p>
        </div>

        {/* Status Badges */}
        <div className="w-full pt-2 inline-flex justify-start items-start gap-2.5 flex-wrap">
          <div className="px-3 pt-1 pb-1.5 bg-[#16203a] rounded-[100px] outline outline-1 outline-offset-[-1px] outline-cyan-500/30 inline-flex flex-col justify-start items-start">
            <span className="text-cyan-400 text-xs font-normal font-['IBM_Plex_Mono'] leading-4">
              State: Current (illustrative)
            </span>
          </div>
          <div className="px-3 pt-1 pb-1.5 bg-[#16203a] rounded-[100px] outline outline-1 outline-offset-[-1px] outline-slate-700 inline-flex flex-col justify-start items-start">
            <span className="text-[#94a3b8] text-xs font-normal font-['IBM_Plex_Mono'] leading-4">
              Version 1.0
            </span>
          </div>
          <div className="px-3 pt-1 pb-1.5 bg-[#16203a] rounded-[100px] outline outline-1 outline-offset-[-1px] outline-slate-700 inline-flex flex-col justify-start items-start">
            <span className="text-[#94a3b8] text-xs font-normal font-['IBM_Plex_Mono'] leading-4">
              Effective: Aug 1, 2026
            </span>
          </div>
          <div className="px-3 pt-1 pb-1.5 bg-[#16203a] rounded-[100px] outline outline-1 outline-offset-[-1px] outline-slate-700 inline-flex flex-col justify-start items-start">
            <span className="text-[#94a3b8] text-xs font-normal font-['IBM_Plex_Mono'] leading-4">
              Governing entity: Zoiko Tech, on behalf of Zoiko Group
            </span>
          </div>
        </div>

        {/* Notice Box */}
        <div className="w-full max-w-[640px] mt-1 px-3.5 py-3 bg-[#16203a] rounded-lg border-l-[3px] border-r border-t border-b border-cyan-400 flex flex-col justify-start items-start">
          <p className="text-[#94a3b8] text-xs font-normal font-['Inter'] leading-5">
            This page is public contract information. It does not replace legal advice for your specific situation — for account-specific questions, contact Legal.
          </p>
        </div>

      </div>
    </section>
  );
}
