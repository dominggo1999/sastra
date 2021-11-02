import React from 'react';
import { Row, Col } from 'react-grid-system';
import short from 'short-uuid';
import { Link } from 'react-router-dom';
import {
  PinnedPostWrapper, PinnedPostCard, PinnedPostTitle, PinnedPostCardTitle, PinnedPostCardAuthor,
} from './PinnedPost.style';
import { UnderlineAnimation } from '../../shared/UnderlineAnimation/UnderlineAnimation';

const postData = [
  {
    title: 'Everything has beauty, but not everyone sees it',
    author: 'Ernest Dallas',
  },
  {
    title: 'Design is a mirror, reflecting the culture',
    author: 'Matthew Pisco',
  },
  {
    title: 'I always loved aesthetics',
    author: 'Matthew Davis',
  },
];

const PinnedPost = () => {
  return (
    <PinnedPostWrapper>
      <PinnedPostCardTitle>
        Don&apos;t miss it
      </PinnedPostCardTitle>
      <Row align="stretch">
        {postData && postData.map((data) => {
          return (
            <Col
              md={4}
              key={short.generate()}
            >
              <PinnedPostCard>
                <PinnedPostTitle>
                  <Link to="/blog-single">
                    <UnderlineAnimation>
                      {data.title}
                    </UnderlineAnimation>
                  </Link>
                </PinnedPostTitle>
                <PinnedPostCardAuthor>
                  {data.author}
                </PinnedPostCardAuthor>
              </PinnedPostCard>
            </Col>
          );
        })}
      </Row>
    </PinnedPostWrapper>
  );
};

export default PinnedPost;
