import React from 'react';

export default function Section12Observability() {
  const cards = [
    {
      title: "Throttle Events",
      desc: "Tracks density of 429 response outputs across different consumer groups in real-time.",
      img: "/images/developers-rate-limits/sec12-rect0.png"
    },
    {
      title: "Budget Consumption",
      desc: "Monitors percentage rates of assigned rate limits consumed per API key in active billing cycles.",
      img: "/images/developers-rate-limits/sec12-rect1.png"
    },
    {
      title: "Request Throughput",
      desc: "Measures total ingest volumes and overall payload sizes processed across ingress gateways.",
      img: "/images/developers-rate-limits/sec12-rect2.png"
    },
    {
      title: "Concurrency",
      desc: "Measures total concurrent active database operations and server execution thread occupancies.",
      img: "/images/developers-rate-limits/sec12-rect3.png"
    },
    {
      title: "Queue Depth",
      desc: "Watches the queue buildup to pinpoint backend service lags before processing queues overflow.",
      img: "/images/developers-rate-limits/sec12-rect4.png"
    },
    {
      title: "Retry Volume",
      desc: "Measures ratio of repeat retry attempt volumes compared to unique original consumer queries.",
      img: "/images/developers-rate-limits/sec12-rect5.png"
    }
  ];

  return (
    <section className="flex flex-col gap-[64px] items-start px-4 md:px-[112px] py-16 md:py-[100px] relative w-full bg-white overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <img alt="" className="absolute max-w-none object-cover w-full h-full" src="/images/developers-rate-limits/sec12-bg.png" />
      </div>

      <div className="absolute bottom-[-71px] right-[-148px] w-[520px] h-[520px] pointer-events-none z-0">
        <div className="absolute inset-[-21.15%]">
          <img alt="" className="block max-w-none w-full h-full" src="/images/developers-rate-limits/sec2-blob2.svg" />
        </div>
      </div>
      <div className="absolute left-[-180px] w-[420px] h-[420px] top-[17px] pointer-events-none z-0">
        <div className="absolute inset-[-21.43%]">
          <img alt="" className="block max-w-none w-full h-full" src="/images/developers-rate-limits/sec2-blob1.svg" />
        </div>
      </div>

      <div className="flex flex-col gap-[16px] items-start relative z-10 w-full text-center md:text-left">
        <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[1.2] md:leading-[48px] text-3xl md:text-[40px] text-[#0f172a] tracking-[-0.8px] w-full">
          Detect capacity pressure before customers do
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] relative z-10 w-full">
        {cards.map((card, idx) => (
          <div key={idx} className="bg-white border border-[#e2e8f0] border-solid flex flex-col items-start overflow-hidden relative rounded-[12px] w-full hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-shadow duration-300">
            <div className="h-[160px] relative w-full shrink-0">
              <img alt={card.title} className="absolute inset-0 object-cover w-full h-full" src={card.img} />
            </div>
            <div className="flex flex-col gap-[12px] items-start p-[24px] w-full h-full">
              <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold text-[#0f172a] text-[20px]">
                {card.title}
              </h3>
              <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.5] text-[#4f5e74] text-[14px] w-full">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
