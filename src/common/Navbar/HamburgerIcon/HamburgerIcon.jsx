import React from 'react';
import { BiMenu } from 'react-icons/bi';
import { Visible } from 'react-grid-system';
import tw, { styled } from 'twin.macro';
import NavLink from '../NavLink/NavLink';

export const Icon = styled.span`
  svg {
    ${tw`
      text-4xl 
    `}
  }
`;

// readable Visible props
/* eslint react/jsx-max-props-per-line: 0 */

const HamburgerIcon = ({ onClick }) => {
  return (
    <Visible xs sm md>
      <NavLink>
        <Icon onClick={onClick}>
          <BiMenu />
        </Icon>
      </NavLink>
    </Visible>
  );
};

export default HamburgerIcon;
