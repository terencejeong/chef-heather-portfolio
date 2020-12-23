import { useRouter } from 'next/router';
import markdownToHtml from 'lib/markdownToHtml';
import { getRecipeBySlug, getAllRecipes } from 'lib/api/recipeApi';
import { IRecipe } from 'lib/api/recipeApi.types';

type RecipeProps = {
  content: string;
  date?: string;
  slug: string;
};

export default function Recipe({ recipe }: { recipe: RecipeProps }) {
  const router = useRouter();
  return (
    <section>
      <div dangerouslySetInnerHTML={{ __html: recipe.content }}></div>
    </section>
  );
}

export async function getStaticProps({ params }) {
  const recipe: IRecipe = getRecipeBySlug(params.slug, [
    'content',
    'slug',
    'date',
  ]);
  const content = await markdownToHtml(recipe.content || '');
  return {
    props: {
      recipe: {
        ...recipe,
        content,
      },
    },
  };
}
/**
 * Specify dynamic routes to pre-render based on data.
 * If a page has dynamic routes (documentation) and uses getStaticProps it needs to define a list of paths
 * that have to be rendered to HTML at build time.
 * If you export an async function called getStaticPaths from a page that uses dynamic routes,
 * Next.js will statically pre-render all the paths specified by getStaticPaths.
 */
export async function getStaticPaths() {
  const recipes = getAllRecipes(['slug']);
  return {
    paths: recipes.map((recipe: any) => {
      return {
        params: {
          slug: recipe.slug,
        },
      };
    }),
    fallback: false,
  };
}
