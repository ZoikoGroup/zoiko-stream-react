import Image from 'next/image';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const stages = [
  { stage: 'STAGE 01', title: 'Contribute', desc: 'Confirm source/contributor handoff' },
  { stage: 'STAGE 02', title: 'Ingest', desc: 'Confirm accepted connection/intake' },
  { stage: 'STAGE 03', title: 'Produce', desc: 'Coordinate preparation, broadcast ops, roles' },
  { stage: 'STAGE 04', title: 'Secure', desc: 'Confirm access/security policy' },
  { stage: 'STAGE 05', title: 'Deliver', desc: 'Observe approved delivery state' },
  { stage: 'STAGE 06', title: 'Understand', desc: 'Use monitoring/analytics evidence' },
  { stage: 'STAGE 07', title: 'Preserve', desc: 'Coordinate recording/evidence retention' },
];

export default function MapsToPlatformSection() {
  return (
    <section
      className="relative w-full px-4 bg-white sm:px-8 lg:px-28 py-16 sm:py-20 lg:py-24 border-b border-gray-200 flex flex-col gap-14 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg147}
          alt="Media Lifecycle Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 " />
      </div>
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="relative z-10 flex flex-col gap-3">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold leading-tight font-['Space_Grotesk']">
          How operations maps to the platform lifecycle
        </h2>
        <p className="text-slate-500 text-lg font-normal leading-7 font-['Space_Grotesk']">
          Connect operations to every stage of the media journey.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {stages.map((item) => (
          <div
            key={item.stage}
            className="p-5 bg-white rounded-2xl border border-gray-200 flex flex-col gap-3 shadow-sm"
          >
            <span className="text-teal-400 text-xs font-bold font-['Space_Grotesk']">
              {item.stage}
            </span>
            <p className="text-slate-900 text-base font-bold font-['Space_Grotesk']">
              {item.title}
            </p>
            <p className="text-slate-500 text-xs font-normal font-['Space_Grotesk'] leading-4">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
