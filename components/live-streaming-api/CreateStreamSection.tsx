import React from 'react';
import { Copy } from 'lucide-react';

export default function CreateStreamSection() {
  return (
    <section className="relative w-full border-b border-[#e1e6eb] min-h-[585px] flex flex-col items-start bg-white px-6 xl:px-[112px] py-[100px] overflow-hidden">
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

      <div className="relative z-10 w-full flex flex-col items-start gap-[56px]">
        
        {/* Header */}
        <div className="flex flex-col gap-[16px] w-full">
          <h2 className="font-sora font-bold text-[#0f1b2d] text-[38px] leading-[48px]">
            Create a live stream
          </h2>
          <p className="font-inter font-normal text-[#4f5e74] text-[18px] leading-[28px]">
            Interactive request/response explorer with environment and auth preflight.
          </p>
        </div>

        {/* Split Panel */}
        <div className="flex flex-col lg:flex-row gap-[24px] w-full items-stretch">
          
          {/* Request Panel */}
          <div className="bg-[#06080c] border-[#232b3a] border-[1.5px] border-solid flex flex-[1_0_0] flex-col items-start overflow-hidden relative rounded-[12px] shadow-lg">
            <div className="bg-[#0c0e14] border-[#232b3a] border-b border-solid flex flex-wrap items-center justify-between p-[16px] w-full gap-4">
              <div className="flex items-center gap-[12px]">
                <div className="bg-[#1a2330] px-[12px] py-[6px] rounded-[6px]">
                  <span className="font-sora font-bold text-[#34d4ca] text-[12px]">cURL</span>
                </div>
                <span className="font-sora font-bold text-[#aab3c4] text-[12px] cursor-pointer hover:text-white transition-colors">Node.js</span>
                <span className="font-sora font-bold text-[#aab3c4] text-[12px] cursor-pointer hover:text-white transition-colors">Python</span>
                <span className="font-sora font-bold text-[#aab3c4] text-[12px] cursor-pointer hover:text-white transition-colors">Go</span>
              </div>
              <div className="bg-[#10b9811a] border border-[#10b9814d] border-solid px-[8px] py-[4px] rounded-[4px]">
                <span className="font-sora font-bold text-[#34d4ca] text-[11px] uppercase tracking-wider">SANDBOX-ENV</span>
              </div>
            </div>
            <div className="flex flex-col gap-[16px] items-start p-[24px] w-full overflow-x-auto min-h-[220px]">
              <p className="font-mono text-[#8b949e] text-[13px] leading-[20px]">
                // Preflight Auth & Stream Provision Request
              </p>
              <p className="font-mono text-white text-[13px] leading-[22px] whitespace-nowrap">
                <span className="text-[#ff7b72]">curl</span>{' '}
                <span className="text-[#79c0ff]">-X</span> POST \'https://api.zoiko.com/v1/streams\' \<br/>
                <span className="text-[#79c0ff]">-H</span> \'Authorization: Bearer sk_test_51Mz...\' \<br/>
                <span className="text-[#79c0ff]">-d</span> <span className="text-[#a5d6ff]">'{`{ "name": "API Launch Stream", "latency_mode": "ultra_low" }`}'</span>
              </p>
              <div className="mt-auto pt-4">
                <button className="bg-[#1b2330] flex items-center gap-[8px] px-[16px] py-[8px] rounded-[6px] hover:bg-[#232b3a] transition-colors">
                  <Copy size={14} className="text-white" />
                  <span className="font-sora font-bold text-white text-[12px]">Copy request</span>
                </button>
              </div>
            </div>
          </div>

          {/* Response Panel */}
          <div className="bg-[#06080c] border-[#232b3a] border-[1.5px] border-solid flex flex-[1_0_0] flex-col items-start overflow-hidden relative rounded-[12px] shadow-lg">
            <div className="bg-[#0c0e14] border-[#232b3a] border-b border-solid flex items-center justify-between p-[16px] w-full">
              <span className="font-sora font-bold text-white text-[13px]">RESPONSE JSON</span>
              <div className="bg-[#10b9811a] border border-[#10b9814d] border-solid flex items-center gap-[6px] px-[8px] py-[4px] rounded-[4px]">
                <div className="w-[6px] h-[6px] rounded-full bg-[#10b981]" />
                <span className="font-sora font-bold text-[#10b981] text-[11px]">201 CREATED</span>
              </div>
            </div>
            <div className="flex flex-col gap-[16px] items-start p-[24px] w-full overflow-x-auto min-h-[220px]">
              <pre className="font-mono text-[#a5d6ff] text-[13px] leading-[22px] m-0">
{`{
  `}
<span className="text-[#79c0ff]">"id"</span>{`: "stream_8817da3a4f",
  `}
<span className="text-[#79c0ff]">"status"</span>{`: "idle",
  `}
<span className="text-[#79c0ff]">"latency_mode"</span>{`: "ultra_low",
  `}
<span className="text-[#79c0ff]">"ingest_endpoint"</span>{`: "rtmps://ingest.zoiko.com:443/live",
  `}
<span className="text-[#79c0ff]">"stream_key"</span>{`: "zk_live_••••••••••••••••",
  `}
<span className="text-[#79c0ff]">"created_at"</span>{`: 1774026859
}`}
              </pre>
              <div className="mt-auto pt-4">
                <button className="bg-[#1b2330] flex items-center gap-[8px] px-[16px] py-[8px] rounded-[6px] hover:bg-[#232b3a] transition-colors">
                  <Copy size={14} className="text-white" />
                  <span className="font-sora font-bold text-white text-[12px]">Copy response</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
