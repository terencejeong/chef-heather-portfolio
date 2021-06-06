import styled from 'styled-components';
import { colors } from 'styles/constants/constants';

type TextProps = {
	isDescription?: boolean;
}

const Article = styled.article`
	margin-bottom: 20px;
	padding: 0 10px;
`;

const ImageWrapper = styled.div`
	position: relative;
	width: 100%;
`;

const Image = styled.img`
	width: 100%;
	height: auto;
`;

const LatestWrapper = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	text-align: center;
	background: ${colors.yellow};
`;

const TextWrapper = styled.div`
	position: relative;
	width: 100%;
	// background: linear-gradient(to bottom left, ${colors.white} 50%, ${colors.grey} 50%);
`;

const Header = styled.h2`
	width: 100%;
	border-bottom: 5px solid ${colors.red};
	padding: 10px 0 5px;
	margin: 10px 0;
	color: ${colors.black};
	text-align: left;
	font-size: 28px;
	font-family: 'Lora Bold';
`;

const Text = styled.p<TextProps>`
	margin: 0;
	padding: ${({ isDescription }) => isDescription ? '5px 0' : '4px 15px'};
	font-family: ${({ isDescription }) => isDescription ? 'Playfair Regular' : 'Lora Regular'};
	font-size: 14px;
	color: ${({ isDescription }) => isDescription ? colors.grey : colors.black};
`;

const ReadMore = `
	font-family: 'Playfair Italic';
	color: #EDB654;
	font-size: 16px;
	text-decoration: underline;
	color: ${colors.grey};
`

const TransparentText = styled.span`
	color: transparent;
	-webkit-text-stroke: 1px ${colors.black};
`

export const HeroPanelStyles = {
	Article,
	ImageWrapper,
	Image,
	LatestWrapper,
	TextWrapper,
	Header,
	Text,
	ReadMore,
	TransparentText
}