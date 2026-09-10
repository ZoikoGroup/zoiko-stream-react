import React from 'react';

export default function ProductionReadinessSection() {
  return (
    <section className="relative w-full border-t border-solid border-[#dde2ea] bg-[#f7f9fb] px-6 py-16 md:px-12 xl:px-[132px] xl:py-[80px]">
      

      <div className="mx-auto flex w-full max-w-[1176px] flex-col items-start gap-[24px]">
        <div className="flex items-center gap-[8px] mb-2">
          <div className="w-[6px] h-[6px] rounded-full bg-[#5b8def]" />
          <p className="text-[12px] font-bold uppercase tracking-[1.2px] text-[#5b8def]">
          Production readiness
        </p>
        </div>

        <h2 className="w-full max-w-[734px] font-sora text-[27px] font-bold leading-[1.62] tracking-[-0.27px] text-[#2b2e35]">
          Launch checklist &amp; frequently asked questions.
        </h2>

        <div className="flex flex-col lg:flex-row gap-[64px] w-full mt-6">
          {/* Left: Checklist */}
          <div className="flex w-full lg:w-[480px] flex-col">
            <h3 className="font-sora text-[16px] font-bold tracking-[-0.16px] text-[#2b2e35] mb-6">
              Before you go live
            </h3>

            <div className="flex flex-col w-full">
              {[
                "Only required events selected",
                "HTTPS endpoint configured and verified",
                "Signing secret stored securely, server-side only",
                "Signature validation tested against a real delivery",
                "Duplicate-safe, idempotent processing implemented",
                "Asynchronous queue tested under load",
                "Delivery logs reviewed; retry/redelivery policy understood",
                "Schema version pinned; changelog and status links saved"
              ].map((text, idx) => (
                <div key={idx} className={`flex items-start py-[10px] ${idx !== 7 ? 'border-b border-solid border-[#dde2ea]' : ''}`}>
                  <div className="mt-[2px] mr-[12px] flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[5px] border-2 border-solid border-[#dde2ea]">
                    {/* Empty checkbox */}
                  </div>
                  <p className="font-inter text-[14px] leading-[22.68px] text-[#63697a]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: FAQ */}
          <div className="flex w-full lg:w-[500px] flex-col">
            {[
              {
                q: "Can the same event be delivered more than once?",
                a: "Design for duplicate-safe processing keyed on event identity unless ZoikoStream publishes a stronger guarantee for a specific event family."
              },
              {
                q: "Are webhook events delivered in order?",
                a: "Don't assume ordering unless the event contract explicitly guarantees it. When current state matters, retrieve the resource via the API."
              },
              {
                q: "What happens when my endpoint times out?",
                a: "The delivery is marked failed and retried according to the current delivery policy. Check delivery logs for the exact failure class and next retry."
              },
              {
                q: "Can I redeliver a failed event?",
                a: "Where permitted, manual redelivery sends another attempt for the existing event — it does not create a new event."
              },
              {
                q: "Should I process the event inside the webhook request?",
                a: "No — verify and acknowledge quickly, then process complex work asynchronously in a queue worker."
              }
            ].map((faq, idx) => (
              <div key={idx} className={`flex flex-col gap-2 py-4 ${idx !== 4 ? 'border-b border-solid border-[#dde2ea]' : ''}`}>
                <h4 className="font-sora text-[15px] font-bold tracking-[-0.15px] text-[#2b2e35]">
                  {faq.q}
                </h4>
                <p className="font-inter text-[13.5px] leading-[21.87px] text-[#63697a]">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
