"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What access methods are supported?",
    answer:
      "We natively support corporate SSO (OIDC/SAML), token-based credentials, pre-authenticated invite lists, direct secure code generation, and ticket commerce integration.",
  },
  {
    question: "Does ZoikoStream sell or process tickets?",
    answer:
      "No. ZoikoStream is purely an orchestration and delivery platform. We integrate with your existing commerce systems (e.g. Stripe, Eventbrite, Shopify) rather than acting as a storefront.",
  },
  {
    question: "How does invite-only access work?",
    answer:
      "You upload your authorized roster of emails or identifiers. The platform generates unique, single-use access links. When presentation occurs, only matched sessions are admitted.",
  },
  {
    question: "What happens when a viewer cannot enter?",
    answer:
      "Our dynamic recovery flow takes over immediately. Eligible viewers are routed to self-service lookup options, live support chats, or fallback state screens without hitting a hard error wall.",
  },
  {
    question: "How are access changes tracked?",
    answer:
      "Every creation, modification, validation attempt, or revocation action is preserved in a secure, immutable ledger, giving you a full audit trail before and during live transmission.",
  },
  {
    question: "Can different audience groups use different methods?",
    answer:
      "Yes. You can configure multi-layered security gates. For example, sponsors might enter via corporate SSO, while standard attendees use a ticket code, and VIPs use direct invite links.",
  },
  {
    question: "What accessibility features are included?",
    answer:
      "Our gateway interfaces follow aria-compliant specifications, keyboard traversal standards, screen-reader optimizations, and scale dynamically for varying viewport and layout densities.",
  },
  {
    question: "How is audience data protected?",
    answer:
      "We believe in strict data minimization. Operational audience logs are processed in memory and purged within 24 hours of the event’s close, unless your organizational retention policy dictates otherwise.",
  },
];

export default function SecureAudienceAccessFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index
    );
  };

  return (
    <section
      className="relative w-full overflow-hidden bg-white px-6 py-16 sm:px-8 md:px-12 lg:px-16 xl:px-[94px] lg:py-24"
      style={{
        backgroundImage:
          "url('/images/secure-audience-access/contour-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 mx-auto w-full max-w-[1240px]">
        <div className="mb-12 flex flex-col gap-4">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[36px]">
            Common questions about secure audience access.
          </h2>

          <p className="text-base leading-7 text-slate-500 sm:text-lg">
            Everything you need to know about setting up and running controlled
            viewing gateways.
          </p>
        </div>

        <div className="flex flex-col">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="overflow-hidden border border-slate-200 bg-white first:rounded-t-xl last:rounded-b-xl"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left transition-colors hover:bg-slate-50"
                >
                  <span className="text-sm font-bold leading-6 text-slate-800">
                    {item.question}
                  </span>

                  <span
                    className={`flex h-5 w-5 shrink-0 items-center justify-center text-2xl font-light leading-none text-teal-400 transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6">
                    <p className="max-w-[1150px] text-sm leading-6 text-slate-500">
                      {item.answer}
                    </p>
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