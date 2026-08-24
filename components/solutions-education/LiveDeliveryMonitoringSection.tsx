import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const verifications = [
  { time: '10:14:02 EST', text: 'Verified dual ingest active path. Telemetry handshake success.' },
  { time: '10:08:14 EST', text: 'ASL overlay remote translator connected on auxiliary channel.' },
  { time: '09:55:00 EST', text: 'System auto-validated 500 registrants SAML login directory.' },
];

const continuitySteps = [
  'Trigger fallback RTMP path on ingest drop',
  'Re-route Webrtc mesh peers on delay >2s',
  'Anonymize chat records on session close',
  'Publish cold archive replication files',
];

export function LiveDeliveryMonitoringSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-14 overflow-hidden">
       <div className="absolute inset-0 pointer-events-none z-0">
              <Image
                src={bg147}
                alt="Media Lifecycle Background"
                fill
                className="object-cover opacity-30"
                priority
              />
              <div className="absolute inset-0 " />
            </div>
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />
      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
            Live delivery, monitoring and continuity
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal font-['Inter'] leading-7">
            Real-time operational state, dependency health, incident management, and continuity decisions — with timestamps you can trust.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column Map & Log */}
          <div className="lg:col-span-7 w-full p-8 bg-white rounded-2xl border border-gray-200 flex flex-col justify-start items-start gap-6 shadow-sm">
            <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-gray-200">
              <h3 className="text-slate-900 text-lg font-bold font-['Space_Grotesk']">Active Pipeline Map</h3>
              <div className="flex items-center gap-1.5 flex-wrap text-xs font-bold font-['Space_Grotesk']">
                <span className="px-2 py-1 bg-gray-200 text-slate-600 rounded">Draft</span>
                <span className="text-gray-300">→</span>
                <span className="px-2 py-1 bg-gray-200 text-slate-600 rounded">Planned</span>
                <span className="text-gray-300">→</span>
                <span className="px-2 py-1 bg-gray-200 text-slate-600 rounded">Ready</span>
                <span className="text-gray-300">→</span>
                <span className="px-2 py-1 bg-blue-500 text-white rounded">Live</span>
                <span className="text-gray-300">→</span>
                <span className="px-2 py-1 bg-gray-200 text-slate-600 rounded">Ended</span>
              </div>
            </div>

            <div className="w-full flex flex-col justify-start items-start gap-4">
              <span className="text-slate-900 text-sm font-bold font-['Space_Grotesk']">Recent Verification Log</span>
              {verifications.map((v, idx) => (
                <div key={idx} className="w-full flex items-start gap-3 text-xs">
                  <span className="w-24 text-slate-600 font-bold font-['Space_Grotesk'] flex-shrink-0">{v.time}</span>
                  <span className="text-slate-900 font-normal font-['Inter'] leading-5">{v.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column Action Plan */}
          <div className="lg:col-span-5 w-full p-8 bg-white rounded-2xl border border-gray-200 flex flex-col justify-start items-start gap-6 shadow-sm">
            <h3 className="text-slate-900 text-lg font-bold font-['Space_Grotesk']">Continuity Action Plan</h3>
            <div className="w-full flex flex-col justify-start items-start gap-3">
              {continuitySteps.map((cs, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs">
                  <div className="w-4 h-4 rounded border border-blue-500 flex items-center justify-center flex-shrink-0">
                    <span className="text-blue-500 text-[10px]">✓</span>
                  </div>
                  <span className="text-slate-600 font-normal font-['Inter']">{cs}</span>
                </div>
              ))}
            </div>

            <div className="w-full border-t border-gray-200 pt-4">
              <div className="px-7 py-3.5 bg-gradient-to-b from-teal-400 to-blue-500 rounded-lg flex justify-center items-center cursor-pointer">
                <span className="text-gray-950 text-base font-bold font-['Space_Grotesk']">
                  Review live operations
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
