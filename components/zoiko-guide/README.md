# ZoikoStream Guide (website)

The public AI assistant on every page of this website. The UI lives here; the Guide API, knowledge base and lead handling run on the ZoikoStream platform (`/api/v1/public-guide` on `get.zoikostream.com`), so nothing else is needed on this site.

- Mounted once in `app/layout.tsx` via `ZoikoGuide.jsx`. It is client-only, loads after the page is idle, and renders nothing if Guide fails or is switched off.
- `pageContext.js` maps website routes to the Guide page types, which tune the suggested topics.
- Guide action links (contact, status, sign-in) open on the platform host.

## Configuration

| Variable | Default | Notes |
| --- | --- | --- |
| `NEXT_PUBLIC_GUIDE_API_BASE` | `http://localhost:8000` in development, `https://get.zoikostream.com` in production | Origin of the ZoikoStream platform. |

## Platform settings this site needs (production)

On the platform backend, add this website's origin(s), e.g. `https://zoikostream.com,https://www.zoikostream.com`, to:

- `CORS_ORIGINS`
- `GUIDE_ALLOWED_ORIGINS`

Local development needs nothing: the platform accepts any `localhost` origin outside production. Run the platform backend on `http://localhost:8000` (or set `NEXT_PUBLIC_GUIDE_API_BASE`) and open this site on `http://localhost:3000`.

The UI is shared with the platform app (`client/src/guide/` in the ZoikoStream repo); keep the two in step when changing it.
