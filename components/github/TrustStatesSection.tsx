import React from 'react';

const imgBg = "/images/github/governance-background.webp";

const states = [
  {
    image: "/images/github/state-official.webp",
    title: 'Official',
    badge: 'VERIFIED',
    tone: 'bg-[rgba(52,211,153,0.1)] border-[#34d399] text-[#34d399]',
    description: 'Owned by ZoikoStream and linked from an authoritative product or developer destination.',
  },
  {
    image: "/images/github/state-community.webp",
    title: 'Community',
    badge: 'EXTERNAL',
    tone: 'bg-[rgba(76,134,255,0.1)] border-[#4c86ff] text-[#4c86ff]',
    description: 'Useful community work with attribution, an external handoff, and no implication of product ownership.',
  },
  {
    image: "/images/github/state-experimental.webp",
    title: 'Experimental',
    badge: 'NON-PRODUCTION',
    tone: 'bg-[rgba(252,211,77,0.1)] border-[#fcd34d] text-[#fcd34d]',
    description: 'Early work whose interface, support model, or maintenance status may change without notice.',
  },
  {
    image: "/images/github/state-deprecated.webp",
    title: 'Deprecated',
    badge: 'MIGRATE',
    tone: 'bg-[rgba(248,113,113,0.1)] border-[#f87171] text-[#f87171]',
    description: 'Still discoverable for migration context, but no longer recommended for new implementations.',
  },
  {
    image: "/images/github/state-archived.webp",
    title: 'Archived',
    badge: 'READ ONLY',
    tone: 'bg-[rgba(148,163,184,0.1)] border-[#94a3b8] text-[#94a3b8]',
    description: 'Preserved for historical reference; changes, fixes, and active support are not expected.',
  },
  {
    image: "/images/github/state-review-required.webp",
    title: 'Review required',
    badge: 'HOLD',
    tone: 'bg-[rgba(45,212,191,0.1)] border-[#2dd4bf] text-[#2dd4bf]',
    description:
      'Temporarily withheld from recommendation until ownership, security, license, or destination evidence is revalidated.',
  },
];

export default function TrustStatesSection() {
  return (
    <section className="bg-[#0a0d13] border-b border-[#1f2937] flex flex-col items-center px-5 sm:px-6 lg:px-12 xl:px-[112px] py-12 sm:py-16 lg:py-[112px] relative w-full overflow-hidden" data-name="Trust-States-Section">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full brightness-[1.3]" src={imgBg} />
        <div className="absolute bg-[rgba(3,7,18,0.3)] inset-0" />
      </div>

      <div className="flex flex-col gap-[32px] sm:gap-[48px] lg:gap-[56px] items-start w-full max-w-[1216px] relative z-10">
        <div className="flex flex-col gap-[16px] items-start w-full lg:max-w-[820px]">
          <h2 className="[word-break:break-word] font-sans font-bold text-white text-[28px] sm:text-[32px] lg:text-[36px] leading-[1.2] lg:leading-[40px]">
            Every repository carries a visible trust state.
          </h2>
          <p className="font-inter font-normal text-[#94a3b8] text-[16px] sm:text-[18px] leading-[28px] lg:max-w-[760px]">
            Labels communicate ownership and lifecycle without turning GitHub into a source of invented product claims.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] w-full">
          {states.map((state) => (
            <div
              key={state.title}
              className="bg-[#18181b] border border-[#1f2937] border-solid flex flex-col items-start rounded-[12px] overflow-hidden lg:min-h-[280px]"
            >
              <img alt="" className="h-[112px] object-cover w-full" src={state.image} />
              <div className="flex flex-col gap-[8px] items-start px-[24px] pt-[16px] pb-[24px] w-full">
                <div className="flex flex-wrap gap-2 justify-between items-center w-full">
                  <p className="font-sans font-bold text-white text-[20px]">{state.title}</p>
                  <span className={`${state.tone} border border-solid font-sans font-bold text-[10px] tracking-[0.5px] px-[8px] py-[5px] rounded-[999px]`}>
                    {state.badge}
                  </span>
                </div>
                <p className="font-inter font-normal text-[#94a3b8] text-[14px] leading-[20px]">{state.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#0f172a] border border-l-4 border-[#2dd4bf] border-solid flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center p-[24px] sm:p-[32px] rounded-[16px] w-full">
          <div className="flex flex-col gap-[8px] items-start md:w-[160px] shrink-0">
            <span className="font-sans font-bold text-[#2dd4bf] text-[12px] tracking-[1.2px] uppercase">Registry contract</span>
            <span className="font-sans font-bold text-white text-[20px]">Evidence first</span>
          </div>
          <p className="font-inter font-normal text-[#94a3b8] text-[15px] sm:text-[16px] leading-[24px] flex-1">
            Publish a destination only when its canonical owner, repository URL, trust state, lifecycle status, and
            last-reviewed evidence are recorded. If evidence becomes stale or unavailable, suppress the recommendation
            and route it to review.
          </p>
        </div>
      </div>
    </section>
  );
}
