import React from 'react';
import { Container, Row } from '../../shared/Flexi';
import PreviewBig from '../PreviewBig/PreviewBig';
import { blogPosts } from '../../data/blogPosts';
import { BlogListGrid } from './BlogList.style';
import PreviewSmall from '../PreviewSmall/PreviewSmall';
import Section from '../../shared/Section/Section';

const test = blogPosts[0];

// Fetch data blog list in parent components and past to this components
/*
    TODO
    1. There is 2 type of blog preview card, the big one and the small one
    2. 1,6,11   === > 5(n-1) +_1 yang besar
    2. 2,3,4,5 gabungkan jadi satu di row
*/

const BlogList = ({ blogList }) => {
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
