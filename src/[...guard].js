/**
 * @param {import("./types").RouteProps} props
 */
export default function ({ request, reply }) {
  // Set the request and reply objects as context
  this.request = request;
  this.reply = reply;
}
