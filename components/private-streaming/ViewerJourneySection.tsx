export default function ViewerJourneySection() {
  return (
    <section className="w-full bg-white px-6 md:px-12 xl:px-[112px] py-16 lg:py-24 flex flex-col gap-10 lg:gap-14">
      <div className="mx-auto w-full max-w-7xl flex flex-col gap-4">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold leading-tight">
          Safe access, clear recovery.
        </h2>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          What your viewers see &mdash; from entry to recovery.
        </p>
      </div>

      <div className="mx-auto w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {/* Stage 01 — Enter */}
        <article className="p-6 bg-slate-50 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col gap-4">
          <span className="text-slate-400 text-[10px] font-bold font-mono">STAGE 01 &mdash; ENTER</span>
          <div className="flex flex-col gap-2">
            <h3 className="text-slate-900 text-base font-bold">Zoiko Private Room Gateway</h3>
            <p className="text-slate-600 text-xs">Room Ref: ZS-ROOM-SECURE-KEY</p>
          </div>
          <div className="w-full p-3 bg-white rounded-md outline outline-1 outline-offset-[-1px] outline-gray-200">
            <span className="text-slate-400 text-xs">Enter authorized work email</span>
          </div>
          <span className="text-slate-400 text-xs underline">Need authorization assistance?</span>
        </article>

        {/* Stage 02 — Verify */}
        <article className="p-6 bg-slate-50 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col gap-4">
          <span className="text-slate-400 text-[10px] font-bold font-mono">
            STAGE 02 &mdash; VERIFY
          </span>
          <div className="flex flex-col gap-2">
            <h3 className="text-slate-900 text-base font-bold">Verifying Credentials...</h3>
            <p className="text-slate-600 text-xs">Contacting corporate SSO provider</p>
          </div>
          <div className="w-full flex items-center gap-2">
            <span className="w-3 h-3 shrink-0 bg-orange-300 rounded-full" />
            <span className="text-slate-600 text-xs font-mono">Handshake pending</span>
          </div>
          <div className="w-full h-1.5 bg-gray-200 rounded-[3px]" />
        </article>

        {/* Stage 03 — Authorized */}
        <article className="p-6 bg-slate-50 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col gap-4">
          <span className="text-slate-400 text-[10px] font-bold font-mono">
            STAGE 03 &mdash; AUTHORIZED
          </span>
          <div className="flex flex-col gap-2">
            <h3 className="text-slate-900 text-base font-bold">Identity Asserted</h3>
            <p className="text-slate-600 text-xs">Access granted through verified domain</p>
          </div>
          <div className="w-full p-3 bg-zinc-950 rounded-md flex justify-center">
            <span className="text-slate-100 text-xs font-bold">Enter Private Room</span>
          </div>
          <span className="text-emerald-500 text-xs">&#10003; Secure Session Initialized</span>
        </article>

        {/* Stage 04 — Recover */}
        <article className="p-6 bg-slate-50 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-200 flex flex-col gap-4">
          <span className="text-slate-400 text-[10px] font-bold font-mono">
            STAGE 04 &mdash; RECOVER
          </span>
          <div className="flex flex-col gap-2">
            <h3 className="text-slate-900 text-base font-bold">Token Expired</h3>
            <p className="text-slate-600 text-xs">Your security window has ended</p>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-red-500 text-xs">Re-authorization Required</span>
            <span className="text-slate-400 text-xs underline">Contact Event Support Desk</span>
          </div>
        </article>
      </div>
    </section>
  );
}
