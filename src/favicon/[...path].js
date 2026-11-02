// Plain hostnames only (e.g. "www.jeasx.dev"), so nothing else reaches the upstream URL.
const DOMAIN = /^[a-z0-9-]+(\.[a-z0-9-]+)+$/i;

/**
 * @param {import("../types").RouteProps} props
 */
export default async function ({ request, reply }) {
  const domain = request.path.substring("/favicon/".length);

  // Invalid domains and missing icons fall through to the [404] route.
  if (!DOMAIN.test(domain)) {
    reply.status(404);
    return;
  }

  const response = await fetch(`https://duckduckgo.com/ip3/${domain}.ico`);
  if (!response.ok) {
    await response.body?.cancel();
    reply.status(404);
    return;
  }

  return new Response(response.body, {
    status: 200,
    headers: {
      "Content-Type": response.headers.get("content-type") ?? "image/x-icon",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
