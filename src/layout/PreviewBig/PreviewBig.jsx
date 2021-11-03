import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import short from 'short-uuid';
import Link from '../../shared/Link';
import { Article } from '../../shared/Section/Section';
import {
  PreviewWrapper, Meta, Title, Excerpt, Tags, ImageContent, ImageWrapper, BackgroundColor, DotsBackground,
} from './Preview.style';
import { UnderlineAnimation } from '../../shared/UnderlineAnimation/UnderlineAnimation';
import { parseDate } from '../../util/parseDate';
import { colors } from '../../constants/colors';

const PreviewImage = ({ image }) => {
  return (
    <ImageContent>
      <ImageWrapper>
        <Link to="/blog-single">
          <img
            src={image}
            alt="test"
          />
        </Link>
      </ImageWrapper>
      <BackgroundColor bg={colors.blog2} />
      <DotsBackground />
    </ImageContent>
  );
};

const PreviewBig = ({ data }) => {
  const {
    tags, date, author, readingTime, excerpt, title, image,
  } = data;

  return (
    <Article>
      <Container>
        <PreviewWrapper>
          <PreviewImage image={image} />
          <Row>
            <Col
              xs={12}
              md={8}
            >
              <Meta>
                <time>{parseDate(date)}</time>
                {' '}
                by
                {' '}
                <Link to="author-single">
                  {author}
                </Link>
                {' '}
                — {readingTime} min read
              </Meta>
              <Title>
                <Link to="/blog-single">
                  <UnderlineAnimation size={20}>
                    {title}
                  </UnderlineAnimation>
                </Link>
              </Title>
              <Excerpt>
                {excerpt}
              </Excerpt>
              <Tags>
                {tags && tags.map((item) => {
                  return (
                    <Link
                      to="/tag-single"
                      key={short.generate()}
                    >
                      #{item}
                    </Link>
                  );
                })}
              </Tags>
            </Col>
          </Row>
        </PreviewWrapper>
      </Container>
    </Article>
  );
};

export default PreviewBig;
