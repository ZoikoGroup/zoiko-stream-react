import React from 'react';
import Link from 'next/link';

const coverageItems = [
  {
    publisher: 'StreamTech Weekly',
    date: 'Aug 15, 2026',
    titleLines: ['How ZoikoStream is approaching live', 'accessibility at scale.'],
    descriptionLines: ["A look at ZoikoStream's expanding caption and", 'language tooling for live broadcasts.'],
    linkLabel: 'Read at StreamTech Weekly ↗',
  },
  {
    publisher: 'Broadcast Business Journal',
    date: 'Aug 9, 2026',
    titleLines: ['Enterprise video platforms compete on', 'reliability, not just reach.'],
    descriptionLines: ["Industry roundup referencing ZoikoStream's recent", 'production partnership news.'],
    linkLabel: 'Read at Broadcast Business Journal ↗',
  },
  {
    publisher: 'The Video Infrastructure Report',
    date: 'Jul 30, 2026',
    titleLines: ['What the latest live video research reveals', 'about audience trust.'],
    descriptionLines: ['Coverage of industry research trends, including', "ZoikoStream's annual report."],
    linkLabel: 'Read at The Video Infrastructure Report ↗',
  },
];

function Lines({ lines }: { lines: string[] }) {
  return (
    <>
      {lines.map((line, index) => (
        <React.Fragment key={line}>
          {line}
          {index !== lines.length - 1 && <br className="hidden lg:block" />}
        </React.Fragment>
      ))}
    </>
  );
}

export default function MediaCoverageSection() {
  return (
    <section className="relative w-full px-6 md:px-12 lg:px-[132px] py-16 lg:py-[89px] flex flex-col gap-[32px] items-start bg-[#f7f9fb]">
      <div className="flex flex-col gap-[16px] items-start w-full">
        <div className="flex gap-[8px] items-center">
          <span className="block bg-[#5b8def] rounded-full size-[6px] shrink-0" />
          <p className="font-inter font-bold text-[#5b8def] text-[12.5px] tracking-[1.25px] uppercase">
            In the news
          </p>
        </div>
        <h2 className="font-sora font-bold text-[#32353c] text-[24px] sm:text-[28px] leading-[1.6] tracking-[-0.28px]">
          Independent media coverage.
        </h2>
        <p className="font-inter font-normal text-[#6b7280] text-[15px] leading-[1.6] max-w-[820px]">
          Selected independent coverage about ZoikoStream and the wider Zoiko organization. Publication
          <br className="hidden lg:block" />
          views are their own.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] w-full">
        {coverageItems.map((item) => (
          <div
            key={item.publisher}
            className="bg-white border border-[#dde2ea] border-solid flex flex-col gap-[16px] items-start p-[22px] rounded-[14px] w-full"
          >
            <div className="border border-[#dde2ea] border-solid rounded-[100px] px-[9px] py-[6px]">
              <p className="font-inter font-bold text-[#9aa1ae] text-[10.5px] tracking-[0.525px] uppercase whitespace-nowrap">
                Independent coverage
              </p>
            </div>

            <div className="flex flex-col gap-[4px] items-start w-full">
              <p className="font-inter font-bold text-[#32353c] text-[13.5px]">
                {item.publisher}
              </p>
              <p className="font-inter font-normal text-[#9aa1ae] text-[12px]">
                {item.date}
              </p>
            </div>

            <h3 className="font-sora font-bold text-[#32353c] text-[15.5px] leading-[1.4] tracking-[-0.155px]">
              <Lines lines={item.titleLines} />
            </h3>

            <p className="font-inter font-normal text-[#6b7280] text-[13px] leading-[1.6]">
              <Lines lines={item.descriptionLines} />
            </p>

            <Link
              href="#"
              className="font-inter font-bold text-[#5b8def] text-[13px] hover:underline"
            >
              {item.linkLabel}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
