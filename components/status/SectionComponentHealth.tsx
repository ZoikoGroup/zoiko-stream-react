import React from 'react';
import StatusPill from './StatusPill';

const COMPONENTS = [
  "Streaming & Playback",
  "Live Events",
  "Ingest & Encoding",
  "APIs & Developer Platform",
  "Dashboard & Authentication",
  "Media Processing & Recordings",
];

export default function SectionComponentHealth() {
  return (
    <div id="component-health" className="bg-white border border-[#dde2ea] rounded-[16px] p-[26px]">
      <div className="flex items-center justify-between mb-[16px]">
        <h2 className="font-sora font-bold text-[#2b2e35] text-[17px] tracking-[-0.17px] m-0">
          Component health
        </h2>
        <a href="#" className="font-inter font-semibold text-[#5b8def] text-[13px] no-underline whitespace-nowrap">
          View all components →
        </a>
      </div>
      <div className="flex flex-col">
        {COMPONENTS.map((name, index) => (
          <div
            key={name}
            className={`flex items-center justify-between gap-[16px] py-[16px] ${
              index < COMPONENTS.length - 1 ? "border-b border-[#dde2ea]" : ""
            }`}
          >
            <span className="font-inter font-semibold text-[#2b2e35] text-[14px]">{name}</span>
            <StatusPill />
          </div>
        ))}
      </div>
    </div>
  );
}
