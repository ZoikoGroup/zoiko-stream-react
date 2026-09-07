import React from 'react';
import Link from 'next/link';

const imgBg = "/images/responsible-disclosure/advisories-section.png";
const imgExternalLink = "/images/responsible-disclosure/external-link.svg";

const securityTxt = [
  "Contact: secure@zoikostream.com",
  "Encryption: https://zoikostream.com/pgp-key.asc",
  "Preferred-Languages: en",
  "Canonical: https://zoikostream.com/.well-known/security.txt",
];

export default function AdvisoriesSecurityTxtSection() {
  return (
    <div className="bg-white border-b border-t border-[#e2e8f0] border-solid flex flex-col items-center px-5 sm:px-6 lg:px-[112px] py-12 sm:py-16 lg:py-[100px] relative w-full overflow-hidden" data-name="Advisories-SecurityTxt-Section">
      <img alt="" aria-hidden className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgBg} />
      <div aria-hidden className="absolute left-[-140px] top-[-88px] size-[420px] rounded-full bg-[rgba(0,212,170,0.1)] blur-[60px] pointer-events-none" />
      <div aria-hidden className="absolute right-[-146px] bottom-[-40px] size-[520px] rounded-full bg-[rgba(76,134,255,0.1)] blur-[55px] pointer-events-none" />
      <div className="flex flex-col gap-[32px] sm:gap-[48px] items-start w-full max-w-[1247px] relative z-10">
        <div className="flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Section-Header">
          <h2 className="[word-break:break-word] font-sans font-bold leading-[34px] sm:leading-[42px] lg:leading-[48px] relative shrink-0 text-[#0a0d13] text-[26px] sm:text-[32px] lg:text-[37.9px] tracking-[-0.38px] w-full">
            Security Advisories and security.txt
          </h2>
          <p className="[word-break:break-word] font-sans font-normal leading-[24px] sm:leading-[28px] relative shrink-0 text-[#4f5e74] text-[15px] sm:text-[17px] w-full">
            Track past resolutions or verify our official security details natively via standard security.txt
            declarations.
          </p>
        </div>
        <div className="gap-8 lg:gap-12 grid grid-cols-1 lg:grid-cols-2 items-start relative shrink-0 w-full">
          <div className="flex flex-col gap-[16px] items-start relative shrink-0" data-name="Verified-Disclosures">
            <p className="[word-break:break-word] font-sans font-bold leading-[normal] text-[#0a0d13] text-[20px]">
              Verified Disclosures
            </p>
            <p className="[word-break:break-word] font-sans font-normal leading-[24px] text-[#4f5e74] text-[14px] w-full">
              Our Security Advisories index lists CVE references, patched client versions, and appropriate researcher
              credits. Explore historical resolutions on our main advisory directory.
            </p>
            <Link
              href="/security-advisories"
              className="flex gap-[8px] items-center relative shrink-0 transition-opacity hover:opacity-80"
            >
              <span className="font-sans font-bold leading-[normal] text-[#4c86ff] text-[14px] underline">
                View Security Advisories
              </span>
              <img alt="" className="block max-w-none size-[14px]" src={imgExternalLink} />
            </Link>
          </div>
          <div className="bg-white border border-[#e2e8f0] border-solid flex flex-col gap-[16px] items-start p-[20px] sm:p-[24px] relative rounded-[12px] shrink-0 w-full" data-name="SecurityTxt-Card">
            <p className="font-mono font-bold leading-[normal] not-italic text-[#0a0d13] text-[13px]">
              security.txt location
            </p>
            <div className="bg-[#f8fafc] flex flex-col gap-[6px] items-start p-[16px] relative rounded-[8px] shrink-0 w-full">
              {securityTxt.map((line) => (
                <code key={line} className="[word-break:break-word] font-mono font-normal leading-[18px] not-italic text-[#4f5e74] text-[12px] w-full">
                  {line}
                </code>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
