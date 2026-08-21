import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const featured = {
  category: 'Product & Platform',
  date: 'August 18, 2026',
  titleLines: ['ZoikoStream introduces expanded live', 'captioning across the platform.'],
  descriptionLines: [
    'Live captioning is now available across supported ZoikoStream playback',
    'surfaces, extending accessibility coverage for live and on-demand video',
    'experiences.',
  ],
  image: '/images/zoikostream-newsroom/featured-bg.png',
};

const newsCards = [
  {
    category: 'Live Events',
    date: 'Aug 12, 2026',
    titleLines: ['ZoikoStream expands managed Live', 'Events production partnerships.'],
    descriptionLines: ['New production partnerships extend managed', 'broadcast options for enterprise event teams.'],
    image: '/images/zoikostream-newsroom/card-live-events.png',
  },
  {
    category: 'Company',
    date: 'Aug 6, 2026',
    titleLines: ['ZoikoStream appoints new Chief Trust &', 'Security Officer.'],
    descriptionLines: ["The appointment strengthens the company's", 'security and governance leadership team.'],
    image: '/images/zoikostream-newsroom/card-company-cto.png',
  },
  {
    category: 'Research',
    date: 'Jul 29, 2026',
    titleLines: ['ZoikoStream publishes annual State of', 'Live Video report.'],
    descriptionLines: ['The report reviews audience, reliability and', 'accessibility trends across live video in 2026.'],
    image: '/images/zoikostream-newsroom/card-research-report.png',
  },
  {
    category: 'Product & Platform',
    date: 'Jul 21, 2026',
    titleLines: ['ZoikoStream releases updated SDKs for', 'mobile playback.'],
    descriptionLines: ['Updated SDKs simplify integration for mobile', 'developers building on ZoikoStream.'],
    image: '/images/zoikostream-newsroom/card-sdk-release.png',
  },
  {
    category: 'Partnership',
    date: 'Jul 14, 2026',
    titleLines: ['ZoikoStream and identity partner', 'announce authentication integration.'],
    descriptionLines: ['The integration adds streamlined authenticated', 'access for enterprise viewer experiences.'],
    image: '/images/zoikostream-newsroom/card-auth-partner.png',
  },
  {
    category: 'Company',
    date: 'Jul 8, 2026',
    titleLines: ['ZoikoStream completes annual third-', 'party security assessment.'],
    descriptionLines: ['Findings and current certifications are documented', 'in the ZoikoStream Trust Center.'],
    image: '/images/zoikostream-newsroom/card-security-assessment.png',
  },
];

function NewsBadge() {
  return (
    <p className="font-inter font-bold text-[#3fc9bd] text-[10.5px] tracking-[0.525px] uppercase whitespace-nowrap">
      Official ZoikoStream news
    </p>
  );
}

function CategoryDate({ category, date }: { category: string; date: string }) {
  return (
    <div className="flex gap-[8px] items-center flex-wrap">
      <p className="font-inter font-bold text-[#6a6df0] text-[12px] tracking-[0.36px] uppercase whitespace-nowrap">
        {category}
      </p>
      <span className="font-inter font-normal text-[#9aa1ae] text-[12px]">·</span>
      <p className="font-inter font-normal text-[#9aa1ae] text-[12px] whitespace-nowrap">
        {date}
      </p>
    </div>
  );
}

function Lines({ lines, breakClassName }: { lines: string[]; breakClassName: string }) {
  return (
    <>
      {lines.map((line, index) => (
        <React.Fragment key={line}>
          {line}
          {index !== lines.length - 1 && <br className={breakClassName} />}
        </React.Fragment>
      ))}
    </>
  );
}

export default function LatestNewsSection() {
  return (
    <section className="relative w-full px-6 md:px-12 lg:px-[132px] py-16 lg:py-[89px] flex flex-col gap-[32px] items-start bg-[#f7f9fb]">
      <div className="flex flex-col gap-[16px] items-start w-full">
        <div className="flex gap-[8px] items-center">
          <span className="block bg-[#5b8def] rounded-full size-[6px] shrink-0" />
          <p className="font-inter font-bold text-[#5b8def] text-[12.5px] tracking-[1.25px] uppercase">
            Latest official news
          </p>
        </div>
        <h2 className="font-sora font-bold text-[#32353c] text-[24px] sm:text-[28px] leading-[1.6] tracking-[-0.28px]">
          What ZoikoStream has announced.
        </h2>
      </div>

      <div className="bg-white border border-[#dde2ea] border-solid flex flex-col md:flex-row overflow-hidden rounded-[18px] w-full">
        <div className="relative w-full md:w-1/2 aspect-[589/440.25] bg-[#f1f4f8] shrink-0">
          <Image
            src={featured.image}
            alt={featured.titleLines.join(' ')}
            fill
            className="object-cover pointer-events-none"
            unoptimized
          />
        </div>
        <div className="flex flex-col gap-[12px] items-start p-[24px] md:p-[36px] flex-1 justify-center">
          <NewsBadge />
          <CategoryDate category={featured.category} date={featured.date} />
          <h3 className="font-sora font-bold text-[#32353c] text-[20px] sm:text-[22px] leading-[1.6] tracking-[-0.22px]">
            <Lines lines={featured.titleLines} breakClassName="hidden md:block" />
          </h3>
          <p className="font-inter font-normal text-[#6b7280] text-[14.5px] leading-[1.6]">
            <Lines lines={featured.descriptionLines} breakClassName="hidden md:block" />
          </p>
          <Link
            href="#"
            className="font-inter font-semibold text-[#5b8def] text-[14.5px] hover:underline"
          >
            Read announcement →
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px] w-full">
        {newsCards.map((card) => (
          <div
            key={card.titleLines[0]}
            className="bg-white border border-[#dde2ea] border-solid flex flex-col overflow-hidden rounded-[14px] w-full"
          >
            <div className="relative w-full aspect-[377/235] bg-[#f1f4f8] shrink-0">
              <Image
                src={card.image}
                alt={card.titleLines.join(' ')}
                fill
                className="object-cover pointer-events-none"
                unoptimized
              />
            </div>
            <div className="flex flex-col gap-[12px] items-start p-[20px]">
              <NewsBadge />
              <CategoryDate category={card.category} date={card.date} />
              <h3 className="font-sora font-bold text-[#32353c] text-[16.5px] leading-[1.35] tracking-[-0.165px]">
                <Lines lines={card.titleLines} breakClassName="hidden lg:block" />
              </h3>
              <p className="font-inter font-normal text-[#6b7280] text-[13.5px] leading-[1.6]">
                <Lines lines={card.descriptionLines} breakClassName="hidden lg:block" />
              </p>
              <Link
                href="#"
                className="font-inter font-bold text-[#5b8def] text-[13px] hover:underline"
              >
                Read announcement →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
