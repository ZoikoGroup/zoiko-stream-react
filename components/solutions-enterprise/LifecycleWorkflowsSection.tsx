import React from 'react';
import Image from 'next/image';

const workflows = [
  {
    title: 'Enterprise Broadcast',
    q: 'How do we secure high-volume all-hands events?',
    focus: 'Direct RTMP/SRT Secure Ingest + Token Access',
    handoff: 'From live encoder directly to global distributed edges',
    img: '/images/Enterprises/Card-Image (70).png',
  },
  {
    title: 'Private Audience Delivery',
    q: 'Can we restrict streaming to authenticated partners?',
    focus: 'SAML SSO integration with custom SAML rules',
    handoff: 'SSO validation layer to secure private client portal',
    img: '/images/Enterprises/Card-Image (71).png',
  },
  {
    title: 'Global Event Streaming',
    q: 'How to scale live media to millions of viewers?',
    focus: 'Multi-CDN routing + Edge failover protection',
    handoff: 'Dual live encoders to globally redundant CDN ingress',
    img: '/images/Enterprises/Card-Image (72).png',
  },
  {
    title: 'Media Preservation',
    q: 'How do we comply with long-term archive rules?',
    focus: 'Automated instant recording + cold replicate',
    handoff: 'Live stream output pipeline directly to archival storage',
    img: '/images/Enterprises/Card-Image (73).png',
  },
  {
    title: 'Operational Analytics',
    q: 'Is streaming quality inspectable in real-time?',
    focus: 'Real-time telemetry + Pipeline status display',
    handoff: 'Telemetry pipeline to live incident monitoring console',
    img: '/images/Enterprises/Card-Image (74).png',
  },
];

const stages = [
  { num: '1. Contribute', sub: 'Source authorized?' },
  { num: '2. Ingest', sub: 'Pipeline active?' },
  { num: '3. Produce', sub: 'Stream verified?' },
  { num: '4. Secure', sub: 'Tokens evaluated?' },
  { num: '5. Deliver', sub: 'Edge load optimized?' },
  { num: '6. Understand', sub: 'SLA metrics tracked?' },
  { num: '7. Preserve', sub: 'Replication stored?' },
];

export function LifecycleWorkflowsSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-28 bg-slate-900/90 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/Enterprises/bg (168).png"
          alt="Lifecycle Background Overlay"
          fill
          className="object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold font-['Space_Grotesk'] leading-tight lg:leading-[48px]">
            Enterprise workflows across the seven-stage lifecycle.
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal font-['Inter'] leading-7">
            Deploy pre-configured video workflows mapped cleanly to standard media contribution, ingest, production, security, delivery, analytics and preservation stages.
          </p>
        </div>

        {/* 5 Workflow Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflows.map((wf, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/80 rounded-xl border border-gray-800 flex flex-col justify-start items-start overflow-hidden hover:border-gray-700 transition-colors"
            >
              <div className="relative w-full h-32 bg-zinc-950">
                <Image
                  src={wf.img}
                  alt={wf.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="w-full p-5 flex flex-col justify-start items-start gap-3">
                <h3 className="text-white text-lg font-bold font-['Space_Grotesk']">{wf.title}</h3>
                <p className="text-slate-400 text-xs font-normal font-['Inter'] leading-5">{wf.q}</p>
                <div className="w-full border-t border-gray-800 pt-3 flex flex-col gap-1 text-xs">
                  <div>
                    <span className="text-teal-400 font-bold font-['Inter']">Focus: </span>
                    <span className="text-slate-500 font-normal font-['Inter']">{wf.focus}</span>
                  </div>
                  <div>
                    <span className="text-blue-500 font-bold font-['Inter']">Handoff: </span>
                    <span className="text-slate-500 font-normal font-['Inter']">{wf.handoff}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 7-Stage Media Lifecycle Box */}
        <div className="w-full p-6 bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col justify-start items-start gap-6 backdrop-blur-sm">
          <span className="text-white text-sm font-bold font-['Space_Grotesk'] tracking-wide uppercase">
            THE 7-STAGE MEDIA LIFECYCLE
          </span>
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
            {stages.map((st, idx) => (
              <div key={idx} className="flex flex-col items-center text-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-b from-teal-400 to-blue-500 rounded-full flex items-center justify-center border border-gray-800">
                  <div className="w-3 h-3 border-2 border-slate-900 rounded-xs" />
                </div>
                <span className="text-white text-xs font-bold font-['Space_Grotesk']">{st.num}</span>
                <span className="text-slate-500 text-[10px] font-normal font-['Inter']">{st.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
