import React from 'react';

export default function Section9AdmissionControl() {
  const cards = [
    {
      title: "Token-Bucket Pacing",
      desc: "Smoothes burst traffic into a predictable linear flow by accumulating capacity tokens in fixed intervals.",
      img: "/images/developers-rate-limits/sec9-rect0.png"
    },
    {
      title: "Concurrency Limiter",
      desc: "Caps active server processes dynamically, shedding excess inbound queries to preserve main threads.",
      img: "/images/developers-rate-limits/sec9-rect1.png"
    },
    {
      title: "Priority Queues",
      desc: "Fast-tracks checkout and core transactional API requests over background webhooks during traffic spikes.",
      img: "/images/developers-rate-limits/sec9-rect2.png"
    },
    {
      title: "Circuit Breaking",
      desc: "Halts downstream queries instantly once response times cross critical thresholds, allowing databases to recover.",
      img: "/images/developers-rate-limits/sec9-rect3.png"
    },
    {
      title: "Jittered Release",
      desc: "Injects randomized backoff timing to prevent synchronized client retries from crashing restored nodes.",
      img: "/images/developers-rate-limits/sec9-rect4.png"
    },
    {
      title: "Backpressure Propagation",
      desc: "Signals upstream gateways to throttle request ingestion dynamically based on current worker queue strain.",
      img: "/images/developers-rate-limits/sec9-rect5.png"
    }
  ];

  return (
    <section className="flex flex-col gap-[64px] items-start px-4 md:px-[112px] py-16 md:py-[100px] relative w-full bg-[#04141a] overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <img alt="" className="absolute max-w-none object-cover w-full h-full" src="/images/developers-rate-limits/sec9-bg.png" />
        <div className="absolute bg-[rgba(4,20,26,0.9)] inset-0" />
      </div>

      <div className="flex flex-col gap-[16px] items-start relative z-10 w-full text-center md:text-left">
        <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[1.2] md:leading-[48px] text-3xl md:text-[40px] text-[#f8fafc] tracking-[-0.8px] w-full">
          Protect your application under spikes
        </h2>
        <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.6] md:leading-[28px] text-[#94a3b8] text-base md:text-[16px] w-full">
          Pacing, queues, worker pools, and admission control prevent spikes from becoming retry storms.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] relative z-10 w-full">
        {cards.map((card, idx) => (
          <div key={idx} className="bg-[#0a1e24] border border-[#1e293b] border-solid flex flex-col items-start overflow-hidden relative rounded-[12px] w-full hover:shadow-[0_0_20px_rgba(52,212,202,0.15)] transition-shadow duration-300">
            <div className="h-[160px] relative w-full shrink-0">
              <img alt={card.title} className="absolute inset-0 object-cover w-full h-full" src={card.img} />
            </div>
            <div className="flex flex-col gap-[12px] items-start p-[24px] w-full h-full">
              <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold text-[#f8fafc] text-[20px]">
                {card.title}
              </h3>
              <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.5] text-[#94a3b8] text-[14px] w-full">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
