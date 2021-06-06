import styled from 'styled-components';
import { colors } from 'styles/constants/constants';

const Section = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 0 10px;
`;

const Title = styled.h2`
	margin: 0;
	font-family: 'Lora Bold';
	color: ${colors.black};
`

export const LatestRecipesStyles = {
	Section,
	Title
}