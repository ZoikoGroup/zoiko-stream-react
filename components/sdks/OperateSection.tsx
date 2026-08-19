import React from 'react';

interface OperateCard {
  title: string;
  description: string;
  image: string;
}

const cards: OperateCard[] = [
  {
    title: 'Diagnostics & Logging',
    description: 'Configure local ingest log filters and capture real-time connection state transitions.',
    image: '/images/sdks/card-diagnostics.png',
  },
  {
    title: 'Status & Health',
    description: 'Automated ping checks loop to diagnose regional routing quality and Edge server loads.',
    image: '/images/sdks/card-status-health.png',
  },
  {
    title: 'Support Routes',
    description: 'Reach out directly to L1 engineering teams or coordinate via community Slack bridges.',
    image: '/images/sdks/card-support-routes.png',
  },
];

export default function OperateSection() {
  return (
    <section
      className="relative w-full flex flex-col gap-12 items-start py-16 sm:py-20 lg:py-[100px] px-4 sm:px-8 lg:px-28 bg-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/images/sdks/operate-bg.png')` }}
    >
      <div className="flex flex-col gap-3 items-start w-full">
        <h2 className="font-bold text-[#0a0d13] text-3xl sm:text-[37.9px] leading-[1.2] sm:leading-[60.8px] tracking-[-0.38px]">
          Operate, debug, and recover
        </h2>
        <p className="text-[#4f5e74] text-base sm:text-[18px] leading-[1.4] sm:leading-[28.8px]">
          Errors, diagnostics, logging boundaries, and support routes.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {cards.map((card) => (
          <div
            key={card.title}
            className="flex flex-col items-start rounded-2xl border border-[#e2e8f0] overflow-hidden bg-white"
          >
            <div className="relative w-full h-[180px] shrink-0">
              <img
                src={card.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-3 items-start w-full p-6">
              <p className="font-bold text-[#0a0d13] text-lg">{card.title}</p>
              <p className="text-[#4f5e74] text-[13px] leading-[20px]">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-start justify-center w-full">
        <a
          href="/status"
          className="flex items-center justify-center px-7 py-3.5 rounded-[10px] border border-[#4f5e74] hover:bg-[rgba(10,13,19,0.05)] transition-colors"
        >
          <span className="font-medium text-[#0a0d13] text-[15px] whitespace-nowrap">
            Check platform status
          </span>
        </a>
      </div>

    </section>
  );
}
