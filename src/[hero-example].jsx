export default function ({ request }) {
  return (
    <main class="quote">
      <h1>Quote of the day</h1>
      <Quote id={Number(request.query.id)} />
    </main>
  );
}

async function Quote({ id }) {
  const { quote, author } = await (await fetch(`https://dummyjson.com/quotes/${id}`)).json();
  return (
    <blockquote>
      {quote} <cite>— {author}</cite>
    </blockquote>
  );
}
