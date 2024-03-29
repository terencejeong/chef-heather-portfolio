import React from 'react';
import drop from 'lodash/drop';
import head from 'lodash/head';
import { fetchEntries } from 'lib/api/recipe';
import { HeroPanel, LatestRecipes } from 'components';
import { IRecipe } from 'lib/api/recipeApi.types';
// import { HomeStyles } from 'styles/Home.styles';

type HomeProps = {
  recipes: IRecipe[];
  latestRecipe: IRecipe;
};

export default function Home({
  recipes,
  latestRecipe: { description, title, id, slug, ...rest },
}: HomeProps) {
  return (
    <>
      <HeroPanel
        src={rest.image[1]?.fields?.file?.url}
        description={description}
        title={title}
        id={id}
        slug={slug}
      />
      <LatestRecipes title="New Recipes" recipes={recipes} />
      {/* <HomeStyles.Title>Omma's Recipes</HomeStyles.Title> */}
      {/* <div>
        <StyledLink href='/recipes' forwardedAs='/recipes'>
          Recipes
        </StyledLink>
      </div> */}
    </>
  );
}

export async function getStaticProps() {
  try {
    const getRecipes: IRecipe[] = await fetchEntries();
    const latestRecipe = head(
      getRecipes.sort(
        (recipeA, recipeB) =>
          new Date(recipeB.date).getTime() - new Date(recipeA.date).getTime()
      )
    );
    const recipes = drop(getRecipes);
    return {
      props: {
        recipes, // If we want to make a copy we would have gone something like [...getRecipes]
        latestRecipe,
      },
    };
  } catch (e) {
    // Direct the user to a 404 page.
    return { notFound: true };
  }
}
