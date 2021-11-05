import React from 'react';
import Routes from './Routes';
import Navbar from './common/Navbar/Navbar/Navbar';
import Footer from './common/Footer/Footer';
import SpaceTop from './common/SpaceTop/SpaceTop';

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
