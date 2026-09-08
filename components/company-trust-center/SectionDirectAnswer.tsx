import React from 'react';

export default function SectionDirectAnswer() {
  return (
    <div className="border-b border-[#dde2ea] border-solid w-full px-6 lg:px-0 py-[40px] lg:py-[48px]">
      <div className="border-l-2 border-[#3fc9bd] border-solid pl-[24px] flex flex-col gap-[16px] items-start max-w-[820px]">
        <h2 className="font-sora font-bold text-[#32353c] text-[22px] leading-[1.6] tracking-[-0.22px] m-0 w-full">
          What is the ZoikoStream Trust Center?
        </h2>
        <p className="font-inter font-normal text-[#6b7280] text-[14.5px] leading-[1.6] m-0 w-full">
          <span className="hidden lg:inline">
            The ZoikoStream Trust Center is the public hub for security, privacy, compliance, resilience, subprocessors,<br />
            vulnerability disclosure, security advisories and due-diligence evidence. It explains ZoikoStream&apos;s trust posture and<br />
            routes each topic to its governed source. Live production service health remains authoritative in{' '}
            <span className="font-inter font-semibold text-[#5b8def]">System Status</span>,<br />
            while binding privacy and legal terms remain in their dedicated{' '}
            <span className="font-inter font-semibold text-[#5b8def]">notices and agreements</span>.
          </span>
          <span className="lg:hidden">
            The ZoikoStream Trust Center is the public hub for security, privacy, compliance, resilience, subprocessors, vulnerability disclosure, security advisories and due-diligence evidence. It explains ZoikoStream&apos;s trust posture and routes each topic to its governed source. Live production service health remains authoritative in{' '}
            <span className="font-inter font-semibold text-[#5b8def]">System Status</span>, while binding privacy and legal terms remain in their dedicated{' '}
            <span className="font-inter font-semibold text-[#5b8def]">notices and agreements</span>.
          </span>
        </p>
      </div>
    </div>
  );
}
