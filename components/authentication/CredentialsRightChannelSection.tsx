import React from 'react';
import Image from 'next/image';

const channels = [
  {
    status: 'Not Signed In',
    dotCls: 'bg-slate-400',
    desc: 'Get developer access to generate credentials',
    btn: 'Sign In Required',
    img: '/images/authentication/State-Image.png',
  },
  {
    status: 'Access Available',
    dotCls: 'bg-slate-400',
    desc: 'Open developer workspace safely with credentials',
    btn: 'Launch Console',
    img: '/images/authentication/State-Image (1).png',
  },
  {
    status: 'Credential Ready',
    dotCls: 'bg-teal-400',
    desc: 'Open Quickstart workspace tools directly',
    btn: 'Open Quickstart',
    img: '/images/authentication/State-Image (2).png',
  },
  {
    status: 'Access Restricted',
    dotCls: 'bg-slate-400',
    desc: 'Review mandatory verification rules',
    btn: 'Verify Identity',
    img: '/images/authentication/State-Image (3).png',
  },
  {
    status: 'Suspended/Revoked',
    dotCls: 'bg-amber-600',
    desc: 'Reach out directly to developer support portal',
    btn: 'Contact Support',
    img: '/images/authentication/State-Image (4).png',
  },
];

export function CredentialsRightChannelSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-slate-900/90 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/authentication/bg (11).png"
          alt="Credentials Right Channel Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0  " />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Get credentials through the right channel
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            Authentication documentation does not create credentials. It orchestrates a truthful handoff to Developer Access or authenticated workspace tooling.
          </p>
        </div>

        {/* 5 Channel Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {channels.map((item, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/80 rounded-xl border border-gray-800 overflow-hidden flex flex-col justify-between shadow-xl backdrop-blur-md"
            >
              <div className="w-full h-24 relative bg-slate-900">
                <Image
                  src={item.img}
                  alt={item.status}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4 flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <span className="text-white text-xs font-bold">{item.status}</span>
                  <div className={`w-1.5 h-1.5 rounded-full ${item.dotCls}`} />
                </div>

                <p className="text-slate-400 text-xs font-normal leading-4">{item.desc}</p>

                <div className="mt-2 py-2 bg-slate-800/80 rounded border border-gray-700 flex justify-center items-center cursor-pointer">
                  <span className="text-white text-xs font-bold">{item.btn}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
