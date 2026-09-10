import React from 'react';

export default function MentalModelSection() {
  return (
    <section className="relative w-full border-t border-solid border-[#dde2ea] bg-white px-6 py-16 md:px-12 xl:px-[132px] xl:py-[80px]">
      {/* Top accent line */}
      

      <div className="mx-auto flex w-full max-w-[1176px] flex-col items-start gap-[24px]">
        <div className="flex items-center gap-[8px] mb-2">
          <div className="w-[6px] h-[6px] rounded-full bg-[#5b8def]" />
          <p className="text-[12px] font-bold uppercase tracking-[1.2px] text-[#5b8def]">
          The mental model
        </p>
        </div>

        <h2 className="w-full max-w-[734px] font-sora text-[27px] font-bold leading-[1.62] tracking-[-0.27px] text-[#2b2e35]">
          One event can produce one or more delivery attempts.
        </h2>

        <p className="w-full max-w-[850px] font-inter text-[15px] font-normal leading-[24.3px] text-[#63697a] mb-8">
          A ZoikoStream event records something that happened. A webhook subscription determines whether that event should be delivered to your endpoint. Delivery success means the endpoint acknowledged the HTTP request &mdash; your own downstream processing may continue separately.
        </p>

        {/* Desktop 6-step diagram */}
        <div className="hidden lg:flex w-full rounded-[12px] border border-solid border-[#dde2ea] mb-[20px] overflow-hidden">
          {[
            {
              num: '1',
              title: 'Occurrence',
              desc: 'Something changes in ZoikoStream.'
            },
            {
              num: '2',
              title: 'Event record',
              desc: 'An event is created with a stable identity.'
            },
            {
              num: '3',
              title: 'Subscription match',
              desc: 'ZoikoStream matches the event to your selected events.'
            },
            {
              num: '4',
              title: 'Delivery attempt',
              desc: 'An HTTP request is sent to your endpoint.'
            },
            {
              num: '5',
              title: 'Verify & acknowledge',
              desc: 'Your server verifies the signature and responds.'
            },
            {
              num: '6',
              title: 'Process asynchronously',
              desc: 'Your worker completes the downstream work.'
            }
          ].map((step, idx) => (
            <div
              key={idx}
              className={`flex-1 flex flex-col p-4 min-h-[180px] ${
                idx < 5 ? 'border-r border-dashed border-[#dde2ea]' : ''
              }`}
            >
              <div className="flex h-[26px] w-[26px] items-center justify-center rounded-[7px] bg-[#f1f4f8] mb-4">
                <span className="font-sora text-[12px] font-bold text-[#6a6df0]">{step.num}</span>
              </div>
              <h3 className="font-sora text-[13.5px] font-bold leading-[21.87px] tracking-[-0.135px] text-[#2b2e35] mb-2">
                {step.title}
              </h3>
              <p className="font-inter text-[12px] font-normal leading-[19.44px] text-[#63697a]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile vertical version */}
        <div className="flex lg:hidden flex-col w-full rounded-[12px] border border-solid border-[#dde2ea] mb-[20px] overflow-hidden">
          {[
            { num: '1', title: 'Occurrence', desc: 'Something changes in ZoikoStream.' },
            { num: '2', title: 'Event record', desc: 'An event is created with a stable identity.' },
            { num: '3', title: 'Subscription match', desc: 'ZoikoStream matches the event to your selected events.' },
            { num: '4', title: 'Delivery attempt', desc: 'An HTTP request is sent to your endpoint.' },
            { num: '5', title: 'Verify & acknowledge', desc: 'Your server verifies the signature and responds.' },
            { num: '6', title: 'Process asynchronously', desc: 'Your worker completes the downstream work.' }
          ].map((step, idx) => (
            <div
              key={idx}
              className={`flex flex-col p-4 ${
                idx < 5 ? 'border-b border-dashed border-[#dde2ea]' : ''
              }`}
            >
              <div className="flex h-[26px] w-[26px] items-center justify-center rounded-[7px] bg-[#f1f4f8] mb-2">
                <span className="font-sora text-[12px] font-bold text-[#6a6df0]">{step.num}</span>
              </div>
              <h3 className="font-sora text-[13.5px] font-bold leading-[21.87px] text-[#2b2e35] mb-1">
                {step.title}
              </h3>
              <p className="font-inter text-[12px] font-normal leading-[19.44px] text-[#63697a]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Warning Note */}
        <div className="flex w-full items-center rounded-[10px] border border-solid border-[#f0e0a8] bg-[#fdf6e3] px-5 py-4">
          <p className="font-inter text-[13.5px] leading-[21.87px] text-[#7a5c00]">
            Do not use delivery success as proof that downstream business logic completed. HTTP 200 confirms receipt &mdash; not that your queue worker finished.
          </p>
        </div>
      </div>
    </section>
  );
}
