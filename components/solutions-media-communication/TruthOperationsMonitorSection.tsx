import React from 'react';
import Image from 'next/image';

const features = [
  {
    title: 'Operations Overview',
    desc: 'Instant health mapping of source gateway paths, active transcoder rules, and edge CDN nodes.',
    img: '/images/Media-communications-page/Rectangle  (46).png',
  },
  {
    title: 'Dependency Registry',
    desc: 'Complete audit tracking of third-party APIs, hardware links, and content pipelines.',
    img: '/images/Media-communications-page/Rectangle  (47).png',
  },
  {
    title: 'Incident Response',
    desc: 'Real-time ticket timelines ensuring instant alerting and rapid SRE dispatch when faults arrive.',
    img: '/images/Media-communications-page/Rectangle  (48).png',
  },
  {
    title: 'Continuity Planning',
    desc: 'Durable workflow fallbacks, instant route switching, and dynamic replay buffering assets.',
    img: '/images/Media-communications-page/Rectangle  (49).png',
  },
];

export function TruthOperationsMonitorSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="w-[520px] h-[520px] absolute right-[-100px] bottom-[-100px] bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />
      <div className="w-96 h-96 absolute left-[-180px] top-[-90px] bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
            Current truth, not decorative uptime
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal font-['Inter'] leading-7">
            Workflow health, dependency state, incident timelines, continuity decisions, and status handoff — with Unknown as a first-class state.
          </p>
        </div>

        {/* Dashboard Box */}
        <div className="w-full p-6 lg:p-7 bg-slate-50 rounded-2xl border border-gray-200 flex flex-col justify-start items-start gap-6 shadow-sm">
          <div className="w-full flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-teal-400 rounded-full animate-pulse" />
              <span className="text-slate-900 text-sm font-bold font-['Space_Grotesk']">
                ACTIVE OPERATIONS &amp; RISK MONITOR
              </span>
            </div>
            <span className="text-slate-500 text-xs font-normal font-['Inter']">LAST UPDATED: 2S AGO</span>
          </div>

          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Side */}
            <div className="lg:col-span-7 flex flex-col justify-start items-start gap-5">
              <div className="w-full p-5 bg-white rounded-xl border border-gray-200 flex flex-col justify-start items-start gap-3">
                <span className="text-slate-900 text-xs font-bold font-['Space_Grotesk']">WORKFLOW COMPONENT HEALTH</span>
                <div className="w-full flex flex-col justify-start items-start gap-2">
                  <div className="w-full pb-1 border-b border-gray-200 flex justify-between items-center text-xs">
                    <span className="text-slate-900 font-normal font-['Inter']">Contribution Feeds</span>
                    <span className="text-emerald-500 font-semibold font-['Inter']">● Ready</span>
                  </div>
                  <div className="w-full pb-1 border-b border-gray-200 flex justify-between items-center text-xs">
                    <span className="text-slate-900 font-normal font-['Inter']">Production Control Suite</span>
                    <span className="text-emerald-500 font-semibold font-['Inter']">● Ready</span>
                  </div>
                  <div className="w-full pb-1 border-b border-gray-200 flex justify-between items-center text-xs">
                    <span className="text-slate-900 font-normal font-['Inter']">Distribution Edge Gateways</span>
                    <span className="text-amber-500 font-semibold font-['Inter']">● Degraded</span>
                  </div>
                  <div className="w-full pb-1 border-b border-gray-200 flex justify-between items-center text-xs">
                    <span className="text-slate-900 font-normal font-['Inter']">Compliance Rule Engine</span>
                    <span className="text-emerald-500 font-semibold font-['Inter']">● Ready</span>
                  </div>
                  <div className="w-full pb-1 border-b border-gray-200 flex justify-between items-center text-xs">
                    <span className="text-slate-900 font-normal font-['Inter']">Accessibility Real-Time Feeds</span>
                    <span className="text-slate-600 font-semibold font-['Inter']">● Unknown</span>
                  </div>
                  <div className="w-full pb-1 border-b border-gray-200 flex justify-between items-center text-xs">
                    <span className="text-slate-900 font-normal font-['Inter']">Warm Archive Recording</span>
                    <span className="text-blue-500 font-semibold font-['Inter']">● Planned</span>
                  </div>
                </div>
              </div>

              <div className="w-full p-5 bg-white rounded-xl border border-gray-200 flex flex-col justify-start items-start gap-3">
                <span className="text-slate-900 text-xs font-bold font-['Space_Grotesk']">EXTERNAL RISK REGISTRY</span>
                <div className="w-full grid grid-cols-3 gap-4 text-xs">
                  <div>
                    <span className="text-slate-500 block">Key Dependency</span>
                    <span className="text-slate-900 font-semibold font-['Inter']">CDN Tier-1 Edges</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Accountable Owner</span>
                    <span className="text-slate-900 font-semibold font-['Inter']">Platform Ops Team</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Failure Impact</span>
                    <span className="text-red-500 font-semibold font-['Inter']">Critical Handoff Drop</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="lg:col-span-5 flex flex-col justify-start items-start gap-5">
              <div className="w-full p-5 bg-white rounded-xl border border-gray-200 flex flex-col justify-start items-start gap-3">
                <span className="text-slate-900 text-xs font-bold font-['Space_Grotesk']">ACTIVE INCIDENT RESOLUTION FLOW</span>
                <div className="w-full flex flex-col justify-start items-start gap-2 text-xs">
                  <div className="w-full flex justify-between items-center">
                    <span className="text-slate-900 font-semibold font-['Inter']">● Detected</span>
                    <span className="text-slate-500 font-normal font-['Inter']">11:02 AM</span>
                  </div>
                  <div className="w-full flex justify-between items-center">
                    <span className="text-amber-500 font-semibold font-['Inter']">● Investigating</span>
                    <span className="text-slate-500 font-normal font-['Inter']">11:05 AM</span>
                  </div>
                  <div className="w-full flex justify-between items-center opacity-40">
                    <span className="text-slate-600 font-semibold font-['Inter']">● Mitigating</span>
                    <span className="text-slate-500 font-normal font-['Inter']">Pending</span>
                  </div>
                  <div className="w-full flex justify-between items-center opacity-40">
                    <span className="text-slate-600 font-semibold font-['Inter']">● Monitoring</span>
                    <span className="text-slate-500 font-normal font-['Inter']">Pending</span>
                  </div>
                  <div className="w-full flex justify-between items-center opacity-40">
                    <span className="text-slate-600 font-semibold font-['Inter']">● Resolved</span>
                    <span className="text-slate-500 font-normal font-['Inter']">Pending</span>
                  </div>
                </div>
              </div>

              <div className="w-full p-5 bg-white rounded-xl border border-gray-200 flex flex-col justify-start items-start gap-3">
                <span className="text-slate-900 text-xs font-bold font-['Space_Grotesk']">CONTINUITY SWITCH OPTIONS</span>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-3 py-2 bg-slate-100 rounded-md text-slate-900 font-bold font-['Inter']">Continue</span>
                  <span className="px-3 py-2 bg-slate-100 rounded-md text-slate-900 font-bold font-['Inter']">Hold</span>
                  <span className="px-3 py-2 bg-red-500 text-white rounded-md font-bold font-['Inter']">Switch Route</span>
                  <span className="px-3 py-2 bg-slate-100 rounded-md text-slate-900 font-bold font-['Inter']">Force Stop</span>
                  <span className="px-3 py-2 bg-slate-100 rounded-md text-slate-900 font-bold font-['Inter']">Replay Fallback</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Feature Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-xl border border-gray-200 flex flex-col justify-start items-start overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative w-full h-36 bg-slate-200">
                <Image
                  src={feat.img}
                  alt={feat.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full p-5 flex flex-col justify-start items-start gap-2">
                <h3 className="text-slate-900 text-lg font-bold font-['Space_Grotesk']">
                  {feat.title}
                </h3>
                <p className="text-slate-600 text-xs font-normal font-['Inter'] leading-5">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
