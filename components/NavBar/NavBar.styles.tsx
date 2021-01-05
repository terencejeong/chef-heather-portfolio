import styled from 'styled-components';
import { respondTo } from 'styles/utils';

const Nav = styled.nav`
  font-family: 'Lora Regular';
  ${respondTo.sm`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
    max-width: 1024px;
    height: 50px;
    margin: 0 auto;
    margin-top: 20px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
  `}
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  & li {
    padding: 0 20px;
    list-style: none;
    display: inline-block;
  }

  & li:first-child {
    padding: 0;
    padding-right: 20px;
  }
`;

export const NavBarStyles = {
  Nav,
  List,
};
