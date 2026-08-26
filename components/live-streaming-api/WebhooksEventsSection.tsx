import React from 'react';
import { Zap, Share2, Server, Shield, CheckCircle } from 'lucide-react';

export default function WebhooksEventsSection() {
  return (
    <section className="relative w-full border-b border-[#e1e6eb] min-h-[898px] flex flex-col items-start bg-white px-6 xl:px-[112px] py-[120px] overflow-hidden">
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
          <h2 className="font-sora font-bold text-[#0f1b2d] text-[38px] tracking-[-0.8px] leading-[48px]">
            Webhooks & events
          </h2>
          <p className="font-inter font-normal text-[#4f5e74] text-[18px] leading-[28px]">
            React to state changes with verified event delivery.
          </p>
        </div>

        {/* Webhook Flow Pipeline */}
        <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid flex flex-col gap-[24px] items-start p-[32px] w-full rounded-[16px] shadow-sm">
          <h3 className="font-sora font-bold text-[#0f1b2d] text-[14px] tracking-[1px] uppercase">
            REAL-TIME EVENT DISPATCH PIPELINE
          </h3>

          <div className="flex flex-col md:flex-row w-full items-start md:items-center relative gap-[16px] md:gap-0 mt-[16px]">
            
            {/* Stage 1 */}
            <div className="flex flex-[1_0_0] items-center w-full relative">
              <div className="flex flex-col items-center gap-[8px] w-full z-10 relative">
                <div className="bg-white border border-[#e1e6eb] border-solid flex items-center justify-center w-[48px] h-[48px] rounded-[24px]">
                  <Zap size={18} className="text-[#0f1b2d]" />
                </div>
                <span className="font-sora font-bold text-[#0f1b2d] text-[13px] text-center">1. State Change</span>
              </div>
              <div className="hidden md:block absolute top-[24px] left-[50%] right-[-50%] h-[2px] bg-[#e1e6eb] z-0" />
            </div>

            {/* Stage 2 */}
            <div className="flex flex-[1_0_0] items-center w-full relative">
              <div className="flex flex-col items-center gap-[8px] w-full z-10 relative">
                <div className="bg-white border border-[#e1e6eb] border-solid flex items-center justify-center w-[48px] h-[48px] rounded-[24px]">
                  <Share2 size={18} className="text-[#0f1b2d]" />
                </div>
                <span className="font-sora font-bold text-[#0f1b2d] text-[13px] text-center">2. Webhook Sent</span>
              </div>
              <div className="hidden md:block absolute top-[24px] left-[50%] right-[-50%] h-[2px] bg-[#e1e6eb] z-0" />
            </div>

            {/* Stage 3 */}
            <div className="flex flex-[1_0_0] items-center w-full relative">
              <div className="flex flex-col items-center gap-[8px] w-full z-10 relative">
                <div className="bg-white border border-[#e1e6eb] border-solid flex items-center justify-center w-[48px] h-[48px] rounded-[24px]">
                  <Server size={18} className="text-[#0f1b2d]" />
                </div>
                <span className="font-sora font-bold text-[#0f1b2d] text-[13px] text-center">3. Your Endpoint</span>
              </div>
              <div className="hidden md:block absolute top-[24px] left-[50%] right-[-50%] h-[2px] bg-[#e1e6eb] z-0" />
            </div>

            {/* Stage 4 */}
            <div className="flex flex-[1_0_0] items-center w-full relative">
              <div className="flex flex-col items-center gap-[8px] w-full z-10 relative">
                <div className="bg-white border border-[#e1e6eb] border-solid flex items-center justify-center w-[48px] h-[48px] rounded-[24px]">
                  <Shield size={18} className="text-[#0f1b2d]" />
                </div>
                <span className="font-sora font-bold text-[#0f1b2d] text-[13px] text-center">4. Signature Check</span>
              </div>
              <div className="hidden md:block absolute top-[24px] left-[50%] right-[-50%] h-[2px] bg-[#e1e6eb] z-0" />
            </div>

            {/* Stage 5 */}
            <div className="flex flex-[1_0_0] items-center w-full relative">
              <div className="flex flex-col items-center gap-[8px] w-full z-10 relative">
                <div className="bg-white border border-[#e1e6eb] border-solid flex items-center justify-center w-[48px] h-[48px] rounded-[24px]">
                  <CheckCircle size={18} className="text-[#0f1b2d]" />
                </div>
                <span className="font-sora font-bold text-[#0f1b2d] text-[13px] text-center">5. Process Event</span>
              </div>
            </div>

          </div>
        </div>

        {/* Feature Cards Row */}
        <div className="flex flex-col md:flex-row gap-[24px] w-full">
          
          {/* Card 1 */}
          <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid flex flex-[1_0_0] flex-col items-start rounded-[12px] overflow-hidden">
            <div className="w-full h-[140px] relative shrink-0">
              <img 
                src="/images/live-streaming-api/webhooks-card-1.png" 
                alt="" 
                className="absolute inset-0 w-full h-full object-cover" 
              />
            </div>
            <div className="flex flex-col gap-[12px] items-start p-[20px] w-full">
              <h4 className="font-sora font-bold text-[#0f1b2d] text-[18px]">
                Signature Verification
              </h4>
              <p className="font-inter text-[#4f5e74] text-[13px] leading-[20px]">
                Validate authenticity of incoming payloads. Every webhook request includes a <code className="font-mono bg-[#e1e6eb] px-[4px] py-[2px] rounded-[4px] text-[#0f1b2d]">Zoiko-Signature</code> header to verify payloads originate strictly from our platform.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid flex flex-[1_0_0] flex-col items-start rounded-[12px] overflow-hidden">
            <div className="w-full h-[140px] relative shrink-0">
              <img 
                src="/images/live-streaming-api/webhooks-card-2.png" 
                alt="" 
                className="absolute inset-0 w-full h-full object-cover" 
              />
            </div>
            <div className="flex flex-col gap-[12px] items-start p-[20px] w-full">
              <h4 className="font-sora font-bold text-[#0f1b2d] text-[18px]">
                Delivery Retries
              </h4>
              <p className="font-inter text-[#4f5e74] text-[13px] leading-[20px]">
                Resilience built into event distribution. Failed deliveries (non-2xx responses) automatically trigger an exponential backoff schedule spanning up to 24 hours.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid flex flex-[1_0_0] flex-col items-start rounded-[12px] overflow-hidden">
            <div className="w-full h-[140px] relative shrink-0">
              <img 
                src="/images/live-streaming-api/webhooks-card-3.png" 
                alt="" 
                className="absolute inset-0 w-full h-full object-cover" 
              />
            </div>
            <div className="flex flex-col gap-[12px] items-start p-[20px] w-full">
              <h4 className="font-sora font-bold text-[#0f1b2d] text-[18px]">
                Event Log
              </h4>
              <p className="font-inter text-[#4f5e74] text-[13px] leading-[20px]">
                Audit history of all dispatched events. Access detailed response logs, latency metrics, and payload archives directly via the Zoiko Developer Console.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
