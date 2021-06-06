import { IRecipe } from 'lib/api/recipeApi.types';
import { LatestRecipesStyles } from './LatestRecipes.styles';

const {
	Section,
	Title
} = LatestRecipesStyles;

type LatestRecipesProps = {
	recipes: IRecipe[];
	title: string;
}

export const LatestRecipes: React.FC<LatestRecipesProps> = ({ recipes, title }) => {
	return (
		<Section>
			<Title>
				{title}
			</Title>
		</Section>
	)
};
