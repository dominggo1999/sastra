import React from 'react';
import { setConfiguration, Container } from 'react-grid-system';
import Routes from './Routes';
import { gridSystem } from './config/gridSystem.config';
import Navbar from './common/Navbar/Navbar/Navbar';
import Footer from './common/Footer/Footer';
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
      <Footer />
    </>
  );
};

export default App;
