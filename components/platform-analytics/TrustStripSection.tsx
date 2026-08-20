import Image from 'next/image';
import { Book, Eye, Clock, CheckCircle, Lock, Database } from 'lucide-react';

const trustItems = [
  {
    title: 'Definition',
    desc: 'What the result means',
    icon: Book,
  },
  {
    title: 'Scope',
    desc: 'Media & audience bounds',
    icon: Eye,
  },
  {
    title: 'Freshness',
    desc: 'Last source update',
    icon: Clock,
  },
  {
    title: 'Quality',
    desc: 'Gaps & validation',
    icon: CheckCircle,
  },
  {
    title: 'Permissions',
    desc: 'Who may see & export',
    icon: Lock,
  },
  {
    title: 'Evidence',
    desc: 'Source review trail',
    icon: Database,
  },
];

export default function TrustStripSection() {
  return (
    <section className="bg-white border border-[#e2e8f0] border-solid flex flex-col items-start justify-center px-6 md:px-12 xl:px-[112px] py-8 xl:py-[40px] xl:h-[177px] relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/platform-analytics/trust-strip-bg.png"
          alt=""
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      <div className="flex flex-col md:flex-row flex-wrap xl:flex-nowrap items-start md:items-center justify-between gap-6 xl:gap-0 max-w-[1216px] mx-auto relative z-10 w-full">
        {trustItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="flex gap-[12px] items-center shrink-0 w-full sm:w-[calc(50%-12px)] xl:w-auto"
            >
              {index !== 0 && (
                <div className="hidden xl:block bg-[#e2e8f0] h-[40px] w-px shrink-0" />
              )}
              <div className="bg-[#e0f2fe] flex items-center justify-center rounded-[8px] shrink-0 p-[8px] size-[32px]">
                <Icon className="text-[#4a8cfb] size-[16px]" />
              </div>
              <div className="flex flex-col gap-[2px] items-start leading-[normal] whitespace-nowrap">
                <p className="font-spaceGrotesk font-bold text-[#0a0d13] text-[14px]">
                  {item.title}
                </p>
                <p className="font-spaceGrotesk font-normal text-[#4f5e74] text-[12px]">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
