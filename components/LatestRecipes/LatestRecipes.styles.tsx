import styled from 'styled-components';
import { colors } from 'styles/constants/constants';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 10px 20px;
`;

const Title = styled.h2`
  margin: 0 0 10px;
  font-family: 'Lora Bold';
  color: ${colors.black};
  border-bottom: 5px solid ${colors.blue};
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-flow: wrap;
`;

const Card = styled.div`
  width: 50%;
  margin-bottom: 15px;
  &:nth-child(odd) {
    padding-right: 5px;
  }
  &:nth-child(even) {
    padding-left: 5px;
  }
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

const Header = styled.h3`
  margin: 5px 0;
  font-family: 'Lora Bold';
`;

const Text = styled.p`
  margin: 0;
  font-size: 14px;
  font-family: 'Playfair Regular';
  color: ${colors.grey};
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const LatestRecipesStyles = {
  Section,
  Title,
  Container,
  Card,
  Image,
  Header,
  Text,
};
