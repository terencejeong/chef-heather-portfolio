import styled from 'styled-components';
import { colors } from 'styles/constants/constants';
import { respondTo } from 'styles/utils';

const sharedBarStyle = `
  width: 20px;
  height: 2px;
  background-color: ${colors.white};
  margin: 4px 0;
  transition: 0.4s;
`;

const Nav = styled.nav`
  font-family: 'Lora Regular';
  ${respondTo.sm``}
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  & li {
    list-style: none;
  }

  & li:first-child {
    padding: 0;
  }
`;

const Hamburger = styled.div`
  display: inline-block;
  cursor: pointer;
`;

const SideNav: any = styled.nav`
  position: absolute;
  height: 100%;
  width: 100%;
  padding: 20px;
  transform: ${({ open }: { open: boolean }) =>
    open ? 'translateX(0)' : 'translateX(-100%)'};
  top: 0; /* Stay at the top */
  left: 0; /* Move to left */
  z-index: 10;
  background-color: ${colors.white};
  overflow-x: hidden; /* Disable horizontal scroll */
  transition: 0.3s;
  ${respondTo.md`
    max-width: 320px;
    transition: 0.5s;
  `}
`;

const Bar = styled.div`
  ${sharedBarStyle}
`;

export const NavBarStyles = {
  Nav,
  List,
  Hamburger,
  Bar,
  SideNav,
};
