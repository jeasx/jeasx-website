/**
 * @param {import("../types").RouteProps} props
 */
export default async function Icon({ request, reply }) {
  reply.header("Content-Type", "image/png");
  reply.header("Cache-Control", "public, max-age=31536000, immutable");
  return new Response(
    (
      await fetch(
        `https://icon.horse${request.path.replace("/favicon/", "/icon/")}`,
      )
    ).body,
    {
      status: 200,
    },
  );
}
