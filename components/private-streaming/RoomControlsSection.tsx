interface ControlCard {
  number: string;
  title: string;
  description: string;
}

const controls: ControlCard[] = [
  {
    number: '01',
    title: 'Room Membership',
    description:
      'Define who is eligible for this closed room without collecting more personal data than necessary.',
  },
  {
    number: '02',
    title: 'Credentialed Entry',
    description: 'Use a supported access method and show its current availability and state.',
  },
  {
    number: '03',
    title: 'Viewing Window',
    description:
      'Make when access begins, ends, and re-entry behavior explicit where supported.',
  },
  {
    number: '04',
    title: 'Recovery & Revocation',
    description:
      'Give eligible viewers a safe recovery path and authorized admins clear reissue/revoke controls.',
  },
  {
    number: '05',
    title: 'Private Replay',
    description: 'Decide replay access separately from live access and keep the rule visible.',
  },
];

export default function RoomControlsSection() {
  return (
    <section
      className="w-full bg-zinc-950 bg-cover bg-center px-6 md:px-12 xl:px-[112px] py-16 lg:py-24 flex flex-col gap-10 lg:gap-14"
      style={{
        backgroundImage: `linear-gradient(rgba(9, 9, 11, 0.4), rgba(9, 9, 11, 0.4)), url('/images/private-streaming/controls-bg.png')`,
      }}
    >
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="text-slate-100 text-3xl sm:text-4xl font-bold leading-tight">
          What you control in a private room.
        </h2>
      </div>

      <div className="mx-auto w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {controls.map((card) => (
          <article
            key={card.number}
            className="p-6 bg-zinc-900 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col gap-4"
          >
            <div className="w-full flex justify-between items-center">
              <span className="w-9 h-9 bg-teal-400/10 rounded-lg outline outline-1 outline-offset-[-1px] outline-teal-400/25 flex justify-center items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/private-streaming/shield-lg.svg"
                  alt=""
                  aria-hidden
                  className="w-4 h-4"
                />
              </span>
              <span className="text-slate-500 text-xs font-bold font-mono">{card.number}</span>
            </div>
            <h3 className="text-slate-100 text-lg font-bold">{card.title}</h3>
            <p className="text-slate-400 text-xs leading-5">{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
