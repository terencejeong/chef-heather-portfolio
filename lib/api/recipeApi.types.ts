export interface IRecipe {
  id: string;
  description: string;
  title: string;
  slug: string;
  date: string;
  content: string;
  image: any;
}

export interface IRecipeContent {
  data: any | {}; // TODO: Figure out what this data type looks like
  content: any[];
  nodeType: string;
}
