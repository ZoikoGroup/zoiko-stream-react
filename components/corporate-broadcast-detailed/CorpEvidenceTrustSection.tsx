'use client';

import React from 'react';

export default function CorpEvidenceTrustSection() {
  const steps = [
    {
      time: '10:00 AM',
      title: 'Opening Keynote',
      lead: 'Lead: CEO',
      status: 'Completed',
      isActive: false,
      isCompleted: true
    },
    {
      time: '10:15 AM',
      title: 'Product Strategy & Slide Roll',
      lead: 'Lead: CPO',
      status: 'Active Now',
      isActive: true,
      isCompleted: false
    },
    {
      time: '10:30 AM',
      title: 'Audience Q&A & Vote Sync',
      lead: 'Lead: Staff',
      status: 'Next Up',
      isActive: false,
      isCompleted: false
    },
    {
      time: '10:45 AM',
      title: 'Wrap & Replay Archive Commit',
      lead: 'Lead: System',
      status: 'Pending',
      isActive: false,
      isCompleted: false
    }
  ];

  return (
    <section className="relative w-full py-24  text-white overflow-hidden border-t border-slate-900">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-contain opacity-35 bg-center select-none pointer-events-none"
        style={{ backgroundImage: "url('/images/corporate-broadcast-detailed/bg (6).png')" }}
      />
      <div className="absolute inset-0  pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-4 max-w-4xl">
          <h2 className="text-slate-100 text-3xl font-bold   leading-[60.80px]">
            Run of show, schedule, and content context
          </h2>
          <p className="text-zinc-400 text-lg font-normal  ">
            Manage your entire event timeline from a single, versioned dashboard — coordinate cues, track approvals, and keep every stakeholder aligned in real time.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="w-full flex flex-col lg:flex-row justify-start items-center gap-12">
          
          {/* Left Column */}
          <div className="flex-1 flex flex-col justify-start items-start gap-6 font-sans">
            <h3 className="text-teal-400 text-xl font-bold  ">
              Versioned run-of-show references and approval states
            </h3>
            <p className="text-slate-400 text-base font-normal   leading-6">
              Never miss a cue. Coordinate video layout shifts, slides triggers, speaker handoffs, and video roll cues inside a versioned, secure dashboard. Change logs are synced in real-time across AV operators, organizers, and remote contributors.
            </p>
            
            <div className="flex flex-col gap-3 font-sans mt-2">
              <div className="inline-flex justify-start items-center gap-2">
                <div className="w-3.5 h-3.5 flex justify-center items-center border border-teal-450 rounded-sm">
                  <span className="text-teal-400 text-[10px]">✓</span>
                </div>
                <div className="text-slate-100 text-sm font-normal  ">
                  Authoritative timeline locking
                </div>
              </div>
              <div className="inline-flex justify-start items-center gap-2">
                <div className="w-3.5 h-3.5 flex justify-center items-center border border-teal-450 rounded-sm">
                  <span className="text-teal-400 text-[10px]">✓</span>
                </div>
                <div className="text-slate-100 text-sm font-normal  ">
                  Instant stage manager notifications
                </div>
              </div>
              <div className="inline-flex justify-start items-center gap-2">
                <div className="w-3.5 h-3.5 flex justify-center items-center border border-teal-450 rounded-sm">
                  <span className="text-teal-400 text-[10px]">✓</span>
                </div>
                <div className="text-slate-100 text-sm font-normal  ">
                  Approved backup pathways clearly mapped
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Town Hall Q1 Card) */}
          <div className="w-full lg:w-[640px] p-8 bg-gray-900/90 rounded-2xl border border-slate-800 backdrop-blur-[10px] flex flex-col justify-start items-start gap-4 font-sans shadow-xl">
            <div className="w-full flex justify-between items-center">
              <div className="text-slate-100 text-base font-bold  ">
                Town Hall Q1 — Approved Active Plan
              </div>
              <div className="px-3 py-1 bg-emerald-500/10 rounded-sm flex justify-center items-center">
                <span className="text-emerald-500 text-xs font-bold  ">
                  Locked
                </span>
              </div>
            </div>
            
            <div className="w-full h-px bg-slate-800" />
            
            <div className="w-full flex flex-col gap-3">
              {steps.map((step, idx) => (
                <div 
                  key={idx}
                  className={`w-full p-3 rounded-lg border flex justify-between items-center gap-4 transition-all ${
                    step.isActive 
                      ? 'bg-gray-800 border-teal-400' 
                      : 'bg-transparent border-transparent'
                  }`}
                >
                  <div className={`text-sm font-bold   ${step.isActive ? 'text-teal-400' : 'text-slate-400'}`}>
                    {step.time}
                  </div>
                  <div className="flex-1 flex flex-col justify-start items-start gap-0.5">
                    <div className="text-slate-100 text-sm font-bold  ">
                      {step.title}
                    </div>
                    <div className="text-slate-400 text-xs font-normal  ">
                      {step.lead}
                    </div>
                  </div>
                  <div className={`text-xs font-bold   ${step.isActive ? 'text-teal-400' : 'text-slate-400'}`}>
                    {step.status}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
