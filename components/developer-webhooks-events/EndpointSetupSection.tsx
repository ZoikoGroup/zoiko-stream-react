import React from 'react';

export default function EndpointSetupSection() {
  return (
    <section className="relative w-full border-t border-solid border-[#dde2ea] bg-white px-6 py-16 md:px-12 xl:px-[132px] xl:py-[80px]">
      <div className="mx-auto flex w-full max-w-[1176px] flex-col items-start gap-[24px]">
        <div className="flex items-center gap-[8px] mb-2">
          <div className="w-[6px] h-[6px] rounded-full bg-[#5b8def]" />
          <p className="text-[12px] font-bold uppercase tracking-[1.2px] text-[#5b8def]">
            Endpoint setup
          </p>
        </div>

        <h2 className="w-full max-w-[734px] font-sora text-[27px] font-bold leading-[1.2] tracking-[-0.27px] text-[#2b2e35] md:text-[32px] md:leading-[1.4]">
          Configure one endpoint for the events your service needs.
        </h2>

        {/* Steps */}
        <div className="flex flex-wrap items-center gap-3 mt-[15px] mb-[25px]">
          <div className="flex h-[35px] items-center justify-center rounded-[18px] bg-[#eafaf3] px-4">
            <span className="text-[13px] font-semibold text-[#12a559]">1. Environment</span>
          </div>
          <div className="flex h-[35px] items-center justify-center rounded-[18px] bg-[#eafaf3] px-4">
            <span className="text-[13px] font-semibold text-[#12a559]">2. Endpoint URL</span>
          </div>
          <div className="flex h-[35px] items-center justify-center rounded-[18px] bg-[#2b2e35] px-4">
            <span className="text-[13px] font-semibold text-white">3. Events</span>
          </div>
          <div className="flex h-[35px] items-center justify-center rounded-[18px] bg-[#f1f4f8] px-4">
            <span className="text-[13px] font-semibold text-[#9aa1ae]">4. Signing secret</span>
          </div>
          <div className="flex h-[35px] items-center justify-center rounded-[18px] bg-[#f1f4f8] px-4">
            <span className="text-[13px] font-semibold text-[#9aa1ae]">5. Test</span>
          </div>
          <div className="flex h-[35px] items-center justify-center rounded-[18px] bg-[#f1f4f8] px-4">
            <span className="text-[13px] font-semibold text-[#9aa1ae]">6. Review & activate</span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-[32px] w-full mt-2">
          {/* Left Column */}
          <div className="flex w-full lg:w-[572px] flex-col gap-[15px]">
            <div className="inline-flex w-fit items-center justify-center rounded-[6px] bg-[#eeecfd] px-[8px] py-[3px] mb-1">
              <span className="text-[10.5px] font-semibold uppercase tracking-[0.4px] text-[#5841d8]">Test environment</span>
            </div>

            {/* Box 1 */}
            <div className="flex w-full flex-col gap-2 rounded-[8px] border border-[#dde2ea] p-[17px]">
              <span className="text-[13px] text-[#9aa1ae]">Endpoint URL</span>
              <span className="font-mono text-[14px] text-[#2b2e35]">https://api.yourapp.com/webhooks/zoikostream</span>
            </div>

            {/* Box 2 */}
            <div className="flex w-full flex-col gap-2 rounded-[8px] border border-[#dde2ea] p-[17px]">
              <span className="text-[13px] text-[#9aa1ae]">Selected events (3)</span>
              <div className="flex flex-wrap items-center gap-2 mt-1">
                <div className="flex items-center justify-center rounded-[6px] bg-[#f1f4f8] px-[8px] py-[3px]">
                  <span className="font-mono text-[11.5px] font-medium text-[#63697a]">stream.session.started</span>
                </div>
                <div className="flex items-center justify-center rounded-[6px] bg-[#f1f4f8] px-[8px] py-[3px]">
                  <span className="font-mono text-[11.5px] font-medium text-[#63697a]">stream.session.ended</span>
                </div>
                <div className="flex items-center justify-center rounded-[6px] bg-[#f1f4f8] px-[8px] py-[3px]">
                  <span className="font-mono text-[11.5px] font-medium text-[#63697a]">recording.asset.ready</span>
                </div>
              </div>
            </div>

            {/* Box 3 */}
            <div className="flex w-full items-center justify-between rounded-[8px] border border-[#dde2ea] p-[17px]">
              <div className="flex flex-col gap-2">
                <span className="text-[13px] text-[#9aa1ae]">Signing secret</span>
                <span className="font-mono text-[14px] text-[#2b2e35]">whsec_•••••••••••••••••2f9a</span>
              </div>
              <button className="flex h-[24px] items-center justify-center rounded-[6px] bg-[#454a55] px-[11px] mt-4">
                <span className="text-[11px] font-medium text-white">Reveal</span>
              </button>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex w-full lg:w-[572px] flex-col justify-end">
            <div className="flex flex-col gap-0 border-t border-[#dde2ea] mb-[32px]">
              {/* Item 1 */}
              <div className="flex items-start gap-[12px] border-b border-[#dde2ea] py-[15px]">
                <div className="mt-0.5 h-[16px] w-[16px] shrink-0 rounded-[4px] border border-[#dde2ea]" />
                <p className="text-[13.5px] leading-[1.6] text-[#63697a]">
                  <strong className="font-semibold text-[#2b2e35]">HTTPS required.</strong> The endpoint URL cannot contain API keys, passwords, or signing secrets.
                </p>
              </div>
              {/* Item 2 */}
              <div className="flex items-start gap-[12px] border-b border-[#dde2ea] py-[15px]">
                <div className="mt-0.5 h-[16px] w-[16px] shrink-0 rounded-[4px] border border-[#dde2ea]" />
                <p className="text-[13.5px] leading-[1.6] text-[#63697a]">
                  <strong className="font-semibold text-[#2b2e35]">No "all events" default.</strong> Selection starts empty — choose the minimum your integration needs.
                </p>
              </div>
              {/* Item 3 */}
              <div className="flex items-start gap-[12px] border-b border-[#dde2ea] py-[15px]">
                <div className="mt-0.5 h-[16px] w-[16px] shrink-0 rounded-[4px] border border-[#dde2ea]" />
                <p className="text-[13.5px] leading-[1.6] text-[#63697a]">
                  <strong className="font-semibold text-[#2b2e35]">Send a test event</strong> before activation to confirm your handler responds correctly.
                </p>
              </div>
              {/* Item 4 */}
              <div className="flex items-start gap-[12px] border-b border-[#dde2ea] py-[15px]">
                <div className="mt-0.5 h-[16px] w-[16px] shrink-0 rounded-[4px] border border-[#dde2ea]" />
                <p className="text-[13.5px] leading-[1.6] text-[#63697a]">
                  <strong className="font-semibold text-[#2b2e35]">Activation is blocked</strong> when required validation or test criteria fail.
                </p>
              </div>
            </div>

            <button className="flex h-[49px] w-full items-center justify-center rounded-[8px] bg-gradient-to-r from-[#5dddd6] to-[#6da6fa] px-6 text-[14.5px] font-semibold text-[#1c2430] hover:opacity-90">
              Send test event
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
