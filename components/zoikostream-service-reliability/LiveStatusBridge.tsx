import React from 'react';
const imgLiveStatusBridge = "/images/zoikostream-service-reliability/live-status-bridge-live-status-bridge.png";
const imgPulseContainer = "/images/zoikostream-service-reliability/live-status-bridge-pulse-container.svg";

export default function LiveStatusBridge() {
  return (
    <div className="bg-[#0a0d13] flex flex-col gap-[56px] items-center px-6 lg:px-[112px] py-12 lg:py-[100px] relative w-full overflow-hidden" data-node-id="3842:3576" data-name="Live-Status-Bridge">
      <div aria-hidden className="absolute inset-0 z-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgLiveStatusBridge} />
        <div className="absolute z-0 bg-[rgba(10,13,19,0.75)] inset-0" />
      </div>
      <div className="flex flex-col gap-[56px] items-start px-6 xl:px-0 w-full max-w-[1247px] relative z-10">
      <div className="[word-break:break-word] flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-node-id="3842:3578" data-name="SectionHeader">
        <p className="font-sans font-bold font-bold leading-[60.8px] relative shrink-0 text-[#eef1f6] text-[37.9px] tracking-[-0.38px] w-full" data-node-id="3842:3579">
          Need current service health?
        </p>
        <p className="font-sans font-normal font-normal leading-[28.8px] relative shrink-0 text-[#aab3c4] text-[18px] w-full" data-node-id="3842:3580">
          System status owns live operational health. Service reliability is historical assurance evidence.
        </p>
      </div>
      <div className="bg-[rgba(16,21,30,0.8)] border border-[#232b3a] border-solid flex flex-col gap-[28px] items-start p-[40px] relative rounded-[16px] shrink-0 w-full" data-node-id="3842:3581" data-name="Bridge-Card">
        <div className="flex items-center justify-between relative shrink-0 w-full" data-node-id="3842:3582" data-name="Header-Row">
          <div className="flex gap-[12px] items-center relative shrink-0" data-node-id="3842:3583" data-name="Pulse-Title">
            <div className="relative shrink-0 size-[24px]" data-node-id="3842:3584" data-name="Pulse-Container">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPulseContainer} />
            </div>
            <p className="[word-break:break-word] font-sans font-bold font-bold leading-[normal] relative shrink-0 text-[#eef1f6] text-[18px] whitespace-nowrap" data-node-id="3842:3587">
              Is ZoikoStream down?
            </p>
          </div>
          <p className="[word-break:break-word] font-mono font-normal leading-[normal] not-italic relative shrink-0 text-[#707a8c] text-[11px] whitespace-nowrap" data-node-id="3842:3588">
            LIVE INTEGRITY CHANNELS ACTIVE
          </p>
        </div>
        <p className="[word-break:break-word] font-sans font-normal font-normal leading-[24px] relative shrink-0 text-[#aab3c4] text-[15px] w-full" data-node-id="3842:3589">
          Check System Status for real-time service health, currently unresolved incident notifications, and active global maintenance schedules. Standard reliability <br className="hidden lg:block" /> statements rendered on this page reflect historical audit windows only, and do not represent contractual SLA guarantees.
        </p>
        <div className="flex items-center justify-between relative shrink-0 w-full" data-node-id="3842:3590" data-name="Action-Section">
          <div className="bg-gradient-to-b flex from-[#34d4ca] items-start px-[28px] py-[14px] relative rounded-[8px] shrink-0 to-[#4a8cfb]" data-node-id="3842:3591" data-name="Teal-CTA">
            <p className="[word-break:break-word] font-sans font-bold font-bold leading-[normal] relative shrink-0 text-[#04141a] text-[15px] whitespace-nowrap" data-node-id="3842:3592">
              View System status →
            </p>
          </div>
          <div className="[word-break:break-word] flex gap-[8px] items-center leading-[normal] relative shrink-0 text-[14px] whitespace-nowrap" data-node-id="3842:3593" data-name="Support-Route">
            <p className="font-sans font-normal font-normal relative shrink-0 text-[#aab3c4]" data-node-id="3842:3594">
              Still affected after global resolution?
            </p>
            <p className="font-sans font-bold font-bold relative shrink-0 text-[#00d4aa]" data-node-id="3842:3595">
              Contact Support →
            </p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}