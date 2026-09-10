import React from 'react';

const imgBg = "/images/webhooks/task-router-background.webp";

const tasks = [
  { num: '01', title: 'Discover Events', description: 'Browse the current event catalog and understand available notifications.' },
  { num: '02', title: 'Configure Endpoint', description: 'Set up your webhook subscription and endpoint requirements.' },
  { num: '03', title: 'Verify Delivery', description: 'Implement signature verification and secret handling protocols.' },
  { num: '04', title: 'Test Safely', description: 'Use current test environment capabilities and simulation tools.' },
  { num: '05', title: 'Troubleshoot', description: 'Diagnose delivery failures, retries, and unknown state outcomes.' },
  { num: '06', title: 'Migrate / Update', description: 'Handle event version changes and backwards-compatible updates.' },
];

export default function TaskRouterSection() {
  return (
    <section className="bg-white flex flex-col items-center px-5 sm:px-6 lg:px-[112px] py-12 sm:py-16 lg:py-[96px] relative w-full overflow-hidden" data-name="Task-Router-Section">
      <img alt="" aria-hidden className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBg} />
      <div aria-hidden className="absolute left-[-70px] top-[-133px] size-[420px] rounded-full bg-[rgba(0,212,170,0.1)] blur-[60px] pointer-events-none" />
      <div aria-hidden className="absolute right-[-160px] bottom-[-120px] size-[520px] rounded-full bg-[rgba(76,134,255,0.1)] blur-[55px] pointer-events-none" />

      <div className="flex flex-col gap-[32px] sm:gap-[48px] lg:gap-[56px] items-start w-full max-w-[1216px] relative z-10">
        <div className="flex flex-col gap-[12px] items-start w-full">
          <h2 className="[word-break:break-word] font-sans font-bold text-[#0a0d13] text-[26px] sm:text-[32px] lg:text-[38px] leading-[1.3] lg:leading-[60px] w-full">
            What do you need to do?
          </h2>
          <p className="font-sans font-normal text-[#4f5e74] text-[15px] sm:text-[17px] lg:text-[18px] leading-[28px] w-full">
            Select your integration goal to find the right guidance path.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] w-full">
          {tasks.map((task) => (
            <div
              key={task.num}
              className="bg-[#f8fafc] border border-[#e2e8f0] border-solid flex flex-col gap-[16px] items-start p-[24px] rounded-[12px]"
            >
              <div className="bg-gradient-to-b from-[#00d4aa] to-[#4c86ff] flex items-center justify-center rounded-full size-[32px]">
                <span className="font-sans font-bold text-[#0a0d13] text-[12px]">{task.num}</span>
              </div>
              <p className="font-sans font-bold text-[#0a0d13] text-[18px]">{task.title}</p>
              <p className="font-sans font-normal text-[#4f5e74] text-[14px] leading-[20px] w-full">{task.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
