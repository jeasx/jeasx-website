import { getHighlighter } from "shiki";

const highlighter = await getHighlighter({
  themes: ["github-light"],
  langs: ["jsx", "sh"],
});

export default function Code({ source = "", lang = "jsx" }) {
  return highlighter.codeToHtml(source.trim(), { lang, theme: "github-light" });
}
