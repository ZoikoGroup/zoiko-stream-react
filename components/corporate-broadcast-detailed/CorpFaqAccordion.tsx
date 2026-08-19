'use client';

import React, { useState } from 'react';

export default function CorpFaqAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs = [
    {
      q: 'How does SSO integration protect confidential webcasts?',
      a: 'ZoikoStream integrates directly with Azure AD, Okta, and major SAML identity providers. The stream is rendered inside a secure auth frame that actively validates active sessions, preventing unauthorized link sharing.'
    },
    {
      q: 'What failover measures exist if sanctuary or boardroom fiber drops?',
      a: 'We enforce dual network bonding (RTMP/SRT) over physical fiber and redundant mobile 5G transmitters. In the event of primary WAN drops, streams switch packets instantly without viewer disruption.'
    },
    {
      q: 'Are we compliant with music licensing during corporate events?',
      a: 'Yes. ZoikoStream allows complete metadata logging to match background licensing, plus automatic live muting of streams during presentation transitions to protect compliance status.'
    },
    {
      q: 'Can we review, trim, and approve transcripts before replays go live?',
      a: 'Absolutely. Post-event media workflows route generated captions through an editorial workspace. Legal leads can edit, approve, or prune files before they commit to public replays.'
    },
    {
      q: 'How are presenter questions moderated in large town halls?',
      a: 'Our dedicated Q&A dashboard allows moderation teams to consolidate, edit, and rank audience submissions. Presenters receive a clean feed containing only pre-cleared items.'
    }
  ];

  const toggleFaq = (idx: number) => {
    if (openIdx === idx) {
      setOpenIdx(null);
    } else {
      setOpenIdx(idx);
    }
  };

  return (
    <section className="relative w-full py-24 bg-white text-zinc-900 overflow-hidden border-t border-slate-105">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 text-left">
        
        {/* Title Block */}
        <div className="text-zinc-900 text-4xl font-bold font-['Space_Grotesk'] leading-[60.80px]">
          Questions about corporate broadcasts
        </div>

        {/* FAQ Accordion List */}
        <div className="self-stretch flex flex-col justify-start items-start gap-4 font-sans">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className="self-stretch p-6 bg-slate-50 rounded-xl border border-gray-200 flex flex-col justify-start items-start gap-3 transition-all hover:bg-slate-100/50"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="self-stretch inline-flex justify-between items-center text-left bg-transparent border-none cursor-pointer p-0 w-full"
                >
                  <span className="text-zinc-900 text-base font-bold font-['Space_Grotesk']">
                    {faq.q}
                  </span>
                  <span className={`text-slate-500 font-bold transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    ▾
                  </span>
                </button>

                {isOpen && (
                  <div className="self-stretch text-slate-650 text-sm font-normal font-['Space_Grotesk'] leading-6 mt-1 pr-6 animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
