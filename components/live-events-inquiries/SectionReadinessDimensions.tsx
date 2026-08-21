import React from 'react';

export default function SectionReadinessDimensions() {
  return (
    <div className="bg-[#f7f9fb] relative w-full px-6 lg:px-[112px] py-[80px] lg:py-[120px] flex flex-col items-center">
      <div className="w-full max-w-[1176px] flex flex-col items-start">
        {/* Header content */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-[8px] mb-[16px]">
            <div className="h-[6px] w-[6px] bg-[#5b8def] rounded-full" />
            <p className="font-inter font-bold text-[#5b8def] text-[12.5px] uppercase tracking-[1.25px] m-0 leading-[20px]">
              Planning architecture
            </p>
          </div>
          <h2 className="font-sans font-bold text-[#32353c] text-[28px] lg:text-[30px] tracking-[-0.3px] m-0 leading-[48px] mb-[18px]">
            Plan the event, not just the stream.
          </h2>
          <p className="font-inter font-normal text-[#6b7280] text-[16px] leading-[25.6px] m-0">
            These are discovery topics to think through before a serious live event — not a feature<br className="hidden lg:block" />checklist.
          </p>
        </div>

        {/* Mosaic Grid Cells */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-[1px] bg-[#dde2ea] border border-[#dde2ea] rounded-[18px] overflow-hidden mt-[44px]">
          
          {/* Cell 1: EVENT */}
          <div className="bg-white flex flex-col p-[26px] gap-[12px] h-full">
            <div className="flex flex-col gap-[10px]">
              <p className="font-sans font-bold text-[#3fc9bd] text-[12.5px] uppercase tracking-[0.75px] m-0 leading-[20px]">
                EVENT
              </p>
              <h3 className="font-sans font-bold text-[#32353c] text-[16px] tracking-[-0.16px] m-0 leading-[25.6px]">
                What is happening and when?
              </h3>
            </div>
            <p className="font-inter font-normal text-[#6b7280] text-[14px] leading-[22.4px] m-0">
              Event type, exact or approximate date, timezone, duration, single event vs.<br className="hidden lg:block" />series.
            </p>
          </div>

          {/* Cell 2: AUDIENCE */}
          <div className="bg-white flex flex-col p-[26px] gap-[12px] h-full">
            <div className="flex flex-col gap-[10px]">
              <p className="font-sans font-bold text-[#3fc9bd] text-[12.5px] uppercase tracking-[0.75px] m-0 leading-[20px]">
                AUDIENCE
              </p>
              <h3 className="font-sans font-bold text-[#32353c] text-[16px] tracking-[-0.16px] m-0 leading-[25.6px]">
                Who needs to watch?
              </h3>
            </div>
            <p className="font-inter font-normal text-[#6b7280] text-[14px] leading-[22.4px] m-0">
              Internal, external or mixed; expected peak audience range; regions and<br className="hidden lg:block" />languages. "Not sure" is always valid.
            </p>
          </div>

          {/* Cell 3: ACCESS */}
          <div className="bg-white flex flex-col p-[26px] gap-[12px] h-full">
            <div className="flex flex-col gap-[10px]">
              <p className="font-sans font-bold text-[#3fc9bd] text-[12.5px] uppercase tracking-[0.75px] m-0 leading-[20px]">
                ACCESS
              </p>
              <h3 className="font-sans font-bold text-[#32353c] text-[16px] tracking-[-0.16px] m-0 leading-[25.6px]">
                How should viewers enter?
              </h3>
            </div>
            <p className="font-inter font-normal text-[#6b7280] text-[14px] leading-[22.4px] m-0">
              Open, invite-only, authenticated, ticketed/restricted, or still undecided.
            </p>
          </div>

          {/* Cell 4: PRODUCTION */}
          <div className="bg-white flex flex-col p-[26px] gap-[12px] h-full">
            <div className="flex flex-col gap-[10px]">
              <p className="font-sans font-bold text-[#3fc9bd] text-[12.5px] uppercase tracking-[0.75px] m-0 leading-[20px]">
                PRODUCTION
              </p>
              <h3 className="font-sans font-bold text-[#32353c] text-[16px] tracking-[-0.16px] m-0 leading-[25.6px]">
                Where does the signal come from?
              </h3>
            </div>
            <p className="font-inter font-normal text-[#6b7280] text-[14px] leading-[22.4px] m-0">
              In-house production, agency/venue partner, remote speakers, or not yet<br className="hidden lg:block" />decided.
            </p>
          </div>

          {/* Cell 5: DELIVERY */}
          <div className="bg-white flex flex-col p-[26px] gap-[12px] h-full">
            <div className="flex flex-col gap-[10px]">
              <p className="font-sans font-bold text-[#3fc9bd] text-[12.5px] uppercase tracking-[0.75px] m-0 leading-[20px]">
                DELIVERY
              </p>
              <h3 className="font-sans font-bold text-[#32353c] text-[16px] tracking-[-0.16px] m-0 leading-[25.6px]">
                Where should the event appear?
              </h3>
            </div>
            <p className="font-inter font-normal text-[#6b7280] text-[14px] leading-[22.4px] m-0">
              Website/app, controlled portal, third-party destinations, or internal experience.
            </p>
          </div>

          {/* Cell 6: RESILIENCE */}
          <div className="bg-white flex flex-col p-[26px] gap-[12px] h-full">
            <div className="flex flex-col gap-[10px]">
              <p className="font-sans font-bold text-[#3fc9bd] text-[12.5px] uppercase tracking-[0.75px] m-0 leading-[20px]">
                RESILIENCE
              </p>
              <h3 className="font-sans font-bold text-[#32353c] text-[16px] tracking-[-0.16px] m-0 leading-[25.6px]">
                What cannot fail?
              </h3>
            </div>
            <p className="font-inter font-normal text-[#6b7280] text-[14px] leading-[22.4px] m-0">
              Redundancy expectations, rehearsal, monitoring, escalation and fallback<br className="hidden lg:block" />requirements.
            </p>
          </div>

          {/* Cell 7: ACCESSIBILITY */}
          <div className="bg-white flex flex-col p-[26px] gap-[12px] h-full">
            <div className="flex flex-col gap-[10px]">
              <p className="font-sans font-bold text-[#3fc9bd] text-[12.5px] uppercase tracking-[0.75px] m-0 leading-[20px]">
                ACCESSIBILITY
              </p>
              <h3 className="font-sans font-bold text-[#32353c] text-[16px] tracking-[-0.16px] m-0 leading-[25.6px]">
                What access needs must be planned?
              </h3>
            </div>
            <p className="font-inter font-normal text-[#6b7280] text-[14px] leading-[22.4px] m-0">
              Live captions, language support, interpretation, and accessible registration or<br className="hidden lg:block" />player requirements.
            </p>
          </div>

          {/* Cell 8: INTEGRATIONS */}
          <div className="bg-white flex flex-col p-[26px] gap-[12px] h-full">
            <div className="flex flex-col gap-[10px]">
              <p className="font-sans font-bold text-[#3fc9bd] text-[12.5px] uppercase tracking-[0.75px] m-0 leading-[20px]">
                INTEGRATIONS
              </p>
              <h3 className="font-sans font-bold text-[#32353c] text-[16px] tracking-[-0.16px] m-0 leading-[25.6px]">
                What systems need to connect?
              </h3>
            </div>
            <p className="font-inter font-normal text-[#6b7280] text-[14px] leading-[22.4px] m-0">
              Identity, registration, analytics, CRM/marketing, or moderation and engagement<br className="hidden lg:block" />tools.
            </p>
          </div>

          {/* Cell 9: POST-EVENT */}
          <div className="bg-white flex flex-col p-[26px] gap-[12px] h-full">
            <div className="flex flex-col gap-[10px]">
              <p className="font-sans font-bold text-[#3fc9bd] text-[12.5px] uppercase tracking-[0.75px] m-0 leading-[20px]">
                POST-EVENT
              </p>
              <h3 className="font-sans font-bold text-[#32353c] text-[16px] tracking-[-0.16px] m-0 leading-[25.6px]">
                What happens after live?
              </h3>
            </div>
            <p className="font-inter font-normal text-[#6b7280] text-[14px] leading-[22.4px] m-0">
              Recording, on-demand availability, clips, reporting, retention or follow-up<br className="hidden lg:block" />requirements.
            </p>
          </div>

          {/* Cell 10: Empty to complete grid, filled with page bg color */}
          <div className="bg-[#f7f9fb] hidden lg:block h-full w-full" />

        </div>
      </div>
    </div>
  );
}
