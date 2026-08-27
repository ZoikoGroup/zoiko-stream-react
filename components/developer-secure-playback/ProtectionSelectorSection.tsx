"use client";

import Link from "next/link";
import { useState } from "react";

const AUDIENCE = [
  "Anyone",
  "Authenticated users",
  "Entitled users",
  "Restricted internal audience",
  "Premium-content audience",
];

const TEMPORARY = ["Yes", "No", "Unsure"];

const DRM = ["Yes", "No", "Need guidance"];

const PATHS = [
  {
    id: "public",
    title: "Public",
    description:
      "Use only when content is intentionally public and no viewer authorization is required.",
    image: "/images/developer-secure-playback/public-path.png",
  },
  {
    id: "protected",
    title: "Protected / signed",
    description:
      "Grant access temporarily to an authenticated or entitled viewer using a supported ZoikoStream credential mechanism.",
    image: "/images/developer-secure-playback/protected-signed-path.png",
  },
  {
    id: "drm",
    title: "DRM-capable path",
    description:
      "Use only when the capability registry confirms DRM support for the required clients/content workflow.",
    image: "/images/developer-secure-playback/drm-capable-path.png",
  },
];

interface ChoiceRowProps {
  question: string;
  options: string[];
  value: string;
  onChange: (option: string) => void;
}

function ChoiceRow({ question, options, value, onChange }: ChoiceRowProps) {
  return (
    <fieldset>
      <legend className="text-sm font-bold leading-5 text-neutral-700">
        {question}
      </legend>

      <div className="mt-4 flex flex-wrap gap-3">
        {options.map((option) => {
          const isActive = option === value;

          return (
            <button
              key={option}
              type="button"
              aria-pressed={isActive}
              onClick={() => onChange(option)}
              className={`rounded-[100px] px-4 py-3 text-xs font-semibold outline-1 -outline-offset-1 transition-colors ${
                isActive
                  ? "bg-indigo-50 text-blue-400 outline-blue-400"
                  : "bg-white text-neutral-700 outline-zinc-200 hover:outline-blue-400"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

export default function ProtectionSelectorSection() {
  const [audience, setAudience] = useState("Authenticated users");
  const [temporary, setTemporary] = useState("Yes");
  const [drm, setDrm] = useState("No");

  const recommended =
    audience === "Anyone" && temporary !== "Yes"
      ? "public"
      : drm === "Yes"
        ? "drm"
        : "protected";

  return (
    <section className="w-full border-b border-zinc-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-20 xl:px-28">
        <div className="flex items-center gap-3.5">
          <span className="size-1.5 rounded-full bg-teal-400" />
          <span className="text-xs font-bold uppercase leading-5 tracking-wider text-teal-400">
            Selector
          </span>
        </div>

        <h2 className="mt-6 text-2xl font-bold leading-tight text-neutral-700 sm:text-3xl">
          Choose the right protection level.
        </h2>

        <p className="mt-4 max-w-3xl text-base leading-6 text-gray-500">
          Three quick questions route you to the correct path — capabilities
          shown are only those confirmed by the registry.
        </p>

        <div className="mt-10 flex flex-col gap-8 rounded-2xl bg-slate-50 p-6 outline-1 -outline-offset-1 outline-zinc-200 sm:p-8">
          <ChoiceRow
            question="Who should be able to watch?"
            options={AUDIENCE}
            value={audience}
            onChange={setAudience}
          />
          <ChoiceRow
            question="Do you need temporary, resource/session-bound access?"
            options={TEMPORARY}
            value={temporary}
            onChange={setTemporary}
          />
          <ChoiceRow
            question="Do you require device-enforced premium-content protection or content-license controls?"
            options={DRM}
            value={drm}
            onChange={setDrm}
          />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PATHS.map((path) => {
            const isRecommended = path.id === recommended;

            return (
              <article
                key={path.id}
                className={`flex flex-col overflow-hidden rounded-2xl bg-white outline-1 -outline-offset-1 ${
                  isRecommended
                    ? "outline-teal-400 shadow-[0px_0px_0px_1px_rgba(63,201,189,1)]"
                    : "outline-zinc-200"
                }`}
              >
                <img
                  src={path.image}
                  alt=""
                  aria-hidden="true"
                  className="h-52 w-full bg-slate-100 object-cover"
                />

                <div className="flex flex-1 flex-col gap-3 p-6">
                  {isRecommended && (
                    <span className="w-fit rounded-[100px] bg-emerald-50 px-2.5 py-1 text-xs font-bold text-teal-400">
                      Recommended for your answers
                    </span>
                  )}

                  <h3 className="text-base font-bold leading-6 text-neutral-700">
                    {path.title}
                  </h3>

                  <p className="text-xs leading-5 text-gray-500">
                    {path.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-8 text-xs leading-5 text-gray-400">
          Unsupported or unpublished paths show &quot;Not yet documented for this
          configuration&quot; rather than an invented setup.{" "}
          <Link
            href="/talk-to-an-expert"
            className="text-sm font-semibold text-blue-400"
          >
            Talk to an expert →
          </Link>
        </p>
      </div>
    </section>
  );
}
