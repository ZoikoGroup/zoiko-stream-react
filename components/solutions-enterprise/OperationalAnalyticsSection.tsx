import React from 'react';
import Image from 'next/image';

const analytics = [
  {
    title: 'Stream & Workflow Health',
    q: 'Is the ingest bitrate steady? What is the current frame drop rate?',
    ui: 'Real-time ingress latency charts and fallback pipeline status logs.',
    img: '/images/Enterprises/Card-Image (86).png',
  },
  {
    title: 'Playback Experience',
    q: 'What is the average rebuffering ratio? Are edge nodes congested?',
    ui: 'QoE heatmaps, segment load duration, and browser console alerts.',
    img: '/images/Enterprises/Card-Image (87).png',
  },
  {
    title: 'Access Activity',
    q: 'Has SSO authorization succeeded? Any unauthorized token requests?',
    ui: 'SAML token assertion counter, geographic load maps, rejection logs.',
    img: '/images/Enterprises/Card-Image (88).png',
  },
  {
    title: 'Operational Events',
    q: 'When was the latest policy exception logged? Who verified configuration?',
    ui: 'Chronological system change log showing actors and state updates.',
    img: '/images/Enterprises/Card-Image (89).png',
  },
  {
    title: 'Replay & Post-Live Usage',
    q: 'How many archive downloads were requested? Are retention rules met?',
    ui: 'VOD consumption analytics, storage quota status, audit check logs.',
    img: '/images/Enterprises/Card-Image (90).png',
  },
  {
    title: 'Evidence Currentness',
    q: 'Is the SOC 2 audit current? Are compliance reviews up to date?',
    ui: 'Evidence validity calendars, certificate monitors, and automated warnings.',
    img: '/images/Enterprises/Card-Image (91).png',
  },
];

export function OperationalAnalyticsSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-slate-900/90 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/Enterprises/bg (171).png"
          alt="Analytics Background"
          fill
          className="object-cover opacity-30"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
            Analytics should answer operational questions, not score employees.
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal font-['Inter'] leading-7">
            Stream health, playback experience, access activity, operational events, replay usage and evidence currentness — all with privacy-safe boundaries.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {analytics.map((an, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/80 rounded-xl border border-gray-800 flex flex-col justify-start items-start overflow-hidden hover:border-gray-700 transition-colors"
            >
              <div className="relative w-full h-36 bg-zinc-950">
                <Image
                  src={an.img}
                  alt={an.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full p-5 flex flex-col justify-start items-start gap-3">
                <h3 className="text-white text-lg font-bold font-['Space_Grotesk']">{an.title}</h3>
                <div className="flex flex-col gap-1.5 text-xs">
                  <div>
                    <span className="text-teal-400 font-bold font-['Inter']">Questions: </span>
                    <span className="text-slate-400 font-normal font-['Inter']">{an.q}</span>
                  </div>
                  <div>
                    <span className="text-blue-500 font-bold font-['Inter']">UI treatment: </span>
                    <span className="text-slate-400 font-normal font-['Inter']">{an.ui}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Privacy Bar */}
        <div className="w-full p-5 bg-slate-900 rounded-lg border border-gray-800 flex items-center gap-4 text-sm">
          <div className="w-5 h-5 flex items-center justify-center flex-shrink-0">
            <div className="w-3.5 h-4 border-2 border-teal-400 rounded-xs" />
          </div>
          <div>
            <span className="text-white font-bold font-['Inter']">Privacy-Safe Analytics Contract: </span>
            <span className="text-slate-400 font-normal font-['Inter']">
              We aggregate telemetry data exclusively. Under no circumstances will our platforms be deployed for productivity policing, employee scorecards, or cross-site behavioral user tracking.
            </span>
          </div>
        </div>

        <div className="px-7 py-3.5 rounded-lg border border-slate-500 flex justify-center items-center cursor-pointer">
          <span className="text-white text-base font-bold font-['Space_Grotesk']">
            View Evidence Registry
          </span>
        </div>
      </div>
    </section>
  );
}
