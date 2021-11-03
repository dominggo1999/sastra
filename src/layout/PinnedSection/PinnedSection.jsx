import React from 'react';
import { Row, Col } from 'react-grid-system';
import Container from '../../shared/Container/Container';
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
              xs={12}
              lg={3}
            >
              <PinnedPage />
            </Col>
            <Col
              xs={12}
              lg={9}
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
