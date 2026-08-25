import React from 'react';
import Image from 'next/image';
import { Plus } from 'lucide-react';

const pathRows = [
  {
    context: 'New enterprise evaluator seeking system capabilities',
    action: 'Dedicated expert architecture planning session',
    route: 'Talk to expert',
  },
  {
    context: 'Technical builder evaluating APIs, code samples, & schemas',
    action: 'Direct developer integration & API spec manuals',
    route: 'Review API Docs',
  },
  {
    context: 'Existing enterprise account checking SLA telemetry status',
    action: 'Live active pipeline system status dashboard updates',
    route: 'System Status Page',
  },
  {
    context: 'Event planner requiring white-glove broadcast operations',
    action: 'Professional live concierge managed services pathway',
    route: 'Plan a live event',
  },
  {
    context: 'Product team integrating custom video inside software features',
    action: 'API integration workflows and developer dashboard',
    route: 'Embed product video',
  },
  {
    context: 'Organization distributing sensitive internal streams to staff',
    action: 'Highly secure private audience token-gated delivery path',
    route: 'View private options',
  },
  {
    context: 'Media institution broadcasting to millions globally',
    action: 'Ultra-low latency globally distributed multi-CDN network',
    route: 'Explore global scale',
  },
];

const faqs = [
  {
    q: 'What is an enterprise broadcast workflow?',
    a: 'It is a deterministic operational framework coordinating contribution feeds, active redundant route failovers, SSO secure directories, automated compliant recording, and storage replication on a versioned Brief config.',
  },
  {
    q: 'Can a broadcast be private or controlled?',
    a: 'Yes. Using absolute directory integration (SAML SSO), geo-fencing limits, and secure token access controls, you enforce governed connection paths restricting viewers strictly to verified audiences.',
  },
  {
    q: 'Can a live broadcast become replay?',
    a: 'Yes. Post-broadcast workflows dictate deliberate live transition into archived assets, replicating durable files automatically across regional geographical storage nodes.',
  },
  {
    q: 'Where do existing customers go during an issue?',
    a: 'Active customers should coordinate directly with the System Status Page for real-time telemetry updates or launch direct support tickets through the Enterprise Support panel.',
  },
  {
    q: 'How is this different from ZoikoStream Live Events?',
    a: 'Live Events is a white-glove, concierge-led broadcast operation monitored in real-time by specialists. The Enterprise Broadcast workflow is a platform-governed infrastructure model integrated directly with your own team\'s operational systems.',
  },
  {
    q: 'Does ZoikoStream provide failover or guaranteed uptime?',
    a: 'We provide explicit, versioned recovery blueprints and active redundant contribution encoder paths. Security and availability depend on matching continuity setups, backed by SLA targets.',
  },
  {
    q: 'How are captions and languages handled?',
    a: 'We support automated AI caption generation, real-time translation pipelines, and independent alternative language audio channels routed natively through standardized layouts.',
  },
];

export function ConversionFaqSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-gray-950/90 border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/solutions-enterprise-broadcast/bg (7).png"
          alt="Conversion FAQ Background"
          fill
          className="object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-white text-3xl lg:text-4xl font-bold  leading-tight lg:leading-[50px]">
            Convert with evidence and explicit intent
          </h2>
          <p className="text-slate-400 text-base lg:text-lg font-normal  leading-7">
            Preserve customer continuity while moving users forward.
          </p>
        </div>

        {/* Operational Context Table */}
        <div className="w-full rounded-xl border border-gray-800 overflow-hidden flex flex-col justify-start items-start">
          <div className="w-full p-5 bg-slate-900 flex justify-start items-center gap-6 text-teal-400 text-sm font-bold  uppercase">
            <span className="w-72">VISITOR OPERATIONAL CONTEXT</span>
            <span className="flex-1">BEST MATCHING PLATFORM ACTION</span>
            <span className="w-64 text-right">NEXT ROUTE ACTION</span>
          </div>

          <div className="w-full flex flex-col divide-y divide-gray-800">
            {pathRows.map((p, idx) => (
              <div key={idx} className="w-full p-5 bg-gray-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-gray-900/60 transition-colors">
                <span className="w-72 text-white text-base font-bold  truncate">{p.context}</span>
                <span className="flex-1 text-slate-400 text-sm font-normal  truncate">{p.action}</span>
                <div className="w-64 flex justify-end">
                  <span className="text-teal-400 text-sm font-bold  underline cursor-pointer truncate">
                    {p.route}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="w-full flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-white text-3xl font-bold  leading-8">Frequently Asked Questions</h3>
            <p className="text-slate-400 text-base font-normal  leading-6">
              Clear answers to the most common questions about enterprise broadcast workflows, security, and operational continuity.
            </p>
          </div>

          <div className="w-full flex flex-col gap-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="w-full p-5 bg-zinc-900/80 rounded-2xl border border-gray-800 flex flex-col gap-3 shadow-md backdrop-blur-sm"
              >
                <div className="w-full flex justify-between items-center gap-4">
                  <h4 className="text-white text-base font-bold  leading-5">{faq.q}</h4>
                  <div className="w-8 h-8 rounded-2xl border border-gray-800 flex items-center justify-center flex-shrink-0">
                    <div className="w-4 h-4 flex items-center justify-center">
                      <Plus className="w-4 h-4 text-teal-400" />
                    </div>
                  </div>
                </div>
                <p className="text-slate-400 text-sm font-normal  leading-5">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
