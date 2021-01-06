import { useState, useCallback } from 'react';
import { NavBarStyles } from './NavBar.styles';
import { SearchIcon, Hamburger, Sidebar } from './components';

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  return (
    <NavBarStyles.Nav role='navigation'>
      <NavBarStyles.List>
        <li>
          <Hamburger handleIsOpen={handleClick} />
          <Sidebar isOpen={isOpen} handleIsOpen={handleClick} />
        </li>
        <li>Heather Jeong</li>
        <li>
          <SearchIcon />
        </li>
      </NavBarStyles.List>
    </NavBarStyles.Nav>
  );
};
