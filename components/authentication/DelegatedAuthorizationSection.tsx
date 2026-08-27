import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';
import { ChevronDown } from 'lucide-react';

const delegatedCards = [
  {
    title: 'Grant Flows',
    desc: 'Authorization code grant with PKCE constraint enforced natively.',
    img: '/images/authentication/Rectangle.png',
  },
  {
    title: 'Token Lifecycle',
    desc: 'Refresh token rotation with reuse detection mechanisms.',
    img: '/images/authentication/Rectangle (1).png',
  },
  {
    title: 'Security Standards',
    desc: 'Compliance with OpenID Connect core specifications.',
    img: '/images/authentication/Rectangle (2).png',
  },
];

export function DelegatedAuthorizationSection() {
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
            Delegated authorization — only when supported
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal leading-7">
            OAuth, OIDC, PKCE appear only when explicitly supported. No speculative diagrams.
          </p>
        </div>

        {/* 2 Column Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Diagram Box: PKCE & OAuth 2.1 */}
          <div className="p-8 bg-slate-50/90 rounded-xl border border-gray-200 flex flex-col gap-6 shadow-sm backdrop-blur-sm">
            <h3 className="text-slate-900 text-xl font-bold font-mono">PKCE &amp; OAuth 2.1 State Flow</h3>

            <div className="flex items-center justify-between gap-4">
              <div className="px-4 py-2 bg-slate-900 rounded-md text-white text-xs font-bold font-mono">
                Client App
              </div>
              <div className="flex-1 h-0.5 bg-slate-400" />
              <div className="px-4 py-2 bg-slate-200 rounded-md text-slate-900 text-xs font-normal font-mono">
                Auth Server
              </div>
            </div>

            <div className="text-center text-slate-600 text-xs font-normal">
              1. Authorization Request + Code Challenge
            </div>

            <div className="flex items-center justify-between gap-4">
              <div className="px-4 py-2 bg-slate-200 rounded-md text-slate-900 text-xs font-normal font-mono">
                User Consent
              </div>
              <div className="flex-1 h-0.5 bg-slate-400" />
              <div className="px-4 py-2 bg-slate-900 rounded-md text-white text-xs font-bold font-mono">
                Access Token
              </div>
            </div>

            <div className="text-center text-slate-600 text-xs font-normal">
              2. Code Exchange + Code Verifier
            </div>

            <div className="p-3 bg-emerald-50 rounded-lg border border-teal-400 flex justify-center items-center">
              <span className="text-emerald-800 text-sm font-semibold">
                ✓ Cryptographically Bound Handshake
              </span>
            </div>
          </div>

          {/* Right Column: 3 OAuth Cards */}
          <div className="flex flex-col gap-4">
            {delegatedCards.map((item, idx) => (
              <div
                key={idx}
                className="p-4 bg-white/90 rounded-xl border border-gray-200 flex items-center gap-4 shadow-sm backdrop-blur-sm"
              >
                <div className="w-20 h-20 relative rounded-lg overflow-hidden bg-slate-900 flex-shrink-0">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="text-slate-900 text-lg font-bold">{item.title}</h3>
                  <p className="text-slate-600 text-sm font-normal leading-4">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
