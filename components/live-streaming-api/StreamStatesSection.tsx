import React from 'react';
import { Circle, RefreshCw, Activity, AlertCircle, Square, TriangleAlert } from 'lucide-react';

export default function StreamStatesSection() {
  const cards = [
    {
      title: 'Idle',
      badge: 'GRAY',
      badgeColor: 'text-[#6b7280] bg-[#e5e7eb]',
      meaning: 'Provisioned but awaiting ingest signal.',
      action: 'Safely hand off stream key to encoder.',
      playback: '404 Not Found.'
    },
    {
      title: 'Connecting',
      badge: 'BLUE',
      badgeColor: 'text-[#4a8cfb] bg-[#dbeafe]',
      meaning: 'RTMP/SRT handshake initiated.',
      action: 'Wait for active live webhook verification.',
      playback: 'Initializing media buffer.'
    },
    {
      title: 'Live',
      badge: 'TEAL',
      badgeColor: 'text-[#34d4ca] bg-[#e0f2fe]',
      meaning: 'Ingesting and routing packets globally.',
      action: 'Trigger app player instantiation.',
      playback: 'Operational (low latency active).'
    },
    {
      title: 'Reconnecting',
      badge: 'AMBER',
      badgeColor: 'text-[#f59e0b] bg-[#fef3c7]',
      meaning: 'Publisher lost connection temporarily.',
      action: 'Show loading indicator; do not destroy player.',
      playback: 'Frozen on last frame (grace period).'
    },
    {
      title: 'Ended',
      badge: 'GRAY',
      badgeColor: 'text-[#6b7280] bg-[#f3f4f6]',
      meaning: 'Explicit teardown or session finalized.',
      action: 'Switch player to VOD playback URL.',
      playback: 'Redirecting to cold storage archive.'
    },
    {
      title: 'Failed',
      badge: 'RED',
      badgeColor: 'text-[#ef4444] bg-[#fee2e2]',
      meaning: 'Permanent handshake error or timeout.',
      action: 'Alert operator, verify credentials.',
      playback: 'Terminated (Stream closed).'
    }
  ];

  return (
    <section className="relative w-full border-b border-[#e1e6eb] min-h-[960px] flex flex-col items-start bg-white px-6 xl:px-[112px] py-[120px] overflow-hidden">
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
            Understand stream states
          </h2>
          <p className="font-inter font-normal text-[#4f5e74] text-[18px] leading-[28px]">
            Lifecycle state model, reconnect behavior, and state-change semantics.
          </p>
        </div>

        {/* State Timeline Diagram Container */}
        <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid flex flex-col gap-[24px] items-start p-[32px] w-full rounded-[16px] shadow-sm">
          <h3 className="font-sora font-bold text-[#0f1b2d] text-[14px] tracking-[1px] uppercase">
            STATE TRANSITION PIPELINE
          </h3>
          
          {/* Timeline Row */}
          <div className="flex flex-col md:flex-row w-full items-start md:items-center relative gap-[16px] md:gap-0 mt-[16px]">
            
            {/* Step 1 */}
            <div className="flex flex-[1_0_0] items-center w-full relative">
              <div className="flex flex-col items-center gap-[8px] w-full z-10 relative">
                <div className="bg-white border-2 border-[#6b7280] border-solid flex items-center justify-center w-[48px] h-[48px] rounded-[24px]">
                  <Circle size={20} className="text-[#6b7280]" />
                </div>
                <span className="font-sora font-bold text-[#0f1b2d] text-[13px]">Idle</span>
              </div>
              <div className="hidden md:block absolute top-[24px] left-[50%] right-[-50%] h-[2px] bg-[#e1e6eb] z-0" />
            </div>

            {/* Step 2 */}
            <div className="flex flex-[1_0_0] items-center w-full relative">
              <div className="flex flex-col items-center gap-[8px] w-full z-10 relative">
                <div className="bg-white border-2 border-[#4a8cfb] border-solid flex items-center justify-center w-[48px] h-[48px] rounded-[24px]">
                  <RefreshCw size={20} className="text-[#4a8cfb]" />
                </div>
                <span className="font-sora font-bold text-[#0f1b2d] text-[13px]">Connecting</span>
              </div>
              <div className="hidden md:block absolute top-[24px] left-[50%] right-[-50%] h-[2px] bg-[#e1e6eb] z-0" />
            </div>

            {/* Step 3 */}
            <div className="flex flex-[1_0_0] items-center w-full relative">
              <div className="flex flex-col items-center gap-[8px] w-full z-10 relative">
                <div className="bg-[#34d4ca] flex items-center justify-center w-[48px] h-[48px] rounded-[24px] shadow-md">
                  <Activity size={20} className="text-white" />
                </div>
                <span className="font-sora font-bold text-[#0f1b2d] text-[13px]">Live</span>
              </div>
              <div className="hidden md:block absolute top-[24px] left-[50%] right-[-50%] h-[2px] bg-[#e1e6eb] z-0" />
            </div>

            {/* Step 4 */}
            <div className="flex flex-[1_0_0] items-center w-full relative">
              <div className="flex flex-col items-center gap-[8px] w-full z-10 relative">
                <div className="bg-white border-2 border-[#f59e0b] border-solid flex items-center justify-center w-[48px] h-[48px] rounded-[24px]">
                  <AlertCircle size={20} className="text-[#f59e0b]" />
                </div>
                <span className="font-sora font-bold text-[#0f1b2d] text-[13px]">Reconnecting</span>
              </div>
              <div className="hidden md:block absolute top-[24px] left-[50%] right-[-50%] h-[2px] bg-[#e1e6eb] z-0" />
            </div>

            {/* Step 5 */}
            <div className="flex flex-[1_0_0] items-center w-full relative">
              <div className="flex flex-col items-center gap-[8px] w-full z-10 relative">
                <div className="bg-white border-2 border-[#6b7280] border-solid flex items-center justify-center w-[48px] h-[48px] rounded-[24px]">
                  <Square size={20} className="text-[#6b7280]" fill="currentColor" />
                </div>
                <span className="font-sora font-bold text-[#0f1b2d] text-[13px]">Ended</span>
              </div>
            </div>

          </div>

          <div className="bg-[#fef2f2] border border-[#fca5a5] border-solid flex flex-col md:flex-row gap-[16px] items-start md:items-center p-[16px] w-full rounded-[8px] mt-[16px]">
            <TriangleAlert size={20} className="text-[#ef4444] shrink-0" />
            <p className="font-inter text-[#ef4444] text-[13px] leading-[20px]">
              <span className="font-bold">Disconnected / Failed State Branch:</span> If a connection fails to establish or the reconnect backoff window (90s) expires, the stream transitions immediately to <span className="font-bold">Failed</span>. Live endpoints are decommissioned and must be re-provisioned.
            </p>
          </div>
        </div>

        {/* State Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] w-full">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-[#f8fafc] border border-[#e1e6eb] border-solid flex flex-col gap-[16px] items-start p-[24px] rounded-[12px] w-full hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between w-full">
                <h4 className="font-sora font-bold text-[#0f1b2d] text-[18px]">
                  {card.title}
                </h4>
                <div className={`px-[8px] py-[4px] rounded-[100px] ${card.badgeColor}`}>
                  <span className="font-sora font-bold text-[11px] leading-none uppercase">
                    {card.badge}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-[8px] w-full">
                <p className="font-inter text-[#4f5e74] text-[14px] leading-[22px]">
                  <span className="font-bold">Meaning:</span> {card.meaning}
                </p>
                <p className="font-inter text-[#4f5e74] text-[14px] leading-[22px]">
                  <span className="font-bold">Action:</span> {card.action}
                </p>
                <p className="font-inter text-[#4f5e74] text-[14px] leading-[22px]">
                  <span className="font-bold">Playback:</span> {card.playback}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
