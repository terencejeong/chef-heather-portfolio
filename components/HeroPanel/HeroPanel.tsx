import Link from 'next/link';
import { StyledLink } from 'components';
import styled from 'styled-components';
import { HeroPanelStyles } from './HeroPanel.styles';
import { LinkComponentProps } from '../StyledLink/StyledLink';

const {
  Article,
  ImageWrapper,
  Image,
  TextWrapper,
  LatestWrapper,
  Text,
  Header,
  ReadMore,
} = HeroPanelStyles;

const ReadMoreButton: any = styled(StyledLink)<LinkComponentProps>`
  ${ReadMore}
`;

type HeroImageProps = {
  src: string;
  description: string;
  title: string;
  id: string;
  slug: string;
};

export const HeroPanel: React.FC<HeroImageProps> = ({
  src,
  description,
  title,
  id,
  slug,
}) => {
  return (
    <Article>
      <TextWrapper>
        <Header>{title}</Header>
      </TextWrapper>
      <ImageWrapper>
        <Link href={`/recipes/${id}`} as={`/recipes/${slug}`} passHref>
          <Image src={src} alt="Image" />
        </Link>
        <LatestWrapper>
          <Text>Latest & Greatest</Text>
        </LatestWrapper>
      </ImageWrapper>
      <TextWrapper>
        <Text isDescription>{description}</Text>
        <ReadMoreButton
          href={`/recipes/${id}`}
          forwardedAs={`/recipes/${slug}`}
          key={slug}
        >
          Read more
        </ReadMoreButton>
      </TextWrapper>
    </Article>
  );
};
