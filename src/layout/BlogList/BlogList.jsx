import React from 'react';
import { Row, Col } from 'react-grid-system';
import Container from '../../shared/Container/Container';
import PreviewBig from '../PreviewBig/PreviewBig';
import { blogPosts } from '../../data/blogPosts';
import { BlogListGrid } from './BlogList.style';
import PreviewSmall from '../PreviewSmall/PreviewSmall';
import Section from '../../shared/Section/Section';

const test = blogPosts[0];

const BlogList = () => {
  return (
    <>
      <PreviewBig data={test} />
      <Section>
        <BlogListGrid>
          <Container>
            <Row>
              <PreviewSmall data={test} />
              <PreviewSmall data={test} />
              <PreviewSmall data={test} />
              <PreviewSmall data={test} />
            </Row>
          </Container>
        </BlogListGrid>
      </Section>
      <PreviewBig data={test} />
      <Section>
        <BlogListGrid>
          <Container>
            <Row>
              <PreviewSmall data={test} />
              <PreviewSmall data={test} />
              <PreviewSmall data={test} />
              <PreviewSmall data={test} />
            </Row>
          </Container>
        </BlogListGrid>
      </Section>
      <PreviewBig data={test} />
      <Section>
        <BlogListGrid>
          <Container>
            <Row>
              <PreviewSmall data={test} />
              <PreviewSmall data={test} />
              <PreviewSmall data={test} />
              <PreviewSmall data={test} />
            </Row>
          </Container>
        </BlogListGrid>
      </Section>
      <PreviewBig data={test} />
      <Section>
        <BlogListGrid>
          <Container>
            <Row>
              <PreviewSmall data={test} />
              <PreviewSmall data={test} />
              <PreviewSmall data={test} />
              <PreviewSmall data={test} />
            </Row>
          </Container>
        </BlogListGrid>
      </Section>
    </>
  );
};

export default BlogList;
