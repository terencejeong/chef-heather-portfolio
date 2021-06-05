import { useState, useCallback } from 'react';
import { NavBarStyles } from './NavBar.styles';
import { SearchIcon, Hamburger, Sidebar } from './components';

const { Nav, List } = NavBarStyles;

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  return (
    <Nav role='navigation'>
      <List>
        <li>
          <Hamburger handleIsOpen={handleClick} />
          <Sidebar isOpen={isOpen} handleIsOpen={handleClick} />
        </li>
        <li>Omma's Recipes</li>
        <li>
          <SearchIcon />
        </li>
      </List>
    </Nav>
  );
};
