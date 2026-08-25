import React from 'react';
import Image from 'next/image';

const steps = [
  {
    num: '01',
    title: 'Audience Intent',
    detail: 'Public / Controlled / Mixed / Restricted / Embargoed / Not decided',
    color: 'text-teal-400',
  },
  {
    num: '02',
    title: 'Identity Verification',
    detail: 'How a viewer is recognized (SAML SSO, Signed Token, Anonymous Edge)',
    color: 'text-blue-500',
  },
  {
    num: '03',
    title: 'Entitlement State',
    detail: 'Whether the specific viewer is eligible according to active corporate rosters',
    color: 'text-violet-500',
  },
  {
    num: '04',
    title: 'Policy Evaluation',
    detail: 'Configured access rules evaluate entitlement against security boundaries in real-time',
    color: 'text-teal-400',
  },
  {
    num: '05',
    title: 'Playback Authorization',
    detail: 'Checking / Allowed / Denied / Verification required / Expired / Revoked / Policy unavailable',
    color: 'text-blue-500',
  },
  {
    num: '06',
    title: 'Distribution Destination',
    detail: 'Approved secure player embeds, internal corporate network hubs, or global CDN edges',
    color: 'text-violet-500',
  },
  {
    num: '07',
    title: 'Viewer Outcome',
    detail: 'Loading / Playing / Denied / Expired / Unavailable / Error / Unknown',
    color: 'text-teal-400',
  },
];

export function IntentAuthorizationSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-slate-900/60 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/solutions-enterprise-broadcast/bg (2).png"
          alt="Intent Authorization Background"
          fill
          className="object-cover opacity-25"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold  leading-tight lg:leading-[52px]">
            Keep intent, authorization and destination distinct
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal  leading-7">
            Prevent private or global from becoming vague one-click promises.
          </p>
        </div>

        {/* 7 Step Cards */}
        <div className="w-full flex flex-col gap-3">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className="p-5 bg-zinc-900/80 rounded-xl border-[1.5px] border-gray-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 bg-blue-500 rounded-2xl flex items-center justify-center text-white text-xs font-bold  flex-shrink-0">
                  {st.num}
                </div>
                <span className="text-white text-base font-bold ">{st.title}</span>
              </div>
              <span className={`text-sm font-bold  ${st.color}`}>
                {st.detail}
              </span>
            </div>
          ))}
        </div>

        {/* Security Override Box */}
        <div className="w-full p-6 bg-zinc-900/80 rounded-r-xl border-l-4 border-teal-400 flex items-start gap-4 backdrop-blur-sm">
          <div className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
            <div className="w-4 h-4 border-2 border-teal-400 rounded-xs" />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-white text-base font-bold ">
              Security Override: Deterministic Fail-Closed State
            </h3>
            <p className="text-slate-400 text-xs font-normal  leading-5">
              If the Policy Evaluation engine encounters a network timeout or directory unavailability, authorization instantly defaults to Denied. No fallback to public streams is permitted under the Enterprise Broadcast brief.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
