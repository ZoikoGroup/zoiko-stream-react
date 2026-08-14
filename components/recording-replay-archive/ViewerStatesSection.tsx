import Image from "next/image";

interface ViewerState {
  title: string;
  description: string;
  dotIcon: string;
}

const states: ViewerState[] = [
  {
    title: "Replay Available",
    description: "Secure player loaded, captions processed, access validated. Stream ready to run.",
    dotIcon: "/images/recording-replay-archive/dot-teal.svg",
  },
  {
    title: "Processing",
    description: "Raw capture received. Transcoding and caption pipelines running.",
    dotIcon: "/images/recording-replay-archive/dot-yellow.svg",
  },
  {
    title: "Scheduled Replay",
    description: "Replay pipeline verified but locked. Scheduled launch time pending.",
    dotIcon: "/images/recording-replay-archive/dot-blue.svg",
  },
  {
    title: "No Replay Intended",
    description: "Event planned as live-only. No capture artifact retained on system.",
    dotIcon: "/images/recording-replay-archive/dot-gray.svg",
  },
  {
    title: "Restricted Access",
    description: "SSO/Identity challenge required to resolve viewing authorization.",
    dotIcon: "/images/recording-replay-archive/dot-red.svg",
  },
  {
    title: "Expired Window",
    description: "The configured viewing window has closed. Asset retired to archive.",
    dotIcon: "/images/recording-replay-archive/dot-red.svg",
  },
  {
    title: "Unpublished/Removed",
    description: "Temporarily removed from portal by operator action.",
    dotIcon: "/images/recording-replay-archive/dot-gray.svg",
  },
  {
    title: "Playback Error",
    description: "CDN delivery mismatch or corrupted index segment. Ingest support alerted.",
    dotIcon: "/images/recording-replay-archive/dot-red.svg",
  }
];

export default function ViewerStatesSection() {
  return (
    <section className="bg-white flex flex-col gap-10 xl:gap-[56px] items-start px-6 md:px-12 xl:px-[112px] py-16 xl:py-[100px] relative w-full overflow-hidden">
      {/* Background Pattern */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <Image 
          src="/images/recording-replay-archive/viewer-states-bg.png" 
          alt="Topographic Background" 
          fill 
          className="object-cover opacity-60" 
        />
      </div>

      <div className="flex flex-col gap-4 items-start relative z-10 w-full">
        <h2 className="font-spaceGrotesk font-bold leading-[1.2] xl:leading-[60.8px] text-[#111827] text-3xl md:text-[37.9px] tracking-[-0.38px]">
          Every viewer deserves a truthful answer.
        </h2>
        <p className="font-spaceGrotesk leading-[28.8px] text-[#4b5563] text-base md:text-[18px] max-w-[760px]">
          Do not frustrate users with broken players or endless spinners. Provide precise, actionable states reflecting real backend conditions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10 w-full">
        {states.map((state, index) => (
          <div 
            key={index} 
            className="bg-white drop-shadow-[0px_1px_2px_rgba(0,0,0,0.04),0px_4px_12px_rgba(0,0,0,0.07)] flex flex-col gap-3.5 items-start p-6 xl:p-[32px] rounded-3xl w-full transition-transform hover:-translate-y-1"
          >
            <div className="flex items-center justify-between relative w-full">
              <h3 className="font-spaceGrotesk font-bold leading-[normal] text-[#111827] text-[17px]">
                {state.title}
              </h3>
              <div className="relative shrink-0 size-3">
                <Image src={state.dotIcon} alt="Status indicator" fill />
              </div>
            </div>
            <p className="font-spaceGrotesk leading-[22px] text-[#6b7280] text-sm w-full">
              {state.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
