import React from 'react';
import {
  Tag,
  Layers,
  Globe,
  CheckCircle,
  Users,
  AlertCircle,
} from 'lucide-react';

const accessPoints = [
  {
    title: 'Track Identity',
    desc: 'Stable artifact ID permanently linked to exact media/version scopes.',
    icon: Tag,
  },
  {
    title: 'Type Classification',
    desc: 'Classified by functional utility: closed captions, subtitles, transcripts, and alternative audio.',
    icon: Layers,
  },
  {
    title: 'Language & Locale',
    desc: 'Locale meta tags pulled from approved, verified terminology sources.',
    icon: Globe,
  },
  {
    title: 'Review State',
    desc: 'Track progress through assessed, review required, approved, and limited scopes.',
    icon: CheckCircle,
  },
  {
    title: 'Applicability',
    desc: 'Ensures accessibility assets apply strictly to their mapped target audience.',
    icon: Users,
  },
  {
    title: 'Known Limitations',
    desc: 'Flags timing anomalies, coverage gaps, or incomplete translations explicitly.',
    icon: AlertCircle,
  },
];

export default function AccessibilityContinuitySection() {
  return (
    <section className="w-full bg-white border-b border-slate-200 py-20 md:py-28 text-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-3 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-['Space_Grotesk'] text-slate-900 leading-tight">
            Accessibility and language continuity
          </h2>
          <p className="text-slate-600 text-base md:text-lg font-normal font-['Space_Grotesk']">
            Caption, transcript, and language track governance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Items Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {accessPoints.map((pt, idx) => {
              const Icon = pt.icon;
              return (
                <div key={idx} className="flex items-start gap-4">
                  <div className="size-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
                    <Icon className="size-5" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-slate-900 text-base font-bold font-['Space_Grotesk']">
                      {pt.title}
                    </h3>
                    <p className="text-slate-600 text-sm font-normal font-['Space_Grotesk'] leading-relaxed">
                      {pt.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Active Access Tracks Card */}
          <div className="lg:col-span-5">
            <div className="p-7 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col gap-5 shadow-sm">
              <h3 className="text-slate-900 text-base font-bold font-['Space_Grotesk']">
                ACTIVE ACCESS TRACKS
              </h3>

              <div className="flex flex-col gap-2">
                <div className="px-4 py-3 bg-white rounded-lg border border-slate-200 flex justify-between items-center">
                  <span className="text-slate-900 text-sm font-bold font-['Space_Grotesk']">
                    English (US) - Closed Captions
                  </span>
                  <span className="px-2.5 py-1 bg-emerald-900/90 text-emerald-400 text-xs font-bold font-['Space_Grotesk'] rounded">
                    APPROVED
                  </span>
                </div>

                <div className="px-4 py-3 bg-white rounded-lg border border-slate-200 flex justify-between items-center">
                  <span className="text-slate-900 text-sm font-bold font-['Space_Grotesk']">
                    Spanish (ES) - Subtitles
                  </span>
                  <span className="px-2.5 py-1 bg-emerald-900/90 text-emerald-400 text-xs font-bold font-['Space_Grotesk'] rounded">
                    APPROVED
                  </span>
                </div>

                <div className="px-4 py-3 bg-white rounded-lg border border-slate-200 flex justify-between items-center">
                  <span className="text-slate-900 text-sm font-bold font-['Space_Grotesk']">
                    French (FR) - Translation Track
                  </span>
                  <span className="px-2.5 py-1 bg-amber-900/90 text-amber-400 text-xs font-bold font-['Space_Grotesk'] rounded">
                    PENDING REVIEW
                  </span>
                </div>

                <div className="px-4 py-3 bg-white rounded-lg border border-slate-200 flex justify-between items-center">
                  <span className="text-slate-900 text-sm font-bold font-['Space_Grotesk']">
                    German (DE) - Audio Description
                  </span>
                  <span className="px-2.5 py-1 bg-red-900/90 text-red-400 text-xs font-bold font-['Space_Grotesk'] rounded">
                    LIMITATION DETECTED
                  </span>
                </div>
              </div>

              <div className="p-4 bg-amber-100 rounded-lg border border-amber-600 flex flex-col gap-1.5">
                <span className="text-amber-800 text-xs font-bold font-['Space_Grotesk']">
                  ⚠ Dynamic State Notice
                </span>
                <span className="text-amber-700 text-xs font-normal font-['Space_Grotesk'] leading-relaxed">
                  Track presence, review, quality, approval, publication, and delivery are distinct states. System checks protect downstream distribution from metadata omissions.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
