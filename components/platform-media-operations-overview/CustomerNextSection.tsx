import { Activity, BookOpen, LifeBuoy, LogIn } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import bg147 from '@/public/images/Organization-overview/bg (147).png';

const customerCards = [
  { 
    title: 'Sign In', 
    desc: 'Return to your operational context.', 
    icon: LogIn,
    href: 'https://zoikostream-git-454227754507.europe-west1.run.app/login'
  },
  { 
    title: 'Documentation', 
    desc: 'Implementation guides and API references.', 
    icon: BookOpen,
    href: '/developer-documentation'
  },
  { 
    title: 'System Status', 
    desc: 'Current public service status.', 
    icon: Activity,
    href: '/developers-system-status'
  },
  { 
    title: 'Support', 
    desc: 'Help with an active operation or account.', 
    icon: LifeBuoy,
    href: undefined
  },
];

export default function CustomerNextSection() {
  return (
    <section className="relative w-full bg-white px-4 sm:px-8 lg:px-28 py-16 sm:py-20 lg:py-24 border-b border-gray-200 flex flex-col gap-14 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src={bg147}
          alt="Media Lifecycle Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 " />
      </div>
      <div className="size-[520px] -right-44 bottom-10 absolute bg-blue-500/10 rounded-full blur-[55px] pointer-events-none" />

      <div className="relative z-10 flex flex-col gap-3">
        <h2 className="text-slate-900 text-3xl sm:text-4xl font-bold leading-tight font-['Space_Grotesk']">
          Already a customer?
        </h2>
        <p className="text-slate-500 text-lg font-normal leading-7 font-['Space_Grotesk']">
          Return to your task without a forced sales funnel
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {customerCards.map((card) => {
          const Icon = card.icon;
          const cardContent = (
            <div
              className="h-full p-6 bg-white rounded-xl border border-gray-200 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <Icon className="w-5 h-5 text-teal-500" />
              <p className="text-slate-900 text-base font-bold font-['Space_Grotesk']">
                {card.title}
              </p>
              <p className="text-slate-500 text-xs font-normal font-['Space_Grotesk'] leading-5">
                {card.desc}
              </p>
            </div>
          );

          if (card.href) {
            return (
              <Link key={card.title} href={card.href} className="block">
                {cardContent}
              </Link>
            );
          }

          return <div key={card.title}>{cardContent}</div>;
        })}
      </div>
    </section>
  );
}

