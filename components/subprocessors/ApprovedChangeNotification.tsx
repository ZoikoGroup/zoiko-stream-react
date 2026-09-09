import React from 'react';

export default function ApprovedChangeNotification() {
  const notificationCards = [
    {
      title: 'Is there an email notification?',
      description: 'Only if an approved, signed DPA and active operational channel exists for your account. Casual or public sign-ups do not trigger legal alerts.',
      imageSrc: '/images/subprocessors/notifications.png',
    },
    {
      title: 'How far in advance?',
      description: 'We adhere strictly to the exact contractual terms defined in your operative DPA. No arbitrary or invented notice periods are applied.',
      imageSrc: '/images/subprocessors/advance.png',
    },
    {
      title: 'Who receives the notice?',
      description: 'Operational change alerts are sent only to the designated security, compliance, or engineering contacts specified in your master agreement.',
      imageSrc: '/images/subprocessors/notice.png',
    },
    {
      title: 'Can I subscribe publicly?',
      description: 'Public RSS and mailing lists are available only when active operational mechanisms exist. Registry changes are strictly truth-backed.',
      imageSrc: '/images/subprocessors/publicly.png',
    },
    {
      title: 'What is a material change?',
      description: 'Only structural changes affecting the legal entity, processing purpose, or core service scope as defined in the source DPA trigger formal notices.',
      imageSrc: '/images/subprocessors/change.png',
    },
  ];

  return (
    <section className="relative w-full bg-slate-950 py-16 md:py-24 px-6 md:px-12 lg:px-28 border-y border-gray-800">
      <div className="absolute inset-0 bg-zinc-950/90 pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col gap-12">
        {/* Header Section */}
        <div className="flex flex-col gap-3 max-w-4xl">
          <h2 className="text-slate-100 text-3xl md:text-4xl font-bold font-['Space_Grotesk'] leading-tight md:leading-[60px]">
            Approved Change Notification Process
          </h2>
          <p className="text-slate-400 text-base md:text-lg font-normal font-['Space_Grotesk'] leading-7">
            Change notices are issued only through approved operational channels. The mechanisms, cadence, audience, and materiality definitions shown here reflect only what has been operationally approved.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {notificationCards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col bg-zinc-900/80 rounded-2xl border border-gray-800 overflow-hidden group shadow-lg hover:border-gray-700 transition-colors h-full"
            >
              {/* Card Image */}
              <div className="w-full h-40 relative overflow-hidden bg-zinc-800 shrink-0">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={card.imageSrc}
                  alt={`${card.title} illustration`}
                />
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col gap-3 flex-grow">
                <h3 className="text-slate-100 text-lg font-bold font-['Space_Grotesk'] leading-snug">
                  {card.title}
                </h3>

                <p className="text-slate-400 text-sm font-normal font-['Space_Grotesk'] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Alert Banner */}
        <div className="w-full p-5 bg-zinc-900/80 rounded-xl border border-gray-800 flex items-center gap-3 shadow-md">
          <div className="w-1.5 h-1.5 bg-teal-500 rounded-full shrink-0 animate-pulse" />
          <p className="text-slate-400 text-sm font-normal font-['Space_Grotesk'] leading-snug">
            <strong className="text-teal-400 font-bold mr-1">Truth notice:</strong>
            {' '}Marketing consent is separate from operational/legal notice purpose and is never prechecked or bundled.
          </p>
        </div>
      </div>
    </section>
  );
}
