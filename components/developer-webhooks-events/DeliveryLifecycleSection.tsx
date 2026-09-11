import React from 'react';

export default function DeliveryLifecycleSection() {
  return (
    <section className="relative w-full border-t border-solid border-[#dde2ea] bg-white px-6 py-16 md:px-12 xl:px-[132px] xl:py-[80px]">
      

      <div className="mx-auto flex w-full max-w-[1176px] flex-col items-start gap-[24px]">
        <div className="flex items-center gap-[8px] mb-2">
          <div className="w-[6px] h-[6px] rounded-full bg-[#5b8def]" />
          <p className="text-[12px] font-bold uppercase tracking-[1.2px] text-[#5b8def]">
          Delivery lifecycle &amp; retries
        </p>
        </div>

        <h2 className="w-full max-w-[734px] font-sora text-[27px] font-bold leading-[1.62] tracking-[-0.27px] text-[#2b2e35]">
          Understand each delivery attempt &mdash; and what happens after a failure.
        </h2>

        {/* State Pills */}
        <div className="flex flex-wrap items-center gap-[12px] mt-4 mb-6">
          <span className="flex h-[23px] items-center justify-center rounded-[100px] bg-[#f1f4f8] px-[12px] text-[10.5px] font-bold text-[#63697a]">Pending</span>
          <span className="flex h-[23px] items-center justify-center rounded-[100px] bg-[#f1f4f8] px-[12px] text-[10.5px] font-bold text-[#63697a]">Attempting</span>
          <span className="flex h-[23px] items-center justify-center rounded-[100px] bg-[#eafaf3] px-[12px] text-[10.5px] font-bold text-[#1f9d6f]">Delivered</span>
          <span className="flex h-[23px] items-center justify-center rounded-[100px] bg-[#fbeae8] px-[12px] text-[10.5px] font-bold text-[#c0392b]">Failed</span>
          <span className="flex h-[23px] items-center justify-center rounded-[100px] bg-[#fdf6e3] px-[12px] text-[10.5px] font-bold text-[#b8860b]">Retry scheduled</span>
          <span className="flex h-[23px] items-center justify-center rounded-[100px] bg-[#f1f4f8] px-[12px] text-[10.5px] font-bold text-[#63697a]">Redelivered</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-[64px] w-full items-start">
          {/* Left: Table */}
          <div className="flex w-full lg:w-[500px] flex-col">
            <div className="flex w-full items-center border-b border-solid border-[#dde2ea] pb-[10px]">
              <span className="w-1/2 font-inter text-[11px] font-bold uppercase tracking-wider text-[#9aa1ae]">Policy</span>
              <span className="w-1/2 font-inter text-[11px] font-bold uppercase tracking-wider text-[#9aa1ae]">Value</span>
            </div>
            
            {[
              { label: 'Acknowledgment timeout', value: '[ACK_TIMEOUT]' },
              { label: 'Retry backoff', value: '[RETRY_POLICY]' },
              { label: 'Maximum attempts', value: '[RETRY_POLICY]' },
              { label: 'Redelivery window', value: '[REDELIVERY_WINDOW]' },
              { label: 'Ordering guarantee', value: 'Not guaranteed' },
            ].map((row, idx) => (
              <div key={idx} className="flex w-full items-center border-b border-solid border-[#dde2ea] py-[12px]">
                <span className="w-1/2 font-inter text-[13px] font-normal text-[#63697a]">{row.label}</span>
                <span className={`w-1/2 font-mono text-[13px] font-bold ${row.value.startsWith('[') ? 'text-[#6a6df0]' : 'text-[#2b2e35]'}`}>
                  {row.value}
                </span>
              </div>
            ))}

            <p className="mt-4 font-inter text-[11.5px] leading-[18.63px] text-[#9aa1ae] max-w-[440px]">
              Values in brackets are registry-driven and shown as placeholders until confirmed by the current Delivery Contract Registry &mdash; no retry cadence is fabricated here.
            </p>
          </div>

          {/* Right: Attempt lineage */}
          <div className="flex w-full lg:w-[440px] flex-col gap-[16px]">
            <h3 className="font-sora text-[15px] font-bold tracking-[-0.15px] text-[#2b2e35]">
              Attempt lineage
            </h3>

            <div className="flex flex-col w-full rounded-[10px] border border-solid border-[#dde2ea] overflow-hidden bg-white">
              <div className="flex items-center justify-between border-b border-solid border-[#dde2ea] p-[14px]">
                <span className="font-inter text-[13px] font-normal text-[#63697a]">Attempt 1 &middot; 14:02:07</span>
                <span className="flex h-[24px] items-center justify-center rounded-[100px] bg-[#fbeae8] px-[12px] text-[11px] font-bold text-[#c0392b]">Timeout</span>
              </div>
              <div className="flex items-center justify-between border-b border-solid border-[#dde2ea] p-[14px]">
                <span className="font-inter text-[13px] font-normal text-[#63697a]">Attempt 2 &middot; 14:03:12</span>
                <span className="flex h-[24px] items-center justify-center rounded-[100px] bg-[#fbeae8] px-[12px] text-[11px] font-bold text-[#c0392b]">HTTP 503</span>
              </div>
              <div className="flex items-center justify-between p-[14px]">
                <span className="font-inter text-[13px] font-normal text-[#63697a]">Manual redelivery &middot; 14:20:00</span>
                <span className="flex h-[24px] items-center justify-center rounded-[100px] bg-[#eafaf3] px-[12px] text-[11px] font-bold text-[#1f9d6f]">Delivered</span>
              </div>
            </div>

            <p className="font-inter text-[12.5px] leading-[20.25px] text-[#9aa1ae]">
              Manual redelivery reuses the same event identity &mdash; it is another attempt, not a new event.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
