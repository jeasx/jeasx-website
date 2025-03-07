export default function Content({ children = undefined }) {
  return (
    <div class="max-w-2xl min-w-0 flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16">
      {children}
    </div>
  );
}
