import { useViewport } from 'hooks';
import { NavBarStyles } from './NavBar.styles';

export const NavBar = () => {
  const [width] = useViewport();
  return (
    <NavBarStyles.Nav>
      <NavBarStyles.List>
        <li>Recipes</li>
        <li>About</li>
        <li>Blog</li>
        <li>Contact</li>
      </NavBarStyles.List>
    </NavBarStyles.Nav>
  );
};
