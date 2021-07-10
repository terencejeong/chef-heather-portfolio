import { NavBar } from 'components';
import { HeaderStyles } from './Header.styles';

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
