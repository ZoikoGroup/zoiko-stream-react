import React from 'react';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#fbfcfd] to-[#f1f4f8] md:px-12 xl:px-[132px] overflow-hidden">
      {/* Mobile Breadcrumb */}
      <div className="flex lg:hidden items-center px-5 py-3 border-b border-[#dde2ea] bg-white text-[13.5px] font-semibold text-[#5b8def] whitespace-nowrap overflow-x-auto">
        <Link href="#">Developers</Link>
        <span className="mx-2 text-[#9aa1ae] font-normal">/</span>
        <Link href="#">Build</Link>
        <span className="mx-2 text-[#9aa1ae] font-normal">/</span>
        <span className="text-[#2b2e35]">Webhooks and events</span>
      </div>

      {/* Mobile Sub-Nav */}
      <div className="flex lg:hidden items-center px-5 py-3 border-b border-[#dde2ea] bg-[#fbfcfd] gap-6 text-[13.5px] font-semibold text-[#63697a] whitespace-nowrap overflow-x-auto">
        <Link href="#" className="text-[#2b2e35] border-b-2 border-[#2b2e35] pb-1">Overview</Link>
        <Link href="#catalog" className="pb-1 hover:text-[#2b2e35]">Event catalog</Link>
        <Link href="#setup" className="pb-1 hover:text-[#2b2e35]">Endpoint setup</Link>
        <Link href="#verification" className="pb-1 hover:text-[#2b2e35]">Verification</Link>
      </div>

      <div className="mx-auto relative z-10 flex w-full max-w-[1176px] flex-col items-start gap-[24px] px-6 py-16 xl:pt-[133px] xl:pb-[100px]">
        
        <div className="flex items-center gap-[8px] mb-2">
          <div className="w-[6px] h-[6px] rounded-full bg-[#5b8def]" />
          <p className="text-[12px] font-bold uppercase tracking-[1.2px] text-[#5b8def]">
            Webhooks and events
          </p>
        </div>

        <h1 className="w-full max-w-[640px] font-sora text-[36px] font-bold leading-[1.12] tracking-[-0.4px] text-[#2b2e35] md:text-[40px] md:leading-[44.8px]">
          React to stream changes without polling.
        </h1>

        <p className="w-full max-w-[640px] font-inter text-[15.5px] font-normal leading-[25.11px] text-[#63697a] mb-6">
          Subscribe to the events your integration needs, verify each delivery, process it safely, and inspect delivery history when something fails.
        </p>

        <div className="flex flex-col items-center gap-[16px] sm:flex-row mb-6">
          <Link
            href="/start-building"
            className="flex items-center justify-center rounded-[9px] bg-gradient-to-r from-[#5dddd6] to-[#6da6fa] px-[25px] py-[13px] text-[14.5px] font-semibold text-[#1c2430] transition-opacity hover:opacity-90 min-w-[144px]"
          >
            Start building
          </Link>
          <Link
            href="/documentation-page"
            className="flex items-center justify-center rounded-[9px] border border-solid border-[#2b2e35] px-[25px] py-[13px] text-[14.5px] font-semibold text-[#2b2e35] transition-colors hover:bg-[rgba(43,46,53,0.05)] min-w-[200px]"
          >
            Browse event catalog
          </Link>
        </div>

        <Link
          href="/documentation-page"
          className="text-[13.5px] font-semibold leading-[21.87px] text-[#5b8def] hover:underline"
        >
          Read documentation &rarr;
        </Link>

        <p className="w-full max-w-[640px] font-inter text-[15.5px] font-normal leading-[24.8px] text-[#9aa1ae] mt-2">
          Event names, payload schemas, signing details, retry behavior and limits are versioned product contracts and must be sourced from the current ZoikoStream registry.
        </p>
      </div>

      {/* The floating diagram */}
      <div className="relative lg:absolute mt-8 lg:mt-0 right-auto lg:right-[60px] xl:right-[132px] top-auto lg:top-[101px] w-full max-w-[564px] h-auto lg:h-[340px] rounded-[18px] bg-white border border-[#dde2ea] shadow-[0_4px_24px_rgba(0,0,0,0.02)] p-[21px] flex flex-col z-20">
        {/* Top Pipeline */}
        <div className="flex flex-wrap items-center gap-[11px] mb-[15px] w-full">
          <div className="flex h-[32px] items-center justify-center rounded-[8px] bg-[#f1f4f8] px-[10px]">
            <span className="text-[11px] font-bold text-[#2b2e35]">Event</span>
          </div>
          <span className="text-[12px] text-[#9aa1ae]">-&gt;</span>
          <div className="flex h-[32px] items-center justify-center rounded-[8px] bg-[#f1f4f8] px-[10px]">
            <span className="text-[11px] font-bold text-[#2b2e35]">Webhook endpoint</span>
          </div>
          <span className="text-[12px] text-[#9aa1ae]">-&gt;</span>
          <div className="flex h-[32px] items-center justify-center rounded-[8px] bg-[#f1f4f8] px-[10px]">
            <span className="text-[11px] font-bold text-[#2b2e35]">Verify</span>
          </div>
          <span className="text-[12px] text-[#9aa1ae] hidden sm:inline">-&gt;</span>
          <div className="flex h-[32px] items-center justify-center rounded-[8px] bg-[#f1f4f8] px-[10px]">
            <span className="text-[11px] font-bold text-[#2b2e35]">Queue</span>
          </div>
          <span className="text-[12px] text-[#9aa1ae]">-&gt;</span>
          <div className="flex h-[32px] items-center justify-center rounded-[8px] bg-[#f1f4f8] px-[10px]">
            <span className="text-[11px] font-bold text-[#2b2e35]">Handler</span>
          </div>
        </div>

        {/* Detailed Info Card */}
        <div className="flex flex-col w-full lg:w-[522px] min-h-[215px] rounded-[12px] bg-[#f7f9fb] border border-[#dde2ea] px-[16px] py-[19px] gap-4 lg:gap-0 lg:justify-between">
          <div className="flex justify-between items-center h-[20px]">
            <span className="text-[12.5px] text-[#9aa1ae]">Event type</span>
            <span className="text-[12.5px] font-bold text-[#2b2e35] font-mono truncate ml-2">[EVENT_TYPE]</span>
          </div>
          <div className="flex justify-between items-center h-[24px]">
            <span className="text-[12.5px] text-[#9aa1ae]">Delivery status</span>
            <span className="text-[11px] font-semibold text-[#2b2e35] bg-[#eafaf3] px-[9px] py-[3px] rounded-full whitespace-nowrap">Delivered</span>
          </div>
          <div className="flex justify-between items-center h-[20px]">
            <span className="text-[12.5px] text-[#9aa1ae]">Attempt</span>
            <span className="text-[12.5px] font-semibold text-[#2b2e35]">1 of 1</span>
          </div>
          <div className="flex justify-between items-center h-[20px]">
            <span className="text-[12.5px] text-[#9aa1ae]">HTTP outcome</span>
            <span className="text-[12.5px] font-semibold text-[#2b2e35]">200 OK</span>
          </div>
          <div className="flex justify-between items-center h-[20px]">
            <span className="text-[12.5px] text-[#9aa1ae]">Environment</span>
            <span className="text-[10.5px] font-semibold text-[#2b2e35] tracking-[0.4px] bg-[#eeecfd] px-[8px] py-[3px] rounded-[6px]">TEST</span>
          </div>
          <div className="flex justify-between items-center h-[20px]">
            <span className="text-[12.5px] text-[#9aa1ae]">Timestamp</span>
            <span className="text-[12.5px] font-bold text-[#2b2e35] font-mono">14:02:07 UTC</span>
          </div>
        </div>

        <Link
          href="#"
          className="text-[13.5px] font-semibold leading-[21.87px] text-[#5b8def] hover:underline inline-block mt-4 ml-1"
        >
          View delivery &rarr;
        </Link>
      </div>

    </section>
  );
}
