import React from "react";

export default function MediaProtocolsHero() {
  return (
    <div className="self-stretch h-[760px] px-28 py-24 relative bg-zinc-950 outline outline-1 outline-offset-[-1px] outline-gray-800 inline-flex flex-col justify-center items-start gap-14 overflow-hidden">
      <div className="w-[1440px] h-[760px] left-0 top-0 absolute bg-zinc-950/70" />
      <div className="w-[1216px] left-[112px] top-[100px] absolute inline-flex justify-start items-center gap-12">
        {/* Left Column: Text Content */}
        <div className="flex-1 inline-flex flex-col justify-start items-start gap-6">
          <div className="px-3 py-1.5 rounded-[100px] outline outline-1 outline-offset-[-1px] outline-teal-500 inline-flex justify-start items-center gap-2">
            <div className="justify-start text-teal-500 text-xs font-bold font-['Space_Grotesk'] uppercase tracking-wide">
              MEDIA PROTOCOLS
            </div>
          </div>
          <div className="self-stretch justify-start text-slate-100 text-5xl font-bold font-['Space_Grotesk'] leading-[64px]">
            Choose the documented protocol path for your media workflow.
          </div>
          <div className="self-stretch justify-start text-slate-400 text-base font-normal font-['Space_Grotesk'] leading-7">
            ZoikoStream Media Protocols documents current source-approved
            protocol options and the exact compatibility, connection, security,
            reliability and lifecycle context needed to implement them.
          </div>

          {/* Action Buttons */}
          <div className="inline-flex justify-start items-center gap-4">
            <div className="px-6 py-3.5 bg-black/20 rounded-[10px] flex justify-start items-start cursor-pointer hover:bg-black/40 transition-colors">
              <div className="justify-start text-gray-800 text-base font-bold font-['Space_Grotesk']">
                Browse protocols
              </div>
            </div>
            <div className="px-7 py-3.5 rounded-[10px] outline outline-1 outline-offset-[-1px] outline-slate-400 flex justify-start items-start cursor-pointer hover:bg-slate-800/50 transition-colors">
              <div className="justify-start text-slate-100 text-base font-medium font-['Space_Grotesk']">
                View developer documentation
              </div>
            </div>
          </div>

          {/* Warning Message */}
          <div className="self-stretch p-4 rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-800 inline-flex justify-start items-start gap-3 mt-4">
            <div className="size-4 relative overflow-hidden shrink-0 mt-0.5">
              <div className="w-3.5 h-3 left-[1.32px] top-[1.99px] absolute outline outline-2 outline-offset-[-1px] outline-teal-500" />
            </div>
            <div className="flex-1 justify-start text-slate-500 text-xs font-normal font-['Space_Grotesk'] leading-4">
              Do not paste production credentials, stream keys, private
              endpoints, customer URLs or secrets into public examples or
              support forms.
            </div>
          </div>
        </div>

        {/* Right Column: Protocol Spec Card */}
        <div className="w-[500px] p-6 bg-zinc-900/80 rounded-2xl outline outline-[1.50px] outline-offset-[-1.50px] outline-gray-800 inline-flex flex-col justify-start items-start gap-5">
          <div className="self-stretch inline-flex justify-between items-center">
            <div className="flex justify-start items-center gap-2">
              <div className="size-2 bg-teal-500 rounded-full animate-pulse" />
              <div className="justify-start text-slate-100 text-xs font-bold font-['IBM_Plex_Mono']">
                PROTOCOL SPECS
              </div>
            </div>
            <div className="justify-start text-slate-500 text-[10px] font-normal font-['IBM_Plex_Mono']">
              RECORD VALID
            </div>
          </div>

          <div className="self-stretch p-4 bg-teal-500/5 rounded-lg flex flex-col justify-start items-start gap-3">
            <div className="self-stretch inline-flex justify-between items-start">
              <div className="justify-start text-slate-100 text-base font-bold font-['Space_Grotesk']">
                RTMPS INGEST
              </div>
              <div className="px-2 py-0.5 bg-teal-500/10 rounded-sm flex justify-start items-start">
                <div className="justify-start text-teal-500 text-[10px] font-bold font-['IBM_Plex_Mono']">
                  CURRENT
                </div>
              </div>
            </div>
            <div className="self-stretch h-1 bg-gray-800 rounded-xs inline-flex justify-start items-start overflow-hidden">
              <div className="w-[70%] self-stretch bg-teal-500" />
            </div>
            <div className="self-stretch justify-start text-slate-400 text-xs font-normal font-['Space_Grotesk'] leading-5">
              Active tunnel configured: TLS 1.2 Handshake confirmed. Dynamic
              metadata frames parsed successfully.
            </div>
          </div>

          <div className="self-stretch inline-flex justify-between items-start">
            <div className="justify-start text-slate-100 text-xs font-bold font-['Space_Grotesk']">
              TCP Port 443 Ingest Active
            </div>
            <div className="justify-start text-teal-500 text-xs font-normal font-['Space_Grotesk']">
              Verification: 100% Passed
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
