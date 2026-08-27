import React from 'react';

export default function Section3LatestRelease() {
  return (
    <section className="border-[#232b3a] border-b border-solid flex flex-col gap-[56px] items-start px-4 md:px-[112px] py-16 md:py-[120px] relative w-full bg-[#0a0d14] overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <img alt="" className="absolute max-w-none object-cover w-full h-full" src="/images/developers-changelog/sec3-bg.png" />
        <div className="absolute bg-[rgba(15,27,45,0.92)] inset-0" />
      </div>

      <div className="flex flex-col gap-[16px] items-start relative z-10 w-full text-center md:text-left">
        <div className="border border-[#34d4ca] border-solid flex items-start px-[12px] py-[6px] relative rounded-[100px] shrink-0 mx-auto md:mx-0">
          <p className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] relative shrink-0 text-[#34d4ca] text-[11px] tracking-[1px] uppercase whitespace-nowrap">
            LATEST RELEASE
          </p>
        </div>
        <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[1.2] md:leading-[48px] relative w-full text-3xl md:text-[38px] text-white">
          See the newest approved release.
        </h2>
      </div>

      <div className="bg-[rgba(16,21,30,0.8)] border-2 border-[#232b3a] border-solid flex flex-col gap-[32px] items-start p-[24px] md:p-[48px] relative rounded-[24px] shrink-0 w-full z-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between relative w-full gap-4">
          <div className="flex flex-wrap gap-[16px] items-center relative w-full md:w-auto">
            <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] relative text-[24px] md:text-[32px] text-white whitespace-nowrap">
              v2.14.0
            </h3>
            <div className="bg-[rgba(16,185,129,0.11)] border border-[rgba(52,212,202,0.3)] border-solid flex items-start px-[10px] py-[4px] relative rounded-[100px] shrink-0">
              <span className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] text-[#34d4ca] text-[11px] tracking-[0.5px] uppercase whitespace-nowrap">
                Stable
              </span>
            </div>
            <div className="bg-[rgba(255,77,77,0.1)] border border-[rgba(255,77,77,0.3)] border-solid flex items-start px-[10px] py-[4px] relative rounded-[100px] shrink-0">
              <span className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] text-[#ff4d4d] text-[11px] tracking-[0.5px] uppercase whitespace-nowrap">
                ACTION REQUIRED
              </span>
            </div>
          </div>
          <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.4] not-italic relative text-[#aab3c4] text-[14px]">
            Approved & Published: February 18, 2026 at 14:32 UTC
          </p>
        </div>

        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute inset-[-1px_0_0_0]">
            <img alt="" className="block max-w-none w-full h-[1px]" src="/images/developers-changelog/sec3-line.svg" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-[48px] items-start relative w-full">
          <div className="flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px relative w-full lg:w-auto">
            <h4 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[1.4] relative text-[20px] md:text-[22px] text-white">
              Live Transcoding & Audio Channel Expansion
            </h4>
            <p className="font-[family-name:var(--font-inter)] font-normal leading-[22px] w-full not-italic relative text-[#aab3c4] text-[15px]">
              This release rolls out multi-language fallback configurations and extends standard WebRTC stream contribution capacities. Please review field removals in payload schema v4.
            </p>
            <div className="flex flex-col gap-[12px] items-start relative w-full">
              <p className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] relative text-[#34d4ca] text-[12px] tracking-[1px] whitespace-nowrap">
                CHANGES INCLUDED (4)
              </p>
              
              <div className="flex gap-[12px] items-center relative w-full">
                <div className="bg-[rgba(52,212,202,0.1)] border border-[rgba(52,212,202,0.3)] border-solid flex items-start px-[10px] py-[4px] relative rounded-[100px] shrink-0">
                  <span className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] text-[#34d4ca] text-[11px] tracking-[0.5px] uppercase whitespace-nowrap">
                    API
                  </span>
                </div>
                <p className="flex-[1_0_0] font-[family-name:var(--font-inter)] font-normal leading-[normal] min-w-px not-italic relative text-[14px] text-white">
                  Added `supported_audio_tracks` array to endpoint payload parameters.
                </p>
              </div>

              <div className="flex gap-[12px] items-center relative w-full">
                <div className="bg-[rgba(74,140,251,0.1)] border border-[rgba(74,140,251,0.3)] border-solid flex items-start px-[10px] py-[4px] relative rounded-[100px] shrink-0">
                  <span className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] text-[#4a8cfb] text-[11px] tracking-[0.5px] uppercase whitespace-nowrap">
                    SDK
                  </span>
                </div>
                <p className="flex-[1_0_0] font-[family-name:var(--font-inter)] font-normal leading-[normal] min-w-px not-italic relative text-[14px] text-white">
                  Fixed callback lock sequence on iOS hardware mute toggle.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#141e33] flex flex-col gap-[24px] items-start p-[32px] relative rounded-[16px] shrink-0 w-full lg:w-[400px]">
            <p className="font-[family-name:var(--font-space-grotesk)] font-bold relative text-[14px] text-white tracking-[0.5px]">
              MIGRATION PARAMETERS
            </p>
            <div className="flex items-start justify-between relative w-full text-[13px]">
              <p className="font-[family-name:var(--font-inter)] font-normal not-italic relative text-[#aab3c4]">
                Platform Version
              </p>
              <p className="font-[family-name:var(--font-space-grotesk)] font-bold relative text-white">
                v2.14.0
              </p>
            </div>
            <div className="flex items-start justify-between relative w-full text-[13px]">
              <p className="font-[family-name:var(--font-inter)] font-normal not-italic relative text-[#aab3c4]">
                Compatibility
              </p>
              <p className="font-[family-name:var(--font-space-grotesk)] font-bold relative text-[#ff4d4d]">
                Backward Breaking (v1)
              </p>
            </div>
            <div className="flex items-start justify-between relative w-full text-[13px]">
              <p className="font-[family-name:var(--font-inter)] font-normal not-italic relative text-[#aab3c4]">
                Provenance Hash
              </p>
              <p className="font-[family-name:var(--font-space-grotesk)] font-bold relative text-[#34d4ca]">
                sha256:7aae0cdd...
              </p>
            </div>
            <div className="flex items-start justify-between relative w-full text-[13px]">
              <p className="font-[family-name:var(--font-inter)] font-normal not-italic relative text-[#aab3c4]">
                Verification
              </p>
              <p className="font-[family-name:var(--font-space-grotesk)] font-bold relative text-[#10b981]">
                Audit Verified
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
