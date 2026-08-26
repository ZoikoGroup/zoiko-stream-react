import React from 'react';
import Image from 'next/image';

const authMethods = [
  {
    title: 'API Keys',
    method: 'METHOD_API_KEY',
    desc: 'Long-lived secret tokens intended exclusively for server-to-server operations. Kept out of repositories.',
    img: '/images/authentication/Card-Image (44).png',
    rev: 'REV 2026.02',
  },
  {
    title: 'Bearer Tokens',
    method: 'METHOD_JWT_BEARER',
    desc: 'Short-lived, tightly scoped JSON Web Tokens derived from master credentials for secure client-side playback.',
    img: '/images/authentication/Card-Image (45).png',
    rev: 'REV 2026.01',
  },
  {
    title: 'Signed Credentials',
    method: 'METHOD_ASYMM_SIGN',
    desc: 'High-security asymmetric signatures verifying transaction integrity without sharing raw secret keys.',
    img: '/images/authentication/Card-Image (46).png',
    rev: 'REV 2026.02',
  },
];

export function SupportedAuthenticationMethodsSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-slate-900/70 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/authentication/bg (10).png"
          alt="Supported Methods Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0  " />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold leading-tight lg:leading-[48px]">
            Supported authentication methods
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal leading-7">
            Only verified credential and token methods appear here — source-governed, evidence-backed, and lifecycle-tracked.
          </p>
        </div>

        {/* 3 Method Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {authMethods.map((item, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/80 rounded-2xl border border-gray-800 overflow-hidden flex flex-col justify-between shadow-xl backdrop-blur-md"
            >
              <div className="w-full h-40 relative bg-slate-900">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <div className="px-2 py-0.5 bg-emerald-500/10 rounded-full border border-emerald-500/30">
                    <span className="text-emerald-500 text-xs font-bold font-mono">CURRENT</span>
                  </div>
                  <span className="text-slate-400 text-xs font-mono">{item.method}</span>
                </div>

                <h3 className="text-white text-xl font-bold">{item.title}</h3>

                <p className="text-slate-400 text-base font-normal leading-5">{item.desc}</p>

                <div className="pt-4 border-t border-gray-800 flex justify-between items-center text-xs">
                  <span className="text-slate-400">Production Standard</span>
                  <span className="text-teal-400 font-mono">{item.rev}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
