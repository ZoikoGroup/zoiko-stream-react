import React from 'react';
import { Airplay, Video, Archive, Settings, Activity, Database } from 'lucide-react';

export default function RecordingAssetsSection() {
  return (
    <section className="relative w-full border-b border-[#e1e6eb] min-h-[906px] flex flex-col items-start bg-white px-6 xl:px-[112px] py-[120px] overflow-hidden">
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
            Recording & assets
          </h2>
          <p className="font-inter font-normal text-[#4f5e74] text-[18px] leading-[28px]">
            Live-to-recorded continuity and asset management handoff.
          </p>
        </div>

        {/* Pipeline Flow */}
        <div className="flex flex-col md:flex-row w-full items-start md:items-center py-[16px] gap-[16px] md:gap-0 relative">
          
          {/* Step 1 */}
          <div className="flex flex-[1_0_0] items-center w-full relative">
            <div className="flex flex-col items-center gap-[16px] w-full z-10 relative">
              <div className="bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] flex items-center justify-center w-[64px] h-[64px] rounded-[32px] shadow-sm">
                <Airplay size={24} className="text-white" />
              </div>
              <div className="flex flex-col items-center gap-[4px] w-full">
                <span className="font-sora font-bold text-[#0f1b2d] text-[16px] text-center">1. LIVE STREAM</span>
                <span className="font-inter text-[#4f5e74] text-[13px] text-center leading-[18px]">Real-time active broadcast ingest</span>
              </div>
            </div>
            <div className="hidden md:block absolute top-[32px] left-[50%] right-[-50%] h-[2px] bg-[#34d4ca] z-0" />
          </div>

          {/* Step 2 */}
          <div className="flex flex-[1_0_0] items-center w-full relative">
            <div className="flex flex-col items-center gap-[16px] w-full z-10 relative">
              <div className="bg-[#f8fafc] border-2 border-[#e1e6eb] border-solid flex items-center justify-center w-[64px] h-[64px] rounded-[32px]">
                <Video size={24} className="text-[#0f1b2d]" />
              </div>
              <div className="flex flex-col items-center gap-[4px] w-full">
                <span className="font-sora font-bold text-[#0f1b2d] text-[16px] text-center">2. LIVE RECORDING</span>
                <span className="font-inter text-[#4f5e74] text-[13px] text-center leading-[18px]">Synchronous segment capture & validation</span>
              </div>
            </div>
            <div className="hidden md:block absolute top-[32px] left-[50%] right-[-50%] h-[2px] bg-[#e1e6eb] z-0" />
          </div>

          {/* Step 3 */}
          <div className="flex flex-[1_0_0] items-center w-full relative">
            <div className="flex flex-col items-center gap-[16px] w-full z-10 relative">
              <div className="bg-[#f8fafc] border-2 border-[#e1e6eb] border-solid flex items-center justify-center w-[64px] h-[64px] rounded-[32px]">
                <Archive size={24} className="text-[#0f1b2d]" />
              </div>
              <div className="flex flex-col items-center gap-[4px] w-full">
                <span className="font-sora font-bold text-[#0f1b2d] text-[16px] text-center">3. MP4 / HLS ASSET</span>
                <span className="font-inter text-[#4f5e74] text-[13px] text-center leading-[18px]">Durable artifact mapped to asset API</span>
              </div>
            </div>
          </div>

        </div>

        {/* Cards Row */}
        <div className="flex flex-col md:flex-row gap-[24px] w-full items-stretch">
          
          {/* Card 1: Recording Policy */}
          <div className="bg-[#f8fafc] border-[1.5px] border-[#e1e6eb] border-solid flex flex-[1_0_0] flex-col rounded-[12px] min-h-[274px] shadow-sm">
            <div className="bg-[#f8fafc] border-b border-[#e1e6eb] border-solid flex items-center justify-between p-[24px]">
              <h4 className="font-sora font-bold text-[#0f1b2d] text-[18px]">Recording Policy</h4>
              <Settings size={24} className="text-[#0f1b2d]" />
            </div>
            <div className="flex flex-col gap-[16px] p-[24px] flex-grow">
              <p className="font-inter text-[#4f5e74] text-[14px] leading-[22px]">
                Set policies to automatically or manually record your streams. Toggle on the fly.
              </p>
              <div className="flex items-center gap-[12px]">
                <div className="w-[8px] h-[8px] bg-[#34d4ca] rounded-full" />
                <span className="font-sora font-bold text-[#0f1b2d] text-[14px]">Automatic (Always Record)</span>
              </div>
              <div className="flex items-center gap-[12px]">
                <div className="w-[8px] h-[8px] bg-[#4a8cfb] rounded-full" />
                <span className="font-sora font-bold text-[#0f1b2d] text-[14px]">Manual (API Triggered)</span>
              </div>
              <div className="flex items-center gap-[12px]">
                <div className="w-[8px] h-[8px] bg-[#aab3c4] rounded-full" />
                <span className="font-sora font-bold text-[#4f5e74] text-[14px]">Disabled</span>
              </div>
            </div>
          </div>

          {/* Card 2: Asset Readiness */}
          <div className="bg-[#f8fafc] border-[1.5px] border-[#e1e6eb] border-solid flex flex-[1_0_0] flex-col rounded-[12px] min-h-[274px] shadow-sm">
            <div className="bg-[#f8fafc] border-b border-[#e1e6eb] border-solid flex items-center justify-between p-[24px]">
              <h4 className="font-sora font-bold text-[#0f1b2d] text-[18px]">Asset Readiness</h4>
              <Activity size={24} className="text-[#0f1b2d]" />
            </div>
            <div className="flex flex-col gap-[16px] p-[24px] flex-grow">
              <p className="font-inter text-[#4f5e74] text-[14px] leading-[22px]">
                Webhooks fire state transitions immediately when files are ready for public delivery.
              </p>
              <div className="flex items-center gap-[12px]">
                <div className="w-[8px] h-[8px] bg-[#f59e0b] rounded-full" />
                <span className="font-sora font-bold text-[#0f1b2d] text-[14px]">processing (Transcoding)</span>
              </div>
              <div className="flex items-center gap-[12px]">
                <div className="w-[8px] h-[8px] bg-[#34d4ca] rounded-full" />
                <span className="font-sora font-bold text-[#0f1b2d] text-[14px]">ready (VOD Active)</span>
              </div>
              <div className="flex items-center gap-[12px]">
                <div className="w-[8px] h-[8px] bg-[#ef4444] rounded-full" />
                <span className="font-sora font-bold text-[#0f1b2d] text-[14px]">failed (Check Source)</span>
              </div>
            </div>
          </div>

          {/* Card 3: Retention Controls */}
          <div className="bg-[#f8fafc] border-[1.5px] border-[#e1e6eb] border-solid flex flex-[1_0_0] flex-col rounded-[12px] min-h-[274px] shadow-sm">
            <div className="bg-[#f8fafc] border-b border-[#e1e6eb] border-solid flex items-center justify-between p-[24px]">
              <h4 className="font-sora font-bold text-[#0f1b2d] text-[18px]">Retention Controls</h4>
              <Database size={24} className="text-[#0f1b2d]" />
            </div>
            <div className="flex flex-col gap-[16px] p-[24px] flex-grow">
              <p className="font-inter text-[#4f5e74] text-[14px] leading-[22px]">
                Manage storage costs automatically. Apply granular retention policies to recorded artifacts.
              </p>
              <div className="flex flex-col gap-[4px]">
                <span className="font-sora font-bold text-[#4f5e74] text-[12px] uppercase">STORAGE DURATION</span>
                <span className="font-sora font-bold text-[#0f1b2d] text-[16px]">90 Days Default</span>
              </div>
              <div className="flex flex-col gap-[4px] mt-2">
                <span className="font-sora font-bold text-[#4f5e74] text-[12px] uppercase">DELETION RULES</span>
                <span className="font-sora font-bold text-[#0f1b2d] text-[16px]">Cascade to secondary backups</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
