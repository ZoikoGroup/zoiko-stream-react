import Image from "next/image";
import Link from "next/link";

interface GuideRow {
  requirement: string;
  destination: string;
  href: string;
}

const tableData: GuideRow[] = [
  {
    requirement: "Need to decide whether to record live streams safely",
    destination: "Stay on this page / Event Brief Setup",
    href: "/planning-and-briefing",
  },
  {
    requirement: "Need automated dual-WAN active recording pipeline",
    destination: "Platform Recording and Replay Module",
    href: "/platform-recording-replay",
  },
  {
    requirement: "Need strict SSO-gated portals with access expiry rules",
    destination: "Secure Audience Access Controls",
    href: "/secure-audience-access",
  },
  {
    requirement: "Need completely isolated stream tunnels for corporate secrecy",
    destination: "Private Streaming Framework",
    href: "/private-streaming",
  },
  {
    requirement: "Need localized audio tracks and verified replay captions",
    destination: "Captions and Languages Platform",
    href: "/captions-and-languages",
  },
  {
    requirement: "Need white-glove technical operators running switcher, cues",
    destination: "Managed Live Event Streaming",
    href: "/managed-live-event-streaming",
  },
  {
    requirement: "Need incident monitoring and active switch lock controls",
    destination: "Support & Real-time Console Route",
    href: "/faqs-and-support",
  }
];

export default function DecisionGuideSection() {
  return (
    <section className="flex flex-col gap-10 xl:gap-[56px] items-start px-6 md:px-12 xl:px-[112px] py-16 xl:py-[100px] relative w-full overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <Image 
          src="/images/recording-replay-archive/decision-guide-bg.png" 
          alt="Studio Background" 
          fill 
          className="object-cover" 
        />
        <div className="absolute bg-[rgba(11,15,26,0.78)] inset-0" />
      </div>

      <div className="flex flex-col gap-4 items-start relative z-10 w-full">
        <h2 className="font-spaceGrotesk font-bold leading-[1.2] xl:leading-[60.8px] text-[#f9fafb] text-3xl md:text-[37.9px] tracking-[-0.38px]">
          Find the right path for your event.
        </h2>
        <p className="font-spaceGrotesk leading-[28.8px] text-[#a7b0c0] text-base md:text-[18px] max-w-[800px]">
          We match your high-consequence requirements to specialized ZoikoStream platform modules.
        </p>
      </div>

      <div className="border border-[#2a3440] flex flex-col items-start overflow-clip relative rounded-[12px] w-full z-10">
        <div className="bg-[#111827] border-[#2a3440] border-b flex gap-4 items-start p-4 xl:p-[16px] w-full text-[#a7b0c0] text-[11px] font-mono font-bold tracking-wider uppercase">
          <p className="flex-1 min-w-0">
            YOUR PRODUCTION REQUIREMENT
          </p>
          <p className="w-full max-w-[400px] hidden md:block">
            RECOMMENDED PLATFORM DESTINATION
          </p>
        </div>
        
        {tableData.map((row, index) => (
          <div 
            key={index} 
            className={`
              border-[#2a3440] flex flex-col md:flex-row gap-2 md:gap-4 md:items-center p-4 xl:p-[16px] w-full
              ${index === tableData.length - 1 ? 'border-b-0' : 'border-b'}
              ${index % 2 === 0 ? 'bg-[#0f172a]' : 'bg-[#111827]'}
            `}
          >
            <p className="flex-1 font-spaceGrotesk font-bold text-[#f9fafb] text-[14.5px]">
              {row.requirement}
            </p>
            <Link 
              href={row.href} 
              className="group flex gap-2 items-center text-[#60a5fa] text-[14px] w-full max-w-[400px] transition-colors hover:text-blue-300"
            >
              <p className="font-spaceGrotesk font-bold">
                {row.destination}
              </p>
              <span className="font-mono transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
