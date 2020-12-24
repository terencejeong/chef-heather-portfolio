import Link from 'next/link';
import StyledLink from 'components/StyledLink/StyledLink';
import { getAllRecipes } from 'lib/api/recipeApi';

export default function Recipes({ recipes }) {
  return (
    <>
      <h1>Heathers Recipes</h1>
      <section>
        {recipes.map((recipe) => (
          <StyledLink
            href={`/recipes/${recipe.slug}`}
            forwardedAs={`/recipes/${recipe.slug}`}
            className='recipe'
            key={recipe.slug}
          >
            {recipe.title}
          </StyledLink>
        ))}
      </section>
    </>
  );
}

export async function getStaticProps() {
  const recipes = getAllRecipes(['slug', 'content', 'date', 'title']);
  return { props: { recipes } };
}
