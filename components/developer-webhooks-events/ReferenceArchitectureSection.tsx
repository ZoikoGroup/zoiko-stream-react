import React from 'react';

export default function ReferenceArchitectureSection() {
  return (
    <section className="relative w-full border-t border-solid border-[#dde2ea] bg-white px-6 py-16 md:px-12 xl:px-[132px] xl:py-[80px]">
      

      <div className="mx-auto flex w-full max-w-[1176px] flex-col items-start gap-[24px]">
        <div className="flex items-center gap-[8px] mb-2">
          <div className="w-[6px] h-[6px] rounded-full bg-[#5b8def]" />
          <p className="text-[12px] font-bold uppercase tracking-[1.2px] text-[#5b8def]">
          Reference architecture
        </p>
        </div>

        <h2 className="w-full max-w-[734px] font-sora text-[27px] font-bold leading-[1.62] tracking-[-0.27px] text-[#2b2e35] mb-[12px]">
          Acknowledge safely. Process asynchronously. Make side effects idempotent.
        </h2>

        {/* Desktop Pipeline Diagram */}
        <div className="hidden lg:flex w-full h-[107px] rounded-[12px] border border-solid border-[#dde2ea] bg-white px-[21px] items-center justify-between">
          <div className="flex h-[45px] w-[136px] items-center justify-center rounded-[10px] border border-solid border-[#5b8def] bg-white shadow-sm">
            <span className="font-inter text-[12px] font-semibold text-[#5b8def]">Receive</span>
          </div>
          <span className="text-[14px] text-[#9aa1ae]">-&gt;</span>
          <div className="flex h-[45px] w-[136px] items-center justify-center rounded-[10px] border border-solid border-[#dde2ea] bg-white shadow-sm">
            <span className="font-inter text-[12px] font-semibold text-[#2b2e35]">Verify signature</span>
          </div>
          <span className="text-[14px] text-[#9aa1ae]">-&gt;</span>
          <div className="flex h-[45px] w-[136px] items-center justify-center rounded-[10px] border border-solid border-[#dde2ea] bg-white shadow-sm">
            <span className="font-inter text-[12px] font-semibold text-[#2b2e35]">Check event ID</span>
          </div>
          <span className="text-[14px] text-[#9aa1ae]">-&gt;</span>
          <div className="flex h-[45px] w-[136px] items-center justify-center rounded-[10px] border border-solid border-[#5b8def] bg-white shadow-sm">
            <span className="font-inter text-[12px] font-semibold text-[#5b8def]">Enqueue &amp; ack</span>
          </div>
          <span className="text-[14px] text-[#9aa1ae]">-&gt;</span>
          <div className="flex h-[45px] w-[136px] items-center justify-center rounded-[10px] border border-solid border-[#dde2ea] bg-white shadow-sm">
            <span className="font-inter text-[12px] font-semibold text-[#2b2e35]">Worker processes</span>
          </div>
          <span className="text-[14px] text-[#9aa1ae]">-&gt;</span>
          <div className="flex h-[65px] w-[136px] items-center justify-center rounded-[10px] border border-solid border-[#dde2ea] bg-white shadow-sm">
            <span className="font-inter text-[12px] font-semibold text-[#2b2e35] text-center leading-[16px]">Retrieve current<br/>state</span>
          </div>
          <span className="text-[14px] text-[#9aa1ae]">-&gt;</span>
          <div className="flex h-[45px] w-[136px] items-center justify-center rounded-[10px] border border-solid border-[#dde2ea] bg-white shadow-sm">
            <span className="font-inter text-[12px] font-semibold text-[#2b2e35]">Record outcome</span>
          </div>
        </div>

        {/* Mobile Pipeline Diagram (Simplified) */}
        <div className="flex lg:hidden flex-col w-full rounded-[12px] border border-solid border-[#dde2ea] bg-[#f7f9fb] p-5 gap-3">
           <div className="flex flex-col gap-2">
             <span className="font-inter text-[12px] font-semibold text-[#6a6df0]">1. Receive</span>
             <span className="font-inter text-[12px] font-semibold text-[#2b2e35]">2. Verify signature</span>
             <span className="font-inter text-[12px] font-semibold text-[#2b2e35]">3. Check event ID</span>
             <span className="font-inter text-[12px] font-semibold text-[#6a6df0]">4. Enqueue &amp; ack</span>
             <span className="font-inter text-[12px] font-semibold text-[#2b2e35]">5. Worker processes</span>
             <span className="font-inter text-[12px] font-semibold text-[#2b2e35]">6. Retrieve current state</span>
             <span className="font-inter text-[12px] font-semibold text-[#2b2e35]">7. Record outcome</span>
           </div>
        </div>

        {/* 3 Columns */}
        <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-[32px] mt-[32px]">
          <div className="flex flex-col gap-[12px]">
            <h3 className="font-sora text-[15px] font-bold tracking-[-0.15px] text-[#2b2e35]">
              Deduplicate
            </h3>
            <p className="font-inter text-[13.5px] font-normal leading-[21.87px] text-[#63697a]">
              Store processed event IDs for a retention window. Skip the side effect if you've already seen this ID.
            </p>
          </div>
          <div className="flex flex-col gap-[12px]">
            <h3 className="font-sora text-[15px] font-bold tracking-[-0.15px] text-[#2b2e35]">
              Stay order-independent
            </h3>
            <p className="font-inter text-[13.5px] font-normal leading-[21.87px] text-[#63697a]">
              Don't assume global ordering unless the event contract explicitly guarantees it &mdash; retrieve current state via API instead.
            </p>
          </div>
          <div className="flex flex-col gap-[12px]">
            <h3 className="font-sora text-[15px] font-bold tracking-[-0.15px] text-[#2b2e35]">
              Isolate failures
            </h3>
            <p className="font-inter text-[13.5px] font-normal leading-[21.87px] text-[#63697a]">
              A failure in one downstream worker shouldn't block acknowledgment of unrelated events.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
