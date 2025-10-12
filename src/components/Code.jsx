export default function Code({ source = "", lang = "jsx" }) {
  return (
    <pre class={`prism-code language-${lang} overflow-auto`}>
      <code>{source}</code>
    </pre>
  );
}
