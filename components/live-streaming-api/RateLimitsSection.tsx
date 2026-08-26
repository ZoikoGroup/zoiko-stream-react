import React from 'react';

export default function RateLimitsSection() {
  return (
    <section className="relative w-full border-b border-[#e1e6eb] min-h-[953px] flex flex-col items-start bg-white px-6 xl:px-[112px] py-[120px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img 
          src="/images/live-streaming-api/light-topo-bg.png"
          alt="" 
          className="absolute inset-0 max-w-none object-cover size-full" 
        />
        <div className="absolute bottom-[-118px] right-[-171px] w-[520px] h-[520px]">
          <img alt="" className="w-full h-full" src="/images/live-streaming-api/bg-blob-2.svg" />
        </div>
        <div className="absolute left-[-186px] top-[-85px] w-[420px] h-[420px]">
          <img alt="" className="w-full h-full" src="/images/live-streaming-api/bg-blob-1.svg" />
        </div>
      </div>

      <div className="relative z-10 w-full flex flex-col items-start gap-[64px]">
        
        {/* Header */}
        <div className="flex flex-col gap-[16px] w-full">
          <h2 className="font-sora font-bold text-[#0f1b2d] text-[38px] tracking-[-0.8px] leading-[48px]">
            Rate limits & scale
          </h2>
          <p className="font-inter font-normal text-[#4f5e74] text-[18px] leading-[28px]">
            Limit transparency, concurrency categories, and production planning.
          </p>
        </div>

        {/* Split Panel */}
        <div className="flex flex-col lg:flex-row gap-[24px] w-full items-stretch">
          
          {/* Table and Code */}
          <div className="flex flex-[1_0_0] flex-col gap-[24px] w-full">
            
            {/* Table Wrapper */}
            <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid flex flex-col rounded-[12px] overflow-hidden shadow-sm">
              <div className="bg-[#f8fafc] border-b border-[#e1e6eb] border-solid flex gap-[12px] items-start p-[16px] w-full">
                <span className="font-sora font-bold text-[#0f1b2d] text-[13px] w-[160px] shrink-0">Category</span>
                <span className="font-sora font-bold text-[#0f1b2d] text-[13px] flex-[1_0_0]">Limit</span>
                <span className="font-sora font-bold text-[#0f1b2d] text-[13px] flex-[1_0_0]">Window</span>
                <span className="font-sora font-bold text-[#0f1b2d] text-[13px] flex-[1_0_0]">Backoff</span>
              </div>
              
              <div className="border-b border-[#e1e6eb] border-solid flex gap-[12px] items-start p-[16px] w-full">
                <span className="font-sora font-bold text-[#0f1b2d] text-[14px] w-[160px] shrink-0">Stream Provisioning</span>
                <span className="font-inter text-[#4f5e74] text-[13px] flex-[1_0_0]">10 requests</span>
                <span className="font-inter text-[#4f5e74] text-[13px] flex-[1_0_0]">1 second</span>
                <span className="font-inter text-[#4f5e74] text-[13px] flex-[1_0_0]">Exponential</span>
              </div>

              <div className="border-b border-[#e1e6eb] border-solid flex gap-[12px] items-start p-[16px] w-full">
                <span className="font-sora font-bold text-[#0f1b2d] text-[14px] w-[160px] shrink-0">General API Requests</span>
                <span className="font-inter text-[#4f5e74] text-[13px] flex-[1_0_0]">120 requests</span>
                <span className="font-inter text-[#4f5e74] text-[13px] flex-[1_0_0]">1 minute</span>
                <span className="font-inter text-[#4f5e74] text-[13px] flex-[1_0_0]">Linear</span>
              </div>

              <div className="flex gap-[12px] items-start p-[16px] w-full">
                <span className="font-sora font-bold text-[#0f1b2d] text-[14px] w-[160px] shrink-0">Metadata Updates</span>
                <span className="font-inter text-[#4f5e74] text-[13px] flex-[1_0_0]">60 requests</span>
                <span className="font-inter text-[#4f5e74] text-[13px] flex-[1_0_0]">1 minute</span>
                <span className="font-inter text-[#4f5e74] text-[13px] flex-[1_0_0]">None required</span>
              </div>
            </div>

            {/* Code Panel */}
            <div className="bg-[#06080c] border-[1.5px] border-[#232b3a] border-solid flex flex-col rounded-[12px] overflow-hidden shadow-sm">
              <div className="bg-[#0c0e14] border-b border-[#232b3a] border-solid flex items-center p-[16px]">
                <span className="font-sora font-bold text-[#ef4444] text-[13px]">429 TOO MANY REQUESTS</span>
              </div>
              <div className="p-[20px] w-full font-mono text-[13px] text-white whitespace-pre-wrap leading-[24px]">
                {`{\n`}
                &nbsp;&nbsp;<span className="text-[#ff7b72]">"error"</span>
                <span>: "rate_limit_exceeded",\n</span>
                &nbsp;&nbsp;<span className="text-[#ff7b72]">"retry_after"</span>
                <span>: 15,\n</span>
                &nbsp;&nbsp;<span className="text-[#ff7b72]">"message"</span>
                <span>: "Limit of 10 stream provisions per second exceeded."\n</span>
                {`}`}
              </div>
            </div>

          </div>

          {/* Feature Cards (Right Panel) */}
          <div className="flex flex-[1_0_0] flex-col gap-[20px] w-full">
            
            {/* Card 1 */}
            <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid flex flex-col lg:flex-row gap-[16px] lg:gap-[24px] items-start lg:items-center p-[24px] rounded-[12px] shadow-sm">
              <span className="font-sora font-bold text-[#34d4ca] text-[14px] w-full lg:w-[120px] shrink-0">CONCURRENT STREAMS</span>
              <span className="font-sora font-bold text-[#0f1b2d] text-[24px] w-full lg:w-[150px] shrink-0">Up to 100 Active</span>
              <p className="font-inter text-[#4f5e74] text-[14px] leading-[22px] flex-[1_0_0]">
                Run up to 100 concurrent live streams globally per account workspace. Contact us to lift this limit.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid flex flex-col lg:flex-row gap-[16px] lg:gap-[24px] items-start lg:items-center p-[24px] rounded-[12px] shadow-sm">
              <span className="font-sora font-bold text-[#34d4ca] text-[14px] w-full lg:w-[120px] shrink-0">API REQUEST RATE</span>
              <span className="font-sora font-bold text-[#0f1b2d] text-[24px] w-full lg:w-[150px] shrink-0">10k / Hr Burst</span>
              <p className="font-inter text-[#4f5e74] text-[14px] leading-[22px] flex-[1_0_0]">
                Smooth bucket algorithm allows for rapid scaling and heavy burst rates up to 10,000 requests per hour.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid flex flex-col lg:flex-row gap-[16px] lg:gap-[24px] items-start lg:items-center p-[24px] rounded-[12px] shadow-sm">
              <span className="font-sora font-bold text-[#4f5e74] text-[14px] w-full lg:w-[120px] shrink-0">THROUGHPUT LIMITS</span>
              <span className="font-sora font-bold text-[#0f1b2d] text-[24px] w-full lg:w-[150px] shrink-0">2.5 Gbps Ingest Bandwidth</span>
              <p className="font-inter text-[#4f5e74] text-[14px] leading-[22px] flex-[1_0_0]">
                High capacity architecture handles complex multiple SRT and RTMP streams up to 2.5 Gbps total ingress.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
