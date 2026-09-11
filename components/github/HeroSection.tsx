import React from 'react';
import Link from 'next/link';
import { GithubIcon, RepoIcon, ShieldIcon } from './icons';

const imgBg = "/images/github/hero-background.webp";

const repositories = [
  { name: 'zoikostream/platform-sdk', state: 'Official', tone: 'bg-[#34d399]' },
  { name: 'zoikostream/code-samples', state: 'Review required', tone: 'bg-[#fcd34d]' },
  { name: 'community/integration-kit', state: 'Community', tone: 'bg-[#4c86ff]' },
];

export default function HeroSection() {
  return (
    <section className="bg-[#0a0d13] flex flex-col items-center px-5 sm:px-6 lg:px-12 xl:px-[112px] py-16 sm:py-20 lg:pt-[80px] lg:pb-[96px] lg:min-h-[740px] justify-center relative w-full overflow-hidden" data-name="Hero-Section">
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full brightness-[1.3]" src={imgBg} />
        <div className="absolute bg-[rgba(10,13,19,0.35)] inset-0" />
      </div>

      <div className="flex flex-col xl:flex-row gap-12 xl:gap-16 items-start xl:items-center w-full max-w-[1216px] relative z-10">
        <div className="flex flex-col gap-[28px] lg:gap-[32px] items-start flex-1 min-w-0 w-full">
          <div className="border border-[#00d4aa] border-solid flex items-center px-[12px] py-[6px] rounded-[100px]">
            <span className="font-sans font-bold text-[#00d4aa] text-[12px] tracking-[0.6px] uppercase">GitHub destination</span>
          </div>

          <h1 className="[word-break:break-word] font-sans font-bold text-white text-[36px] sm:text-[48px] lg:text-[60px] leading-[1.08] lg:leading-[62.64px] w-full">
            The verified path from ZoikoStream to GitHub.
          </h1>

          <p className="font-inter font-normal text-[#94a3b8] text-[16px] sm:text-[18px] leading-[28px] w-full max-w-[660px]">
            Find official repositories, understand ownership and lifecycle status, and continue to external code with
            clear trust signals—without invented claims or guessed destinations.
          </p>

          <div className="flex flex-wrap gap-[16px] items-center">
            <Link
              href="/developers"
              className="bg-gradient-to-b from-[#00d4aa] to-[#4c86ff] flex items-center justify-center px-[20px] py-[12px] rounded-[8px] transition-opacity hover:opacity-90"
            >
              <span className="font-sans font-bold text-[#030712] text-[14px]">Start with Developers</span>
            </Link>
            <Link
              href="#trust-safety"
              className="border border-[#f8fafc] border-solid flex items-center justify-center px-[20px] py-[12px] rounded-[8px] transition-colors hover:bg-white/10"
            >
              <span className="font-sans font-bold text-white text-[14px]">Review governance</span>
            </Link>
          </div>
        </div>

        <div className="bg-[rgba(24,24,27,0.9)] border-[1.5px] border-[#1f2937] border-solid flex flex-col gap-[16px] items-start p-[24px] sm:p-[32px] rounded-[16px] shadow-[0px_12px_32px_0px_rgba(15,27,45,0.08)] w-full max-w-[560px] xl:max-w-none xl:w-[480px] shrink-0" data-name="Registry-Card">
          <div className="flex justify-between items-center gap-4 w-full">
            <div className="flex flex-col gap-[6px] items-start">
              <span className="font-sans font-bold text-[#2dd4bf] text-[12px] tracking-[0.6px] uppercase">Destination registry</span>
              <span className="font-sans font-bold text-white text-[20px]">Repository trust states</span>
            </div>
            <GithubIcon className="size-[28px] text-white shrink-0" />
          </div>

          <div className="flex flex-col w-full">
            {repositories.map((repo) => (
              <div key={repo.name} className="border-b border-[#1f2937] border-solid flex flex-wrap gap-2 justify-between items-center py-[12px] w-full">
                <div className="flex gap-[10px] items-center min-w-0">
                  <RepoIcon className="size-[16px] text-[#94a3b8] shrink-0" />
                  <span className="font-sans font-medium text-white text-[14px] break-all">{repo.name}</span>
                </div>
                <span className={`${repo.tone} font-sans font-bold text-white text-[12px] px-[10px] py-[5px] rounded-[999px] shrink-0`}>
                  {repo.state}
                </span>
              </div>
            ))}
          </div>

          <div className="bg-[#0f172a] flex gap-[10px] items-start p-[14px] rounded-[8px] w-full">
            <ShieldIcon className="size-[16px] text-[#2dd4bf] shrink-0 mt-[2px]" />
            <p className="font-inter font-normal text-[#94a3b8] text-[12px] leading-[20px] flex-1">
              Every handoff is attributable, current, and subject to an explicit approval gate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
