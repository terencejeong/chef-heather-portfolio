import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { IRecipe } from 'lib/api/recipeApi.types';
import { fetchEntries, fetchEntryBySlug } from 'lib/api/recipe';

type RecipeProps = {
  content: string;
  date?: string;
  slug: string;
};

export default function Recipe({ recipe }: { recipe: RecipeProps }) {
  return (
    <section>
      <div dangerouslySetInnerHTML={{ __html: recipe.content }}></div>
    </section>
  );
}

// TODO: Handle error case.
export async function getStaticProps({ params }) {
  // Fetch the recipe based on the slug name.
  const recipe = await fetchEntryBySlug(params.slug);
  // Take recipe and convert to HTML string.
  const content = await documentToHtmlString(recipe.content || '');
  return {
    props: {
      recipe: {
        ...recipe,
        content,
      },
    },
    revalidate: 60
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
  const recipes = await fetchEntries();
  return {
    paths: recipes.map((recipe: IRecipe) => {
      return {
        params: {
          slug: recipe.slug,
        },
      };
    }),
    fallback: false,
  };
}
