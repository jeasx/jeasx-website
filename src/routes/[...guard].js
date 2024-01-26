import { requestContext } from "@fastify/request-context";

const BUILD_TIME_PREFIX = `/${process.env.BUILD_TIME}/`;

/**
 * @param {import("./types").RouteProps} props
 */
export default function RootGuard({ request, reply }) {
  // Handle static assets prefixed with build time
  if (request.urlData().path.startsWith(BUILD_TIME_PREFIX)) {
    return reply.sendFile(
      request.urlData().path.slice(BUILD_TIME_PREFIX.length)
    );
  }

  if (process.env.NODE_ENV !== "development") {
    reply.header("Cache-Control", "public, max-age=600, s-maxage=600");
  }

  // Set the request and reply objects in the request context
  requestContext.set("request", request);
  requestContext.set("reply", reply);
}
