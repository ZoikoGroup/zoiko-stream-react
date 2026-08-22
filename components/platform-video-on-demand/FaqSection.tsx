'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'What is ZoikoStream Video on demand?',
    answer:
      'ZoikoStream Video on demand is the broad infrastructure platform enabling teams to register raw media files, confirm technical readiness and licenses, secure access, and publish custom playback experiences.',
  },
  {
    question: 'How is Video on demand different from live streaming?',
    answer:
      'While live streaming ingest runs zero-latency real-time transcode paths, on-demand processes assets with complex quality layers, multi-language alternative audio tracks, and static playback tokens.',
  },
  {
    question: 'How do recordings become available on demand?',
    answer:
      'Once a Live Event broadcast closes, the platform automatically routes the raw archives through our transcode profiles, instantly packaging clean VOD segments within minutes.',
  },
  {
    question: 'Can I upload or import video?',
    answer:
      'Yes, developers can push files directly via REST API POST actions or establish automated watch buckets in AWS S3, Google Cloud, or Azure storage.',
  },
  {
    question: 'How is an asset considered ready?',
    answer:
      'An asset must pass our Readiness checklist: technical codec criteria, rights & use compliance, core taxonomy metadata, and active accessibility tracks.',
  },
  {
    question: 'How do I control who can watch?',
    answer:
      'We employ HMAC tokens gating playback requests. If a request lacks a cryptographically valid signature, the CDN edge blocks the request instantly.',
  },
  {
    question: 'Does ZoikoStream support captions and multiple languages?',
    answer:
      'Yes, you can register WebVTT caption tracks and match alternative descriptive audio layers to any single master video UUID.',
  },
  {
    question: 'How do I integrate Video on demand into my product?',
    answer:
      'Most teams use our Developer portals: grab high-level SDKs for Node, Python, or Swift, or query the REST APIs directly using SAML/OAuth secrets.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full px-4 sm:px-8 lg:px-28 py-16 sm:py-20 lg:py-24 bg-slate-950 flex flex-col gap-12"
    style={{
        backgroundImage: `url('/images/platform-video-on-demand/bg (54).png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
      <div className="flex flex-col gap-3">
        <h2 className="text-white text-3xl sm:text-4xl font-bold leading-tight">
          Common questions about Video on Demand
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        {faqs.map((faq, i) => (
          <div
            key={faq.question}
            className="p-6 bg-slate-900 rounded-[10px] border border-gray-800 flex flex-col gap-3"
          >
            <button
              type="button"
              className="w-full flex justify-between items-center text-left gap-4"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span className="text-white text-base font-bold">{faq.question}</span>
              <span className="w-4 h-4 shrink-0 text-teal-400 text-lg font-bold">
                {openIndex === i ? '−' : '+'}
              </span>
            </button>
            {openIndex === i && (
              <p className="text-slate-400 text-xs font-normal leading-5">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
