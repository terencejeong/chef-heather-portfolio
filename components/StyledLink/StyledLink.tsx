import Link from 'next/link';
import styled from 'styled-components';
import LinkStyles from './StyledLink.style';

const StyledLink = ({
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

export default styled(StyledLink)`
  ${LinkStyles}
`;
