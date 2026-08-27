import React from 'react';
import Image from 'next/image';

const failureCards = [
  {
    title: 'Identity Errors',
    desc: 'Failed signature verification or expired token structures. Fix: Re-fetch client keys or verify local clock sync skew.',
    img: '/images/authentication/card-image (53).png',
  },
  {
    title: 'Permission Errors',
    desc: 'Scopes on active token do not match the target API resource path. Fix: Update permission manifest parameters.',
    img: '/images/authentication/card-image (54).png',
  },
  {
    title: 'Policy Errors',
    desc: 'Blocked by geo-fencing, ip restriction, or time-window criteria. Fix: Verify corporate egress route settings.',
    img: '/images/authentication/card-image (55).png',
  },
  {
    title: 'Service Errors',
    desc: 'Gateway timeouts or database connection limits exceeded. Fix: Implement linear retry backoff algorithms.',
    img: '/images/authentication/card-image (56).png',
  },
];

export function DiagnoseFailuresWithoutExposingSecretsSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-slate-900/90 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/authentication/bg (14).png"
          alt="Diagnose Failures Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0  " />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Diagnose failures without exposing secrets
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            Each error family has a distinct next step.
          </p>
        </div>

        {/* 4 Failure Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {failureCards.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-950 rounded-xl border border-gray-800 overflow-hidden flex flex-col justify-between shadow-xl hover:border-gray-700 transition-colors min-h-[300px]"
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
                <h3 className="text-white text-lg font-bold">{item.title}</h3>
                <p className="text-slate-400 text-sm font-normal leading-5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
