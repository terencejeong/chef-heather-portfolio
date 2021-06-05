import Link from 'next/link';
import { StyledLink } from 'components';
import styled from 'styled-components';
import { HeroPanelStyles } from './HeroPanel.styles';

const {
	ImageWrapper,
	Image,
	TextWrapper,
	Text,
	DescriptionWrapper,
	Header,
	ReadMore
} = HeroPanelStyles;

const ReadMoreButton = styled(StyledLink)`
	${ReadMore}
`;

type HeroImageProps = {
	src: string;
	description: string;
	title: string;
	id: string;
	slug: string;
}

export const HeroPanel: React.FC<HeroImageProps> = ({ src, description, title, id, slug }) => {
	return (
		<>
			<ImageWrapper>
				<Link
					href={`/recipes/${id}`}
					as={`/recipes/${slug}`}
				>
					<Image src={src} />
				</Link>
				<TextWrapper>
					<Text>Latest & Greatest</Text>
				</TextWrapper>
			</ImageWrapper>
			<DescriptionWrapper>
				<Header>{title}</Header>
				<Text isDescription>{description}</Text>
				<ReadMoreButton
					href={`/recipes/${id}`}
					forwardedAs={`/recipes/${slug}`}
				>
					Continue Reading
				</ReadMoreButton>
			</DescriptionWrapper>

		</>
	)
};