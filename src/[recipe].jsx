export default function ({ request }) {
  return (
    <main class="recipe">
      <h1>Recipe of the day</h1>
      <Recipe id={Number(request.query["id"])} />
    </main>
  );
}

async function Recipe({ id }) {
  const res = await fetch(`https://dummyjson.com/recipes/${id}`);
  if (!res.ok) return <p>Recipe not found</p>;
  const { name, image, ingredients } = await res.json();
  return (
    <article>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <ul>
        {ingredients.map((i) => (
          <li>{i}</li>
        ))}
      </ul>
    </article>
  );
}
