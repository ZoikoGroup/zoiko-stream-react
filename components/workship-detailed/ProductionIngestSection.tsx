import React from 'react';
import { 
  Building2, 
  Video, 
  Mic, 
  Sliders, 
  Users, 
  Radio 
} from 'lucide-react';

export default function ProductionIngestSection() {
  const cards = [
    {
      icon: Building2,
      title: 'Venue / source',
      desc: 'Select direct connection from sanctuary cameras, hardware encoders, or software stream rigs.'
    },
    {
      icon: Video,
      title: 'Video source',
      desc: 'Primary cameras, auxiliary inputs, mobile feeds, or pre-recorded components.'
    },
    {
      icon: Mic,
      title: 'Audio source',
      desc: 'Direct desk feeds, lapel mics, instrument inputs, or ambient overhead microphones.'
    },
    {
      icon: Sliders,
      title: 'Production ownership',
      desc: 'Define if setup is run by local volunteers, dedicated media teams, or remote operators.'
    },
    {
      icon: Users,
      title: 'Remote contributors',
      desc: 'Integrate remote speakers, missionaries, or virtual choirs into the live stream.'
    },
    {
      icon: Radio,
      title: 'Distribution destination',
      desc: 'Stream directly to your customized player, apps, or simultaneous social channels.'
    }
  ];

  const matrixRows = [
    {
      item: 'Venue connectivity',
      venue: 'Primary owner (DSL/Fiber)',
      prod: 'Monitoring setup',
      zoiko: 'Network quality dashboard'
    },
    {
      item: 'Camera & Mic switching',
      venue: 'On-site hardware setup',
      prod: 'Active operation',
      zoiko: 'Ingest platform hosting'
    },
    {
      item: 'Encoding / Stream output',
      venue: 'Volunteers / staff assist',
      prod: 'Configure target parameters',
      zoiko: 'Auto-ingest transcoding'
    },
    {
      item: 'Licensing reporting',
      venue: 'Primary compliance owner',
      prod: 'Input cue markers',
      zoiko: 'Auto-logger tools'
    }
  ];

  return (
    <section className="w-full py-16 sm:py-24 bg-zinc-900 dark:bg-zinc-955 border-t border-b border-gray-850 dark:border-gray-800 text-white transition-colors duration-200"
            style={{ backgroundImage: "url('/images/workship-detailed/image (13).png')" }}
>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-12 sm:gap-16">
        
        <div className="flex flex-col gap-4">
          <h2 className="text-white text-3xl sm:text-4xl font-bold leading-tight tracking-tight">
            How video, audio, and production come together
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Clearly mapped inputs and ownership paths minimize live operational friction.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div 
                key={idx}
                className="p-8 bg-zinc-950 dark:bg-gray-900 rounded-xl border border-slate-800 flex flex-col gap-5 hover:border-slate-700 transition-colors"
              >
                <div className="w-9 h-9 bg-zinc-900 dark:bg-zinc-800 rounded-lg flex justify-center items-center">
                  <Icon className="w-5 h-5 text-teal-400" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-white text-xl font-bold font-sans">
                    {card.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Responsibility Matrix */}
        <div className="p-6 sm:p-8 bg-zinc-950 dark:bg-gray-900 rounded-2xl border border-slate-800 flex flex-col gap-6">
          
          <h3 className="text-white text-base font-bold font-sans">
            Operational Responsibility Matrix
          </h3>
          
          <div className="w-full h-px bg-slate-800" />
          
          <div className="overflow-x-auto w-full scrollbar-none">
            <div className="min-w-[768px] flex flex-col gap-1">
              
              {/* Header Row */}
              <div className="px-4 py-3 bg-slate-800 dark:bg-gray-800 rounded-t-lg grid grid-cols-4 gap-4">
                <div className="text-slate-200 dark:text-white text-xs font-bold uppercase tracking-wider">Responsibility</div>
                <div className="text-slate-200 dark:text-white text-xs font-bold uppercase tracking-wider">Organizer / Venue</div>
                <div className="text-slate-200 dark:text-white text-xs font-bold uppercase tracking-wider">Production Team</div>
                <div className="text-slate-200 dark:text-white text-xs font-bold uppercase tracking-wider">ZoikoStream</div>
              </div>

              {/* Data Rows */}
              {matrixRows.map((row, idx) => (
                <div 
                  key={idx}
                  className="px-4 py-3.5 bg-gray-900/30 grid grid-cols-4 gap-4 border-b border-slate-800/50 hover:bg-gray-900/50 transition-colors"
                >
                  <div className="text-slate-100 text-sm font-semibold">{row.item}</div>
                  <div className="text-slate-400 text-sm">{row.venue}</div>
                  <div className="text-slate-400 text-sm">{row.prod}</div>
                  <div className="text-slate-400 text-sm">{row.zoiko}</div>
                </div>
              ))}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
