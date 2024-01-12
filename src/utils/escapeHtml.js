import { escapeEntities } from "jsx-async-runtime";

/**
 * @param {TemplateStringsArray | string} input
 * @param {any[]} vars
 */
export default function escapeHtml(input, ...vars) {
  if (typeof input === "string") {
    return escapeEntities(input).trim();
  } else {
    return escapeEntities(
      input.reduce(
        (result, string, index) => `${result}${string}${vars[index] || ""}`,
        ""
      )
    ).trim();
  }
}
