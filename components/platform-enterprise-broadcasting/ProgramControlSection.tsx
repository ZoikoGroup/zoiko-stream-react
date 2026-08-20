import React from 'react';
import Image from 'next/image';

const stateAxes = [
  { name: 'Program State', status: 'Active ✓', type: 'success' },
  { name: 'Readiness Check', status: 'Satisfied ✓', type: 'success' },
  { name: 'Authorization', status: 'Verified ✓', type: 'success' },
  { name: 'Runtime Control', status: 'Armed ⚡', type: 'warning' },
  { name: 'Source Stream', status: 'Ingesting ◐', type: 'processing' },
  { name: 'Audience Policy', status: 'Enforced ✓', type: 'success' },
  { name: 'Accessibility', status: 'Captions Active', type: 'success' },
  { name: 'Incident State', status: 'Nominal ✓', type: 'success' },
  { name: 'Recording Path', status: 'Durable Ready', type: 'success' },
  { name: 'Evidence Log', status: 'Signed ✓', type: 'success' }
];

export default function ProgramControlSection() {
  return (
    <section className="relative w-full px-6 md:px-12 lg:px-[112px] py-[100px] border-b border-[#232b3a] border-solid flex flex-col gap-[56px] items-start bg-[#0a0f1a] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image 
          src="/images/platform-enterprise-broadcasting/accountable-bg.png" 
          alt="Monitoring Background" 
          fill 
          className="object-cover" 
          unoptimized
        />
        <div className="absolute inset-0 bg-[rgba(10,15,26,0.72)]" />
      </div>

      {/* Section Header */}
      <div className="relative z-10 flex flex-col gap-[16px] items-start w-full max-w-4xl">
        <h2 className="font-spaceGrotesk font-bold text-white text-[38px] leading-[61px] tracking-[-0.38px]">
          Accountable observation without dashboard theater
        </h2>
        <p className="font-spaceGrotesk font-normal text-[#aab3c4] text-[18px] leading-[29px] w-full">
          State axes, ownership, evidence, incidents, and next actions — each independently truthful. No single misleading status badge.
        </p>
      </div>

      {/* Control Grid */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-[48px] items-center justify-between w-full">
        {/* Mockup Container (Left) */}
        <div className="bg-[rgba(16,21,30,0.8)] backdrop-blur-sm border-[1.5px] border-[#232b3a] border-solid rounded-[16px] shadow-[0px_16px_32px_0px_rgba(0,0,0,0.5)] flex flex-col gap-[16px] items-start p-[24px] w-full max-w-[580px] shrink-0">
          <div className="flex items-center justify-between w-full">
            <h3 className="font-spaceGrotesk font-bold text-white text-[16px]">
              State Control Axes
            </h3>
            <div className="bg-[rgba(52,212,202,0.13)] rounded-[4px] px-[10px] py-[4px] flex items-center justify-center shrink-0">
              <span className="font-spaceGrotesk font-bold text-[#34d4ca] text-[11px]">
                GOVERNED
              </span>
            </div>
          </div>
          
          <div className="flex flex-col gap-[8px] items-start w-full">
            {stateAxes.map((axis, index) => (
              <div key={index} className="flex items-center justify-between w-full border-b border-[#232b3a] border-solid pb-[8px] last:border-0 last:pb-0">
                <span className="font-spaceGrotesk font-normal text-[#aab3c4] text-[14px]">
                  {axis.name}
                </span>
                <div 
                  className={`rounded-[4px] px-[10px] py-[4px] flex items-center justify-center shrink-0 ${
                    axis.type === 'success' ? 'bg-[#064e3b]' : 
                    axis.type === 'warning' ? 'bg-[#78350f]' : 'bg-[#1e3a8a]'
                  }`}
                >
                  <span 
                    className={`font-spaceGrotesk font-bold text-[11px] ${
                      axis.type === 'success' ? 'text-[#34d4ca]' : 
                      axis.type === 'warning' ? 'text-[#f59e0b]' : 'text-[#60a5fa]'
                    }`}
                  >
                    {axis.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Evidence (Right) */}
        <div className="flex flex-col gap-[24px] items-start flex-1 w-full max-w-2xl">
          <h3 className="font-spaceGrotesk font-bold text-white text-[24px]">
            Independent proof over dashboard green-lighting
          </h3>
          <p className="font-spaceGrotesk font-normal text-[#aab3c4] text-[16px] leading-[26px]">
            Don't rely on synthetic system averages. Monitor individual stream telemetry, active whitelist compliance, and cryptographic pipeline logs on a single pane of truth designed for auditability.
          </p>
          <button className="bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] rounded-[10px] px-[28px] py-[14px] hover:opacity-90 transition-opacity">
            <span className="font-spaceGrotesk font-bold text-[#0a0f1a] text-[15px]">
              Explore operations
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
