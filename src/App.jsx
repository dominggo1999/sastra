import React from 'react';
import { setConfiguration } from 'react-grid-system';
import Routes from './Routes';
import ScrollToTopButton from './common/ScrollToTop/ScrollToTop';
import { gridSystem } from './config/gridSystem.config';
import Navbar from './common/Navbar/Navbar/Navbar';

// Change default react-grid-system config
setConfiguration(gridSystem);

const App = () => {
  return (
    <>
      {/* <ScrollToTopButton /> */}
      <Navbar />
      <Routes />
    </>
  );
};

export default App;
