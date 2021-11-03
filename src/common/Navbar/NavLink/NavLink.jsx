import React, { forwardRef } from 'react';
import Link from '../../../shared/Link';
import { LinkWrapper } from './NavLink.style';

const NavLink = forwardRef(({ data, children }, ref) => {
  return (
    <LinkWrapper ref={ref}>
      {
        !data
        && children
      }
      {
        data
        && (
        <Link to={data.path}>
          {data.text}
        </Link>
        )
      }
    </LinkWrapper>
  );
});

export default NavLink;
