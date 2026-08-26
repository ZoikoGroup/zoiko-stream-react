import Image from "next/image";
import Link from "next/link";

export default function AudienceAccessSection() {
  const layers = [
    { num: "1", title: "Audience Intent", desc: "Public / Controlled / Mixed", color: "bg-white", textColor: "text-[#0f1b2d]" },
    { num: "2", title: "Identity Source", desc: "SAML, OAuth, or Anonymous token", color: "bg-white", textColor: "text-[#0f1b2d]" },
    { num: "3", title: "Entitlement Reference", desc: "Database crosscheck or ticket ID", color: "bg-white", textColor: "text-[#0f1b2d]" },
    { num: "4", title: "Policy Evaluation", desc: "Geo-fencing & timing rules applied", color: "bg-white", textColor: "text-[#0f1b2d]" },
    { num: "5", title: "Playback Authorization", desc: "Dynamic cryptographic key issued", color: "bg-[#4ecdc4]", textColor: "text-[#0a0d14]", highlight: true },
  ];

  const surfaces = [
    {
      title: "Web Player",
      status: "AVAILABLE",
      statusColor: "text-[#10b981]",
      statusBg: "bg-[#10b981]/10",
      statusBorder: "border-[#10b981]/20",
      desc: "Zero-install compliant streaming player optimized for major browsers.",
      img: "card-web-player.png"
    },
    {
      title: "Mobile App",
      status: "AVAILABLE",
      statusColor: "text-[#10b981]",
      statusBg: "bg-[#10b981]/10",
      statusBorder: "border-[#10b981]/20",
      desc: "iOS and Android SDK integration targets for secure native application playback.",
      img: "card-mobile-app.png"
    },
    {
      title: "Embed / iframe",
      status: "CONTROLLED",
      statusColor: "text-[#4a8cfb]",
      statusBg: "bg-[#4a8cfb]/10",
      statusBorder: "border-[#4a8cfb]/20",
      desc: "Secure container options for validated third-party sites using referrer headers.",
      img: "card-embed.png"
    },
    {
      title: "Custom Integration",
      status: "DEVELOPER SURFACE",
      statusColor: "text-[#9ca3af]",
      statusBg: "bg-[#9ca3af]/10",
      statusBorder: "border-[#9ca3af]/20",
      desc: "Low-level API access for building custom delivery pipelines.",
      img: "card-custom.png"
    }
  ];

  return (
    <section className="border-[#e2e8f0] border-b border-solid flex flex-col gap-[56px] items-start px-[112px] py-[100px] relative w-full overflow-hidden bg-[#0a0d14]">
      <Image
        src="/images/global-event-streaming/audience-access-bg.png"
        alt="Audience Access Background"
        fill
        className="absolute inset-0 object-cover pointer-events-none z-0"
      />
      
      <div className="absolute bottom-[-237px] right-[-120px] w-[520px] h-[520px] z-0">
        <Image
          src="/images/global-event-streaming/bg-blob-2.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>
      <div className="absolute left-[-180px] top-[-54px] w-[420px] h-[420px] z-0">
        <Image
          src="/images/global-event-streaming/bg-blob-1.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>

      <div className="flex flex-col gap-[16px] items-start relative shrink-0 w-full z-10">
        <h2 className="font-['Space_Grotesk'] font-bold leading-[56px] text-[#0f1b2d] text-[44px] tracking-[-1px] w-full">
          The Destination Is Not the Authorization Decision
        </h2>
        <p className="font-['Inter'] font-normal leading-[28px] text-[#4f5e74] text-[18px] w-full max-w-[1000px]">
          An event can be public, controlled, mixed, restricted or undecided. Viewing surfaces and distribution destinations are configured separately from identity, entitlement, policy and playback authorization.
        </p>
      </div>

      <div className="flex gap-[48px] items-start relative shrink-0 w-full z-10">
        {/* Left Panel: Layered Access Model */}
        <div className="bg-[#f8fafc] border-[#e2e8f0] border-[1.5px] border-solid flex flex-col gap-[20px] items-start p-[32px] rounded-[16px] shrink-0 w-[480px]">
          <h3 className="font-['Space_Grotesk'] font-bold leading-normal text-[#0f1b2d] text-[20px] whitespace-nowrap">
            Layered Access Model
          </h3>
          
          <div className="flex flex-col gap-[8px] items-start w-full">
            {layers.map((layer, idx) => (
              <div key={idx} className={`flex gap-[12px] items-center p-[16px] rounded-[8px] w-full ${layer.highlight ? 'bg-[#4ecdc4]/15 border border-[#4ecdc4] border-solid' : 'bg-[#0f1b2d]'}`}>
                <div className={`flex items-center justify-center rounded-full size-[28px] shrink-0 ${layer.color}`}>
                  <span className={`font-['Space_Grotesk'] font-bold leading-normal ${layer.textColor} text-[12px] whitespace-nowrap`}>
                    {layer.num}
                  </span>
                </div>
                <div className="flex flex-col gap-[2px] items-start whitespace-nowrap flex-1">
                  <span className={`font-['Space_Grotesk'] font-bold text-[14px] ${layer.highlight ? 'text-[#0f1b2d]' : 'text-white'}`}>
                    {layer.title}
                  </span>
                  <span className={`font-['Inter'] font-normal text-[12px] ${layer.highlight ? 'text-[#4f5e74]' : 'text-[#aab3c4]'}`}>
                    {layer.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="h-px relative w-full shrink-0">
            <Image
              src="/images/global-event-streaming/line-solid-3.svg"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          <p className="font-['Inter'] font-normal text-[#4f5e74] text-[13px] w-full">
            Viewer outcome resolves as: <span className="font-['Inter'] font-bold text-[#10b981]">Allowed</span> | <span className="font-['Inter'] font-bold text-[#ef4444]">Denied</span> | <span className="font-['Inter'] font-bold text-[#f59e0b]">Verification Required</span>.
          </p>
        </div>

        {/* Right Panel: Viewing Surfaces */}
        <div className="flex flex-1 flex-col gap-[24px] items-start relative">
          <h3 className="font-['Space_Grotesk'] font-bold leading-normal text-[#0f1b2d] text-[20px] whitespace-nowrap">
            Viewing Surfaces & Destinations
          </h3>
          <div className="grid grid-cols-2 gap-[20px] w-full">
            {surfaces.map((surface, idx) => (
              <div key={idx} className="bg-white border-[#e2e8f0] border-[1.5px] border-solid flex flex-col items-start overflow-hidden rounded-[12px] w-full self-start">
                <div className="h-[120px] relative w-full">
                  <Image
                    src={`/images/global-event-streaming/${surface.img}`}
                    alt={surface.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-[10px] items-start p-[20px] w-full">
                  <div className="flex items-center justify-between w-full">
                    <h4 className="font-['Space_Grotesk'] font-bold leading-normal text-[#0f1b2d] text-[16px] whitespace-nowrap">
                      {surface.title}
                    </h4>
                    <div className={`border border-solid flex items-start px-[12px] py-[4px] rounded-[4px] ${surface.statusBg} ${surface.statusBorder}`}>
                      <span className={`font-['IBM_Plex_Mono'] font-bold text-[11px] whitespace-nowrap ${surface.statusColor}`}>
                        {surface.status}
                      </span>
                    </div>
                  </div>
                  <p className="font-['Inter'] font-normal leading-[18px] text-[#4f5e74] text-[13px] w-full">
                    {surface.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-[16px] items-center w-full z-10">
        <Link
          href="/platform-identity-access"
          className="bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] flex items-center px-[28px] py-[14px] rounded-[8px] transition-opacity hover:opacity-90"
        >
          <span className="font-['Space_Grotesk'] font-bold leading-normal text-[#0a0d14] text-[15px] whitespace-nowrap">
            Explore Private Audience Delivery
          </span>
        </Link>
        <Link
          href="/platform-media-operations-overview"
          className="border border-[#4f5e74] border-solid flex items-center justify-center px-[28px] py-[14px] rounded-[8px] transition-colors hover:bg-[#0f1b2d]/5"
        >
          <span className="font-['Space_Grotesk'] font-bold leading-normal text-[#0f1b2d] text-[15px] whitespace-nowrap">
            Review Surface Availability
          </span>
        </Link>
      </div>
    </section>
  );
}
