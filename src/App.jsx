import React from 'react';
import { setConfiguration } from 'react-grid-system';
import Routes from './Routes';
import ScrollToTopButton from './common/ScrollToTop/ScrollToTop';
import { gridSystem } from './config/gridSystem.config';
import Navbar from './common/Navbar/Navbar/Navbar';
import SpaceTop from './common/SpaceTop/SpaceTop';

// Change default react-grid-system config
setConfiguration(gridSystem);

const App = () => {
  return (
    <>
      {/* <ScrollToTopButton /> */}
      <Navbar />
      <SpaceTop />
      <Routes />
    </>
  );
};

export default App;
