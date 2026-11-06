import { CircleDot, Globe, GraduationCap, Heart, Radio } from 'lucide-react';

export default function TrustedSection() {
  return (
    <section className="w-full border-t border-zinc-900 bg-[#0b0c12] py-9">
      <div className="mx-auto w-full max-w-[1180px] px-4 sm:px-7">
        <p className="text-center text-xs font-semibold tracking-[0.18em] text-gray-600">
          TRUSTED BY ORGANIZATIONS AND CREATORS WORLDWIDE
        </p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 text-zinc-400 opacity-90 lg:justify-between">
          <li className="flex items-center gap-2">
            <span className="rounded-sm bg-gray-800 px-[5px] py-0.5 text-[9px] font-extrabold tracking-wide text-slate-300">LIVE</span>
            <span className="text-base font-extrabold tracking-tight">EventPro</span>
          </li>
          <li className="flex items-center gap-2">
            <Globe className="size-5" strokeWidth={1.5} />
            <span className="text-base font-extrabold tracking-tight">MediaHouse</span>
          </li>
          <li className="flex items-center gap-2">
            <CircleDot className="size-5" strokeWidth={1.5} />
            <span className="text-base font-extrabold tracking-tight">
              Creators <span className="ml-1 font-medium">Hub</span>
            </span>
          </li>
          <li className="flex items-center gap-2">
            <Radio className="size-5" strokeWidth={1.5} />
            <span className="text-xs font-extrabold tracking-wide">GLOBAL SUMMIT</span>
          </li>
          <li className="flex items-center gap-2">
            <Heart className="size-4 fill-current" strokeWidth={0} />
            <span className="text-base font-extrabold tracking-tight">WorshipLive</span>
          </li>
          <li className="flex items-center gap-2">
            <GraduationCap className="size-5" strokeWidth={1.5} />
            <span className="text-base font-extrabold tracking-tight">EduStream</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
