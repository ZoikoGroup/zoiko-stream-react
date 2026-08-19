import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative w-full flex flex-col items-start justify-center overflow-hidden border-b border-[#232b3a] bg-[#0a0f1a] px-6 py-16 md:px-[112px] md:py-[80px]">

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/images/sdks/hero-bg.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover max-w-none"
        />
        <div className="absolute inset-0 bg-[rgba(10,15,26,0.45)]" />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center w-full">

        {/* Left */}
        <div className="flex flex-col flex-1 gap-6 items-start min-w-0 w-full">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00d4aa]">
            <span className="w-[6px] h-[6px] rounded-full bg-[#00d4aa]" />
            <span className="font-bold text-[#00d4aa] text-[11px] tracking-[1px] uppercase whitespace-nowrap">
              PLATFORM / SDKs
            </span>
          </div>

          <h1 className="font-bold text-[#eef1f6] text-4xl sm:text-[50px] leading-[1.15] sm:leading-[60px] tracking-[-1.5px]">
            Build with a maintained SDK for your approved environment.
          </h1>

          <p className="font-normal text-[#aab3c4] text-base sm:text-[18px] leading-relaxed sm:leading-[28.8px] max-w-[560px]">
            Simplify real-time integrations. ZoikoStream maintains official developer packages for native mobile, modern web runtimes, and critical backend systems.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/start-building"
              className="flex items-center justify-center px-[26px] py-[14px] rounded-[10px]"
              style={{ background: 'linear-gradient(90deg, #34d4ca 0%, #4a8cfb 100%)' }}
            >
              <span className="font-bold text-[#04141a] text-[15px] whitespace-nowrap">
                Start building
              </span>
            </a>
            <a
              href="/docs/api"
              className="flex items-center justify-center px-[28px] py-[14px] rounded-[10px] border border-[#aab3c4] hover:bg-[rgba(255,255,255,0.05)] transition-colors"
            >
              <span className="font-medium text-[#eef1f6] text-[15px] whitespace-nowrap">
                Explore Video APIs
              </span>
            </a>
          </div>

          <div className="flex items-start w-full pt-4 border-t border-[#232b3a]">
            <p className="font-normal text-[#707a8c] text-[12.5px]">
              Official packages are signed and secured against dependency chain interventions.
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-5 items-start w-full lg:w-[540px] shrink-0 overflow-hidden rounded-2xl border border-[#232b3a] bg-[rgba(16,21,30,0.8)] p-6 backdrop-blur-[8px]">

          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00d4aa]" />
              <span className="font-mono font-bold text-[#eef1f6] text-[11px] whitespace-nowrap">
                ZOIKO SDK ARCHITECTURE
              </span>
            </div>
            <span className="font-mono text-[#707a8c] text-[10px] whitespace-nowrap">
              v4.2 ACTIVE / PRO
            </span>
          </div>

          <div className="flex flex-col gap-[10px] items-start w-full">
            <div className="flex flex-col gap-1 items-start w-full p-3 rounded-lg border border-[#232b3a] bg-[rgba(31,41,55,0.5)]">
              <p className="font-bold text-[#eef1f6] text-[11px] tracking-[0.5px]">
                CLIENT APPLICATION
              </p>
              <p className="font-normal text-[#aab3c4] text-[12px]">
                React / iOS / Android View Layer
              </p>
            </div>

            <div className="flex flex-col gap-1 items-start w-full p-3 rounded-lg border border-[#00d4aa] bg-[#111827]">
              <p className="font-bold text-[#00d4aa] text-[11px] tracking-[0.5px]">
                ZOIKO STREAM SDK
              </p>
              <p className="font-normal text-[#aab3c4] text-[12px]">
                Managed States, Buffers, Ingest Engine
              </p>
            </div>

            <div className="flex flex-col gap-1 items-start w-full p-3 rounded-lg border border-[#232b3a] bg-[rgba(31,41,55,0.5)]">
              <p className="font-bold text-[#eef1f6] text-[11px] tracking-[0.5px]">
                REST &amp; WEBSOCKET APIs
              </p>
              <p className="font-normal text-[#aab3c4] text-[12px]">
                Signaling &amp; Transport Pipeline
              </p>
            </div>

            <div className="flex flex-col gap-1 items-start w-full p-3 rounded-lg border border-[#232b3a] bg-[#0a0d13]">
              <p className="font-bold text-[#eef1f6] text-[11px] tracking-[0.5px]">
                ZOIKO MEDIA SERVER ENGINE
              </p>
              <p className="font-normal text-[#aab3c4] text-[12px]">
                High-Performance Edge Routers
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
