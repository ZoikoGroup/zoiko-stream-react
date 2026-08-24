import React from 'react';
import Image from 'next/image';

const trustLayers = [
  {
    title: 'Administrative Authority',
    q: 'How is governance configured?',
    sop: 'Requires dual-signature platform configuration update',
    gate: 'Verifiable SSO administrative ledger entry',
    img: '/images/Enterprises/Card-Image (75).png',
  },
  {
    title: 'Audience Identity & Entitlement',
    q: 'Is viewer identity verified?',
    sop: 'Enforces SAML SSO + OAuth identity authentication',
    gate: 'SAML assertions validated at edge',
    img: '/images/Enterprises/Card-Image (76).png',
  },
  {
    title: 'Policy Evaluation',
    q: 'Are current rules satisfied?',
    sop: 'Validates workspace, time-bounds and security overrides',
    gate: 'Server-side sub-millisecond evaluation trail',
    img: '/images/Enterprises/Card-Image (77).png',
  },
  {
    title: 'Playback & Media Protection',
    q: 'Is stream payload encrypted?',
    sop: 'AES-128 cryptographic key rotation with DRM',
    gate: 'DRM license verification request',
    img: '/images/Enterprises/Card-Image (78).png',
  },
  {
    title: 'Evidence & Lifecycle',
    q: 'How do we verify past outcomes?',
    sop: 'Preserves complete administrative audit ledger',
    gate: 'Exportable compliance log report',
    img: '/images/Enterprises/Card-Image (79).png',
  },
];

const protectedStates = [
  { label: 'Checking', sub: 'Token evaluated', color: 'bg-slate-500' },
  { label: 'Allowed', sub: 'Decrypting key sent', color: 'bg-emerald-500' },
  { label: 'Denied', sub: 'Policy failed', color: 'bg-red-500' },
  { label: 'Verification required', sub: 'Requires MFA', color: 'bg-amber-500' },
  { label: 'Expired', sub: 'Session expired', color: 'bg-red-500' },
  { label: 'Revoked', sub: 'Admin termination', color: 'bg-red-500' },
  { label: 'Policy unavailable', sub: 'Fallback block', color: 'bg-slate-500' },
];

export function ServerSideSecretsTrustSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-gray-950/80 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/Enterprises/bg (169).png"
          alt="Server-Side Secrets Background"
          fill
          className="object-cover opacity-30"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
            Keep secrets server-side and authorization decisions explainable.
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal font-['Inter'] leading-7">
            Deploy five inspectable trust layers from administrative authority through playback protection to enforce access controls verifiably.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustLayers.map((tl, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/80 rounded-xl border border-gray-800 flex flex-col justify-start items-start overflow-hidden hover:border-gray-700 transition-colors"
            >
              <div className="relative w-full h-32 bg-zinc-950">
                <Image
                  src={tl.img}
                  alt={tl.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full p-5 flex flex-col justify-start items-start gap-3">
                <h3 className="text-white text-lg font-bold font-['Space_Grotesk']">{tl.title}</h3>
                <p className="text-slate-400 text-xs font-normal font-['Inter'] leading-5">{tl.q}</p>
                <div className="w-full border-t border-gray-800 pt-3 flex flex-col gap-1 text-xs">
                  <div>
                    <span className="text-teal-400 font-bold font-['Inter']">Platform SOP: </span>
                    <span className="text-slate-500 font-normal font-['Inter']">{tl.sop}</span>
                  </div>
                  <div>
                    <span className="text-blue-500 font-bold font-['Inter']">Evidence Gate: </span>
                    <span className="text-slate-500 font-normal font-['Inter']">{tl.gate}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Protected-Access State System Bar */}
        <div className="w-full p-5 bg-slate-900 rounded-xl border border-gray-800 flex flex-col justify-start items-start gap-4">
          <span className="text-white text-sm font-bold font-['Space_Grotesk'] uppercase">
            EXPLICIT PROTECTED-ACCESS STATE SYSTEM
          </span>
          <div className="w-full flex flex-wrap justify-between items-center gap-4">
            {protectedStates.map((st, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${st.color}`} />
                <div className="flex flex-col gap-0.5">
                  <span className="text-white text-xs font-bold font-['Space_Grotesk']">{st.label}</span>
                  <span className="text-slate-500 text-[10px] font-normal font-['Inter']">{st.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
