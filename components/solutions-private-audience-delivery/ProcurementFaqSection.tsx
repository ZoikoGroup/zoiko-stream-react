import React from 'react';
import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const faqs = [
  {
    q: 'How does ZoikoStream control who can watch a private stream?',
    a: 'We decouple identity verification from entitlement checks. First, we confirm who the user is via secure directory integration (like Okta or Active Directory). Then, our rules engine evaluates localized playback policies in real time to sign secure tokens for authorized viewers only.',
  },
  {
    q: 'Can I restrict access to specific employees, partners, or customers?',
    a: 'Yes. Our platform natively integrates with enterprise SAML, supports custom entitlement registries, and processes temporary invite codes to securely onboard external partners without compromising security boundaries.',
  },
  {
    q: 'How does viewer identity verification work?',
    a: 'Our identity layer initiates verification checks with standard credential providers, processes secure responses, and outputs a trusted state (Verified, Verification Required, or Failed) to the policy engine prior to player load.',
  },
  {
    q: 'What happens when someone is denied access to a stream?',
    a: 'Instead of generic error pages, denied viewers receive a clearly mapped user experience explaining their status without exposing sensitive company policy. Users are seamlessly directed to safe, plain-language permission request options.',
  },
  {
    q: 'Can I grant temporary access to external guests or partners?',
    a: 'Yes. Temporary links can be restricted to distinct timeboxes, geofenced zones, and specific client domains. All guest sessions map to a named internal sponsor role for strict accountability.',
  },
  {
    q: 'How does ZoikoStream handle replay access after a live event?',
    a: 'Replays require a separate, explicit publishing decision. Active live entitlement profiles do not auto-grant access to on-demand archives, ensuring compliance is systematically maintained across the complete media lifecycle.',
  },
  {
    q: 'What audit and compliance tools are available for private streaming?',
    a: 'We write tamper-evident logs for every evaluate, allow, deny, change, and revocation event. Audit trails can be streamed automatically to your security info manager (SIEM) for continuous monitoring.',
  },
];

const metadataItems = [
  { label: 'PRIMARY KEYWORD', val: 'Private Audience Streaming' },
  { label: 'AUDIENCE CONTEXT', val: 'Enterprise SEC / GDPR Compliance' },
  { label: 'ENGINE INDEX STATUS', val: 'Verified Compliant (100%)' },
  { label: 'AI SEARCH ACCURACY', val: 'Optimized for LLM retrieval' },
];

export function ProcurementFaqSection() {
  return (
    <section className="w-full relative px-6 lg:px-28 py-20 lg:py-24 bg-white border-b border-gray-200 flex flex-col justify-start items-start gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg147}
          alt="Procurement FAQ Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0" />
      </div>
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />
      <div className="size-96 -left-44 -top-24 absolute bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1216px] mx-auto flex flex-col justify-start items-start gap-14">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <h2 className="text-slate-900 text-3xl lg:text-5xl font-bold  leading-tight lg:leading-[52px]">
            Answer every question a decision-maker will search for
          </h2>
          <p className="text-slate-600 text-base lg:text-lg font-normal  leading-7">
            Clear content architecture optimized for search engines, AI discovery, and enterprise procurement.
          </p>
        </div>

        {/* 2 Column FAQ Layout */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="p-6 bg-slate-50/90 rounded-xl border border-gray-200 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow backdrop-blur-sm"
            >
              <div className="w-full flex justify-between items-center gap-3">
                <h3 className="text-slate-900 text-base font-bold  leading-5">{faq.q}</h3>
                <div className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center flex-shrink-0">
                  <div className="w-3 h-3 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 border-2 border-slate-600 rounded-xs" />
                  </div>
                </div>
              </div>
              <p className="text-slate-600 text-sm font-normal  leading-5">{faq.a}</p>
            </div>
          ))}
        </div>

        {/* Compliance Page Metadata Box */}
        <div className="w-full p-8 bg-slate-50/90 rounded-xl border border-gray-200 flex flex-col gap-5 shadow-sm backdrop-blur-sm">
          <h3 className="text-slate-900 text-base font-bold ">Compliance Page Metadata</h3>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {metadataItems.map((m, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <span className="text-slate-600 text-xs font-bold  uppercase">{m.label}</span>
                <span className="text-slate-900 text-xs font-normal ">{m.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
