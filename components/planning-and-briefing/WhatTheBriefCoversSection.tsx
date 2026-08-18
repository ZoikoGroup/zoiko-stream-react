import React from 'react';

const steps = [
  {
    number: '1',
    title: 'Event Context',
    description: 'Scope, format & objectives defined'
  },
  {
    number: '2',
    title: 'Audience Gate',
    description: 'Authority & privacy checklist'
  },
  {
    number: '3',
    title: 'Venue / Source',
    description: 'Platform & ingest source confirmed'
  },
  {
    number: '4',
    title: 'Production',
    description: 'Run-of-show & crew allocated'
  },
  {
    number: '5',
    title: 'Access & Privacy',
    description: 'Auth gates & data consent mapped'
  },
  {
    number: '6',
    title: 'Accessibility',
    description: 'Captions, BSL & assisted access'
  },
  {
    number: '7',
    title: 'Event Resilience',
    description: 'Failover & contingency planned'
  },
  {
    number: '8',
    title: 'Recording & Replay',
    description: 'Capture & VOD delivery confirmed'
  },
  {
    number: '9',
    title: 'Support & SLA',
    description: 'Response tiers & escalation paths'
  },
  {
    number: '10',
    title: 'Commercials',
    description: 'Pricing, contracts & sign-off'
  }
];

export default function WhatTheBriefCoversSection() {
  return (
    <section className="relative w-full py-[80px] px-6 md:px-[112px] bg-white overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="/images/planning-and-briefing/what-brief-covers-bg.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col gap-[48px]">
        
        {/* Header */}
        <div className="flex flex-col gap-[12px]">
          <h2 className="font-space-grotesk font-bold text-[#0d1b2a] text-3xl md:text-[40px]">
            What the Brief Covers
          </h2>
          <p className="font-space-grotesk font-normal text-[#6b7a8d] text-[16px] max-w-[1000px] leading-[26px]">
            We trace each event through a structured planning lifecycle. Every stage is captured, reviewed, and signed off before the next begins - ensuring nothing is missed.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {steps.map((step, idx) => (
            <div 
              key={idx}
              className="bg-[#f4f6fa] border border-[#e2e6ef] rounded-[50px] shadow-[0px_2px_4px_rgba(0,0,0,0.05)] flex items-center gap-[16px] pl-[16px] pr-[24px] py-[16px] w-full hover:-translate-y-1 transition-transform cursor-pointer"
            >
              <div className="w-[36px] h-[36px] rounded-full bg-[#2563eb] flex items-center justify-center flex-shrink-0">
                <span className="font-space-grotesk font-bold text-white text-[14px]">
                  {step.number}
                </span>
              </div>
              <div className="flex flex-col gap-[2px]">
                <h3 className="font-space-grotesk font-bold text-[#1e3a5f] text-[14px]">
                  {step.title}
                </h3>
                <p className="font-space-grotesk font-normal text-[#6b7a8d] text-[12px] leading-tight">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
