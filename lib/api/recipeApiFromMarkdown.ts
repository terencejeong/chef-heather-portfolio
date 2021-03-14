import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { IRecipe } from './recipeApi.types';
import getTime from 'utils/TimeUtils';

const recipeDirectory = join(process.cwd(), '_recipes');

export function getRecipesSlugs() {
  return fs.readdirSync(recipeDirectory);
}

export function getRecipeBySlug(slug, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(recipeDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const items = {} as IRecipe;
  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });
  return items;
}

export function getAllRecipes(fields = []) {
  const slugs = getRecipesSlugs();
  const recipes = slugs
    .map((slug) => getRecipeBySlug(slug, fields))
    // sort posts by date in descending order
    .sort(
      (post1, post2) =>
        getTime(new Date(post1.date)) - getTime(new Date(post2.date))
    );
  return recipes;
}
