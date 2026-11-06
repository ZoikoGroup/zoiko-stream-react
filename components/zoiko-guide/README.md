# ZoikoStream Guide (website)

The public AI assistant on every page of this website. The UI lives here; the Guide API, knowledge base and lead handling run on the ZoikoStream platform (`/api/v1/public-guide` on `get.zoikostream.com`), so nothing else is needed on this site.

The browser always calls the Guide API on this site's own origin (`/api/v1/public-guide`); `next.config.ts` proxies that path to `NEXT_PUBLIC_GUIDE_API_BASE`. Keeping the call same-origin is what lets the HttpOnly `zs_guide_sid` session cookie travel: a `SameSite=Lax` cookie is withheld whenever the page and the API are different sites, so calling the platform host directly makes every request after session creation fail with `401` (always true in local development).

- Mounted once in `app/layout.tsx` via `ZoikoGuide.jsx`. It is client-only, loads after the page is idle, and renders nothing if Guide fails or is switched off.
- `pageContext.js` maps website routes to the Guide page types, which tune the suggested topics.
- Guide action links (contact, status, sign-in) open on the platform host.

## Configuration

| Variable | Default | Notes |
| --- | --- | --- |
| `NEXT_PUBLIC_GUIDE_API_BASE` | `http://localhost:8000` in development, `https://get.zoikostream.com` in production | Origin of the ZoikoStream platform. |

## Platform settings this site needs (production)

The proxy forwards the browser's `Origin` header to the platform, so add this website's origin(s), e.g. `https://zoikostream.com,https://www.zoikostream.com`, to `GUIDE_ALLOWED_ORIGINS`. The browser no longer makes cross-origin requests, so `CORS_ORIGINS` is not required for Guide (it can stay configured).

Local development needs nothing: point `NEXT_PUBLIC_GUIDE_API_BASE` at the local platform backend (`http://localhost:8000`) or the live platform, and open this site on `http://localhost:3000`. The proxy keeps the session cookie first-party either way.

The UI is shared with the platform app (`client/src/guide/` in the ZoikoStream repo); keep the two in step when changing it.
