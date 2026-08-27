import React from 'react';

export default function Section7Throttling() {
  const steps = [
    {
      num: "01",
      title: "Identify Failure Class",
      desc: "Confirm the HTTP response status is strictly 429 (Too Many Requests) or a related capacity failure, not a transient 5xx error."
    },
    {
      num: "02",
      title: "Capture Safe Evidence",
      desc: "Log response headers, request identifier keys, context window attributes, and exact timestamps before executing retry logic."
    },
    {
      num: "03",
      title: "Read Retry Guidance",
      desc: "Always parse and prioritize remote server-provided guidelines (e.g. Retry-After headers) over arbitrary client guesses."
    },
    {
      num: "04",
      title: "Determine Mutation Safety",
      desc: "For non-idempotent mutation writes, cross-verify request states to verify if the server processed the task before retrying."
    },
    {
      num: "05",
      title: "Reduce Client Pressure",
      desc: "Dynamically damp client thread concurrency levels, buffer non-critical tasks, and transition backlogged requests to a queuing flow."
    },
    {
      num: "06",
      title: "Verify Sustainable Recovery",
      desc: "Monitor application latency signals and verify baseline system health before scaling client operations back to high concurrency."
    }
  ];

  return (
    <section className="border-[#232b3a] border-b border-solid flex flex-col gap-[56px] items-start px-4 md:px-[112px] py-16 md:py-[120px] relative w-full bg-[#0a0d14] overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <img alt="" className="absolute max-w-none object-cover w-full h-full" src="/images/developers-rate-limits/sec7-bg.png" />
        <div className="absolute bg-[rgba(10,13,20,0.84)] inset-0" />
      </div>

      <div className="flex flex-col gap-[16px] items-start relative z-10 w-full text-center md:text-left">
        <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[1.2] md:leading-[48px] text-3xl md:text-[38px] text-white tracking-[-0.8px] w-full">
          Handle pressure with evidence, not guesses.
        </h2>
        <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.6] md:leading-[28px] text-[#aab3c4] text-base md:text-[18px] w-full">
          When capacity is exceeded, your client must identify, capture, interpret, and recover — in that order.
        </p>
      </div>

      <div className="flex flex-col gap-[20px] items-start relative z-10 w-full">
        {steps.map((step, idx) => (
          <div key={idx} className="bg-[rgba(16,21,30,0.8)] hover:bg-[rgba(23,31,45,0.9)] transition-colors border border-[#232b3a] border-solid flex flex-col sm:flex-row gap-[24px] items-start sm:items-center p-6 sm:p-[24px] rounded-[12px] w-full">
            <div className="bg-[#34d4ca] flex items-center justify-center rounded-[24px] shrink-0 w-[48px] h-[48px] shadow-[0_0_15px_rgba(52,212,202,0.3)]">
              <p className="font-[family-name:var(--font-space-grotesk)] font-bold text-[#0a0d14] text-[18px]">
                {step.num}
              </p>
            </div>
            <div className="flex flex-[1_0_0] flex-col gap-[4px] items-start w-full">
              <p className="font-[family-name:var(--font-space-grotesk)] font-bold text-[18px] text-white">
                {step.title}
              </p>
              <p className="font-[family-name:var(--font-inter)] font-normal leading-[22px] text-[#aab3c4] text-[14px]">
                {step.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
