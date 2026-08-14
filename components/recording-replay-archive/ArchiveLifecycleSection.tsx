import Image from "next/image";

interface LifecycleCard {
  title: string;
  description: string;
}

const leftColumn: LifecycleCard[] = [
  {
    title: 'Archive request',
    description:
      'We store recordings only when backed by explicit legal and organizational policies. Replays can be unpublished while long-term secure archival remains intact.',
  },
  {
    title: 'Retention source',
    description:
      'Define the source of truth for retention: policy, legal hold, or organizational record requirements.',
  },
  {
    title: 'Retention duration',
    description:
      'Set definitive start and end windows with strict expiry enforcement. Our systems execute automated purge or cold storage handoff policy blocks.',
  },
  {
    title: 'Archive states',
    description: 'Archive can be requested, pending, locked, or purged. Each state is auditable and role-gated.',
  },
];

const rightColumn: LifecycleCard[] = [
  {
    title: 'Legal hold',
    description: 'Legal holds suspend automated purge and export rules until the hold is explicitly lifted.',
  },
  {
    title: 'Export/handoff',
    description: 'Secure handoff to cold storage or external compliance vaults is executed with signed audit trails.',
  },
  {
    title: 'Deletion process',
    description:
      'Deletion is permanent. High-impact purging requires dual-operator validation, cryptographically signed consent, and legal hold checks before asset erasure.',
  },
  {
    title: 'Unpublish vs delete',
    description:
      'Unpublish removes the asset from public portals while keeping the archive intact. Delete removes the asset permanently.',
  },
];

function LifecycleCardItem({ card }: { card: LifecycleCard }) {
  return (
    <div className="bg-[rgba(15,23,42,0.8)] border border-[rgba(255,255,255,0.1)] flex flex-col gap-4 items-start p-7 relative rounded-xl shadow-[0px_10px_24px_0px_rgba(0,0,0,0.4)] w-full transition-transform hover:-translate-y-1">
      <p className="font-spaceGrotesk font-bold leading-[normal] text-[#f9fafb] text-[18px]">
        {card.title}
      </p>
      <p className="font-spaceGrotesk leading-[22px] text-[#cbd5e1] text-[14px] w-full">
        {card.description}
      </p>
    </div>
  );
}

export default function ArchiveLifecycleSection() {
  return (
    <section className="border border-[rgba(255,255,255,0.1)] flex flex-col gap-10 xl:gap-[56px] items-start px-6 md:px-12 xl:px-[112px] py-16 xl:py-[100px] relative w-full overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <img
            alt="Server Background"
            src="/images/recording-replay-archive/archive-lifecycle-bg.png"
            className="absolute h-[172.72%] left-[-16.01%] max-w-none top-[-34.68%] w-[124.86%] object-cover"
          />
        </div>
        <div className="absolute bg-[rgba(11,15,26,0.54)] inset-0" />
      </div>

      <div className="flex flex-col gap-4 items-start relative z-10 w-full">
        <h2 className="font-spaceGrotesk font-bold leading-[1.2] xl:leading-[60.8px] text-[#f9fafb] text-3xl md:text-[37.9px] tracking-[-0.38px]">
          Archive is governance, not marketing.
        </h2>
        <p className="font-spaceGrotesk leading-[28.8px] text-[#cbd5e1] text-base md:text-[18px] max-w-[800px]">
          Distinguish clearly between temporary replay availability and long-term secure archival preservation. Deletion is a high-impact, role-gated action requiring active validation.
        </p>
      </div>

      <div className="flex flex-col xl:flex-row gap-8 xl:gap-[48px] items-start relative z-10 w-full">
        <div className="flex flex-1 flex-col gap-6 items-start w-full">
          {leftColumn.map((card) => (
            <LifecycleCardItem key={card.title} card={card} />
          ))}
        </div>
        <div className="flex flex-1 flex-col gap-6 items-start w-full">
          {rightColumn.map((card) => (
            <LifecycleCardItem key={card.title} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
