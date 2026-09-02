import React from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import section7Bg from '@/public/images/resource-customer-stories/section7bg.png';

const POLICIES = [
  {
    title: 'How are customer stories different from case studies?',
    desc: 'Customer stories focus on human narrative, experience, and customer voice. Case studies are evidence-led with governed metrics, methodology, and implementation proof. Both are separate canonical destinations.',
  },
  {
    title: 'Are customer quotes edited or changed?',
    desc: 'Direct quotes are verbatim from approved sources. Only minor punctuation or disfluency cleanup is permitted with explicit approval. We never strengthen, synthesize, or composite customer quotes for marketing impact.',
  },
  {
    title: 'Can customers remain anonymous?',
    desc: 'Yes. Anonymized stories use approved descriptors instead of customer names. Every anonymized story passes a re-identification review to ensure narrative details do not reveal identity.',
  },
  {
    title: 'What happens when a quoted person changes roles?',
    desc: 'When a participant changes role or leaves the customer organization, we trigger an attribution review. Historical attribution may remain with time context, or be updated with new approval.',
  },
  {
    title: 'How often are stories reviewed for accuracy?',
    desc: 'Every story has a review_by date. Expired reviews trigger re-verification before the story can remain publicly listed. Core narrative changes require full customer re-approval.',
  },
  {
    title: 'Can customers withdraw their story?',
    desc: 'Absolutely. Rights withdrawal triggers immediate suppression of affected content. If core narrative meaning changes, the entire story is re-reviewed or retired.',
  },
  {
    title: 'Do you use customer stories for sales targeting?',
    desc: 'No. Community activity and story engagement must not be used for hidden sales scoring, employee evaluation, or advertising personalization.',
  },
  {
    title: 'How are metrics in stories verified?',
    desc: 'Any quantitative claim in a customer story must reference a governed evidence claim record with the same rigor as our Case studies. Stories cannot bypass evidence governance.',
  },
];

export default function ResourceCustomerStoriesGovernanceSection() {
  return (
    <section className="relative w-full px-4 sm:px-8 lg:px-28 py-20 lg:py-24 bg-zinc-950/90 border-t border-b border-gray-800 flex flex-col justify-start items-start gap-14 overflow-hidden z-10">
      {/* Background */}
      {section7Bg && (
        <div className="absolute inset-0 pointer-events-none z-0 opacity-30">
          <Image src={section7Bg} alt="Background" fill className="object-cover" />
        </div>
      )}

      {/* Header */}
      <div className="relative z-10 w-full flex flex-col justify-start items-start gap-4 max-w-4xl">
        <h2 className="text-slate-100 text-3xl sm:text-4xl font-bold font-['Space_Grotesk'] leading-tight sm:leading-[60px]">
          How we handle customer stories
        </h2>
        <p className="text-slate-400 text-base sm:text-lg font-normal font-['Space_Grotesk'] leading-7">
          Transparency about voice integrity, permissions, anonymity, editorial standards, and story updates.
        </p>
      </div>

      {/* 8 Cards Grid (2 Columns) */}
      <div className="relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-5">
        {POLICIES.map((item, idx) => (
          <div
            key={idx}
            className="p-6 bg-slate-900 rounded-xl outline outline-1 outline-offset-[-1px] outline-gray-800 flex flex-col justify-start items-start gap-4 hover:border-gray-700 transition-colors"
          >
            <div className="w-full flex justify-between items-center gap-4">
              <h3 className="text-slate-100 text-base font-bold font-['Space_Grotesk'] leading-6 flex-1 line-clamp-1">
                {item.title}
              </h3>
              <X className="size-5 text-teal-400 shrink-0" />
            </div>

            <p className="text-slate-400 text-sm font-normal font-['Space_Grotesk'] leading-6">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
