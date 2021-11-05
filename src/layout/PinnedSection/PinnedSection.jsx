import React from 'react';
import tw from 'twin.macro';
import { Row, Container, Col } from '../../shared/Flexi';
import PinnedPage from '../PinnedPage/PinnedPage';
import Section from '../../shared/Section/Section';
import PinnedPost from '../PinnedPost/PinnedPost';
import { PinnedSectionWrapper } from './PinnedSection.style';

const PinnedSection = () => {
  return (
    <Section>
      <Container>
        <PinnedSectionWrapper>
          <Row align="stretch">
            <Col
              tw="w-full lg:w-3/12"
            >
              <PinnedPage />
            </Col>
            <Col
              tw="w-full lg:w-9/12"
            >
              <PinnedPost />
            </Col>
          </Row>
        </PinnedSectionWrapper>
      </Container>
    </Section>
  );
};

export default PinnedSection;
