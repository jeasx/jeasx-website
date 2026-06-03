import { jsxToString } from "jsx-async-runtime";

const BUILD_TIME_PREFIX = `/${process.env.BUILD_TIME}/`;

/**
 * @param {import("./types").RouteProps} props
 */
export default function ({ request, reply }) {
  // Handle static assets prefixed with build time
  if (request.url.startsWith(BUILD_TIME_PREFIX)) {
    return reply.sendFile(request.url.slice(BUILD_TIME_PREFIX.length));
  }

  // Set the request and reply objects as context
  this.request = request;
  this.reply = reply;

  this.jsxToString = (jsxElement) => {
    if (jsxElement.type === "tag") {
      if (jsxElement.tag === "strong") {
        jsxElement.tag = "b";
      }
      if (jsxElement.tag === "a" && jsxElement.props.href?.startsWith("https://")) {
        jsxElement.props.target = "_blank";
      }
    }
    return jsxToString.call(this, jsxElement);
  };
}
