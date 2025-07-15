/**
 * @param {import("../types").RouteProps} props
 */
export default async function ({ request, reply }) {
  const domain = request.path.substring("/favicon/".length);

  reply.header("Content-Type", "image/x-icon");
  reply.header("Cache-Control", "public, max-age=31536000, immutable");
  return new Response(
    (await fetch(`https://duckduckgo.com/ip3/${domain}.ico`)).body,
    {
      status: 200,
    },
  );
}
