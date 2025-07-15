export default function Definition({
  title = undefined,
  children = undefined,
}) {
  return (
    <>
      <dt>{title}</dt>
      <dd>{children}</dd>
    </>
  );
}
