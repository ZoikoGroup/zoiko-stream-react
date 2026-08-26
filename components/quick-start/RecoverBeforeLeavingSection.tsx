import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import { TriangleAlert } from 'lucide-react';

const recoveryDomainCards = [
  {
    title: 'Access & Auth',
    linkText: 'Review Auth Keys',
    symptom: 'Symptom: HTTP 401 Unauthorized errors during stream creation calls',
    known: 'Missing environment variables or active credentials on host server.',
    action: 'Instantiate secret token checks during backend initialization sequence.',
    img: '/images/quickstart/Rectangle (3).png',
   
  },
  {
    title: 'Ingest Connectivity',
    linkText: 'Configure SRT Ingest',
    symptom: 'Symptom: RTMP handshakes timeout or disconnect persistently',
    known: 'Local port 1935 is blocked by organization firewalls or ISP security policies.',
    action: 'Fallback to SRT (Secure Reliable Transport) over HTTPS port 443.',
    img: '/images/quickstart/Rectangle (15).png',
    
  },
  {
    title: 'Playback Blocked',
    linkText: 'Secure Manifests',
    symptom: 'Symptom: Client player displays raw black screen or 403 Forbidden manifest calls',
    known: 'Signed token verification payload has expired or claims a mismatch domain path.',
    action: 'Recalculate manifest expirations. Implement domain-restricted token routing.',
    img: '/images/quickstart/Rectangle (4).png',
   
  },
];

export function RecoverBeforeLeavingSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-14 overflow-hidden">
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
      <div className="size-96 -left-44 -top-24 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-900 text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Recover Before You Leave the Quickstart
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal leading-7">
            Do not assume seamless deployments. Build resilient logic blocks around the five primary video system failure domains to guarantee continuous user experiences.
          </p>
        </div>

        {/* 3 Domain Recovery Cards */}
        <div className="w-full flex flex-col gap-5">
          {recoveryDomainCards.map((card, idx) => {
            return (
              <div
                key={idx}
                className="p-6 bg-slate-50/90 rounded-xl border border-gray-200 flex flex-col md:flex-row justify-start items-start gap-6 shadow-sm backdrop-blur-sm hover:shadow-md transition-shadow"
              >
                <div className="w-full md:w-40 h-28 relative rounded-lg overflow-hidden flex-shrink-0 bg-slate-900">
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 flex flex-col gap-3">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex items-center gap-2">
                      <h3 className="text-slate-900 text-lg font-bold">{card.title}</h3>
                    </div>
                    <span className="text-blue-500 text-xs font-bold underline cursor-pointer hover:text-blue-600">
                      {card.linkText}
                    </span>
                  </div>

                  <span className="text-teal-600 text-sm font-semibold">{card.symptom}</span>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                    <div className="flex flex-col gap-1">
                      <span className="text-slate-600 text-xs font-bold">WHAT IS KNOWN:</span>
                      <span className="text-slate-600 text-xs font-normal leading-5">{card.known}</span>
                    </div>

                    <div className="flex flex-col gap-1">
                      <span className="text-blue-500 text-xs font-bold">SAFE RECOVERY ACTION:</span>
                      <span className="text-slate-600 text-xs font-normal leading-5">{card.action}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* System Status Alert Bar */}
        <div className="w-full p-6 bg-amber-50/90 rounded-xl border border-amber-500/40 flex flex-col sm:flex-row justify-between items-center gap-4 shadow-sm backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <TriangleAlert className="w-5 h-5 text-amber-500 flex-shrink-0" />
            <span className="text-slate-900 text-sm font-normal">
              <strong>System Status:</strong> All Ingest Networks Operational • No platform incidents reported.
            </span>
          </div>

          <div className="px-5 py-2.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex items-center gap-2 cursor-pointer shadow-sm flex-shrink-0">
            <span className="text-slate-950 text-xs font-bold">Developer Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
