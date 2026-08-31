import React from 'react';

export default function Section10Subscriptions() {
  const cards = [
    {
      title: "Email Alerts",
      desc: "Receive comprehensive reports, critical updates, and diagnostic timelines directly to your inbox.",
      img: "/images/developers-system-status/sec10-card1.png"
    },
    {
      title: "Webhook Delivery",
      desc: "Deliver real-time JSON payloads directly to your developer server instances for automated failure handling.",
      img: "/images/developers-system-status/sec10-card2.png"
    },
    {
      title: "RSS / Atom Feed",
      desc: "Subscribe to our structured Atom feed to parse raw chronological platform events natively in your toolchain.",
      img: "/images/developers-system-status/sec10-card3.png"
    },
    {
      title: "SMS Notifications",
      desc: "Get instant brief mobile text warnings when critical high-impact outages occur across any monitored service.",
      img: "/images/developers-system-status/sec10-card4.png"
    },
    {
      title: "Slack & Teams",
      desc: "Push incident alerts and maintenance windows directly into your team communication channels in real time.",
      img: "/images/developers-system-status/sec10-card5.png"
    },
    {
      title: "PagerDuty On-Call",
      desc: "Trigger on-call escalations and incident routing workflows automatically when severity thresholds are breached.",
      img: "/images/developers-system-status/sec10-card6.png"
    }
  ];

  return (
    <section id="subscriptions" className="border-[#e2e8f0] border-b border-solid flex flex-col gap-[56px] items-start px-4 md:px-[112px] py-16 md:py-[100px] relative w-full bg-white overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <img alt="" className="absolute max-w-none object-cover w-full h-full" src="/images/developers-system-status/sec4-bg.png" />
      </div>

      <div className="flex flex-col gap-[56px] relative z-10 w-full max-w-[1440px] mx-auto">
        <div className="flex flex-col gap-[16px] items-start relative w-full text-center md:text-left">
          <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[1.2] md:leading-[48px] relative text-[#0f1b2d] text-3xl md:text-[38px] tracking-[-0.8px] w-full">
            Stay informed.
          </h2>
          <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.5] md:leading-[28px] not-italic relative text-[#4f5e74] text-base md:text-[18px] w-full max-w-[1000px] mx-auto md:mx-0">
            Subscribe to real-time notification vectors and receive prompt notices of scheduled maintenance or active platform health anomalies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] items-start relative w-full">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-white border border-[#e1e6eb] border-solid flex flex-col items-start overflow-clip relative rounded-[16px] shadow-[0px_2px_12px_0px_rgba(15,27,45,0.03)] w-full hover:shadow-[0px_4px_16px_0px_rgba(15,27,45,0.08)] transition-shadow duration-300">
              <div className="h-[180px] relative w-full">
                <img alt="" className="absolute inset-0 max-w-none object-cover w-full h-full" src={card.img} />
              </div>
              <div className="flex flex-col gap-[8px] items-start p-[20px] relative w-full">
                <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[24px] relative text-[#0f1b2d] text-[17px] w-full">
                  {card.title}
                </h3>
                <p className="font-[family-name:var(--font-inter)] font-normal leading-[20px] not-italic relative text-[#4f5e74] text-[14px] w-full">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
