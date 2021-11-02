import React, { useEffect } from 'react';
import { breakpoints } from '../constants/tailwindBreakpoints';

const useCloseSideNavbar = (handleClose) => {
  useEffect(() => {
    const closeSidebarOnLargeScreen = (e) => {
      if(window.innerWidth >= breakpoints.lg) {
        handleClose();
      }
    };

    window.addEventListener('resize', closeSidebarOnLargeScreen);

    return () => {
      window.removeEventListener('resize', closeSidebarOnLargeScreen);
    };
  }, []);
};

export default useCloseSideNavbar;
