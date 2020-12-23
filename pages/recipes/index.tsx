import Link from 'next/link';
import { getAllRecipes } from 'lib/api/recipeApi';

export default function Recipes({ recipes }) {
  return (
    <>
      <h1>Heathers Recipes</h1>
      <section>
        {recipes.map((recipe) => (
          <Link href={`/recipes/${recipe.slug}`} key={recipe.slug}>
            <a>{recipe.title}</a>
          </Link>
        ))}
      </section>
    </>
  );
}

export async function getStaticProps() {
  const recipes = getAllRecipes(['slug', 'content', 'date', 'title']);
  return { props: { recipes } };
}
