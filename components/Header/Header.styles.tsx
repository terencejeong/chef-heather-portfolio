import styled from 'styled-components';
// import { respondTo } from 'styles/utils';
import { colors } from 'styles/constants/constants';

const Header = styled.header`
  background-color: ${colors.black};
  color: ${colors.white};
  padding: 15px;
`;

const HeroImage = styled.div``;

export const HeaderStyles = {
  Header,
  HeroImage,
};
