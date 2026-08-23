'use client';

import React, { useState } from 'react';

export default function CorpParticipationBoundariesSection() {
  const [activeTab, setActiveTab] = useState(2); // Default to Abuse & Security Rules (index 2) as shown in the screenshot

  const tabs = [
    {
      title: 'Moderated Q&A',
      subtitle: 'Moderated Q&A',
      desc: 'Questions are audited, merged, and cleared by staff.',
      paragraph: 'Isolate audience questions in a backstage interface. Moderation staff can filter duplicates, clean typos, and queue the approved queries directly to the presenter screen.',
      img: '/images/corporate-broadcast-detailed/Rectangle (35).png'
    },
    {
      title: 'Presenter Privacy Masking',
      subtitle: 'Presenter Privacy Masking',
      desc: 'Mute slides, block visual streams, apply watermark overlays.',
      paragraph: 'Protect sensitive presentations. Toggle layouts instantly to mask slides, restrict screencasts, or apply user-specific watermarks to prevent screenshot leaks.',
      img: '/images/corporate-broadcast-detailed/Rectangle (36).png'
    },
    {
      title: 'Abuse & Security Rules',
      subtitle: 'Abuse & Security Rules',
      desc: 'Instant IP/domain range ban controls, SSO session expiration.',
      paragraph: 'Establish healthy conversational boundaries. ZoikoStream allows organizers to isolate live viewer contribution channels from main stream paths, ensuring clear audience engagement without enabling surveillance or political profiling.',
      img: '/images/corporate-broadcast-detailed/Rectangle (37).png'
    }
  ];

  return (
    <section className="relative w-full py-24 bg-zinc-950 text-white overflow-hidden border-t border-slate-900">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none opacity-20"
        style={{ backgroundImage: "url('/images/corporate-broadcast-detailed/bg (6).png')" }}
      />
      <div className="absolute inset-0 bg-zinc-950/90 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-4 text-left">
          <h2 className="text-slate-100 text-4xl font-bold   leading-[60.80px]">
            Speakers, participant questions, moderation, and privacy
          </h2>
          <p className="text-slate-400 text-lg font-normal   leading-7">
            Maintain safe, productive audience engagement throughout the broadcast. Moderated Q&A queues, presenter privacy masking, and real-time abuse controls keep conversations healthy without enabling surveillance or profiling.
          </p>
        </div>

        {/* Tab Card Container */}
        <div className="w-full bg-gray-900/80 rounded-2xl border border-slate-800 p-6 flex flex-col gap-6 font-sans backdrop-blur-[10px] shadow-2xl">
          
          {/* Horizontal Tabs Header */}
          <div className="flex flex-wrap border-b border-slate-800">
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-3 text-sm font-bold   transition-all border-none cursor-pointer bg-transparent ${
                  activeTab === idx 
                    ? 'border-b-2 border-teal-500 text-teal-400 bg-gray-800/40' 
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="flex flex-col gap-6 w-full">
            {/* Image */}
            <div className="w-full h-44 overflow-hidden rounded-xl bg-slate-950 relative">
              <img 
                className="w-full h-full object-cover select-none pointer-events-none" 
                src={tabs[activeTab].img} 
                alt={tabs[activeTab].title} 
              />
            </div>
            
            {/* Details */}
            <div className="flex flex-col gap-3">
              <h3 className="text-slate-100 text-xl font-bold  ">
                {tabs[activeTab].subtitle}
              </h3>
              <p className="text-slate-400 text-sm font-normal   leading-6 font-medium">
                {tabs[activeTab].desc}
              </p>
              <p className="text-slate-400 text-sm font-normal   leading-7">
                {tabs[activeTab].paragraph}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
