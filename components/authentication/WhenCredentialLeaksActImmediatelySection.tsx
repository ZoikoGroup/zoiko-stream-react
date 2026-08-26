import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const leakSteps = [
  {
    num: '01',
    title: 'Stop Exposure',
    desc: 'Remove leaked values from public git histories, configuration stores, or cache files immediately.',
    img: '/images/authentication/card-image (57).png',
  },
  {
    num: '02',
    title: 'Revoke/Rotate',
    desc: 'Call the rotation endpoint to blacklist the exposed key and invalidate existing access sessions.',
    img: '/images/authentication/card-image (58).png',
  },
  {
    num: '03',
    title: 'Deploy Replacement',
    desc: 'Inject the newly minted credentials securely into staging/production application environment vaults.',
    img: '/images/authentication/card-image (59).png',
  },
  {
    num: '04',
    title: 'Review Activity',
    desc: 'Analyze pipeline call history since time of suspected exposure for signs of unauthorized actions.',
    img: '/images/authentication/card-image (60).png',
  },
  {
    num: '05',
    title: 'Escalate Support',
    desc: 'Contact the Zoiko Security response team to flag the leak and assist with coordinated pipeline safety.',
    img: '/images/authentication/card-image (61).png',
  },
  {
    num: '06',
    title: 'Document Incident',
    desc: 'Prepare post-mortem reports to update internal governance stakeholders and prevent future exposures.',
    img: '/images/authentication/card-image (62).png',
  },
];

export function WhenCredentialLeaksActImmediatelySection() {
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
            When a credential leaks, act immediately
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal leading-7">
            Stop, revoke, rotate, replace, review, escalate.
          </p>
        </div>

        {/* 6 Step Cards Grid (3x2) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {leakSteps.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/90 rounded-xl border border-gray-200 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow backdrop-blur-sm"
            >
              <div className="w-full h-36 relative bg-slate-900">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-blue-500 text-xl font-bold font-mono">{item.num}</span>
                  <h3 className="text-slate-900 text-lg font-bold">{item.title}</h3>
                </div>
                <p className="text-slate-600 text-sm font-normal leading-5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
