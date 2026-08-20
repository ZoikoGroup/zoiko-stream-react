import Image from 'next/image';
import { Globe, Play, Activity, Video, MessageSquare, Shield } from 'lucide-react';

const jobs = [
  {
    title: 'Audience delivery',
    desc: 'Did approved media reach the intended delivery context?',
    icon: Globe,
  },
  {
    title: 'Playback experience',
    desc: 'How did playback behave across approved environments?',
    icon: Play,
  },
  {
    title: 'Live workflow',
    desc: 'What changed during a live workflow?',
    icon: Activity,
  },
  {
    title: 'Recording & replay',
    desc: 'What happened after the live moment?',
    icon: Video,
  },
  {
    title: 'Accessibility & language',
    desc: 'How are caption/language/accessibility experiences performing?',
    icon: MessageSquare,
  },
  {
    title: 'Enterprise review',
    desc: 'What needs review across scope, policy, quality or evidence?',
    icon: Shield,
  },
];

export default function JobSelectorSection() {
  return (
    <section className="bg-[#0a0f1a] border-[#1e293b] border-b border-solid flex flex-col gap-8 xl:gap-[56px] items-start px-6 md:px-12 xl:px-[112px] py-16 xl:py-[100px] relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/images/platform-analytics/job-selector-bg.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute bg-[rgba(10,15,26,0.73)] inset-0" />
      </div>

      <div className="flex flex-col gap-8 xl:gap-[56px] items-start max-w-[1216px] mx-auto relative z-10 w-full">
      {/* Section Header */}
      <div className="flex flex-col gap-3 xl:gap-[12px] items-start relative shrink-0 w-full">
        <h2 className="font-spaceGrotesk font-bold leading-[1.3] xl:leading-[60.8px] relative shrink-0 text-[28px] xl:text-[37.9px] text-white tracking-[-0.38px] w-full">
          Choose a question, not a chart
        </h2>
        <p className="font-spaceGrotesk font-normal leading-relaxed xl:leading-[28.8px] relative shrink-0 text-[#aab3c4] text-base xl:text-[18px] w-full">
          Start with what you need to understand. Visualization appears only after object, definition, time basis, source and quality are established.
        </p>
      </div>

      {/* Job Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-x-[24px] xl:gap-y-[33px] relative shrink-0 w-full">
        {jobs.map((job) => {
          const Icon = job.icon;
          return (
            <div
              key={job.title}
              className="bg-[#101626] border border-[#1e293b] border-solid flex flex-col gap-4 xl:gap-[16px] items-start p-6 xl:p-[24px] relative rounded-[12px] shrink-0"
            >
              <div className="bg-[#1e293b] flex items-center justify-center p-[10px] relative rounded-[8px] shrink-0 size-[40px]">
                <Icon className="text-[#34d4ca] size-[20px]" />
              </div>
              <div className="flex flex-col gap-[6px] items-start relative shrink-0 w-full">
                <p className="font-spaceGrotesk font-bold leading-[normal] relative shrink-0 text-[18px] text-white">
                  {job.title}
                </p>
                <p className="font-spaceGrotesk font-normal leading-[1.4] relative shrink-0 text-[#aab3c4] text-[13px] w-full">
                  {job.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </section>
  );
}
