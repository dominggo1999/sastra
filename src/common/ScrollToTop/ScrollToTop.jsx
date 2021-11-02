import { animateScroll } from 'react-scroll';
import React from 'react';
import { ScrollButton } from './ScrollToTop.style';

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    animateScroll.scrollToTop({
      duration: 1600,
      smooth: 'easeInOutQuint',
    });
  };

  return (
    <ScrollButton onClick={scrollToTop}>
      To Top
    </ScrollButton>
  );
};

export default ScrollToTopButton;
