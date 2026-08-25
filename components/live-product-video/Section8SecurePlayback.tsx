import React from 'react';

const imgSectionBg = "/images/live-product-video/secure-playback-section-bg.png";
const imgBgBlob1 = "/images/live-product-video/secure-playback-bg-blob-1.svg";
const imgBgBlob2 = "/images/live-product-video/secure-playback-bg-blob-2.svg";

const LAYERS = [
  {
    number: "01",
    label: "Identity: ",
    title: "Who is the product user?",
    description: "The product handles user login, session limits, and provides the verified user identity context to ZoikoStream.",
  },
  {
    number: "02",
    label: "Entitlement: ",
    title: "Should this user access this experience?",
    description: "Product-defined business logic queries internal access parameters to confirm streaming permissions.",
  },
  {
    number: "03",
    label: "Policy Evaluation: ",
    title: "Does the configured policy allow playback?",
    description: "ZoikoStream evaluates constraints in real-time, resulting in one of: Checking, Allowed, Denied, Expired, or Revoked.",
  },
  {
    number: "04",
    label: "Playback Authorization: ",
    title: "What access result is securely passed to the player?",
    description: "A cryptographically signed, short-lived token containing specific playback scopes. No API keys or secrets reside in UI.",
  },
  {
    number: "05",
    label: "Player Outcome: ",
    title: "What does the viewer actually see?",
    description: "The player renders media natively if valid, or presents an explicit state: Playable, Denied, Expired, or Unavailable.",
  },
];

export default function Section8SecurePlayback() {
  return (
    <div className="border-b border-[#e1e6eb] border-solid relative w-full px-6 lg:px-[112px] py-[60px] lg:py-[100px] overflow-hidden">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSectionBg} />
      <div className="absolute left-[-180px] size-[420px] top-[-54px]">
        <div className="absolute inset-[-21.43%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob1} />
        </div>
      </div>
      <div className="absolute bottom-[-41px] right-[-148px] size-[520px]">
        <div className="absolute inset-[-21.15%]">
          <img alt="" className="block max-w-none size-full" src={imgBgBlob2} />
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-[56px] items-start w-full">
        <div className="flex flex-col gap-[16px] items-start w-full">
          <h2 className="font-sans font-bold text-[#0f1b2d] text-[28px] lg:text-[42px] leading-[1.19] tracking-[-1px] m-0 w-full">
            Separate identity from authorization
          </h2>
          <p className="font-inter font-normal text-[#4f5e74] text-[18px] leading-[1.56] m-0 w-full">
            Avoid private link equals secure video thinking.
          </p>
        </div>

        <div className="flex flex-col gap-[16px] items-start w-full">
          {LAYERS.map((layer) => (
            <div key={layer.number} className="bg-[#f8fafc] border-[1.5px] border-[#e1e6eb] border-solid rounded-[12px] p-[24px] flex flex-col sm:flex-row gap-[16px] sm:gap-[24px] items-start sm:items-center w-full">
              <div className="bg-[rgba(52,212,202,0.1)] rounded-[8px] p-[12px] flex items-center justify-center shrink-0 size-[48px]">
                <p className="font-sans font-bold text-[#34d4ca] text-[16px] m-0">{layer.number}</p>
              </div>
              <div className="flex flex-col gap-[4px] items-start flex-1 min-w-0">
                <p className="font-sans font-bold text-[#0f1b2d] text-[18px] m-0 w-full">
                  {layer.label}<span className="font-sans font-normal text-[#4f5e74]">{layer.title}</span>
                </p>
                <p className="font-inter font-normal text-[#4f5e74] text-[14px] leading-[1.57] m-0 w-full">{layer.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#f8fafc] p-[24px] flex flex-col gap-[8px] items-start w-full">
          <p className="font-sans font-bold text-[#0f1b2d] text-[16px] m-0 whitespace-nowrap">Fail-Closed Rule</p>
          <p className="font-inter font-normal text-[#4f5e74] text-[14px] leading-[1.57] m-0 w-full">
            For protected media, when authorization cannot be verified, the player must not fall back to public playback.
          </p>
        </div>
      </div>
    </div>
  );
}
