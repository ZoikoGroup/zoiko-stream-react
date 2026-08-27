import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const boundaryCards = [
  {
    title: 'Environment Separation',
    desc: 'Rigid segregation between test, sandbox, and production networks.',
    img: '/images/authentication/Boundary-Card-Image.png',
  },
  {
    title: 'Credential Isolation',
    desc: 'Keys generated inside test sandboxes will reject target production calls instantly.',
    img: '/images/authentication/Boundary-Card-Image (1).png',
  },
  {
    title: 'Audience Restriction',
    desc: 'Limit client validation steps strictly to your registered video platform audience.',
    img: '/images/authentication/Boundary-Card-Image (2).png',
  },
  {
    title: 'Client Context',
    desc: 'Server-side integration keys must never leak into frontend browser client contexts.',
    img: '/images/authentication/Boundary-Card-Image (3).png',
  },
];

export function CredentialsDoNotCrossEnvironmentBoundariesSection() {
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
            Credentials do not cross environment boundaries
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal leading-7">
            Test, sandbox, and production environments are hard boundaries — credentials cannot be interchanged.
          </p>
        </div>

        {/* 4 Boundary Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {boundaryCards.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50/90 rounded-xl border border-gray-200 overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow backdrop-blur-sm"
            >
              <div className="w-full h-32 relative bg-slate-900">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-5 flex flex-col gap-2">
                <h3 className="text-slate-900 text-base font-bold">{item.title}</h3>
                <p className="text-slate-600 text-xs font-normal leading-4">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
