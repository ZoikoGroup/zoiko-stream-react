import React from 'react';
import { Key, Eye, Copy, TriangleAlert } from 'lucide-react';

export default function EncoderConnectionSection() {
  return (
    <section className="relative w-full border-b border-[#232b3a] min-h-[662px] flex flex-col items-start bg-[#06080c] px-6 xl:px-[112px] py-[120px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src="/images/live-streaming-api/connect-encoder-bg.png"
          alt="" 
          className="w-full h-full object-cover opacity-80" 
        />
        <div className="absolute bg-[rgba(10,15,26,0.75)] inset-0" />
      </div>

      <div className="relative z-10 w-full flex flex-col items-start gap-[56px]">
        
        {/* Header */}
        <div className="flex flex-col gap-[16px] w-full">
          <h2 className="font-sora font-bold text-white text-[38px] leading-[48px]">
            Connect your encoder
          </h2>
          <p className="font-inter font-normal text-[#aab3c4] text-[18px] leading-[28px]">
            Ingest credentials and protocol handoff — treat publishing credentials as secrets.
          </p>
        </div>

        {/* Credentials Display Card */}
        <div className="bg-[#06080c] border-[#232b3a] border-[1.5px] border-solid flex flex-col gap-[28px] items-start p-[32px] w-full rounded-[16px] shadow-lg">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-0 items-start md:items-center justify-between w-full">
            <div className="flex items-center gap-[12px]">
              <div className="bg-[#232b3a] p-[8px] rounded-[8px]">
                <Key size={20} className="text-[#aab3c4]" />
              </div>
              <h3 className="font-sora font-bold text-white text-[18px]">
                Stream Ingest Credentials
              </h3>
            </div>

            <div className="flex flex-wrap items-center gap-[8px]">
              <div className="border-[#34d4ca] border-[1.5px] border-solid px-[12px] py-[6px] rounded-[100px] cursor-pointer">
                <span className="font-sora font-bold text-[#34d4ca] text-[12px]">RTMPS</span>
              </div>
              <div className="bg-[#1a2330] px-[12px] py-[6px] rounded-[100px] cursor-pointer hover:bg-[#232b3a] transition-colors">
                <span className="font-sora font-bold text-[#aab3c4] text-[12px]">SRT</span>
              </div>
              <div className="bg-[#1a2330] px-[12px] py-[6px] rounded-[100px] cursor-pointer hover:bg-[#232b3a] transition-colors">
                <span className="font-sora font-bold text-[#aab3c4] text-[12px]">WHIP (WebRTC)</span>
              </div>
            </div>
          </div>

          <div className="w-full h-[1px] bg-[#232b3a]" />

          {/* Form Fields */}
          <div className="flex flex-col gap-[20px] w-full">
            
            {/* Field 1 */}
            <div className="flex flex-col gap-[8px] w-full">
              <label className="font-sora font-bold text-white text-[14px]">
                INGEST URL
              </label>
              <div className="bg-[#141924] border border-[#232b3a] border-solid flex flex-wrap items-center justify-between p-[16px] rounded-[8px] gap-4">
                <span className="font-mono text-white text-[14px] break-all">
                  rtmps://ingest.zoikostream.com:443/live
                </span>
                <button className="flex items-center gap-[6px] hover:opacity-80 transition-opacity">
                  <Copy size={16} className="text-[#34d4ca]" />
                  <span className="font-sora font-bold text-[#34d4ca] text-[13px]">Copy</span>
                </button>
              </div>
            </div>

            {/* Field 2 */}
            <div className="flex flex-col gap-[8px] w-full">
              <label className="font-sora font-bold text-white text-[14px]">
                STREAM KEY
              </label>
              <div className="bg-[#141924] border border-[#232b3a] border-solid flex flex-wrap items-center justify-between p-[16px] rounded-[8px] gap-4">
                <span className="font-mono text-[#aab3c4] text-[14px] break-all">
                  zk_live_••••••••••••••••••••••••••••••••
                </span>
                <div className="flex items-center gap-[16px]">
                  <button className="flex items-center gap-[6px] hover:opacity-80 transition-opacity">
                    <Eye size={16} className="text-[#aab3c4]" />
                    <span className="font-sora font-bold text-[#aab3c4] text-[13px]">Reveal</span>
                  </button>
                  <button className="flex items-center gap-[6px] hover:opacity-80 transition-opacity">
                    <Copy size={16} className="text-[#34d4ca]" />
                    <span className="font-sora font-bold text-[#34d4ca] text-[13px]">Copy</span>
                  </button>
                </div>
              </div>
            </div>

          </div>

          <div className="w-full h-[1px] bg-[#232b3a]" />

          {/* Security Warning */}
          <div className="bg-[#fef3c71a] border border-[#fef3c733] border-solid flex gap-[12px] items-start p-[16px] rounded-[8px] w-full">
            <TriangleAlert size={20} className="text-[#fbbf24] shrink-0 mt-[2px]" />
            <p className="font-inter font-normal text-[#fbbf24] text-[13px] leading-[20px]">
              Stream keys grant streaming authorization to this stream endpoint. Keep keys hidden, regenerate them regularly, and avoid sharing them in plain text over unsecured public channels.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
