import React from 'react';

export default function SectionHero() {
  return (
    <div
      className="relative w-full px-6 lg:px-[101px] py-[60px] lg:py-[100px] flex flex-col lg:flex-row items-center gap-[48px] lg:gap-[24px] overflow-hidden"
      style={{ backgroundImage: 'linear-gradient(160deg, rgb(59, 61, 66) 0%, rgb(44, 46, 51) 100%)' }}
    >
      <div className="flex-1 flex flex-col items-start gap-[24px] max-w-[620px]">
        <div className="flex items-center gap-[8px]">
          <div className="h-[6px] w-[6px] bg-[#3fc9bd] rounded-full" />
          <p className="font-inter font-bold text-[#3fc9bd] text-[12.5px] uppercase tracking-[1.25px] m-0">
            Developer Relations
          </p>
        </div>
        <h1 className="font-sora font-bold text-white text-[34px] lg:text-[44px] leading-[1.14] tracking-[-0.44px] m-0">
          Build with ZoikoStream.
        </h1>
        <p className="font-inter font-normal text-[#c7cbd3] text-[15px] lg:text-[16px] leading-[1.6] m-0">
          Developer Relations connects developers with the resources, people and programs around ZoikoStream — from docs and APIs to community, events, open source and product feedback.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-[16px] w-full sm:w-auto">
          <button className="bg-gradient-to-r from-[#5dddd6] to-[#6da6fa] flex items-center justify-center px-[28px] py-[14px] rounded-[10px] w-full sm:w-auto hover:opacity-90 transition-opacity border-none cursor-pointer">
            <span className="font-inter font-semibold text-[#1c2430] text-[15px] whitespace-nowrap">
              Explore developer resources
            </span>
          </button>
          <button className="border border-[rgba(255,255,255,0.3)] border-solid bg-transparent flex items-center justify-center px-[28px] py-[14px] rounded-[10px] w-full sm:w-auto hover:bg-[rgba(255,255,255,0.1)] transition-colors cursor-pointer">
            <span className="font-inter font-semibold text-white text-[15px] whitespace-nowrap">
              Connect with Developer Relations
            </span>
          </button>
        </div>
        <div className="lg:hidden flex items-center gap-[24px]">
          <span className="font-inter font-semibold text-white text-[13.5px]">View API reference →</span>
          <span className="font-inter font-semibold text-white text-[13.5px]">View changelog →</span>
        </div>
        <div className="border border-[#565a63] border-solid rounded-[12px] w-full flex flex-col sm:flex-row overflow-hidden mt-[16px]">
          <div className="flex-1 px-[19px] py-[15px] border-b sm:border-b-0 sm:border-r border-[#565a63] border-solid">
            <p className="font-inter font-bold text-white text-[13.5px] m-0 mb-[4px]">Need help?</p>
            <p className="font-inter font-normal text-[#c7cbd3] text-[12.5px] m-0">Support</p>
          </div>
          <div className="flex-1 px-[19px] py-[15px] border-b sm:border-b-0 sm:border-r border-[#565a63] border-solid">
            <p className="font-inter font-bold text-white text-[13.5px] m-0 mb-[4px]">Service health?</p>
            <p className="font-inter font-normal text-[#c7cbd3] text-[12.5px] m-0">System Status</p>
          </div>
          <div className="flex-1 px-[16px] py-[15px]">
            <p className="font-inter font-bold text-white text-[13.5px] m-0 mb-[4px]">Security issue?</p>
            <p className="font-inter font-normal text-[#c7cbd3] text-[12.5px] m-0">Vulnerability Disclosure</p>
          </div>
        </div>
      </div>
      <div className="flex-1 w-full lg:w-auto max-w-[596px]">
        <div className="bg-[#232529] border border-[#565a63] border-solid rounded-[14px] overflow-hidden shadow-[0px_30px_60px_-25px_rgba(0,0,0,0.5)]">
          <div className="border-b border-[#565a63] border-solid px-[16px] py-[12px] flex items-center gap-[8px]">
            <div className="size-[10px] rounded-full bg-[#565a63]" />
            <div className="size-[10px] rounded-full bg-[#565a63]" />
            <div className="size-[10px] rounded-full bg-[#565a63]" />
          </div>
          <pre className="font-mono text-[13px] leading-[1.75] p-[20px] m-0 overflow-x-auto whitespace-pre-wrap">
            <span className="text-[#6a707d]">{"// Create a live stream with the ZoikoStream API"}</span>{"\n"}
            <span className="text-[#7ee3d8]">const</span>
            <span className="text-[#c7cbd3]">{" stream = "}</span>
            <span className="text-[#7ee3d8]">await</span>
            <span className="text-[#c7cbd3]">{" zoiko."}</span>
            <span className="text-[#9fb8ff]">streams</span>
            <span className="text-[#c7cbd3]">.</span>
            <span className="text-[#9fb8ff]">create</span>
            <span className="text-[#c7cbd3]">{"({"}</span>{"\n"}
            <span className="text-[#c7cbd3]">{"  title: "}</span>
            <span className="text-[#f2b866]">{'"Quarterly product update"'}</span>
            <span className="text-[#c7cbd3]">,</span>{"\n"}
            <span className="text-[#c7cbd3]">{"  playback_policy: "}</span>
            <span className="text-[#f2b866]">{'"public"'}</span>
            <span className="text-[#c7cbd3]">,</span>{"\n"}
            <span className="text-[#c7cbd3]">{"  latency_mode: "}</span>
            <span className="text-[#f2b866]">{'"low"'}</span>{"\n"}
            <span className="text-[#c7cbd3]">{"});"}</span>{"\n\n"}
            <span className="text-[#7ee3d8]">console</span>
            <span className="text-[#c7cbd3]">.</span>
            <span className="text-[#9fb8ff]">log</span>
            <span className="text-[#c7cbd3]">(stream.playback_url);</span>{"\n"}
            <span className="text-[#6a707d]">{"// → https://stream.zoikostream.com/abc123"}</span>
          </pre>
        </div>
      </div>
    </div>
  );
}
