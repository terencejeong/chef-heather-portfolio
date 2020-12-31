import Link from 'next/link';
import styled from 'styled-components';
import LinkStyles from './StyledLink.style';

const LinkComponent = ({
  as,
  children,
  className,
  href,
}: {
  as?: string;
  children: any;
  className?: string;
  href?: string;
}) => (
  <Link href={href} as={as} passHref>
    <a className={className}>{children}</a>
  </Link>
);

export const StyledLink = styled(LinkComponent)`
  ${LinkStyles}
`;
