import Image from "next/image";
import Link from "next/link";

interface WorkflowCard {
  image: string;
  title: string;
  description: string;
  href: string;
}

const workflowCards: WorkflowCard[] = [
  {
    image: "/images/live-streaming/workflow-1.png",
    title: "Build into a product",
    description:
      "Embed or orchestrate live video inside your application or service using developer tools and API endpoints.",
    href: "/developers",
  },
  {
    image: "/images/live-streaming/workflow-2.png",
    title: "Operate enterprise media",
    description:
      "Run recurring or governed broadcasts with operational ownership. Complete audit logs and team permission architecture.",
    href: "/platform",
  },
  {
    image: "/images/live-streaming/workflow-3.png",
    title: "Plan a managed event",
    description:
      "Professional planning and event-day operational support for scheduled events. Live backup signals and dedicated engineers.",
    href: "/plan-a-live-event",
  },
];

export default function ChooseLiveWorkflow() {
  return (
    <section
      className="relative w-full overflow-hidden bg-white px-6 py-16 sm:px-8 md:px-12 lg:px-16 xl:px-28 lg:py-24"
      style={{
        backgroundImage:
          "url('/images/live-streaming/contour-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 mx-auto flex w-full max-w-[1216px] flex-col gap-12">
        <div className="flex flex-col items-start gap-3">
          <h2 className="  text-3xl font-bold text-[#0F1B2D] sm:text-4xl">
            Choose your live workflow
          </h2>

          <p className="  text-lg font-normal text-[#4F5E74]">
            Find the right path for your live video needs
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {workflowCards.map((card) => (
            <div
              key={card.title}
              className="overflow-hidden rounded-2xl border border-[#E1E6EB] bg-white shadow-[0px_4px_14px_0px_rgba(10,17,34,0.04)]"
            >
              <div className="relative h-44 w-full">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                />
              </div>

              <div className="flex flex-col items-start gap-3 p-6">
                <h3 className="  text-xl font-bold text-[#0F1B2D]">
                  {card.title}
                </h3>

                <p className="  text-sm font-normal leading-5 text-[#4F5E74]">
                  {card.description}
                </p>

                <Link
                  href={card.href}
                  className="pt-2   text-sm font-bold text-[#4C86FF] transition-opacity hover:opacity-75"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}