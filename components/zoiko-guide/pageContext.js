// The page context each website page sends to Guide (PRD §5.1, §19.1): an approved page type
// that tunes suggestions, plus the path. Every public website page shows Guide. Nothing here
// is account- or event-specific; the path goes without its query string, and the server
// strips it again regardless.

// First matching rule wins; order from most to least specific. The page_type vocabulary is the
// server's (guide models.PAGE_TYPES).
const TYPE_RULES = [
  ["home", /^\/(home)?$/],
  ["pricing", /^\/(pricing|request-enterprise-quote)/],
  ["status", /^\/(developers-system-status|resource-system-status|support-system-status|zoikostream-status|zoikostream-service-reliability|resources?-service-updates)/],
  ["privacy", /^\/(privacy|zoikostream-privacy-notice|cookie-notice|zoikostream-cookie-notice|data-processing-addendum|zoikostream-data-protection)/],
  ["trust", /^\/(company-trust-center|footer-trust-center|security|responsible-disclosure|subprocessors|zoikostream-trust-center-compliance|resource-security-trust-center)/],
  ["contact", /^\/(contact-us|talk-to-an-expert|zoikostream-contact-support|zoikostream-enterprise-inquiries|live-event-inquiries|resource-contact-support)/],
  ["help", /^\/(support-|faqs-and-support|resource-help-center|live-events-support|resource-guides|resource-video-tutorial|quick-start)/],
  ["developer", /^\/(developer|developers|api-reference|resources?-api-reference|sdks|webhooks|video-apis|live-streaming-api|sample-application|start-building|zoikostream-codesamples|zoikostream-developer-|github|media-protocols|documentation-page|resource-developer-documentation|authentication)/],
  ["solutions", /^\/(solutions|memorials|wedding-celebration|graduation-detailed|civic-events-detailed|workship-detailed|corporate-broadcast-detailed|public-civic-institutions|enterprise-media|secure-enterprise-video|workflow-)/],
  ["product", /^\/(platform|live-streaming|managed-live-|private-streaming|recording-replay-archive|captions-and-languages|live-events-|live-event-|global-event-streaming|Broadcast-globally|broadcast-globally|assured-event|event-resilience|conference-and-multitrack|real-time-contribution|remote-contribution-landing|production-switching-graphics|accessible-multilingual|build-video-into-product|live-product-video|operational-analytics|secure-audience-access|plan-a-live-event|planning-and-briefing)/],
];

// page_id: the first path segment, normalised to the server's id format.
function pageId(pathname, type) {
  const seg = (pathname.split("/")[1] || "").toLowerCase().replace(/[^a-z0-9_-]/g, "-");
  return (seg || type).replace(/^[^a-z0-9]+/, "").slice(0, 64) || type;
}

export function guidePageFor(pathname) {
  const path = pathname || "/";
  const rule = TYPE_RULES.find(([, re]) => re.test(path));
  const type = rule ? rule[0] : "other";
  return { page_id: pageId(path, type), page_type: type };
}

export function deviceClass() {
  const w = typeof window !== "undefined" ? window.innerWidth : 1280;
  if (w < 768) return "mobile";
  if (w < 1024) return "tablet";
  return "desktop";
}

export function buildPageContext(pathname, page, { entryPoint = "launcher", eventToken = null } = {}) {
  let timezone;
  try {
    timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || null;
  } catch {
    timezone = null;
  }
  return {
    page_id: page.page_id,
    page_type: page.page_type,
    path: pathname || "/",
    locale: "en-US",
    ...(timezone ? { timezone } : {}),
    device_class: deviceClass(),
    entry_point: entryPoint,
    ...(eventToken ? { public_event_context_token: eventToken } : {}),
  };
}

// Public-safe event context hand-off. A viewer page that has a signed
// public_event_context_token (issued by the server for that event) publishes it here; Guide
// never derives event context from the URL or any private API (PR-020, API §18).
let eventToken = null;
const listeners = new Set();
export function setGuideEventContextToken(token) {
  eventToken = token || null;
  listeners.forEach((fn) => fn(eventToken));
}
export const getGuideEventContextToken = () => eventToken;
export function onGuideEventContextToken(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}
