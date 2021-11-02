import React from 'react';
import { Link } from 'react-router-dom';
import { PinnedPageCard, PinnedPageTitle, PinnedPageCardTitle } from './PinnedPage.style';
import { UnderlineAnimation } from '../../shared/UnderlineAnimation/UnderlineAnimation';

const PinnedPage = () => {
  return (
    <PinnedPageCard>
      <PinnedPageCardTitle>
        Announcement
      </PinnedPageCardTitle>
      <PinnedPageTitle>
        <Link to="/blog-single">
          <UnderlineAnimation>
            Get started with Sastra
          </UnderlineAnimation>
        </Link>
      </PinnedPageTitle>
    </PinnedPageCard>
  );
};

export default PinnedPage;
