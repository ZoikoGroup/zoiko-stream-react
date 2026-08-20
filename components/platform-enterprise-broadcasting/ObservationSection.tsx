import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';

const columns = [
  {
    title: 'Operation Health',
    items: [
      'Continuous stream latency tracking at edge egress points.',
      'Buffer watermarks and codec integrity validation logs.',
      'Automatic fallback routes configured for main ingestion paths.',
      'Real-time alerting on signature drift or credential expiry.'
    ]
  },
  {
    title: 'System Status',
    items: [
      'Unbiased uptime reporting pulled from geographically split test instances.',
      'Cryptographic proof of network transit stability and delivery.',
      'Publicly verifiable status historical timelines.',
      'Automated verification logs published per production run.'
    ]
  },
  {
    title: 'Support Escalation',
    items: [
      'Affirmative operator response SLAs tied to contract parameters.',
      'Direct connection to platform engineering, no script reading.',
      'Root cause analysis packages with complete stack evidence.',
      'Post-incident reviews containing raw telemetry logs.'
    ]
  }
];

export default function ObservationSection() {
  return (
    <section className="relative w-full px-6 md:px-12 lg:px-[112px] py-[100px] flex flex-col gap-[56px] items-start bg-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image 
          src="/images/platform-enterprise-broadcasting/observation-bg.png" 
          alt="Observation Background" 
          fill 
          className="object-cover" 
          unoptimized
        />
      </div>

      {/* Section Header */}
      <div className="relative z-10 flex flex-col gap-[16px] items-start w-full max-w-4xl">
        <h2 className="font-spaceGrotesk font-bold text-[#0f1b2d] text-[38px] leading-[61px] tracking-[-0.38px]">
          Observation stays separate from intervention
        </h2>
        <p className="font-spaceGrotesk font-normal text-[#4f5e74] text-[18px] leading-[29px] w-full">
          Operational health, System Status, and support escalation each have different owners, evidence, and communication paths.
        </p>
      </div>

      {/* Monitoring Columns */}
      <div className="relative z-10 flex flex-col lg:flex-row gap-[24px] items-stretch w-full">
        {columns.map((col, idx) => (
          <div 
            key={idx} 
            className="bg-[#f8fafc] border-[1.5px] border-[#e2e8f0] border-solid rounded-[12px] p-[24px] flex-1 flex flex-col gap-[16px] items-start transition-shadow hover:shadow-lg"
          >
            <h3 className="font-spaceGrotesk font-bold text-[#0f1b2d] text-[18px]">
              {col.title}
            </h3>
            <div className="flex flex-col gap-[12px] items-start w-full">
              {col.items.map((item, itemIdx) => (
                <div key={itemIdx} className="flex gap-[10px] items-start w-full">
                  <div className="shrink-0 pt-1">
                    <Check className="w-[14px] h-[14px] text-[#4ecdc4]" strokeWidth={3} />
                  </div>
                  <p className="font-spaceGrotesk font-normal text-[#4f5e74] text-[13px] leading-[18px] flex-1 break-words">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
