'use client';

import React, { useState } from 'react';

export default function CorpInclusiveParticipationSection() {
  const [activeTab, setActiveTab] = useState(2); // Default to Keyboard & Screen Reader (index 2) as in the image

  const tabs = [
    {
      title: 'Real-Time Captions',
      subtitle: 'Real-Time Captions',
      desc: 'Plan captions and language access for every viewer seamlessly.',
      paragraph: 'Provide live closed caption pipelines synced directly with stream ingestion encoders. Captions display directly in the media container with customizable text size, background contrast, and font configurations matching WCAG guidelines.',
      img: '/images/corporate-broadcast-detailed/Rectangle (35).png'
    },
    {
      title: 'Language & Interpretation',
      subtitle: 'Language & Interpretation',
      desc: 'Support multilingual audiences with dedicated interpreter audio feeds.',
      paragraph: 'Add multiple concurrent audio tracks for real-time translation. Viewers can select their preferred audio track from the player controls, ensuring that satellite offices receive key messages in native languages without latency.',
      img: '/images/corporate-broadcast-detailed/Rectangle (35).png'
    },
    {
      title: 'Keyboard & Screen Reader',
      subtitle: 'Keyboard & Screen Reader',
      desc: 'Ensure fully readable WCAG-compliant controls and alternate help paths.',
      paragraph: 'Making participation direct, dignified, and inclusive is a primary service-quality dimension. ZoikoStream integrates native capabilities from pre-event configuration so accessibility is planned, not patched.',
      img: '/images/corporate-broadcast-detailed/Rectangle (35).png'
    }
  ];

  return (
    <section className="relative w-full py-24 bg-white text-zinc-900 overflow-hidden border-t border-slate-105">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-14 text-left">
        
        {/* Title Block */}
        <div className="flex flex-col gap-4 text-left">
          <h2 className="text-slate-900 text-4xl font-bold font-['Space_Grotesk'] leading-[60.80px]">
            Accessibility and language access
          </h2>
          <p className="text-slate-655 text-lg font-normal font-['Inter'] leading-7">
            Ensure every viewer can participate fully regardless of ability or language. Real-time captions, multilingual interpreter feeds, and WCAG-compliant keyboard and screen reader support are configured before the event, not patched after.
          </p>
        </div>

        {/* Tab Card Container */}
        <div className="w-full bg-slate-50 rounded-2xl border border-gray-200 p-6 flex flex-col gap-6 font-sans">
          
          {/* Horizontal Tabs Header */}
          <div className="flex flex-wrap border-b border-gray-200">
            {tabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-3 text-sm font-bold font-['Space_Grotesk'] transition-all border-none cursor-pointer bg-transparent ${
                  activeTab === idx 
                    ? 'border-b-2 border-teal-500 text-teal-605 bg-slate-100/50' 
                    : 'text-slate-500 hover:text-slate-800'
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
              <h3 className="text-slate-900 text-xl font-bold font-['Space_Grotesk']">
                {tabs[activeTab].subtitle}
              </h3>
              <p className="text-slate-600 text-sm font-normal font-['Space_Grotesk'] leading-6 font-medium">
                {tabs[activeTab].desc}
              </p>
              <p className="text-slate-600 text-sm font-normal font-['Space_Grotesk'] leading-7">
                {tabs[activeTab].paragraph}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
