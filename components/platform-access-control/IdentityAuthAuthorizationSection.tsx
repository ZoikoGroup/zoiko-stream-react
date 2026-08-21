'use client';

import React, { useState } from 'react';
import { ShieldCheck, Lock, ArrowRight } from 'lucide-react';

const authorityPoints = [
  {
    title: 'Identity — The Declared Principal',
    desc: 'The verifiable assertion of who or what is requesting access (e.g. administrator, partner API, player embed).',
  },
  {
    title: 'Authentication — The Evidence of Identity',
    desc: 'The verified security proof (OIDC token, hardware certificate, signed JWT) confirming the identity assertion is legitimate.',
  },
  {
    title: 'Authorization — The Active Permission Check',
    desc: 'The real-time operational check: does this validated identity have permission to perform this specific action on this resource right now?',
  },
  {
    title: 'Entitlement — Scoped Organizational Authority',
    desc: 'The policy-defined boundary. You may be authenticated, but without an unexpired entitlement record, access remains denied.',
  },
];

export default function IdentityAuthAuthorizationSection() {
  const [email, setEmail] = useState('');

  return (
    <section className="w-full bg-white border-b border-slate-200 py-20 md:py-24 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-slate-900 leading-tight">
            Identity, Authentication &amp; Authorization
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-normal font-['Space_Grotesk'] max-w-3xl">
            Sign-in is not permission. Understand the layered authority model that governs enterprise media.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Points */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {authorityPoints.map((pt, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="size-8 bg-emerald-500/10 rounded-md flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                  <ShieldCheck className="size-4" />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-slate-900 text-base font-bold font-['Space_Grotesk']">
                    {pt.title}
                  </h3>
                  <p className="text-slate-600 text-sm font-normal font-['Inter'] leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Sign-In Mock Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md p-8 md:p-10 bg-white rounded-2xl border border-slate-200 shadow-2xl flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h3 className="text-slate-900 text-3xl font-bold font-['Space_Grotesk']">
                  Sign in to ZoikoStream
                </h3>
                <p className="text-slate-600 text-sm font-normal font-['Space_Grotesk']">
                  Enter your corporate credentials to access the platform.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-slate-900 text-sm font-bold font-['Space_Grotesk']">
                  Work email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@organization.com"
                  className="w-full h-12 px-4 bg-white rounded-lg border border-gray-200 text-slate-900 text-sm font-normal font-['Space_Grotesk'] focus:outline-hidden focus:border-teal-500"
                />
              </div>

              <button
                type="button"
                className="w-full h-12 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg text-white text-base font-bold font-['Space_Grotesk'] hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <span>Continue</span>
                <ArrowRight className="size-4" />
              </button>

              <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                <Lock className="size-4 text-slate-500 shrink-0" />
                <span className="text-slate-600 text-xs font-normal font-['Space_Grotesk']">
                  Use the account your organization approved.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
