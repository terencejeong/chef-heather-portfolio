import Head from 'next/head';
import { StyledLink } from 'components';
import { HomeStyles } from 'styles/Home.styles';

export default function Home() {
  return (
    <HomeStyles.Container>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <HomeStyles.Main>
        <HomeStyles.Title>Welcome to Heather's Future website</HomeStyles.Title>
        <div>
          <StyledLink href='/recipes' forwardedAs='/recipes'>
            Recipes
          </StyledLink>
        </div>
      </HomeStyles.Main>

      <HomeStyles.Footer>This is the footer</HomeStyles.Footer>
    </HomeStyles.Container>
  );
}
