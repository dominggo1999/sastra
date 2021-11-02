import React from 'react';
import { Link } from 'react-router-dom';
import { SideLinkWrapper } from './SideNavLink.style';

const SideNavLink = ({ data, children, handleClose }) => {
  return (
    <SideLinkWrapper onClick={handleClose}>
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
    </SideLinkWrapper>
  );
};

export default SideNavLink;
