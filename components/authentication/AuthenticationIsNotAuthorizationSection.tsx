import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const stages = [
  {
    title: 'Developer Access',
    desc: 'May this authenticated developer account obtain or rotate API key credentials?',
    stage: 'STAGE 01',
    img: '/images/authentication/Row-Image.png',
  },
  {
    title: 'Client/User Authentication',
    desc: 'Who or what is requesting access? Verifies the raw caller context against registered records.',
    stage: 'STAGE 02',
    img: '/images/authentication/Row-Image (1).png',
  },
  {
    title: 'Scopes & Permissions',
    desc: 'Which broad classes of operations (read, write, delete) are permitted for this credential?',
    stage: 'STAGE 03',
    img: '/images/authentication/Row-Image (2).png',
  },
  {
    title: 'Tenant/Object Authorization',
    desc: 'May this specific caller interact with this exact resource, server, or streaming pipeline?',
    stage: 'STAGE 04',
    img: '/images/authentication/Row-Image (3).png',
  },
  {
    title: 'Entitlement & Policy',
    desc: 'Is the action allowed under active plan limits, time-of-day policies, or location compliance constraints?',
    stage: 'STAGE 05',
    img: '/images/authentication/Row-Image (4).png',
  },
  {
    title: 'Playback Authorization',
    desc: 'May a viewer retrieve and decode protected media? Validates token signature prior to manifest delivery.',
    stage: 'STAGE 06',
    img: '/images/authentication/Row-Image (5).png',
  },
  {
    title: 'Business Authority',
    desc: 'Should this action execute under corporate governance? Tracks final auditability and institutional sanity.',
    stage: 'STAGE 07',
    img: '/images/authentication/Row-Image (7).png',
  },
];

export function AuthenticationIsNotAuthorizationSection() {
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
            Authentication is not authorization
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal leading-7">
            A valid credential proves identity. It does not grant unlimited access to every resource, tenant, or action.
          </p>
        </div>

        {/* 7 Stage Rows */}
        <div className="w-full flex flex-col gap-3">
          {stages.map((st, idx) => (
            <div
              key={idx}
              className="p-5 bg-white/90 rounded-xl border border-gray-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6 backdrop-blur-sm"
            >
              <div className="w-20 h-20 relative rounded-lg overflow-hidden bg-slate-900 flex-shrink-0">
                <Image
                  src={st.img}
                  alt={st.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1 flex flex-col gap-1">
                <h3 className="text-slate-900 text-xl font-bold">{st.title}</h3>
                <p className="text-slate-600 text-base font-normal leading-5">{st.desc}</p>
              </div>

              <div className="px-3 py-1 bg-slate-100 rounded-full border border-gray-200">
                <span className="text-blue-600 text-xs font-bold font-mono">{st.stage}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
