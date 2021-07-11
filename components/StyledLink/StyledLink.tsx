import { ReactChildren, FunctionComponent } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import LinkStyles from './StyledLink.style';

export type LinkComponentProps = {
  as: any;
  children?: ReactChildren;
  className?: string;
  href?: string;
};

const LinkComponent: FunctionComponent<LinkComponentProps> = ({
  as,
  children,
  className,
  href,
}) => (
  <Link href={href} as={as} passHref>
    <a className={className}>{children}</a>
  </Link>
);

export const StyledLink: any = styled(LinkComponent)`
  ${LinkStyles}
`;
