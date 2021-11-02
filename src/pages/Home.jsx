import React from 'react';
import PinnedSection from '../layout/PinnedSection/PinnedSection';
import Subscribe from '../layout/Subscribe/Subscribe';
import BlogList from '../layout/BlogList/BlogList';

const Home = () => {
  return (
    <>
      <PinnedSection />
      <BlogList />
      <Subscribe />
    </>
  );
};

export default Home;
