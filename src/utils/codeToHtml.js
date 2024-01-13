import { getHighlighter } from "shiki";

const highlighter = await getHighlighter({
  theme: "github-light",
  langs: ["jsx"],
});

export default function codeToHtml(code, lang = "jsx") {
  return highlighter.codeToHtml(code.trim(), { lang });
}
