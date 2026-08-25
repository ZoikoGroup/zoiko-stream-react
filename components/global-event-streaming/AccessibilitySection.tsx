import Image from "next/image";

export default function AccessibilitySection() {
  const complianceChecklist = [
    "Full keyboard navigation supported ✓",
    "Screen reader and ARIA labeled controls ✓",
    "Reduced motion options supported ✓",
    "Caption display controls accessible ✓",
    "High contrast color modes enabled ✓",
    "Visible focus indicator outlines ✓"
  ];

  const tracks = [
    {
      type: "Live Captions",
      lang: "English",
      status: "RECEIVING",
      statusColor: "text-[#10b981]",
      statusBg: "bg-[#10b981]/10",
      statusBorder: "border-[#10b981]/20",
      source: "Auto-generated",
      review: "APPROVED",
      reviewColor: "text-[#10b981]",
      reviewBg: "bg-[#10b981]/10",
      reviewBorder: "border-[#10b981]/20"
    },
    {
      type: "Translation",
      lang: "Spanish",
      status: "EXPECTED",
      statusColor: "text-[#4a8cfb]",
      statusBg: "bg-[#4a8cfb]/10",
      statusBorder: "border-[#4a8cfb]/20",
      source: "Machine + Human Review",
      review: "NEEDS REVIEW",
      reviewColor: "text-[#f59e0b]",
      reviewBg: "bg-[#f59e0b]/10",
      reviewBorder: "border-[#f59e0b]/20"
    },
    {
      type: "Translation",
      lang: "French",
      status: "EXPECTED",
      statusColor: "text-[#4a8cfb]",
      statusBg: "bg-[#4a8cfb]/10",
      statusBorder: "border-[#4a8cfb]/20",
      source: "Machine + Human Review",
      review: "NEEDS REVIEW",
      reviewColor: "text-[#f59e0b]",
      reviewBg: "bg-[#f59e0b]/10",
      reviewBorder: "border-[#f59e0b]/20"
    },
    {
      type: "Audio Description",
      lang: "English",
      status: "NOT CONFIGURED",
      statusColor: "text-[#9ca3af]",
      statusBg: "bg-[#9ca3af]/10",
      statusBorder: "border-[#9ca3af]/20",
      source: "—",
      review: "NOT EVALUATED",
      reviewColor: "text-[#9ca3af]",
      reviewBg: "bg-[#9ca3af]/10",
      reviewBorder: "border-[#9ca3af]/20"
    }
  ];

  return (
    <section className="border-[#232b3a] border-b border-solid flex flex-col gap-[56px] items-start px-[112px] py-[100px] relative w-full overflow-hidden bg-[#0a0d14]">
      {/* Background Image & Overlay */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/global-event-streaming/accessibility-bg.png"
          alt="Accessibility Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0f1b2d]/90" />
      </div>

      <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full z-10">
        <h2 className="font-['Space_Grotesk'] font-bold leading-[56px] text-[44px] text-white tracking-[-1px] w-full">
          Let People Know When to Join — and Make the Event Usable When They Do
        </h2>
        <p className="font-['Inter'] font-normal leading-[28px] text-[#aab3c4] text-[18px] w-full max-w-[1000px]">
          Local time display, captions, language tracks and translation where verified, player usability, transcript and replay continuity and accessibility help must be planned together for a distributed audience.
        </p>
      </div>

      <div className="flex flex-col gap-[24px] items-start relative shrink-0 w-full z-10">
        <div className="flex gap-[24px] items-start w-full">
          {/* Local Time Preview Panel */}
          <div className="bg-[#10151e]/80 border border-[#232b3a] border-solid flex flex-1 flex-col gap-[20px] items-start p-[28px] rounded-[12px]">
            <div className="flex gap-[12px] items-center">
              <div className="flex items-center justify-center size-[24px]">
                <div className="relative size-[20px]">
                  <Image
                    src="/images/global-event-streaming/clock.svg"
                    alt=""
                    fill
                  />
                </div>
              </div>
              <h3 className="font-['Space_Grotesk'] font-bold text-[18px] text-white whitespace-nowrap">
                Local Time Preview
              </h3>
            </div>
            
            <div className="bg-[#1f293d] flex items-center justify-between p-[12px] rounded-[8px] w-full">
              <span className="font-['Inter'] font-normal text-[14px] text-white">
                Selected: Europe/London (BST / UTC+1)
              </span>
              <span className="text-[#4ecdc4] text-[12px]">▾</span>
            </div>

            <div className="flex flex-col gap-[8px] items-start w-full">
              <div className="flex items-start justify-between w-full">
                <span className="font-['Inter'] font-normal text-[#aab3c4] text-[13px]">EVENT LIVE TIME</span>
                <span className="font-['Space_Grotesk'] font-bold text-[15px] text-white">6:00 PM – 10:00 PM</span>
              </div>
              <div className="flex items-start justify-between w-full">
                <span className="font-['Inter'] font-normal text-[#aab3c4] text-[13px]">DST INDICATOR</span>
                <span className="font-['Inter'] font-normal text-[#10b981] text-[13px]">Active (British Summer Time)</span>
              </div>
              <div className="flex items-start justify-between w-full">
                <span className="font-['Inter'] font-normal text-[#aab3c4] text-[13px]">UTC REFERENCE</span>
                <span className="font-['Inter'] font-normal text-[#aab3c4] text-[13px]">17:00 – 21:00 UTC</span>
              </div>
            </div>
          </div>

          {/* Player Accessibility Compliance Panel */}
          <div className="bg-[#10151e]/80 border border-[#232b3a] border-solid flex flex-1 flex-col gap-[20px] items-start p-[28px] rounded-[12px]">
            <div className="flex gap-[12px] items-center">
              <div className="flex items-center justify-center size-[24px]">
                <div className="relative size-[20px]">
                  <Image
                    src="/images/global-event-streaming/accessibility-icon.svg"
                    alt=""
                    fill
                  />
                </div>
              </div>
              <h3 className="font-['Space_Grotesk'] font-bold text-[18px] text-white whitespace-nowrap">
                Player Accessibility Compliance
              </h3>
            </div>
            
            <div className="flex flex-col gap-[10px] items-start w-full">
              {complianceChecklist.map((item, idx) => (
                <div key={idx} className="flex gap-[8px] items-center w-full">
                  <div className="bg-[#10b981]/20 flex items-center justify-center rounded-full size-[16px] shrink-0">
                    <div className="relative size-[10px]">
                      <Image
                        src="/images/global-event-streaming/check-green.svg"
                        alt=""
                        fill
                      />
                    </div>
                  </div>
                  <span className="font-['Inter'] font-normal text-[#aab3c4] text-[13px] whitespace-nowrap">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Track & Language Matrix */}
        <div className="bg-[#10151e]/80 border border-[#232b3a] border-solid flex flex-col gap-[20px] items-start p-[28px] rounded-[12px] w-full">
          <h3 className="font-['Space_Grotesk'] font-bold text-[18px] text-white whitespace-nowrap">
            Track & Language Matrix
          </h3>
          <div className="flex flex-col items-start w-full">
            <div className="bg-[#141b2d] flex gap-[12px] items-start p-[12px] w-full">
              <span className="font-['Space_Grotesk'] font-bold text-[12px] text-white w-[200px]">Track Type</span>
              <span className="font-['Space_Grotesk'] font-bold text-[12px] text-white w-[120px]">Language</span>
              <span className="font-['Space_Grotesk'] font-bold text-[12px] text-white w-[140px]">State</span>
              <span className="font-['Space_Grotesk'] font-bold text-[12px] text-white w-[220px]">Source / Provenance</span>
              <span className="flex-1 font-['Space_Grotesk'] font-bold text-[12px] text-white">Review State</span>
            </div>
            
            {tracks.map((track, idx) => (
              <div key={idx} className="border-[#232b3a] border-b border-solid flex gap-[12px] items-center p-[12px] w-full">
                <span className="font-['Inter'] font-semibold text-[13px] text-white w-[200px]">{track.type}</span>
                <span className="font-['Inter'] font-normal text-[13px] text-[#aab3c4] w-[120px]">{track.lang}</span>
                <div className="flex items-start w-[140px]">
                  <div className={`border border-solid flex items-start px-[12px] py-[4px] rounded-[4px] ${track.statusBg} ${track.statusBorder}`}>
                    <span className={`font-['IBM_Plex_Mono'] font-bold text-[11px] whitespace-nowrap ${track.statusColor}`}>
                      {track.status}
                    </span>
                  </div>
                </div>
                <span className="font-['Inter'] font-normal text-[13px] text-[#aab3c4] w-[220px]">{track.source}</span>
                <div className="flex-1 flex items-start">
                  <div className={`border border-solid flex items-start px-[12px] py-[4px] rounded-[4px] ${track.reviewBg} ${track.reviewBorder}`}>
                    <span className={`font-['IBM_Plex_Mono'] font-bold text-[11px] whitespace-nowrap ${track.reviewColor}`}>
                      {track.review}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
