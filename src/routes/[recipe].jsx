export default async function ({ request }) {
  const id = request.query["id"];
  const { name, image, ingredients } = await (
    await fetch(`https://dummyjson.com/recipes/${id}`)
  ).json();

  return (
    <article class="recipe">
      <h1>{name}</h1>
      <img src={image} alt={name} />
      <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ul>
    </article>
  );
}
