import { FC } from 'react';
import Link from 'next/link';
import { StyledLink } from 'components';
import styled from 'styled-components';
import { HeroPanelStyles } from './HeroPanel.styles';

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

const ReadMoreButton = styled(StyledLink)`
  ${ReadMore}
`;

type HeroImageProps = {
  src: string;
  description: string;
  title: string;
  id: string;
  slug: string;
};

export const HeroPanel: FC<HeroImageProps> = ({
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
          <Image src={src} alt="hero-image" />
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
