import Image from 'next/image';

const PHASES = [
  { label: '1. GET STARTED', active: true },
  { label: '2. BUILD', active: false },
  { label: '3. OPERATE', active: false },
];

const CARDS = [
  { icon: 'icon-help.svg', path: 'PATH 1', title: 'Concept', desc: 'How the platform works, stream lifecycles, and architecture' },
  { icon: 'icon-activity.svg', path: 'PATH 2', title: 'Guide', desc: 'Solve a workflow end to end with guided step instructions' },
  { icon: 'icon-code.svg', path: 'PATH 3', title: 'Tutorial', desc: 'Learn a bounded task step by step in real sandboxes' },
  { icon: 'icon-database.svg', path: 'PATH 4', title: 'Reference', desc: 'Exact API contracts, schemas, parameters, and payloads' },
  { icon: 'icon-sliders.svg', path: 'PATH 5', title: 'Troubleshooting', desc: 'Resolve symptoms with error logs and evidence verification' },
  { icon: 'icon-shield.svg', path: 'PATH 6', title: 'Runbook', desc: 'Operate through known recovery and failover scenarios' },
  { icon: 'icon-bell.svg', path: 'PATH 7', title: 'Release Note', desc: 'Track platform enhancements, deprecations, and updates' },
];

export default function DocMapSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-solid border-[#e1e6eb] bg-white px-6 py-20 md:px-12 xl:px-[112px] xl:py-[100px]">
      {/* Topographic background */}
      <Image
        src="/images/documentation-page/docmap/section-bg.png"
        alt=""
        fill
        className="pointer-events-none object-cover"
      />
      {/* eslint-disable @next/next/no-img-element */}
      <img
        src="/images/documentation-page/docmap/bg-blob-1.svg"
        alt=""
        className="pointer-events-none absolute left-[-177px] top-[-61px] size-[420px]"
      />
      <img
        src="/images/documentation-page/docmap/bg-blob-2.svg"
        alt=""
        className="pointer-events-none absolute bottom-[-135px] right-[-127px] size-[520px]"
      />
      {/* eslint-enable @next/next/no-img-element */}

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[56px]">
        <div className="flex w-full flex-col items-start gap-[16px]">
          <h2 className="text-[30px] font-bold leading-[1.2] text-[#0f1b2d] md:text-[38px] md:leading-[48px]">
            Know What Kind of Answer You Need
          </h2>
          <p className="font-inter text-[16px] font-normal leading-normal text-[#4f5e74] md:text-[18px]">
            Our documentation is structured to help you get the appropriate information based on your phase.
          </p>
        </div>

        {/* Phase rail */}
        <div className="flex w-full items-center">
          {PHASES.map((phase, i) => (
            <div
              key={phase.label}
              className={`flex items-center gap-[12px] ${i < PHASES.length - 1 ? 'flex-1' : 'shrink-0'}`}
            >
              <span
                className={`shrink-0 whitespace-nowrap rounded-[4px] px-[16px] py-[8px] text-[12px] font-bold leading-normal ${
                  phase.active ? 'bg-[#4a8cfb] text-white' : 'bg-[#e2e8f0] text-[#4f5e74]'
                }`}
              >
                {phase.label}
              </span>
              {i < PHASES.length - 1 && <div className="h-[2px] min-w-px flex-1 bg-[#e1e6eb]" />}
            </div>
          ))}
        </div>

        {/* Content-type grid */}
        <div className="grid w-full grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card) => (
            <div
              key={card.title}
              className="flex flex-col items-start gap-[16px] rounded-[12px] border border-solid border-[#e1e6eb] bg-[#f8fafc] p-[24px]"
            >
              <div className="flex w-full items-center justify-between">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/images/documentation-page/docmap/${card.icon}`} alt="" className="size-[24px]" />
                <p className="whitespace-nowrap text-[11px] font-bold uppercase leading-normal text-[#4f5e74]">
                  {card.path}
                </p>
              </div>
              <p className="text-[18px] font-bold leading-normal text-[#0f1b2d]">{card.title}</p>
              <p className="w-full font-inter text-[13px] font-normal leading-[20px] text-[#4f5e74]">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="flex w-full items-center justify-center">
          <button
            type="button"
            className="flex items-center justify-center whitespace-nowrap rounded-[8px] border-[1.5px] border-solid border-[#aab3c4] px-[24px] py-[12px] text-[15px] font-bold text-[#0f1b2d] transition-colors hover:bg-[#0f1b2d]/5"
          >
            Browse Documentation
          </button>
        </div>
      </div>
    </section>
  );
}
