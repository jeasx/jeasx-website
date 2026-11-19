export default function Features({ children, columns = 3 }) {
  return (
    <div
      class="features not-prose"
      style={`--feature-columns: ${columns}`}
    >
      {children}
    </div>
  );
}
