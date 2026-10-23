export default function Highlight({ title, icon = undefined, variant = false, children }) {
  return (
    <div class={variant ? "highlight highlight-warning" : "highlight"}>
      {icon}
      <div class="highlight-content">
        {title && <div class="highlight-title">{title}</div>}
        <div class="highlight-body prose">{children}</div>
      </div>
    </div>
  );
}
