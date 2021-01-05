import { NavBar } from 'components';
import { HeaderStyles } from './Header.styles';
import { StyledLink } from '../StyledLink/StyledLink';
// TODO: 1) Making the HTML Schemantic
export const Header = () => {
  return (
    <>
      <HeaderStyles.Header>
        <HeaderStyles.HeroImage>
          <StyledLink
            href='https://via.placeholder.com/632'
            forwardedAs='https://via.placeholder.com/632'
            className='logo'
          >
            <img src='https://via.placeholder.com/632'></img>
          </StyledLink>
        </HeaderStyles.HeroImage>
        <NavBar />
      </HeaderStyles.Header>
    </>
  );
};
