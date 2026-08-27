import Image from 'next/image';
import React from 'react';

const METHODS = [
  {
    img: 'method-0.png',
    title: 'Join mechanism verified',
    desc: 'Use approved organization pathways to register workspace context.',
  },
  {
    img: 'method-1.png',
    title: 'Invitation pending',
    desc: 'Wait for manual workspace manager review and approval validation.',
  },
  {
    img: 'method-2.png',
    title: 'Expired or revoked invitation',
    desc: 'Request a fresh workspace membership key from active owner.',
  },
  {
    img: 'method-3.png',
    title: 'Wrong account',
    desc: 'Switch your currently authenticated developer SSO identity context.',
  },
];

export default function JoinWorkspaceSection() {
  return (
    <section className="relative w-full border-b border-solid border-[#232b3a] px-6 py-24 md:px-12 xl:px-[112px] xl:py-[120px]">
      {/* Background image + overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <Image
          src="/images/developer-access-page/join-workspace/section-bg.png"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(10,13,20,0.82)]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-start gap-[56px]">
        <div className="flex w-full flex-col items-start gap-[16px]">
          <h2 className="w-full text-[30px] font-bold leading-[1.2] text-white md:text-[38px] md:leading-[48px]">
            Join or rejoin an existing workspace
          </h2>
          <p className="w-full font-inter text-[16px] font-normal leading-[28px] text-[#aab3c4] md:text-[18px]">
            Conditional flows based on your workspace relationship status.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-[24px] lg:grid-cols-2">
          {METHODS.map((method) => (
            <div
              key={method.title}
              className="flex items-center gap-[20px] overflow-hidden rounded-[12px] border-[1.5px] border-solid border-[#232b3a] bg-[rgba(16,21,30,0.8)] p-[24px]"
            >
              <div className="relative size-[80px] shrink-0 overflow-hidden rounded-[8px] sm:size-[120px]">
                <Image
                  src={`/images/developer-access-page/join-workspace/${method.img}`}
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col items-start gap-[8px]">
                <h3 className="w-full text-[16px] font-bold leading-normal text-white sm:text-[18px]">
                  {method.title}
                </h3>
                <p className="w-full font-inter text-[13px] font-normal leading-[22px] text-[#aab3c4] sm:text-[14px]">
                  {method.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
