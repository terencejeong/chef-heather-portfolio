import styled from 'styled-components';
// import { colors } from 'styles/constants/constants';
// import { respondTo } from 'styles/utils';

const Container = styled.div``;
const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 50px;
  font-family: 'Lora Bold';
`;

const Footer = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SiteLayoutStyles = {
  Container,
  Title,
  Main,
  Footer,
};
