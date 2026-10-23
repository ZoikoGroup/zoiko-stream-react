import type { NextConfig } from "next";

// The Guide API lives on the ZoikoStream platform. Proxying it through this site keeps the
// HttpOnly session cookie first-party: a SameSite=Lax cookie is withheld when the page and the
// API are different sites (e.g. localhost during development), which makes every request after
// session creation fail with 401. NEXT_PUBLIC_GUIDE_API_BASE is the platform origin.
const guideApiBase = (
  process.env.NEXT_PUBLIC_GUIDE_API_BASE || "https://get.zoikostream.com"
).replace(/\/+$/, "");

const nextConfig: NextConfig = {
  reactCompiler: true,
  async rewrites() {
    return [
      {
        source: "/api/v1/public-guide/:path*",
        destination: `${guideApiBase}/api/v1/public-guide/:path*`,
      },
    ];
  },
};

export default nextConfig;
