import React from 'react';
import { Code } from 'lucide-react';

export default function BuildStackSection() {
  return (
    <section className="relative w-full border-b border-[#232b3a] min-h-[734px] flex flex-col items-start bg-[#06080c] px-6 xl:px-[112px] py-[120px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src="/images/live-streaming-api/build-stack-bg.png"
          alt="" 
          className="w-full h-full object-cover opacity-60" 
        />
        <div className="absolute bg-[rgba(10,13,20,0.88)] inset-0" />
      </div>

      <div className="relative z-10 w-full flex flex-col items-start gap-[56px]">
        
        {/* Header */}
        <div className="flex flex-col gap-[16px] w-full">
          <h2 className="font-sora font-bold text-white text-[38px] tracking-[-0.8px] leading-[48px]">
            Build with your stack
          </h2>
          <p className="font-inter font-normal text-[#aab3c4] text-[18px] leading-[28px]">
            SDKs, sample applications, and production-safe code examples.
          </p>
        </div>

        {/* Code Sandbox */}
        <div className="bg-[#10151e] border-[1.5px] border-[#232b3a] border-solid flex flex-col w-full rounded-[12px] overflow-hidden shadow-sm">
          
          {/* Header Bar */}
          <div className="bg-[#0c0e14] border-b border-[#232b3a] border-solid flex flex-col sm:flex-row items-start sm:items-center justify-between p-[16px] gap-4">
            
            {/* Tabs */}
            <div className="flex gap-[12px] items-center overflow-x-auto w-full sm:w-auto">
              <div className="bg-[#1a2330] px-[12px] py-[6px] rounded-[6px]">
                <span className="font-sora font-bold text-[#34d4ca] text-[12px] whitespace-nowrap">Node.js</span>
              </div>
              <span className="font-sora font-bold text-[#aab3c4] text-[12px] whitespace-nowrap cursor-pointer hover:text-white transition-colors">Python</span>
              <span className="font-sora font-bold text-[#aab3c4] text-[12px] whitespace-nowrap cursor-pointer hover:text-white transition-colors">Go</span>
              <span className="font-sora font-bold text-[#aab3c4] text-[12px] whitespace-nowrap cursor-pointer hover:text-white transition-colors">Java</span>
              <span className="font-sora font-bold text-[#aab3c4] text-[12px] whitespace-nowrap cursor-pointer hover:text-white transition-colors">Ruby</span>
            </div>

            {/* Badge */}
            <div className="bg-[#10b9811a] border border-[#10b9814d] border-solid px-[8px] py-[4px] rounded-[4px] shrink-0">
              <span className="font-sora font-bold text-[#34d4ca] text-[11px] uppercase">npm v4.2.0</span>
            </div>

          </div>

          {/* Code Body */}
          <div className="p-[24px] w-full bg-[#10151e]">
            <div className="font-mono text-[13px] text-white whitespace-pre-wrap leading-[24px] overflow-x-auto">
              <span className="text-[#ff7b72]">const</span>
              <span>{` ZoikoStream = `}</span>
              <span className="text-[#d2a8ff]">require</span>
              <span>{`('@zoiko/stream-sdk');\n`}</span>
              <span className="text-[#ff7b72]">const</span>
              <span>{` zoiko = `}</span>
              <span className="text-[#ff7b72]">new</span>
              <span className="text-[#d2a8ff]"> ZoikoStream</span>
              <span>{`({ apiKey: process.env.ZOIKO_API_KEY });\n\n`}</span>
              <span className="text-[#8b949e]">{`// Initialize stream\n`}</span>
              <span className="text-[#ff7b72]">const</span>
              <span>{` stream = `}</span>
              <span className="text-[#ff7b72]">await</span>
              <span>{` zoiko.streams.`}</span>
              <span className="text-[#d2a8ff]">create</span>
              <span>{`({\n  name: `}</span>
              <span className="text-[#a5d6ff]">"API Launch Stream"</span>
              <span>{`,\n  latency_mode: `}</span>
              <span className="text-[#a5d6ff]">"ultra_low"</span>
              <span>{`\n});`}</span>
            </div>
          </div>

        </div>

        {/* SDK Cards */}
        <div className="flex flex-col md:flex-row gap-[24px] w-full items-stretch">
          
          {/* Node.js Card */}
          <div className="bg-[#10151e] border border-[#232b3a] border-solid flex flex-[1_0_0] flex-col gap-[16px] p-[24px] rounded-[12px] shadow-sm">
            <div className="flex items-center gap-[12px]">
              <Code size={24} className="text-[#34d4ca]" />
              <h4 className="font-sora font-bold text-white text-[18px]">Node.js SDK</h4>
            </div>
            <div className="flex flex-col gap-[4px] font-inter text-[#aab3c4] text-[13px]">
              <span>Version: v4.2.0</span>
              <span>Tested: 2 days ago</span>
            </div>
            <div className="w-full h-[1px] bg-[#232b3a]" />
            <span className="font-mono text-[#34d4ca] text-[13px] break-all">npm install @zoiko/stream</span>
          </div>

          {/* Python Card */}
          <div className="bg-[#10151e] border border-[#232b3a] border-solid flex flex-[1_0_0] flex-col gap-[16px] p-[24px] rounded-[12px] shadow-sm">
            <div className="flex items-center gap-[12px]">
              <Code size={24} className="text-[#4a8cfb]" />
              <h4 className="font-sora font-bold text-white text-[18px]">Python SDK</h4>
            </div>
            <div className="flex flex-col gap-[4px] font-inter text-[#aab3c4] text-[13px]">
              <span>Version: v2.1.4</span>
              <span>Tested: 5 days ago</span>
            </div>
            <div className="w-full h-[1px] bg-[#232b3a]" />
            <span className="font-mono text-[#4a8cfb] text-[13px] break-all">pip install zoiko-stream</span>
          </div>

          {/* Go Card */}
          <div className="bg-[#10151e] border border-[#232b3a] border-solid flex flex-[1_0_0] flex-col gap-[16px] p-[24px] rounded-[12px] shadow-sm">
            <div className="flex items-center gap-[12px]">
              <Code size={24} className="text-[#34d4ca]" />
              <h4 className="font-sora font-bold text-white text-[18px]">Go Module</h4>
            </div>
            <div className="flex flex-col gap-[4px] font-inter text-[#aab3c4] text-[13px]">
              <span>Version: v1.8.2</span>
              <span>Tested: Today</span>
            </div>
            <div className="w-full h-[1px] bg-[#232b3a]" />
            <span className="font-mono text-[#34d4ca] text-[13px] break-all">go get github.com/zoiko/stream</span>
          </div>

        </div>

      </div>
    </section>
  );
}
