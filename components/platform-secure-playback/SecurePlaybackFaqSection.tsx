'use client';

import { useState } from 'react';

interface Faq {
  question: string;
  answer: string;
}

const FAQS: Faq[] = [
  {
    question: 'Is Secure Playback the same as Access Control?',
    answer:
      'No. Access Control restricts who can view your content, while Secure Playback goes further by protecting the stream itself - preventing unauthorized downloads, link sharing, and playback outside your platform.',
  },
  {
    question: 'Do you use tokens or signed URLs?',
    answer:
      'We use short-lived signed URLs that are tied to a specific viewer session. Each URL is cryptographically signed and expires after a configurable time window, making it impossible to share or reuse outside the intended context.',
  },
  {
    question: 'Do you support DRM?',
    answer:
      'Yes. We support Widevine, FairPlay, and PlayReady DRM across all major browsers and devices. DRM ensures the media stream itself is encrypted and can only be decoded by authorized players, providing the strongest level of content protection available.',
  },
  {
    question: 'Can playback access expire or be revoked?',
    answer:
      'Absolutely. Every playback token has a configurable TTL (time-to-live). You can also revoke access at any time via the API or dashboard - for example, after a subscription lapses or a user is flagged for abuse.',
  },
  {
    question: 'Can a playback link be shared safely?',
    answer:
      'Playback links are scoped to a specific viewer, device, and session. Even if a URL is intercepted or forwarded, it cannot be used by anyone other than the intended recipient. Optional IP binding and geofencing add further layers of restriction.',
  },
  {
    question: 'Where can I verify security claims?',
    answer:
      'Our security architecture is documented in full in the Security Whitepaper available in our developer portal. We also publish third-party audit reports and maintain a SOC 2 Type II certification, all of which are available upon request.',
  },
];

export default function SecurePlaybackFaqSection() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0, 1, 2, 3, 4, 5]);

  const toggle = (index: number) =>
    setOpenIndexes((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index],
    );

  return (
    <section className="relative w-full overflow-hidden bg-white">
      <img
        src="/images/platform-secure-playback/faq-bg.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-8 lg:py-24">
        <h2 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">
          Frequently asked questions
        </h2>

        <div className="mt-10 flex flex-col gap-5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndexes.includes(index);

            return (
              <article
                key={faq.question}
                className="rounded-xl border border-slate-200 bg-white/90 px-6 py-5 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.04)]"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 text-left"
                >
                  <span className="text-base font-bold text-slate-900">
                    {faq.question}
                  </span>
                  <span className="shrink-0 text-lg leading-none text-slate-400">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {faq.answer}
                  </p>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
