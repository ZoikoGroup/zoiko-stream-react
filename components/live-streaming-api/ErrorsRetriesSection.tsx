import React from 'react';
import { AlertTriangle } from 'lucide-react';

export default function ErrorsRetriesSection() {
  return (
    <section className="relative w-full border-b border-[#232b3a] min-h-[755px] flex flex-col items-start bg-[#06080c] px-6 xl:px-[112px] py-[120px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src="/images/live-streaming-api/errors-bg.png"
          alt="" 
          className="w-full h-full object-cover opacity-60" 
        />
        <div className="absolute bg-[rgba(10,13,20,0.88)] inset-0" />
      </div>

      <div className="relative z-10 w-full flex flex-col items-start gap-[64px]">
        
        {/* Header */}
        <div className="flex flex-col gap-[16px] w-full">
          <h2 className="font-sora font-bold text-white text-[38px] tracking-[-0.8px] leading-[48px]">
            Errors, retries & unknown outcomes
          </h2>
          <p className="font-inter font-normal text-[#aab3c4] text-[18px] leading-[28px]">
            Error anatomy, safe retries, idempotency, and timeout ambiguity.
          </p>
        </div>

        {/* Split Panel */}
        <div className="flex flex-col lg:flex-row gap-[24px] w-full items-stretch">
          
          {/* Anatomy Card */}
          <div className="bg-[#10151e] border-[1.5px] border-[#232b3a] border-solid flex flex-[1_0_0] flex-col rounded-[12px] overflow-hidden shadow-sm">
            <div className="bg-[#0c0e14] border-b border-[#232b3a] border-solid flex items-center justify-between p-[16px]">
              <span className="font-sora font-bold text-[#ef4444] text-[14px]">ERROR RESPONSE ANATOMY</span>
              <div className="bg-[#ef44441a] border border-[#ef44444d] border-solid px-[8px] py-[4px] rounded-[4px]">
                <span className="font-sora font-bold text-[#ef4444] text-[11px]">400 BAD REQUEST</span>
              </div>
            </div>
            
            <div className="flex flex-col gap-[20px] p-[24px] w-full flex-grow">
              <div className="font-mono text-[#aab3c4] text-[13px] leading-[24px] whitespace-pre-wrap break-all">
                {`{\n`}
                &nbsp;&nbsp;<span className="text-[#ff7b72]">"type"</span>
                <span>: "invalid_request_error",</span>
                <br />
                &nbsp;&nbsp;<span className="text-[#ff7b72]">"code"</span>
                <span>: "latency_unsupported",</span>
                <br />
                &nbsp;&nbsp;<span className="text-[#ff7b72]">"message"</span>
                <span>: "The selected protocol does not support ultra-low latency.",</span>
                <br />
                &nbsp;&nbsp;<span className="text-[#ff7b72]">"request_id"</span>
                <span>: "req_99a81cde2f",</span>
                <br />
                &nbsp;&nbsp;<span className="text-[#ff7b72]">"docs_url"</span>
                <span>: "https://zoiko.com/docs/errors/latency"</span>
                <br />
                {`}`}
              </div>
              
              <div className="w-full h-[1px] bg-[#232b3a] my-2" />
              
              <div className="flex items-start gap-[12px] w-full">
                <AlertTriangle size={18} className="text-[#fbbf24] shrink-0 mt-[2px]" />
                <p className="font-inter text-[#fbbf24] text-[13px] leading-[20px] flex-[1_0_0]">
                  Recommendation: Do not retry without modifying latency parameters.
                </p>
              </div>
            </div>
          </div>

          {/* Decision Tree Card */}
          <div className="bg-[#10151e] border-[1.5px] border-[#232b3a] border-solid flex flex-[1_0_0] flex-col gap-[24px] p-[32px] rounded-[12px] shadow-sm justify-center">
            <h3 className="font-sora font-bold text-white text-[18px]">
              Safe Recovery Decision Path
            </h3>
            
            <div className="flex flex-col gap-[16px] w-full">
              
              {/* Node 1 */}
              <div className="bg-[#1b2330] border border-[#232b3a] border-solid flex items-center justify-between p-[16px] rounded-[8px]">
                <div className="flex items-center gap-[12px]">
                  <div className="w-[8px] h-[8px] bg-[#34d4ca] rounded-full shrink-0" />
                  <span className="font-sora font-bold text-white text-[15px]">Timeout after mutation?</span>
                </div>
                <span className="font-sora font-normal text-[#34d4ca] text-[11px] uppercase ml-2 text-right">STEP 01</span>
              </div>

              {/* Node 2 */}
              <div className="bg-[#1b2330] border border-[#232b3a] border-solid flex items-center justify-between p-[16px] rounded-[8px]">
                <div className="flex items-center gap-[12px]">
                  <div className="w-[8px] h-[8px] bg-[#4a8cfb] rounded-full shrink-0" />
                  <span className="font-sora font-bold text-white text-[15px]">Is Idempotency supported?</span>
                </div>
                <span className="font-sora font-normal text-[#4a8cfb] text-[11px] uppercase ml-2 text-right">STEP 02</span>
              </div>

              {/* Node 3 */}
              <div className="bg-[#1b2330] border border-[#232b3a] border-solid flex items-center justify-between p-[16px] rounded-[8px]">
                <div className="flex items-center gap-[12px]">
                  <div className="w-[8px] h-[8px] bg-[#34d4ca] rounded-full shrink-0" />
                  <span className="font-sora font-bold text-white text-[15px]">Lookup resource or safe retry</span>
                </div>
                <span className="font-sora font-normal text-[#34d4ca] text-[11px] uppercase ml-2 text-right">RESOLVED</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
