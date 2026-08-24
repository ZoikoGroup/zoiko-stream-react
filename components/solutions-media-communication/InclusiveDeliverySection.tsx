import React from 'react';
import Image from 'next/image';

const tracks = [
  {
    type: 'Captions (CC)',
    lang: 'English (US)',
    state: { text: 'PUBLISHED', cls: 'bg-emerald-500/10 text-teal-400' },
    prov: 'Auto-AI + Human',
    rev: 'Sarah Jenkins',
    ver: 'v2.1',
  },
  {
    type: 'Subtitles',
    lang: 'Spanish (ES)',
    state: { text: 'APPROVED', cls: 'bg-blue-500/10 text-blue-500' },
    prov: 'Human Translated',
    rev: 'Mateo Ortiz',
    ver: 'v1.0',
  },
  {
    type: 'Translation',
    lang: 'French (FR)',
    state: { text: 'NEEDS REVIEW', cls: 'bg-amber-500/10 text-amber-500' },
    prov: 'Machine AI Draft',
    rev: 'Elise Dupont',
    ver: 'v0.9-beta',
  },
  {
    type: 'Audio Description',
    lang: 'English (UK)',
    state: { text: 'PROCESSING', cls: 'bg-blue-500/10 text-blue-500' },
    prov: 'Synthetic Voice',
    rev: 'Automation Engine',
    ver: 'Generating...',
  },
  {
    type: 'Transcript',
    lang: 'German (DE)',
    state: { text: 'REQUESTED', cls: 'bg-gray-500/10 text-slate-400' },
    prov: 'Planned Task',
    rev: 'Pending Assignee',
    ver: '-',
  },
];

const streamHealth = [
  { feed: 'English Subtitle Feed', status: { text: 'RECEIVING', cls: 'bg-emerald-500/10 text-emerald-500' } },
  { feed: 'Spanish Real-Time Audio', status: { text: 'DEGRADED', cls: 'bg-amber-500/10 text-amber-500' } },
  { feed: 'French Live Transcription', status: { text: 'LOST', cls: 'bg-red-500/10 text-red-500' } },
  { feed: 'Japanese Captions Engine', status: { text: 'RESTORED', cls: 'bg-blue-500/10 text-blue-500' } },
];

export function InclusiveDeliverySection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-slate-900/90 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/Media-communications-page/bg (185).png"
          alt="Inclusive Delivery Background"
          fill
          className="object-cover opacity-30"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
            Make inclusive delivery operational — from live through replay
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal font-['Inter'] leading-7">
            Caption and language track planning, readiness state, human review status, viewer controls, and replay continuity.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Main Table Container */}
          <div className="lg:col-span-8 p-5 bg-gray-950/80 rounded-2xl border border-gray-800 flex flex-col justify-start items-start gap-3 overflow-x-auto w-full">
            <span className="text-white text-sm font-bold font-['Space_Grotesk'] tracking-wide">
              LANGUAGE TRACK REGISTRY
            </span>
            <table className="w-full text-left border-collapse min-w-[550px]">
              <thead>
                <tr className="bg-gray-800/80 border-b-2 border-gray-800 text-white text-xs font-bold font-['Space_Grotesk']">
                  <th className="p-3">Track Type</th>
                  <th className="p-3">Language</th>
                  <th className="p-3">State</th>
                  <th className="p-3">Provenance</th>
                  <th className="p-3">Reviewer</th>
                  <th className="p-3">Version</th>
                </tr>
              </thead>
              <tbody>
                {tracks.map((row, idx) => (
                  <tr key={idx} className="border-b border-gray-800/60 hover:bg-gray-800/30 transition-colors">
                    <td className="p-3 text-white text-xs font-bold font-['Space_Grotesk']">{row.type}</td>
                    <td className="p-3 text-slate-400 text-xs font-normal font-['Inter']">{row.lang}</td>
                    <td className="p-3">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-semibold font-['Inter'] uppercase ${row.state.cls}`}>
                        {row.state.text}
                      </span>
                    </td>
                    <td className="p-3 text-slate-400 text-xs font-normal font-['Inter']">{row.prov}</td>
                    <td className="p-3 text-slate-400 text-xs font-normal font-['Inter']">{row.rev}</td>
                    <td className="p-3 text-slate-400 text-xs font-normal font-['Inter']">{row.ver}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Right Sidebar Box */}
          <div className="lg:col-span-4 p-5 bg-gray-950/80 rounded-2xl border border-gray-800 flex flex-col justify-start items-start gap-5 w-full">
            <span className="text-white text-sm font-bold font-['Space_Grotesk'] tracking-wide">
              LIVE STREAM HEALTH OVERVIEW
            </span>
            <div className="w-full flex flex-col justify-start items-start gap-3">
              {streamHealth.map((sh, idx) => (
                <div
                  key={idx}
                  className="w-full p-3 bg-gray-800/80 rounded-lg border border-gray-800 flex justify-between items-center text-xs"
                >
                  <span className="text-white font-semibold font-['Inter']">{sh.feed}</span>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold font-['Inter'] uppercase ${sh.status.cls}`}>
                    {sh.status.text}
                  </span>
                </div>
              ))}
            </div>

            <div className="w-full p-3 bg-zinc-900 rounded-lg flex flex-col justify-start items-start gap-1 border border-gray-800">
              <span className="text-teal-400 text-xs font-semibold font-['Inter']">OPERATIONAL TIP</span>
              <p className="text-slate-400 text-xs font-normal font-['Inter'] leading-4">
                ZoikoStream automatically bridges live speech-to-text models to ensure instant recovery streams during human operator drops.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
