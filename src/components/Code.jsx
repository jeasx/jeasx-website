import { escapeEntities } from "jsx-async-runtime";

export default function Code({ source = "", lang = "jsx" }) {
  return (
    <pre class={`prism-code language-${lang} overflow-auto`}>
      <code>{escapeEntities(source)}</code>
    </pre>
  );
}
