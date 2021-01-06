import { NavBar } from 'components';
import { HeaderStyles } from './Header.styles';
import { StyledLink } from '../StyledLink/StyledLink';

// TODO: 1) Making the HTML Schemantic
export const Header = () => {
  return (
    <>
      <HeaderStyles.Header>
        <NavBar />
      </HeaderStyles.Header>
    </>
  );
};
