import React from 'react';

export default function Section8ApiSchemaChanges() {
  return (
    <section className="border-[#e1e6eb] border-b border-solid flex flex-col gap-[56px] items-start px-4 md:px-[112px] py-16 md:py-[100px] relative w-full bg-white overflow-hidden">
      <div aria-hidden className="absolute inset-0 pointer-events-none z-0">
        <img alt="" className="absolute max-w-none object-cover w-full h-full" src="/images/developers-changelog/sec8-bg.png" />
      </div>

      <div className="absolute bottom-[-167px] right-[-148px] w-[520px] h-[520px] pointer-events-none z-0">
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
          Track contract changes at the field level.
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-[40px] items-start relative z-10 w-full">
        <div className="flex flex-[1_0_0] flex-col gap-[32px] items-start min-w-px relative w-full">
          <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid flex gap-[12px] items-center p-[12px] relative rounded-[8px] w-full">
            <div className="bg-[#34d4ca] flex items-start px-[8px] py-[4px] relative rounded-[4px] shrink-0">
              <span className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] text-[#0a0d14] text-[12px] whitespace-nowrap">
                POST
              </span>
            </div>
            <span className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] text-[#0f1b2d] text-[14px] md:text-[16px] truncate">
              /v2/ingest/stream/configure
            </span>
          </div>

          <div className="bg-[#f8fafc] border border-[#e1e6eb] border-solid flex flex-col items-start p-[20px] relative rounded-[12px] w-full overflow-x-auto">
            <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] relative text-[#0f1b2d] text-[14px] mb-4">
              AFFECTED PROPERTIES
            </h3>
            
            <div className="h-0 relative w-full mb-[12px]">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none w-full h-[1px]" src="/images/developers-changelog/sec8-line.svg" />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start justify-between py-[12px] relative w-full gap-4 sm:gap-0">
              <div className="flex flex-col gap-[4px] items-start relative w-full sm:w-[200px] shrink-0">
                <span className="font-[family-name:var(--font-space-grotesk)] font-bold relative text-[#0f1b2d] text-[13px] md:text-[14px]">
                  supported_audio_tracks
                </span>
                <span className="font-[family-name:var(--font-inter)] font-normal not-italic relative text-[#4f5e74] text-[11px] md:text-[12px]">
                  Array (Object)
                </span>
              </div>
              <div className="flex flex-[1_0_0] flex-col items-start min-w-px relative">
                <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.4] not-italic relative text-[#0f1b2d] text-[13px] md:text-[14px] w-full">
                  <span className="font-bold leading-[normal] text-[#10b981]">ADDED: </span>
                  <span>List of allowed channels and codecs for high-fidelity fallback routing.</span>
                </p>
              </div>
            </div>
            
            <div className="h-0 relative w-full my-[12px]">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none w-full h-[1px]" src="/images/developers-changelog/sec8-line.svg" />
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start justify-between py-[12px] relative w-full gap-4 sm:gap-0">
              <div className="flex flex-col gap-[4px] items-start relative w-full sm:w-[200px] shrink-0">
                <span className="font-[family-name:var(--font-space-grotesk)] font-bold relative text-[#0f1b2d] text-[13px] md:text-[14px]">
                  audio_format
                </span>
                <span className="font-[family-name:var(--font-inter)] font-normal not-italic relative text-[#4f5e74] text-[11px] md:text-[12px]">
                  String (Enum)
                </span>
              </div>
              <div className="flex flex-[1_0_0] flex-col items-start min-w-px relative">
                <p className="font-[family-name:var(--font-inter)] font-normal leading-[1.4] not-italic relative text-[#0f1b2d] text-[13px] md:text-[14px] w-full">
                  <span className="font-bold leading-[normal] text-[#ff4d4d]">DEPRECATED: </span>
                  <span>Replaced by the modular audio array parameters. Scheduled for drop on v3.0.</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[16px] items-start relative w-full lg:w-[450px] shrink-0">
          <h3 className="font-[family-name:var(--font-space-grotesk)] font-bold leading-[normal] relative text-[#0f1b2d] text-[14px]">
            EXAMPLE INTEGRATION PAYLOAD (v4)
          </h3>
          <div className="bg-[#0f1b2d] flex flex-col items-start p-[24px] relative rounded-[12px] w-full overflow-x-auto shadow-md">
            <pre className="font-[family-name:var(--font-space-grotesk)] font-normal leading-[1.6] relative text-[#34d4ca] text-[13px] whitespace-pre">
{`{
  "stream_id": "str_f8a9e04bc2",
  "supported_audio_tracks": [
    {
      "id": "main_stereo",
      "channels": 2,
      "codec": "opus",
      "bitrate_kbps": 160
    },
    {
      "id": "fallback_mono",
      "channels": 1,
      "codec": "aac",
      "bitrate_kbps": 64
    }
  ],
  "verify_integrity": true
}`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
