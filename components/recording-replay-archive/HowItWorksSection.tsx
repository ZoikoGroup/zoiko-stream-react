interface Stage {
  number: string;
  title: string;
  description: string;
}

const stages: Stage[] = [
  { number: '01', title: 'Decide Intent', description: 'Post-event intent signed off' },
  { number: '02', title: 'Confirm Authority', description: 'Authority & privacy checked' },
  { number: '03', title: 'Define Scope', description: 'AV ingest capture targets mapped' },
  { number: '04', title: 'Prepare & Verify', description: 'Preflight SLA verification ready' },
  { number: '05', title: 'Capture Live', description: 'Dual-WAN active stream capture' },
  { number: '06', title: 'Resolve Completion', description: 'Completion stats verified' },
  { number: '07', title: 'Handoff Asset', description: 'Raw secure recording built' },
  { number: '08', title: 'Prepare Replay', description: 'Access gating initialized' },
  { number: '09', title: 'Review & Publish', description: 'Owner signoff & live access' },
  { number: '10', title: 'Operate Replay', description: 'SAML portal directory live' },
  { number: '11', title: 'Archive/Dispose', description: 'Scheduled purge or backup lock' },
];

export default function HowItWorksSection() {
  return (
    <section
      className="relative w-full flex flex-col gap-14 items-start py-16 sm:py-20 lg:py-25 px-4 sm:px-8 lg:px-28 bg-white bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/images/recording-replay-archive/how-it-works/section-bg.png')`,
      }}
    >
      <div className="flex flex-col gap-4 items-start w-full">
        <h2 className="font-bold text-[#171b22] text-3xl sm:text-[37.9px] leading-[1.2] sm:leading-[60.8px] tracking-[-0.38px]">
          How it works
        </h2>
        <p className="text-[#707a8c] text-base sm:text-[18px] leading-[1.4] sm:leading-[28.8px] max-w-[800px]">
          The complete, auditable recording lifecycle pipeline. We trace the asset from initial intent to final secure archive.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
        {stages.map((stage) => (
          <div
            key={stage.number}
            className="flex items-center gap-3.5 pl-6 pr-7 py-4 rounded-full bg-[#eaecf0] shadow-[5px_5px_12px_0px_rgba(171,181,199,0.5),-5px_-5px_10px_0px_rgba(255,255,255,0.9),inset_3px_3px_6px_0px_rgba(171,181,199,0.35),inset_-3px_-3px_6px_0px_rgba(255,255,255,0.8)]"
          >
            <div className="flex items-center justify-center shrink-0 size-8 rounded-full bg-[#4c86ff] drop-shadow-[0px_3px_4px_rgba(76,134,255,0.4)]">
              <p className="font-mono font-bold text-white text-[10px]">{stage.number}</p>
            </div>
            <div className="flex flex-col gap-0.5 items-start min-w-0">
              <p className="font-mono font-bold text-[#4c86ff] text-xs whitespace-nowrap">{stage.title}</p>
              <p className="text-[#707a8c] text-[11px] whitespace-nowrap">{stage.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
