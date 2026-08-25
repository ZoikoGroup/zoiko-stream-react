import Image from 'next/image';

const CARDS = [
  {
    image: '/images/operational-analytics/accessibility/card-1.png',
    title: '1. Caption & Subtitle Availability',
    evidence:
      'Continuously tracks if CC packages match standard timed text specs across configured, receiving, degraded, or lost pipeline states.',
    mustNot: 'Must not infer user hearing loss or general physical capability.',
  },
  {
    image: '/images/operational-analytics/accessibility/card-2.png',
    title: '2. Multilingual Track Readiness',
    evidence:
      'Verifies standard audio-to-video timestamp offsets for secondary language profiles. Resolves live-to-replay asset handshakes seamlessly.',
    mustNot: 'Must not infer user nationality or ethnic heritage.',
  },
  {
    image: '/images/operational-analytics/accessibility/card-3.png',
    title: '3. Incident Triage Channels',
    evidence:
      'Operational event channels capture attendee UI interaction times when an accessibility feature fails to load or experiences sub-second delay.',
    mustNot: 'Must not store personally identifiable hardware profile logs.',
  },
  {
    image: '/images/operational-analytics/accessibility/card-4.png',
    title: '4. Aggregate Usage Metrics',
    evidence:
      'Monitors overall system load metrics of real-time translation pipelines to optimize server resource reservation limits.',
    mustNot: 'Must not analyze individual user reading or listening velocity.',
  },
  {
    image: '/images/operational-analytics/accessibility/card-5.png',
    title: '5. Replay Continuity Audits',
    evidence:
      'Audits that timed text files, dynamic scripts, and translation frames are immutable, SOC-2 compliant, and ready for replay access.',
    mustNot: 'Must not expose post-session playback edits without administrator consent.',
  },
];

export default function AccessibilitySection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-solid border-[#e1e6eb] bg-white px-6 py-20 md:px-12 xl:px-[112px] xl:py-[120px]">
      {/* Topographic background */}
      <Image
        src="/images/operational-analytics/accessibility/section-bg.png"
        alt=""
        fill
        className="pointer-events-none object-cover"
      />
      {/* eslint-disable @next/next/no-img-element */}
      <img
        src="/images/operational-analytics/accessibility/bg-blob-1.svg"
        alt=""
        className="pointer-events-none absolute left-[-159px] top-0 size-[420px]"
      />
      <img
        src="/images/operational-analytics/accessibility/bg-blob-2.svg"
        alt=""
        className="pointer-events-none absolute bottom-[-112px] right-[-99px] size-[520px]"
      />
      {/* eslint-enable @next/next/no-img-element */}

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[56px]">
        <div className="flex w-full flex-col items-start gap-[16px]">
          <h2 className="text-[30px] font-bold leading-[1.2] text-[#0a0f1a] md:text-[38px] md:leading-[48px]">
            Accessibility and language operational insights
          </h2>
          <p className="font-inter text-[16px] font-normal leading-[28px] text-[#4f5e74] md:text-[18px]">
            Track availability, health, and usage of approved accessibility and language features — without
            disability or demographic inference.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-[24px] md:grid-cols-2 xl:grid-cols-3">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="flex flex-col items-start gap-[16px] rounded-[12px] border-[1.5px] border-solid border-[#e1e6eb] bg-[#f8fafc] p-[24px]"
            >
              <div className="relative h-[120px] w-full shrink-0 overflow-hidden rounded-[8px]">
                <Image src={card.image} alt="" fill className="object-cover" />
              </div>
              <p className="w-full text-[20px] font-bold text-[#0a0f1a]">{card.title}</p>
              <div className="flex w-full flex-col items-start gap-[8px] font-inter text-[13px] font-normal leading-[20px] text-[#4f5e74]">
                <p className="w-full">
                  <span className="font-bold text-[#0a0f1a]">EVIDENCE: </span>
                  {card.evidence}
                </p>
                <p className="w-full">
                  <span className="font-bold text-[#4a8cfb]">MUST NOT INFER: </span>
                  {card.mustNot}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
