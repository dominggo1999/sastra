import React, { useState, useRef } from 'react';
import { Visible } from 'react-grid-system';
import short from 'short-uuid';
import { BiSearchAlt2 } from 'react-icons/bi';
import Container from '../../../shared/Container/Container';
import Link from '../../../shared/Link';
import NavLink from '../NavLink/NavLink';
import {
  NavWrapper, Nav, Links, MenuDot,
} from './Navbar.style';
import Logo from '../Logo/Logo';
import { navLinks, navLinksDropDown } from '../../../data/navlinks';
// eslint-disable-next-line import/no-unresolved
import Dots from '../../../assets/dots.svg?component';
import Dropdown from '../Dropdown/Dropdown';
import useClickOutside from '../../../hooks/useClickOutside';
import Button from '../../../shared/Button/Button';
import HamburgerIcon from '../HamburgerIcon/HamburgerIcon';
import Backdrop from '../../../shared/Backdrop/Backdrop';
import SideNavbar from '../SideNavbar/SideNavbar';
import useCloseSideNavbar from '../../../hooks/useCloseSideNavbar';

// readable Visible props
/* eslint react/jsx-max-props-per-line: 0 */

const Navbar = () => {
  const dropdownRef = useRef(null);

  const [displayDropdown, setDisplayDropdown] = useState(false);
  const [showSideNavbar, setShowSideNavbar] = useState(false);

  const toggleDropdown = () => {
    setDisplayDropdown(!displayDropdown);
  };

  const closeDropdown = () => {
    setDisplayDropdown(false);
  };

  // Close dropdown menu on click outside
  useClickOutside(dropdownRef, closeDropdown);

  const openSideNavbar = () => {
    setShowSideNavbar(true);
  };

  const closeSideNavbar = () => {
    setShowSideNavbar(false);
  };

  // Close Sidenavbar on resize to large screen size
  useCloseSideNavbar(closeSideNavbar);

  return (
    <>

      <Backdrop open={showSideNavbar} handleClose={closeSideNavbar}>
      </Backdrop>

      <SideNavbar open={showSideNavbar} handleClose={closeSideNavbar} />

      <NavWrapper>
        <Container>
          <Nav>
            <Logo />
            <HamburgerIcon onClick={openSideNavbar} />
            <Visible lg xl xxl>
              <Links>
                {
                  navLinks.map((data) => {
                    return (
                      <NavLink
                        key={short.generate()}
                        data={data}
                      />
                    );
                  })
                }
                <NavLink>
                  <Link to="/sign-up">
                    <Button>
                      Register For Free
                    </Button>
                  </Link>
                </NavLink>
                <NavLink ref={dropdownRef}>
                  <MenuDot onClick={toggleDropdown}>
                    <Dots />
                  </MenuDot>
                  {
                    displayDropdown && (
                      <Dropdown dropdownLinks={navLinksDropDown} />
                    )
                  }
                </NavLink>
                <NavLink>
                  <BiSearchAlt2 />
                </NavLink>
              </Links>
            </Visible>
          </Nav>
        </Container>
      </NavWrapper>
    </>
  );
};

export default Navbar;
