"use client";

// /guide on the website: the full-page Guide, embedded under the site's own header and
// footer. Client-only (the Guide never renders on the server), failure-isolated like the popup.
import { Component, Suspense } from "react";
import dynamic from "next/dynamic";
import { platformUrl } from "./guideApi";

const GuidePage = dynamic(() => import("./GuidePage"), { ssr: false, loading: () => null });

// Website paths for the page's links; Guide action links open on the platform host.
const SITE_LINKS = {
  liveEvents: "/live-events-overview",
  help: "/faqs-and-support",
  about: "/about-us",
  support: "/contact-us",
};
const openOnPlatform = (href) => window.location.assign(platformUrl(href));

class Isolate extends Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
  }

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch() {
    /* Guide failure is contained here by design; the rest of the site is unaffected. */
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

export default function GuidePageRoute() {
  return (
    <Isolate>
      <Suspense fallback={null}>
        <GuidePage embedded links={SITE_LINKS} openHref={openOnPlatform} />
      </Suspense>
    </Isolate>
  );
}
