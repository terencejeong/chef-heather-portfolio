import { useState, useCallback } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { StyledLink } from 'components';
import { NavBarStyles } from './NavBar.styles';
import { SearchIcon, Hamburger, Sidebar } from './components';

const { Nav, List } = NavBarStyles;

// TODO: Turn this into an actual Icon.
const HomeIcon = styled(StyledLink)`
  color: white;
  font-size: 14px;
  & img {
    height: 25px;
    width: auto;
  }
`

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
        <li>
          {/* Turn into actual icon */}
          <HomeIcon
            href="/"
            forwardedAs="/"
          >
            <img src='/taegeuk.svg' alt='next' />
          </HomeIcon>
        </li>
        <li>
          <SearchIcon />
        </li>
      </List>
    </Nav>
  );
};
