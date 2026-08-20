import React from 'react';
import Image from 'next/image';

const tableHeaders = [
  { label: 'OUTPUT TARGET', width: '200px' },
  { label: 'LANGUAGE', width: '100px' },
  { label: 'METHOD', width: '120px' },
  { label: 'PRODUCTION', width: '100px' },
  { label: 'REVIEW', width: '120px' },
  { label: 'DELIVERY STATE', width: '120px' },
  { label: 'FRESHNESS', width: '100px' },
  { label: 'OWNER', width: '120px' }
];

const tableData = [
  {
    target: 'CEO_Keynote_Main',
    language: 'English (Native)',
    method: 'Live Human',
    production: 'Active (ASR)',
    review: 'Approved G1',
    stateLabel: 'STABLE',
    stateColor: 'text-[#00d4aa]',
    stateBg: 'bg-[rgba(0,212,170,0.13)]',
    freshness: '0.4s delay',
    owner: 'Dev-Ops-L4'
  },
  {
    target: 'CEO_Keynote_FR',
    language: 'French (FR)',
    method: 'Machine + Rev',
    production: 'Active',
    review: 'Approved G1',
    stateLabel: 'STABLE',
    stateColor: 'text-[#00d4aa]',
    stateBg: 'bg-[rgba(0,212,170,0.13)]',
    freshness: '1.2s delay',
    owner: 'Global-Trans'
  },
  {
    target: 'CEO_Keynote_JA',
    language: 'Japanese (JP)',
    method: 'Live Human',
    production: 'Active',
    review: 'Editor Gate',
    stateLabel: 'PENDING REV',
    stateColor: 'text-[#4a8cfb]',
    stateBg: 'bg-[rgba(74,140,251,0.13)]',
    freshness: '2.1s delay',
    owner: 'Tokyo-Staff'
  },
  {
    target: 'CEO_Keynote_ES',
    language: 'Spanish (ES)',
    method: 'Machine Auto',
    production: 'Active',
    review: 'Unchecked',
    stateLabel: 'WARN FALLBACK',
    stateColor: 'text-[#ef4444]',
    stateBg: 'bg-[rgba(239,68,68,0.13)]',
    freshness: '3.5s delay',
    owner: 'Automated-Engine'
  }
];

export default function OperationsSection() {
  return (
    <section className="relative w-full px-6 md:px-12 lg:px-[112px] py-16 lg:py-[100px] border-b border-[#232b3a] border-solid flex flex-col gap-[56px] items-start overflow-hidden bg-[#0a0f1a]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image 
          src="/images/platform-captions-and-translation/operations-bg.png" 
          alt="Live Language Operations Center Background" 
          fill 
          className="object-cover" 
          unoptimized
        />
        <div className="absolute inset-0 bg-[rgba(10,15,26,0.7)]" />
      </div>

      <div className="relative z-10 flex flex-col gap-[12px] items-start w-full max-w-4xl">
        <h2 className="font-spaceGrotesk font-bold text-[#eef1f6] text-[38px] leading-[61px] tracking-[-0.38px]">
          Live Language Operations Center
        </h2>
        <p className="font-spaceGrotesk font-normal text-[#aab3c4] text-[18px] leading-[29px]">
          Monitor scope, current state, impact, evidence, and recovery in real time.
        </p>
      </div>

      <div className="relative z-10 w-full bg-[#141b2d] border border-[#232b3a] border-solid rounded-[16px] overflow-x-auto shadow-2xl">
        <div className="min-w-[980px] flex flex-col w-full">
          {/* Table Header */}
          <div className="bg-[#0f1626] border-b border-[#232b3a] flex items-start px-[24px] py-[16px] w-full">
            {tableHeaders.map((header, index) => (
              <div 
                key={index} 
                style={{ width: header.width }} 
                className="shrink-0 flex-grow-0"
              >
                <span className="font-spaceGrotesk font-bold text-[#707a8c] text-[12px] leading-[normal] uppercase tracking-wide">
                  {header.label}
                </span>
              </div>
            ))}
          </div>

          {/* Table Rows */}
          <div className="flex flex-col w-full">
            {tableData.map((row, index) => (
              <div 
                key={index} 
                className="border-b border-[#232b3a] last:border-0 flex items-center px-[24px] py-[14px] w-full hover:bg-[#1a2336] transition-colors"
              >
                <div style={{ width: '200px' }} className="shrink-0">
                  <span className="font-spaceGrotesk font-bold text-[#eef1f6] text-[13px]">
                    {row.target}
                  </span>
                </div>
                <div style={{ width: '100px' }} className="shrink-0">
                  <span className="font-spaceGrotesk font-normal text-[#aab3c4] text-[13px]">
                    {row.language}
                  </span>
                </div>
                <div style={{ width: '120px' }} className="shrink-0">
                  <span className="font-spaceGrotesk font-normal text-[#aab3c4] text-[13px]">
                    {row.method}
                  </span>
                </div>
                <div style={{ width: '100px' }} className="shrink-0">
                  <span className="font-spaceGrotesk font-normal text-[#aab3c4] text-[13px]">
                    {row.production}
                  </span>
                </div>
                <div style={{ width: '120px' }} className="shrink-0">
                  <span className="font-spaceGrotesk font-normal text-[#aab3c4] text-[13px]">
                    {row.review}
                  </span>
                </div>
                <div style={{ width: '120px' }} className="shrink-0 flex items-start">
                  <div className={`${row.stateBg} px-[6px] py-[2px] rounded-[4px] inline-flex items-center justify-center`}>
                    <span className={`font-spaceGrotesk font-bold ${row.stateColor} text-[10px] leading-[normal]`}>
                      {row.stateLabel}
                    </span>
                  </div>
                </div>
                <div style={{ width: '100px' }} className="shrink-0">
                  <span className="font-spaceGrotesk font-normal text-[#aab3c4] text-[13px]">
                    {row.freshness}
                  </span>
                </div>
                <div style={{ width: '120px' }} className="shrink-0">
                  <span className="font-spaceGrotesk font-normal text-[#aab3c4] text-[13px]">
                    {row.owner}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
