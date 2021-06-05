import styled from 'styled-components';
import { colors } from 'styles/constants/constants';

type TextProps = {
	isDescription?: boolean;
}

const ImageWrapper = styled.div`
	width: 100%;
	position: relative;
`;

const Image = styled.img`
	width: 100%;
	height: auto;
`;

const TextWrapper = styled.div`
	position: absolute;
	bottom: 4px;
	left: 2%;
	text-align: center;
	color: ${colors.white};
	background: ${colors.blue};
`;

const DescriptionWrapper = styled.div`
	width: 100 %;
	padding: 0 10px;
	// background: linear-gradient(to bottom left, ${colors.white} 50%, ${colors.grey} 50%);
`;

const Header = styled.h2`
	margin: 0;
	font-family: 'Playfair Bold';
	text-align: left;
	font-size: 28px;
`;

const Text = styled.p<TextProps>`
	margin: 0;
	padding: ${({ isDescription }) => isDescription ? '12px 0' : '2px 10px'};
	font-family: ${({ isDescription }) => isDescription ? 'Merriweather Light' : 'Playfair Regular'};
	font-size: 14px;
`;

const ReadMore = `
	font-family: 'Playfair Regular';
	color: #EDB654;
	font-size: 18px;
	text-decoration: none;
	text-align: right;
`

export const HeroPanelStyles = {
	ImageWrapper,
	Image,
	TextWrapper,
	DescriptionWrapper,
	Header,
	Text,
	ReadMore,
}