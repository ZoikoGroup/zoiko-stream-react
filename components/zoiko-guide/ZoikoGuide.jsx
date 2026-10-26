"use client";

// ZoikoStream Guide on the website — the only Guide piece the root layout imports.
//
// Loads the widget lazily, in the browser only, after the page is idle, so Guide can never
// delay rendering, navigation or Core Web Vitals (Architecture §4). Any failure — bundle, API
// down, kill switch — renders nothing and the website carries on (PR-041). The widget itself
// stays mounted across client-side navigation, so an open conversation survives a page change.
import { Component, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { guidePageFor } from "./pageContext";
import { platformUrl } from "./guideApi";

// Website paths for the Guide page's links; Guide action links open on the platform host.
const SITE_LINKS = {
  liveEvents: "/live-events-overview",
  help: "/faqs-and-support",
  about: "/about-us",
  support: "/contact-us",
};
const openOnPlatform = (href) => window.location.assign(platformUrl(href));

const GuideWidget = dynamic(() => import("./GuideWidget"), { ssr: false, loading: () => null });

class Isolate extends Component {
  constructor(props) {
    super(props);
    this.state = { failed: false };
  }

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch() {
    /* Guide failure is contained here by design; the page is unaffected. */
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

function useAfterIdle() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const go = () => setReady(true);
    if (typeof window.requestIdleCallback === "function") {
      const id = window.requestIdleCallback(go, { timeout: 2500 });
      return () => window.cancelIdleCallback?.(id);
    }
    const t = setTimeout(go, 1200);
    return () => clearTimeout(t);
  }, []);
  return ready;
}

export default function ZoikoGuide() {
  const pathname = usePathname() || "/";
  const ready = useAfterIdle();
  if (!ready) return null;
  return (
    <Isolate>
      {/* The launcher opens the full Guide design over the page; on /guide the page itself is
          the conversation, so the launcher steps aside there. */}
      {/* The launcher opens the full Guide design over the page; on /guide the page itself is
          the conversation, so the launcher steps aside there. */}
      {/* The launcher opens the full Guide design over the page; on /guide the page itself is
          the conversation, so the launcher steps aside there. */}
      {/* The launcher opens the full Guide design over the page; on /guide the page itself is
          the conversation, so the launcher steps aside there. */}
      <GuideWidget
        page={guidePageFor(pathname)}
        pathname={pathname}
        suppressed={pathname === "/guide"}
        variant="overlay"
        pageLinks={SITE_LINKS}
        pageOpenHref={openOnPlatform}
      />
    </Isolate>
  );
}
