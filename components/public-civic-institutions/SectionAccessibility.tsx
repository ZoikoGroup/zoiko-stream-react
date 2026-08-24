import React from 'react';

const imgSectionBg = "/images/public-civic-institutions/accessibility-section-bg.png";

const CARDS = [
  { image: "/images/public-civic-institutions/accessibility-card-captions.png", title: "Live Closed Captions", tag: "Authorized", description: "Automated speech-to-text with expert oversight path and <1.2s delay." },
  { image: "/images/public-civic-institutions/accessibility-card-multilingual-audio.png", title: "Multilingual Audio Tracks", tag: "Verified", description: "Concurrent secondary language streams switchable inline within player." },
  { image: "/images/public-civic-institutions/accessibility-card-transcripts.png", title: "Interactive Transcripts", tag: "Compliant", description: "Searchable, synchronized live text log supporting dynamic playback jumping." },
  { image: "/images/public-civic-institutions/accessibility-card-audio-description.png", title: "Audio Description", tag: "Optional", description: "Descriptive voice track explaining visual presentation contexts." },
  { image: "/images/public-civic-institutions/accessibility-card-player-controls.png", title: "Custom Player Controls", tag: "WCAG AA", description: "Screen-reader compatible buttons with high contrast and variable sizing." },
  { image: "/images/public-civic-institutions/accessibility-card-keyboard-focus.png", title: "Keyboard & Focus Rules", tag: "WCAG AA", description: "Enables keyboard-only navigation across all interactive states." },
  { image: "/images/public-civic-institutions/accessibility-card-screenreader-labels.png", title: "Screen-Reader Labels", tag: "WCAG AA", description: "Fully-labeled visual layout elements for non-visual information access." },
  { image: "/images/public-civic-institutions/accessibility-card-correction-replay.png", title: "Correction & Replay", tag: "Audited", description: "Post-broadcast correction pipeline to guarantee absolute archival truth." },
];

export default function SectionAccessibility() {
  return (
    <div className="border-b border-[#232b3a] border-solid relative w-full px-6 lg:px-[112px] py-[60px] lg:py-[120px] overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute inset-0 max-w-none object-cover size-full" src={imgSectionBg} />
        <div className="absolute bg-[rgba(10,13,20,0.88)] inset-0" />
      </div>

      <div className="relative z-10 flex flex-col gap-[56px] items-start w-full">
        <div className="flex flex-col gap-[16px] items-start w-full">
          <h2 className="font-sans font-bold text-white text-[28px] lg:text-[38px] leading-[1.6] tracking-[-0.38px] m-0 w-full">
            Plan accessible access before the broadcast begins
          </h2>
          <p className="font-sans font-normal text-[#aab3c4] text-[18px] m-0 w-full">
            Section 508 WCAG 2.2 AA compliance is built directly into our live pipeline, not retrofitted.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] w-full">
          {CARDS.map((card) => (
            <div key={card.title} className="bg-[#10151e] border border-[#232b3a] border-solid rounded-[12px] overflow-hidden flex flex-col gap-[16px] items-start">
              <div className="h-[130px] w-full">
                <img alt={card.title} className="w-full h-full object-cover" src={card.image} />
              </div>
              <div className="flex flex-col gap-[10px] items-start p-[20px] w-full">
                <div className="flex items-center justify-between w-full gap-[8px]">
                  <p className="font-sans font-bold text-white text-[16px] m-0 flex-1 min-w-0">{card.title}</p>
                  <div className="bg-[rgba(16,185,129,0.08)] border border-[rgba(16,185,129,0.2)] border-solid rounded-[4px] px-[12px] py-[4px] shrink-0">
                    <p className="font-mono font-bold text-[#10b981] text-[11px] uppercase m-0 whitespace-nowrap">{card.tag}</p>
                  </div>
                </div>
                <p className="font-sans font-normal text-[#aab3c4] text-[14px] leading-[1.62] m-0 w-full">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#10151e] border-l-4 border-t border-r border-b border-[#4ecdc4] border-solid rounded-[8px] p-[24px] flex flex-col sm:flex-row gap-[20px] items-start sm:items-center justify-between w-full">
          <div className="flex flex-col gap-[4px] items-start flex-1">
            <p className="font-sans font-bold text-white text-[16px] m-0">
              Need help mapping WCAG 2.2 AA rules to your upcoming broadcast?
            </p>
            <p className="font-sans font-normal text-[#aab3c4] text-[14px] leading-[1.62] m-0">
              Access our specialized compliance matrices and public-sector implementation checklists.
            </p>
          </div>
          <button className="bg-gradient-to-r from-[#34d4ca] to-[#4a8cfb] px-[28px] py-[14px] rounded-[8px] border-none cursor-pointer hover:opacity-90 transition-opacity shrink-0">
            <span className="font-sans font-bold text-[#0a0d14] text-[14px] whitespace-nowrap">Accessibility Help Center</span>
          </button>
        </div>
      </div>
    </div>
  );
}
