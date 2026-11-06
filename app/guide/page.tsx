import type { Metadata } from "next";
import GuidePageRoute from "@/components/zoiko-guide/GuidePageRoute";

export const metadata: Metadata = {
  title: "ZoikoStream Guide",
  description:
    "Get instant help with joining events, fixing playback issues, captions and accessibility, replays, plans and more.",
};

export default function GuideRoutePage() {
  return <GuidePageRoute />;
}
