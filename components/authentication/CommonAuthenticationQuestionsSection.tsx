'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const authFaqs = [
  {
    q: 'Is OAuth 2.1 enforced globally across all endpoints?',
    a: 'Yes. ZoikoStream actively restricts older deprecated workflows. All modern API handshakes enforce PKCE bound parameters natively.',
  },
  {
    q: 'How frequently are credential verification logs rotated?',
    a: 'Audit trail metadata is archived to highly secure cold vaults after 30 days and permanently deleted based on region.',
  },
  {
    q: 'Can we configure custom geo-fencing policies per token?',
    a: 'Absolutely. Admin panels support direct country code mapping, CIDR block boundaries, and custom timestamp access controls.',
  },
  {
    q: 'What happens when an automated rotation step fails?',
    a: 'Staging environments maintain redundant fallback grace tokens to ensure continuous video delivery pipelines stay active.',
  },
  {
    q: 'Do you support SAML SSO integration directly?',
    a: 'Yes. Enterprise portals map natively into Okta, Azure AD, Ping Identity, and custom OIDC providers.',
  },
  {
    q: 'Are custom encryption keys supported for regulatory compliance?',
    a: 'Yes. Enterprise tier users can bring their own keys (BYOK) managed via external cloud hardware security modules.',
  },
  {
    q: 'What is the expected latency for access token verification?',
    a: 'ZoikoStream edge points verify signatures globally in under 12ms to prevent handshake bottlenecks.',
  },
  {
    q: 'Does the client SDK handle token storage automatically?',
    a: 'Our web and native platform SDKs include built-in encrypted keystore bindings for native hardware secure enclaves.',
  },
  {
    q: 'How do we report a suspected security vulnerability?',
    a: 'Please escalate immediately to our coordinated disclosure desk at security@zoiko.com using PGP signed payloads.',
  },
  {
    q: 'Can we restrict admin keys to write-only scope operations?',
    a: 'Yes. Permissions follow strict role-based access controls to isolate reading billing data from executing key revocations.',
  },
];

export function CommonAuthenticationQuestionsSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-slate-900/80 border-b border-gray-800 flex flex-col justify-start items-start gap-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/authentication/bg (16).png"
          alt="Common Questions Background"
          fill
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0  " />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-16">
        <div className="w-full flex flex-col gap-6">
          <h2 className="text-white text-3xl font-bold">Common questions, direct answers</h2>

          {/* 10 FAQ Accordion Items */}
          <div className="w-full flex flex-col gap-3">
            {authFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="p-6 bg-gray-950/90 rounded-xl border border-gray-800 flex flex-col gap-3 cursor-pointer transition-colors hover:border-gray-700 backdrop-blur-sm"
                  onClick={() => toggleFaq(idx)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-white text-base font-bold">{faq.q}</h3>
                    <div className="w-7 h-7 rounded-full border border-gray-800 flex items-center justify-center text-white flex-shrink-0 font-mono text-xs">
                      {isOpen ? '-' : '+'}
                    </div>
                  </div>
                  {isOpen && (
                    <p className="text-slate-400 text-sm font-normal leading-5 pt-2 border-t border-gray-800">
                      {faq.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Final Security CTA Box */}
        <div className="w-full p-8 lg:p-14 bg-zinc-900/40 rounded-2xl border border-gray-800 flex flex-col items-center justify-center text-center gap-8 shadow-2xl backdrop-blur-md">
          <div className="flex flex-col gap-3 max-w-[640px]">
            <h3 className="text-white text-3xl font-bold">Secure your stream pipeline today</h3>
            <p className="text-slate-400 text-base font-normal leading-6">
              Select the implementation model matching your engineering capacity guidelines.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="px-7 py-3.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex items-center justify-center cursor-pointer shadow-md">
              <span className="text-slate-950 text-base font-bold">Get API Credentials</span>
            </div>
            <div className="px-7 py-3.5 rounded-lg border border-slate-400 flex items-center justify-center cursor-pointer hover:border-white transition-colors">
              <span className="text-white text-base font-bold">Talk to Security Team</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
