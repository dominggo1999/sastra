import React, { forwardRef } from 'react';
import short from 'short-uuid';
import NavLink from '../NavLink/NavLink';
import { DropdownWrapper } from './Dropdown.style';

const Dropdown = ({ dropdownLinks }) => {
  return (
    <DropdownWrapper>
      {
        dropdownLinks && dropdownLinks.map((data) => {
          return (
            <NavLink
              key={short.generate()}
              data={data}
            >
            </NavLink>
          );
        })
      }
    </DropdownWrapper>
  );
};

export default Dropdown;
