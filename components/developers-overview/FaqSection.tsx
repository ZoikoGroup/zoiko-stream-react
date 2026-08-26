const FAQS = [
  {
    q: 'Where should I start with ZoikoStream?',
    a: 'Start with the Developers overview to understand the path, then use Developer access, Authentication and Quickstart for a working stream, or Documentation and API Reference for deeper implementation.',
  },
  {
    q: 'What can developers build with ZoikoStream?',
    a: 'Current public positioning covers live, real-time and on-demand video using programmable APIs, SDKs, media protocols, webhooks, secure playback and analytics. Exact supported surfaces are verified in their authoritative developer pages.',
  },
  {
    q: 'Do I need developer access before using the Quickstart?',
    a: 'Yes. The current Developer access state and prerequisites must be resolved before the Quickstart path is available. Check Developer Access for your current state.',
  },
  {
    q: 'Where are API details and schemas documented?',
    a: 'API Reference owns endpoint, typed schema and contract detail. The overview links there rather than duplicating it.',
  },
  {
    q: 'Where do I find errors, rate limits and service health?',
    a: 'Error handling, Rate limits and System status are separate authoritative destinations under OPERATE. Each has its own current documentation.',
  },
  {
    q: 'How do I keep an integration current?',
    a: 'Use Documentation, Changelog, System Status and Developer support. Deprecated or superseded technical guidance is clearly labeled and linked to current replacement guidance.',
  },
  {
    q: 'Can I get help with a bespoke architecture or enterprise requirement?',
    a: 'Yes, when the appropriate expert route is published. Documentation and technical evidence remain available before that conversation. Use the Talk to an Expert option for explicit bespoke needs.',
  },
  {
    q: 'Does the overview guarantee production readiness or performance?',
    a: 'No. It provides a path and evidence links. Readiness, limits, support, security, performance and availability claims require authoritative current sources.',
  },
];

export default function FaqSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-solid border-[#e1e6eb] bg-white px-6 py-20 md:px-12 xl:px-[112px] xl:py-[120px]">
      {/* Topographic background */}
      {/* eslint-disable @next/next/no-img-element */}
      <img
        src="/images/developers-overview/faq/section-bg.png"
        alt=""
        className="pointer-events-none absolute inset-0 size-full object-cover"
      />
      <img
        src="/images/developers-overview/faq/bg-blob-1.svg"
        alt=""
        className="pointer-events-none absolute left-[-171px] top-[-12px] size-[420px]"
      />
      <img
        src="/images/developers-overview/faq/bg-blob-2.svg"
        alt=""
        className="pointer-events-none absolute bottom-[-70px] right-[-124px] size-[520px]"
      />
      {/* eslint-enable @next/next/no-img-element */}

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[56px]">
        <div className="flex w-full flex-col items-start gap-[16px]">
          <h2 className="text-[30px] font-bold leading-[1.2] tracking-[-0.38px] text-[#0a0f1a] md:text-[38px] md:leading-[48px]">
            Frequently Asked Questions
          </h2>
          <p className="text-[16px] font-normal leading-[28px] text-[#4f5e74] md:text-[18px]">
            Common questions about the ZoikoStream developer platform.
          </p>
        </div>

        <div className="flex w-full flex-col items-start">
          {FAQS.map((item) => (
            <details
              key={item.q}
              className="group w-full border-b border-solid border-[#e1e6eb]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-[16px] py-[24px] pb-[24px] [&::-webkit-details-marker]:hidden group-open:pb-[16px]">
                <span className="flex-1 text-[18px] font-bold leading-normal text-[#0a0f1a]">
                  {item.q}
                </span>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/developers-overview/faq/chevron-up.svg"
                  alt=""
                  className="size-[24px] shrink-0 rotate-180 transition-transform duration-200 group-open:rotate-0"
                />
              </summary>
              <p className="pb-[24px] font-inter text-[14px] font-normal leading-[22px] text-[#4f5e74]">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
