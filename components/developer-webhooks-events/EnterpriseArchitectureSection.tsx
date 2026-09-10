import React from 'react';

export default function EnterpriseArchitectureSection() {
  return (
    <section className="relative w-full border-t border-solid border-[#dde2ea] bg-white px-6 py-16 md:px-12 xl:px-[132px] xl:py-[80px]">
      

      <div className="mx-auto flex w-full max-w-[1176px] flex-col items-start gap-[24px]">
        <div className="flex items-center gap-[8px] mb-2">
          <div className="w-[6px] h-[6px] rounded-full bg-[#5b8def]" />
          <p className="text-[12px] font-bold uppercase tracking-[1.2px] text-[#5b8def]">
          Limits, scale &amp; enterprise architecture
        </p>
        </div>

        <h2 className="w-full max-w-[734px] font-sora text-[27px] font-bold leading-[1.62] tracking-[-0.27px] text-[#2b2e35]">
          Design for event volume before it becomes an incident.
        </h2>

        <div className="flex flex-col lg:flex-row gap-[64px] w-full mt-6">
          {/* Left: Table */}
          <div className="flex w-full lg:w-[480px] flex-col">
            <div className="flex w-full items-center border-b border-solid border-[#dde2ea] pb-[10px]">
              <span className="w-1/2 font-inter text-[11px] font-bold uppercase tracking-wider text-[#9aa1ae]">Limit</span>
              <span className="w-1/2 font-inter text-[11px] font-bold uppercase tracking-wider text-[#9aa1ae]">Value</span>
            </div>
            
            {[
              { label: 'Endpoints per project', value: '[ENDPOINT_LIMIT]' },
              { label: 'Selected events per endpoint', value: 'Account-specific' },
              { label: 'Payload size', value: 'Plan-dependent' },
              { label: 'Delivery timeout', value: '[ACK_TIMEOUT]' },
              { label: 'Log retention', value: '[REDELIVERY_WINDOW]' },
            ].map((row, idx) => (
              <div key={idx} className="flex w-full items-center border-b border-solid border-[#dde2ea] py-[12px]">
                <span className="w-1/2 font-inter text-[13px] font-normal text-[#63697a]">{row.label}</span>
                <span className={`w-1/2 font-mono text-[13px] font-bold ${row.value.startsWith('[') ? 'text-[#6a6df0]' : 'text-[#2b2e35]'}`}>
                  {row.value}
                </span>
              </div>
            ))}
          </div>

          {/* Right: Box & Text */}
          <div className="flex w-full lg:w-[480px] flex-col gap-[32px]">
            <p className="font-inter text-[14px] leading-[22.68px] text-[#63697a]">
              Decouple webhook receipt from slow processing and monitor queue lag as volume grows.
            </p>

            <div className="flex flex-col items-start gap-[16px] rounded-[12px] border border-solid border-[#dde2ea] bg-[#f7f9fb] p-6">
              <p className="font-inter text-[13.5px] leading-[21.87px] text-[#63697a]">
                Need private networking, custom routing, or a security review for high-volume delivery?
              </p>
              <button className="flex h-[49px] items-center justify-center rounded-[9px] border border-solid border-[#2b2e35] px-6 transition-colors hover:bg-gray-100">
                <span className="font-inter text-[14.5px] font-semibold text-[#2b2e35]">Talk to an expert</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
