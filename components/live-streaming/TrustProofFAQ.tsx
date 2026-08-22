"use client";

import { useState } from "react";

const TrustProofFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const trustCards = [
    {
      title: "Registry-gated claims",
      description:
        "No unsupported streaming claims. Every capacity tier is backed strictly by system metrics.",
    },
    {
      title: "Named ownership",
      description:
        "All live configurations carry designated platform operators responsible for deployment.",
    },
    {
      title: "Evidence freshness",
      description:
        "SLA compliance logs and telemetry buffers are audited in real-time.",
    },
    {
      title: "Correction path",
      description:
        "Clear procedures for correcting anomalies instantly via failover mechanisms.",
    },
  ];

  const faqs = [
    {
      question: "What is ZoikoStream Live streaming?",
      answer:
        "ZoikoStream is a secure, developer-focused, low-latency live video routing platform designed to pipe contribution sources safely to globally distributed audiences with full operational control.",
    },
    {
      question: "How is Live streaming different from Live Events?",
      answer:
        "Live streaming operates on a programmatic API and self-serve model for continuous application usage. Live Events incorporate human planning, L1/L2 engineering support, and hardware coordination dedicated to high-stakes calendar broadcasts.",
    },
    {
      question: "Which protocols does ZoikoStream support?",
      answer:
        "We natively support high-integrity ingest protocols including RTMP, RTMPS, and SRT. Playback is routed dynamically via standard LL-HLS and secure WebRTC pathways.",
    },
    {
      question: "How do I know a stream is ready?",
      answer:
        "Our platform provides instant pre-flight diagnostic endpoints. A stream shifts to 'Ready' once contribution handshake buffers pass packet jitter audits.",
    },
    {
      question: "What happens if a live stream is interrupted?",
      answer:
        "Autonomous dual-WAN cellular failovers detect anomalies instantly. If the master input falls below threshold limits, we automatically redirect routing paths inside 4 seconds.",
    },
    {
      question: "Can I secure who watches a stream?",
      answer:
        "Yes. Playback gating utilizes short-lived signed secure CDN tokens. You can easily manage security parameters via SAML SSO or simple password credentials.",
    },
  ];

  return (
    <section
      className="relative w-full overflow-hidden border-t border-b border-gray-800 bg-[#0A0F1A]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(10, 15, 26, 0.28), rgba(10, 15, 26, 0.28)), url('/images/live-streaming/trust-proof-faq-bg.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 px-6 py-16 sm:px-10 lg:px-28 lg:py-24">

        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-14">

          {/* ================= HEADER ================= */}
          <div className="flex w-full flex-col items-start gap-4">

            <h2 className="w-full font-['Space_Grotesk'] text-4xl font-bold leading-[60.80px] text-slate-100">
              Trust, proof, and frequently asked questions
            </h2>

            <p className="w-full font-['Space_Grotesk'] text-lg font-normal leading-7 text-slate-400">
              Governed evidence and sourceable answers built around active
              operational capabilities.
            </p>

          </div>

          {/* ================= TRUST CARDS ================= */}
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {trustCards.map((card) => (
              <div
                key={card.title}
                className="flex min-h-[112px] flex-col items-start gap-3 rounded-xl border border-gray-800 bg-[#10151E]/80 p-5"
              >
                <div className="flex items-center gap-2">

                  <div className="h-2 w-2 shrink-0 rounded-full bg-[#00D4AA]" />

                  <h3 className="font-['Space_Grotesk'] text-base font-bold text-slate-100">
                    {card.title}
                  </h3>

                </div>

                <p className="font-['Space_Grotesk'] text-xs font-normal leading-4 text-slate-400">
                  {card.description}
                </p>
              </div>
            ))}

          </div>

          {/* ================= FAQ ================= */}
          <div className="flex w-full flex-col gap-4">

            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.question}
                  className="w-full rounded-xl border border-gray-800 bg-[#10151E]/90"
                >

                  {/* Question */}
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="flex w-full items-center justify-between gap-6 p-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="flex-1 font-['Space_Grotesk'] text-base font-bold text-slate-100">
                      {faq.question}
                    </span>

                    {/* Chevron */}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <path
                        d="M5 7.5L10 12.5L15 7.5"
                        stroke="#00D4AA"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  {/* Answer */}
                  {isOpen && (
                    <div className="px-6 pb-6">
                      <p className="font-['Space_Grotesk'] text-sm font-normal leading-5 text-slate-400">
                        {faq.answer}
                      </p>
                    </div>
                  )}

                </div>
              );
            })}

          </div>

        </div>
      </div>
    </section>
  );
};

export default TrustProofFAQ;