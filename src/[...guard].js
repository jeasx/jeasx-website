import { isJsxNode, jsxToString } from "jsx-async-runtime";

/**
 * @param {import("./types").RouteProps} props
 */
export default async function ({ request, reply }) {
  // Set the request and reply objects as context
  this.request = request;
  this.reply = reply;

  this.jsxToString = (jsxElement) => {
    if (isJsxNode(jsxElement)) {
      if (jsxElement.tag === "strong") {
        jsxElement.tag = "b";
      }
      if (jsxElement.tag === "a" && String(jsxElement.props.href).startsWith("https://")) {
        jsxElement.props.target = "_blank";
      }
    }
    return jsxToString.call(this, jsxElement);
  };
}
