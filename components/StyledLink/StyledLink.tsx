import Link from 'next/link';
import styled from 'styled-components';
import LinkStyles from './StyledLink.style';

export type LinkComponentProps = {
  as: any;
  children: JSX.Element | JSX.Element[];
  className?: string;
  href?: string;
  forwardedAs?: string;
};

const LinkComponent: React.FunctionComponent<LinkComponentProps> = ({
  as,
  children,
  className,
  href,
}) => (
  <Link href={href} as={as} passHref>
    <a className={className}>{children}</a>
  </Link>
);

export const StyledLink: any = styled(LinkComponent)<LinkComponentProps>`
  ${LinkStyles}
`;
