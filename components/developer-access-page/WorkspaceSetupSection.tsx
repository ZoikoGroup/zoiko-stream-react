import Image from 'next/image';
import React from 'react';

const REQUIREMENTS = [
  'Workspace names must be unique within your organization.',
  'Data minimization: only requested access scopes will be initialized.',
  'SSO propagation: security filters sync immediately with root controls.',
];

export default function WorkspaceSetupSection() {
  return (
    <section className="relative w-full overflow-hidden border-b border-solid border-[#e1e6eb] bg-white px-6 py-24 md:px-12 xl:px-[112px] xl:py-[120px]">
      {/* Background image */}
      <Image
        src="/images/developer-access-page/workspace-setup/section-bg.png"
        alt=""
        fill
        className="pointer-events-none object-cover mix-blend-multiply opacity-[0.8]"
      />
      
      {/* Background Blobs */}
      <div className="pointer-events-none absolute left-[-150px] top-[-99px] size-[420px]">
        <Image src="/images/developer-access-page/workspace-setup/bg-blob-1.svg" alt="" fill className="object-contain" />
      </div>
      <div className="pointer-events-none absolute bottom-[-204px] right-[-147px] size-[520px]">
        <Image src="/images/developer-access-page/workspace-setup/bg-blob-2.svg" alt="" fill className="object-contain" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col items-center gap-[48px] lg:flex-row">
        <div className="flex w-full flex-1 flex-col items-start gap-[32px]">
          <h2 className="w-full text-[30px] font-bold leading-[1.2] text-[#0f1b2d] md:text-[38px] md:leading-[48px]">
            Set up your developer workspace
          </h2>
          <p className="w-full font-inter text-[16px] font-normal leading-[26px] text-[#4f5e74]">
            A developer workspace is your working context — not a separate legal account or billing entity.
          </p>

          <div className="flex w-full flex-col items-start gap-[16px]">
            {REQUIREMENTS.map((req, idx) => (
              <div key={idx} className="flex w-full items-start gap-[12px]">
                <div className="relative mt-1 size-[18px] shrink-0">
                  <Image
                    src="/images/developer-access-page/workspace-setup/icon-check.svg"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="flex-1 font-inter text-[14px] font-normal leading-[22px] text-[#4f5e74]">
                  {req}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full flex-col items-start gap-[24px] rounded-[16px] border-[1.5px] border-solid border-[#e1e6eb] bg-[#f8fafc] p-[32px] sm:p-[40px] lg:w-[480px] lg:shrink-0">
          <h3 className="text-[20px] font-bold leading-normal text-[#0f1b2d]">
            Create New Workspace
          </h3>

          <div className="flex w-full flex-col items-start gap-[20px]">
            <div className="flex w-full flex-col items-start gap-[8px]">
              <label className="text-[13px] font-bold text-[#0f1b2d]">WORKSPACE NAME</label>
              <div className="flex w-full items-start rounded-[8px] border border-solid border-[#e1e6eb] bg-white p-[12px]">
                <input
                  type="text"
                  placeholder="e.g., api-integration-staging"
                  className="w-full bg-transparent font-inter text-[14px] text-[#4f5e74] outline-none placeholder:text-[#4f5e74]"
                />
              </div>
            </div>

            <div className="flex w-full flex-col items-start gap-[8px]">
              <label className="text-[13px] font-bold text-[#0f1b2d]">
                PRIMARY INTENDED PURPOSE
              </label>
              <div className="flex w-full cursor-pointer items-center justify-between rounded-[8px] border border-solid border-[#e1e6eb] bg-white p-[12px]">
                <p className="font-inter text-[14px] text-[#4f5e74]">Select workspace purpose</p>
                <div className="relative size-[14px]">
                  <Image
                    src="/images/developer-access-page/workspace-setup/icon-chevron-down.svg"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            type="button"
            className="flex w-full items-center justify-center whitespace-nowrap rounded-[8px] bg-gradient-to-b from-[#34d4ca] to-[#4a8cfb] px-[28px] py-[14px] text-[15px] font-bold text-[#0a0f1a] transition-opacity hover:opacity-90"
          >
            Create workspace
          </button>
        </div>
      </div>
    </section>
  );
}
