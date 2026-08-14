interface RightsCard {
  title: string;
  required: string;
  prohibited: string;
  image: string;
}

const cards: RightsCard[] = [
  {
    title: 'Participant consent',
    required: 'Explicit opt-in tick before camera stream opens.',
    prohibited: 'Pre-checked defaults or implicit consent terms.',
    image: '/images/recording-replay-archive/rights-privacy/participant-consent.png',
  },
  {
    title: 'Content rights',
    required: 'Clear licensing clearances for music and graphics.',
    prohibited: 'Unregistered third-party background media player feeds.',
    image: '/images/recording-replay-archive/rights-privacy/content-rights.png',
  },
  {
    title: 'Minors/safeguarding',
    required: 'Parent-guardian verified authorization records.',
    prohibited: 'Public streaming of identifiable student face-cams.',
    image: '/images/recording-replay-archive/rights-privacy/minors-safeguarding.png',
  },
  {
    title: 'Memorial/worship/private',
    required: 'Private, respectfully managed family and community logs.',
    prohibited: 'Public social-media sharing hooks or auto-uploads.',
    image: '/images/recording-replay-archive/rights-privacy/memorial-worship-private.png',
  },
  {
    title: 'Corporate/confidential',
    required: 'Strict single-sign-on audience access matching.',
    prohibited: 'Unencrypted CDN storage or open-sharing URL routing.',
    image: '/images/recording-replay-archive/rights-privacy/corporate-confidential.png',
  },
  {
    title: 'Civic/public events',
    required: 'Accurate timestamped transcripts and open accessibility.',
    prohibited: 'Event edit-issue deletions without formal legislative review.',
    image: '/images/recording-replay-archive/rights-privacy/civic-public-events.png',
  },
];

export default function RightsPrivacySection() {
  return (
    <section
      className="relative w-full flex flex-col gap-16 items-start py-16 sm:py-20 lg:py-25 px-4 sm:px-8 lg:px-28 bg-white bg-cover bg-center bg-no-repeat border-t border-b border-[#e5e7eb]"
      style={{
        backgroundImage: `url('/images/recording-replay-archive/rights-privacy/section-bg.png')`,
      }}
    >
      <div className="flex flex-col gap-4 items-start w-full">
        <h2 className="font-bold text-[#111827] text-3xl sm:text-[37.9px] leading-[1.2] sm:leading-[60.8px] tracking-[-0.38px]">
          Recording creates a durable artifact.
        </h2>
        <p className="text-[#6b7280] text-base sm:text-[18px] leading-[1.4] sm:leading-[28.8px] max-w-[800px]">
          A live experience evaporates; a recorded asset remains. Maintain clear lines between what is required and what is strictly prohibited.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 w-full">
        {cards.map((card) => (
          <div
            key={card.title}
            className="flex gap-6 items-start w-full pt-8 pb-7 pl-9 pr-8 rounded-[28px] bg-white shadow-[0px_1px_4px_0px_rgba(0,0,0,0.04),0px_4px_24px_0px_rgba(0,0,0,0.05)]"
          >
            <div className="flex flex-1 min-w-0 flex-col gap-3.5 items-start">
              <p className="font-bold text-[#111827] text-base leading-6 w-full">{card.title}</p>
              <div className="flex flex-col gap-2 items-start w-full text-[13px]">
                <p className="text-[#059669] leading-5 w-full">
                  <span className="font-bold">REQUIRED: </span>
                  <span>{card.required}</span>
                </p>
                <p className="text-[#dc2626] leading-5 w-full">
                  <span className="font-bold">PROHIBITED: </span>
                  <span>{card.prohibited}</span>
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center shrink-0 size-[120px] rounded-full bg-[#e5e7eb] overflow-hidden">
              <img alt="" src={card.image} className="size-full object-cover" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
