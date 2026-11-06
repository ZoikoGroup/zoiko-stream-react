import { Star } from 'lucide-react';
import { SectionHeading, container } from './shared';

// TODO: replace with approved customer quotes before launch — these mirror the Figma placeholder copy.
const testimonials = [
  {
    quote:
      'Setting up our annual conference stream took an afternoon, not a week. The live chat and Q&A kept our remote attendees engaged from start to finish.',
    name: 'Alex Rivera',
    role: 'Head of Events',
  },
  {
    quote:
      'We sold out paid access in days, and the real-time analytics showed us exactly where viewers dropped off so we could keep them watching longer.',
    name: 'Priya Nair',
    role: 'Independent Creator',
  },
  {
    quote:
      'Reliable, on-brand and secure. Our Sunday services now reach members who can’t attend in person, and giving has never been simpler to manage.',
    name: 'Daniel Kim',
    role: 'Community Lead',
  },
];

const initials = (name: string) =>
  name
    .split(' ')
    .map((p) => p[0])
    .join('');

export default function TestimonialsSection() {
  return (
    <section className="w-full bg-[#0a0a0f] py-20">
      <div className={container}>
        <SectionHeading eyebrow="What organisers say" title="Loved by event teams everywhere." />
        <div className="mt-11 grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col rounded-2xl border border-gray-800 bg-[#11121a] p-7">
              <div className="flex gap-1" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-[15px] leading-[1.7] text-gray-300">“{t.quote}”</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-sm font-bold text-white">
                  {initials(t.name)}
                </span>
                <span>
                  <span className="block text-sm font-bold text-white">{t.name}</span>
                  <span className="block text-[13px] text-gray-400">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
