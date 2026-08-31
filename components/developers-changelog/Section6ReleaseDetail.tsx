import React from 'react';

export default function Section6ReleaseDetail() {
  return (
    <section className="border-[#e1e6eb] border-b border-solid flex flex-col gap-[56px] items-start px-4 md:px-[112px] py-16 md:py-[100px] relative w-full bg-white overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <img alt="" className="absolute max-w-none object-cover w-full h-full" src="/images/developers-changelog/sec6-bg.png" />
      </div>

      <div className="absolute bottom-[-68px] right-[-148px] w-[520px] h-[520px] pointer-events-none z-0">
        <div className="absolute inset-[-21.15%]">
          <img alt="" className="block max-w-none w-full h-full" src="/images/developers-changelog/sec2-blob2.svg" />
        </div>
      </div>
      <div className="absolute left-[-180px] w-[420px] h-[420px] top-[-54px] pointer-events-none z-0">
        <div className="absolute inset-[-21.43%]">
          <img alt="" className="block max-w-none w-full h-full" src="/images/developers-changelog/sec2-blob1.svg" />
        </div>
      </div>

      <div className="flex flex-col items-start relative z-10 w-full text-center md:text-left">
        <h2 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[1.2] md:leading-[48px] relative text-[#0f1b2d] text-3xl md:text-[38px] w-full">
          Inspect every change with full context.
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-[40px] items-start relative z-10 w-full">
        <div className="flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px relative w-full">
          <div className="flex flex-col gap-[12px] items-start relative w-full">
            <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold relative text-[#0f1b2d] text-[24px] md:text-[28px]">
              v2.14.0 Core Ingest Update
            </h3>
            <p className="font-[family-name:var(--font-inter)] font-normal not-italic relative text-[#4f5e74] text-[14px]">
              By Core Operations Team · Released Feb 18, 2026
            </p>
          </div>
          
          <div className="bg-[#f8fafc] border-[#e1e6eb] border-[1.5px] border-solid flex flex-col gap-[20px] items-start p-[24px] md:p-[32px] relative rounded-[16px] w-full shadow-sm">
            <h4 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] relative text-[#0f1b2d] text-[18px]">
              MIGRATION GUIDE & STEPS
            </h4>
            
            <div className="flex gap-[16px] items-start relative w-full">
              <div className="bg-[#0f1b2d] flex items-center justify-center relative rounded-[14px] shrink-0 w-[28px] h-[28px]">
                <span className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] text-[12px] text-white">
                  1
                </span>
              </div>
              <div className="flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative">
                <p className="font-[family-name:var(--font-space-grotesk)] font-bold relative text-[#0f1b2d] text-[15px]">
                  Verify endpoint signatures
                </p>
                <p className="font-[family-name:var(--font-inter)] font-normal w-full not-italic relative text-[#4f5e74] text-[13px]">
                  Ensure all WebRTC stream contribution requests implement standard HMAC-SHA256 signature hashes before connecting.
                </p>
              </div>
            </div>
            
            <div className="flex gap-[16px] items-start relative w-full">
              <div className="bg-[#0f1b2d] flex items-center justify-center relative rounded-[14px] shrink-0 w-[28px] h-[28px]">
                <span className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] text-[12px] text-white">
                  2
                </span>
              </div>
              <div className="flex flex-[1_0_0] flex-col gap-[4px] items-start min-w-px relative">
                <p className="font-[family-name:var(--font-space-grotesk)] font-bold relative text-[#0f1b2d] text-[15px]">
                  Configure audio track arrays
                </p>
                <p className="font-[family-name:var(--font-inter)] font-normal w-full not-italic relative text-[#4f5e74] text-[13px]">
                  Format audio parameters utilizing the new multi-channel config format detailed in standard payload documentation.
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-[12px] items-start relative w-full">
            <h4 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] relative text-[#0f1b2d] text-[14px] tracking-[0.5px]">
              PAYLOAD CONTRACT DIFFERENCE
            </h4>
            <div className="bg-[#0f1b2d] flex flex-col items-start p-[20px] relative rounded-[12px] w-full overflow-x-auto">
              <pre className="font-[family-name:var(--font-space-grotesk)] font-normal leading-[1.6] relative text-[#34d4ca] text-[13px] whitespace-pre">
{`// Old Contract payload v3
- "audio_format": "stereo",
- "codec_override": null
 
// New Contract payload v4
+ "supported_audio_tracks": [
+   { "id": "main", "channels": 2, "codec": "opus" },
+   { "id": "fallback", "channels": 1, "codec": "aac" }
+ ]`}
              </pre>
            </div>
          </div>
        </div>

        <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid flex flex-col gap-[24px] items-start p-[32px] relative rounded-[16px] w-full lg:w-[400px]">
          <h4 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] relative text-[#0f1b2d] text-[14px]">
            PROVENANCE & VERIFICATION
          </h4>
          
          <div className="flex flex-col gap-[4px] items-start relative w-full">
            <p className="font-[family-name:var(--font-inter)] font-normal not-italic relative text-[#4f5e74] text-[12px]">
              Release status
            </p>
            <p className="font-[family-name:var(--font-space-grotesk)] font-bold relative text-[#10b981] text-[14px]">
              Verified Stable
            </p>
          </div>
          
          <div className="flex flex-col gap-[4px] items-start relative w-full">
            <p className="font-[family-name:var(--font-inter)] font-normal not-italic relative text-[#4f5e74] text-[12px]">
              Affected SDK Versions
            </p>
            <p className="font-[family-name:var(--font-space-grotesk)] font-bold relative text-[#0f1b2d] text-[14px]">
              Web Player v2.4, iOS SDK v1.12
            </p>
          </div>
          
          <div className="flex flex-col gap-[4px] items-start relative w-full">
            <p className="font-[family-name:var(--font-inter)] font-normal not-italic relative text-[#4f5e74] text-[12px]">
              Action State
            </p>
            <p className="font-[family-name:var(--font-space-grotesk)] font-bold relative text-[#ff4d4d] text-[14px]">
              Action Required
            </p>
          </div>
          
          <div className="h-0 relative w-full">
            <div className="absolute inset-[-1px_0_0_0]">
              <img alt="" className="block max-w-none w-full h-[1px]" src="/images/developers-changelog/sec6-line.svg" />
            </div>
          </div>
          
          <div className="flex flex-col gap-[12px] items-start relative w-full">
            <p className="font-[family-name:var(--font-space-grotesk)] font-bold relative text-[#0f1b2d] text-[12px]">
              RELATED RELEASES & DOCS
            </p>
            <a href="#docs-v4" className="font-[family-name:var(--font-space-grotesk)] font-bold relative text-[#4a8cfb] text-[13px] hover:underline">
              API Reference Docs v4
            </a>
            <a href="#post-mortem" className="font-[family-name:var(--font-space-grotesk)] font-bold relative text-[#4a8cfb] text-[13px] hover:underline">
              Original Security Post-Mortem
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
