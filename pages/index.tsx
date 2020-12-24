import { StyledLink } from 'components';
import { HomeStyles } from 'styles/Home.styles';

export default function Home() {
  return (
    <>
      <HomeStyles.Title>Welcome to Heather's Future website</HomeStyles.Title>
      <div>
        <StyledLink href='/recipes' forwardedAs='/recipes'>
          Recipes
        </StyledLink>
      </div>
    </>
  );
}
