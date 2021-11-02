import { CgClose } from 'react-icons/cg';
import React from 'react';
import short from 'short-uuid';
import { Link } from 'react-router-dom';
import { SideNavbarWrapper, CloseButton } from './SideNavbar.style';
import SideNavLink from '../SideNavLink/SideNavLink';
import Button from '../../../shared/Button/Button';

import { sideNavlinks } from '../../../data/navlinks';

const SideNavbar = ({ open, handleClose }) => {
  return (
    <SideNavbarWrapper open={open}>
      <CloseButton onClick={handleClose}>
        <CgClose />
      </CloseButton>
      <SideNavLink>
        <Link to="register">
          <Button>
            Register For Free
          </Button>
        </Link>
      </SideNavLink>

      {
        sideNavlinks && sideNavlinks.map((data) => {
          return (
            <SideNavLink
              handleClose={handleClose}
              key={short.generate()}
              data={data}
            />
          );
        })
      }
    </SideNavbarWrapper>
  );
};

export default SideNavbar;
