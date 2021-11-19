import { StyledLink } from 'components';
import { fetchEntries } from 'lib/api/recipe';

export default function Recipes({ recipes }) {
  return (
    <>
      <h1>Heathers Recipes</h1>
      <section>
        {recipes.map((recipe) => (
          <StyledLink
            href={`/recipes/${recipe.id}`}
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
  const recipes = await fetchEntries();
  return { props: { recipes }, revalidate: 60 };
}
