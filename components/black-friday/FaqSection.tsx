'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';
import { IMG, SectionHeading } from './shared';

const faqs = [
  {
    q: 'How does the Black Friday offer work?',
    a: 'Book your first eligible event between Black Friday (27 Nov 2026) and Cyber Monday (30 Nov 2026) and 20% is taken off the eligible first-event platform fees. Terms, conditions and eligibility apply.',
  },
  {
    q: 'Do my viewers need to download anything?',
    a: 'No. Viewers watch straight from their browser on desktop, tablet or mobile — no apps or plugins required.',
  },
  {
    q: 'How many viewers can I host?',
    a: 'Starter supports up to 500 viewers and Pro up to 2,500. Enterprise plans are sized to your event — talk to sales for larger audiences.',
  },
  {
    q: 'Can I monetize my event?',
    a: 'Yes. Sell tickets, offer paid access or accept donations, with payments handled through your connected payment processor.',
  },
  {
    q: 'Is my stream secure and reliable?',
    a: 'Streams are delivered with enterprise-grade security and access controls, backed by a 99.9% uptime guarantee.',
  },
  {
    q: 'Can I use my own branding?',
    a: 'Yes. Pro and Enterprise plans include custom branding for your event pages and player, including your logo and domain.',
  },
];

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative w-full overflow-hidden bg-[#0d0b16] py-20">
      <Image src={`${IMG}/faq-background.webp`} alt="" fill sizes="100vw" className="object-cover object-top brightness-[1.3]" />
      <div className="absolute inset-0 bg-[#0a0a0f]/25" />
      <Image
        src={`${IMG}/sale-corner-faq.webp`}
        alt=""
        width={186}
        height={239}
        className="pointer-events-none absolute left-0 top-[290px] hidden xl:block"
      />
      <Image
        src={`${IMG}/black-friday-banner.webp`}
        alt=""
        width={270}
        height={129}
        className="pointer-events-none absolute right-[122px] top-0 hidden xl:block"
      />

      <div className="relative mx-auto w-full max-w-[808px] px-4 sm:px-7">
        <SectionHeading eyebrow="FAQ" title="Frequently asked questions." />

        <div className="mt-11 flex flex-col gap-3.5">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="rounded-xl border border-gray-800 bg-[#11121a]/95">
                <h3>
                  <button
                    type="button"
                    id={`bf-faq-q-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`bf-faq-a-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[15px] font-semibold text-white"
                  >
                    {item.q}
                    <ChevronDown className={`size-4 shrink-0 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                </h3>
                <div
                  id={`bf-faq-a-${i}`}
                  role="region"
                  aria-labelledby={`bf-faq-q-${i}`}
                  className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                >
                  <p className="overflow-hidden px-5 text-sm leading-[1.65] text-gray-400">
                    <span className="block pb-5">{item.a}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
