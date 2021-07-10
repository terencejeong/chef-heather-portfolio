import { FC } from 'react';
import Link from 'next/link';
import head from 'lodash/head';
import { IRecipe } from 'lib/api/recipeApi.types';
import { LatestRecipesStyles } from './LatestRecipes.styles';

const { Section, Title, Container, Card, Image, Header, Text } =
  LatestRecipesStyles;

type LatestRecipesProps = {
  recipes: IRecipe[];
  title: string;
};

export const LatestRecipes: FC<LatestRecipesProps> = ({ recipes, title }) => {
  return (
    <Section>
      <Title>{title}</Title>
      <Container>
        {recipes.map(({ image, title, description, id, slug }) => (
          <Link
            href={`/recipes/${id}`}
            as={`/recipes/${slug}`}
            key={id}
            passHref
          >
            <Card>
              <Image src={head(image)?.fields?.file?.url} />
              <Header>{title}</Header>
              <Text>{description}</Text>
            </Card>
          </Link>
        ))}
      </Container>
    </Section>
  );
};
