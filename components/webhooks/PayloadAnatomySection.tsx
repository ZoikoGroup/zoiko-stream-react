import React from 'react';

export default function PayloadAnatomySection() {
  return (
    <section className="relative w-full border-t border-solid border-[#dde2ea] bg-white px-6 py-16 md:px-12 xl:px-[132px] xl:py-[80px]">
      

      <div className="mx-auto flex w-full max-w-[1176px] flex-col items-start gap-[24px]">
        <div className="flex items-center gap-[8px] mb-2">
          <div className="w-[6px] h-[6px] rounded-full bg-[#5b8def]" />
          <p className="text-[12px] font-bold uppercase tracking-[1.2px] text-[#5b8def]">
          Payload anatomy
        </p>
        </div>

        <h2 className="w-full max-w-[734px] font-sora text-[27px] font-bold leading-[1.62] tracking-[-0.27px] text-[#2b2e35]">
          Parse the event envelope first. Then handle the data you need.
        </h2>

        <p className="w-full max-w-[850px] font-inter text-[15px] font-normal leading-[24.3px] text-[#63697a] mb-8">
          Every delivery wraps event metadata around a resource-specific data payload. Unknown additive fields should be tolerated by your parser.
        </p>

        <div className="flex flex-col lg:flex-row w-full gap-[32px] items-start">
          {/* Left: Code Block */}
          <div className="relative w-full lg:w-[572px] shrink-0 rounded-[12px] bg-[#282c34] p-5 shadow-sm overflow-hidden">
            <div className="flex justify-between items-center mb-4">
              <span className="font-inter text-[10.5px] font-bold uppercase text-[#8b92a0]">
                JSON &middot; synthetic example
              </span>
              <button className="flex h-[24px] items-center justify-center rounded-[6px] border border-solid border-[#565a63] bg-[#454a55] px-3">
                <span className="font-sans text-[11px] font-bold text-[#c7cbd3]">Copy</span>
              </button>
            </div>
            
            <pre className="font-mono text-[12.5px] leading-[20.63px] text-[#c9d1d9] overflow-x-auto">
<span className="text-[#e06c75]">"id"</span>: <span className="text-[#98c379]">"[EVENT_ID]"</span>,<br/>
<span className="text-[#e06c75]">"type"</span>: <span className="text-[#98c379]">"stream.session.started"</span>,<br/>
<span className="text-[#e06c75]">"occurred_at"</span>: <span className="text-[#98c379]">"2026-08-22T14:02:07Z"</span>,<br/>
<span className="text-[#e06c75]">"schema_version"</span>: <span className="text-[#98c379]">"v1"</span>,<br/>
<span className="text-[#e06c75]">"environment"</span>: <span className="text-[#98c379]">"test"</span>,<br/>
<span className="text-[#e06c75]">"resource"</span>: {'{\n'}
{'  '}<span className="text-[#e06c75]">"type"</span>: <span className="text-[#98c379]">"stream_session"</span>,<br/>
{'  '}<span className="text-[#e06c75]">"id"</span>: <span className="text-[#98c379]">"[RESOURCE_ID]"</span><br/>
{'},'}<br/>
<span className="text-[#e06c75]">"data"</span>: {'{\n'}
{'  '}<span className="text-[#e06c75]">"session_id"</span>: <span className="text-[#98c379]">"[RESOURCE_ID]"</span>,<br/>
{'  '}<span className="text-[#e06c75]">"started_at"</span>: <span className="text-[#98c379]">"2026-08-22T14:02:07Z"</span>,<br/>
{'  '}<span className="text-[#e06c75]">"ingest_region"</span>: <span className="text-[#98c379]">"us-east"</span><br/>
{'}'}
            </pre>
          </div>

          {/* Right: Explanations */}
          <div className="flex w-full flex-col gap-[20px] pt-4">
            {[
              {
                field: 'id',
                desc: 'Stable event identity — use for deduplication.'
              },
              {
                field: 'type',
                desc: 'Canonical event type from the registry.'
              },
              {
                field: 'occurred_at',
                desc: 'When the underlying change happened, not when it was delivered.'
              },
              {
                field: 'schema_version',
                desc: 'Payload contract version — pin this in your parser.'
              },
              {
                field: 'resource',
                desc: 'Reference you can use to retrieve current state via the API.'
              },
              {
                field: 'data',
                desc: 'Event-specific payload. Sensitive fields are masked per registry classification.'
              }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col gap-[4px]">
                <span className="font-inter text-[11.5px] font-normal uppercase tracking-[0.46px] text-[#9aa1ae]">
                  {item.field}
                </span>
                <span className="font-inter text-[13px] font-normal leading-[21.06px] text-[#2b2e35]">
                  {item.desc}
                </span>
              </div>
            ))}

            <p className="mt-4 font-inter text-[12.5px] leading-[20.25px] text-[#9aa1ae] max-w-[420px]">
              When business logic depends on current state, use the related API to retrieve the current resource instead of assuming delivery order.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
