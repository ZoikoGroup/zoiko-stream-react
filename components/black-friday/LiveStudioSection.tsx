import Image from 'next/image';
import { Eye, Maximize, Play, SendHorizontal, Volume2 } from 'lucide-react';
import { IMG, SectionHeading } from './shared';

const chat = [
  { name: 'Maya', color: 'text-violet-400', msg: 'This sound quality is incredible 🔥' },
  { name: 'Dev_K', color: 'text-sky-400', msg: 'Joining from Berlin — crystal clear!' },
  { name: 'Host', color: 'text-amber-400', msg: 'Welcome everyone, Q&A starts at 8pm' },
  { name: 'Priya', color: 'text-emerald-400', msg: 'Just grabbed a ticket, worth it' },
  { name: 'Sam', color: 'text-violet-400', msg: 'Can we get the setlist after? 🙌' },
  { name: 'Nadia', color: 'text-sky-400', msg: 'That transition was so smooth' },
];

const reactions = ['🤍', '🔥', '👏', '🎉', '😮'];

export default function LiveStudioSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a0a0f] py-20">
      <div className="mx-auto w-full max-w-[1020px] px-4 sm:px-7">
        <div className="relative">
          <SectionHeading
            eyebrow="Live studio"
            title="Your entire live studio, in one place."
            subtitle="Broadcast, chat, reactions and analytics side by side — so you can run the whole show without switching tabs."
          />
          <Image
            src={`${IMG}/black-friday-banner.webp`}
            alt=""
            width={270}
            height={129}
            className="pointer-events-none absolute -right-20 -top-6 hidden xl:block"
          />
        </div>

        {/* Mock studio window (decorative product preview) */}
        <div
          aria-hidden="true"
          className="mt-11 overflow-hidden rounded-2xl border border-gray-700/70 bg-[#0e0f16] shadow-[0_40px_80px_-30px_rgba(124,58,237,0.45)]"
        >
          <div className="flex items-center gap-4 border-b border-gray-800 px-5 py-3">
            <div className="flex gap-1.5">
              <span className="size-3 rounded-full bg-red-500" />
              <span className="size-3 rounded-full bg-amber-400" />
              <span className="size-3 rounded-full bg-green-500" />
            </div>
            <span className="truncate rounded-md border border-gray-800 bg-[#14151d] px-3 py-1.5 text-xs text-gray-400 sm:min-w-[340px]">
              studio.zoikostream.com/live/summer-sessions
            </span>
          </div>

          <div className="grid lg:grid-cols-[1fr_300px]">
            <div className="relative aspect-[658/400] lg:aspect-auto lg:min-h-[400px]">
              <Image
                src={`${IMG}/studio-desk.webp`}
                alt=""
                fill
                sizes="(min-width: 1024px) 660px, 100vw"
                className="object-cover"
              />
              <span className="absolute left-4 top-4 flex items-center gap-1.5 rounded-md bg-red-500 px-2.5 py-1 text-xs font-bold tracking-wide text-white">
                <span className="size-1.5 rounded-full bg-white/80" /> LIVE
              </span>
              <span className="absolute right-4 top-4 flex items-center gap-2 rounded-lg bg-black/60 px-3 py-1.5 text-xs font-medium text-white backdrop-blur">
                <Eye className="size-4" /> 1,248 watching
              </span>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-3 pt-8">
                <div className="h-1 rounded-full bg-white/20">
                  <div className="h-full w-[62%] rounded-full bg-violet-500" />
                </div>
                <div className="mt-3 flex items-center gap-4 text-white">
                  <Play className="size-4 fill-current" />
                  <Volume2 className="size-4" />
                  <span className="ml-auto rounded border border-white/40 px-2 py-0.5 text-xs font-semibold">1080p</span>
                  <Maximize className="size-4" />
                </div>
              </div>
            </div>

            <div className="flex flex-col border-t border-gray-800 lg:border-l lg:border-t-0">
              <p className="flex items-center gap-2 border-b border-gray-800 px-4 py-3.5 text-sm font-bold text-white">
                <span className="size-1.5 rounded-full bg-green-400" /> Live chat
              </p>
              <ul className="flex flex-1 flex-col gap-3.5 px-4 py-4 text-[13px] leading-5">
                {chat.map((c) => (
                  <li key={c.name} className="text-gray-300">
                    <span className={`mr-1.5 font-bold ${c.color}`}>{c.name}</span>
                    {c.msg}
                  </li>
                ))}
              </ul>
              <div className="border-t border-gray-800 p-4">
                <div className="flex gap-2">
                  {reactions.map((r) => (
                    <span key={r} className="flex size-9 items-center justify-center rounded-lg border border-gray-700 bg-[#14151d] text-sm">
                      {r}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-2">
                  <span className="flex-1 rounded-lg border border-gray-700 bg-[#14151d] px-3 py-2.5 text-[13px] text-gray-500">
                    Say something...
                  </span>
                  <span className="flex size-10 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-blue-500 text-white">
                    <SendHorizontal className="size-4" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-gray-600">Conceptual product preview for illustration.</p>
      </div>
    </section>
  );
}
