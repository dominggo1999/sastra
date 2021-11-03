import React from 'react';
import { Col, Row } from 'react-grid-system';
import { Link } from 'react-router-dom';
import short from 'short-uuid';
import {
  PreviewWrapper, Excerpt, Tags, Meta, Title, ImageContent,
} from './PreviewSmall.style';
import { parseDate } from '../../util/parseDate';
import { UnderlineAnimation } from '../../shared/UnderlineAnimation/UnderlineAnimation';
import { colors } from '../../constants/colors';

const PreviewImage = ({ image }) => {
  return (
    <ImageContent bg={colors.blog5}>
      <Link to="/blog-single">
        <img
          src={image}
          alt="test"
        />
      </Link>
    </ImageContent>
  );
};

const PreviewSmall = ({ data }) => {
  const {
    tags, date, author, readingTime, excerpt, title, image,
  } = data;

  return (
    <Col
      xs={12}
      lg={6}
    >
      <PreviewWrapper>
        <Row>
          <Col xs={8}>
            <Title>
              <Link to="/blog-single">
                <UnderlineAnimation size={10}>
                  {title}
                </UnderlineAnimation>
              </Link>
            </Title>
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
          </Col>
          <PreviewImage image={image} />
        </Row>
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
      </PreviewWrapper>
    </Col>
  );
};

export default PreviewSmall;
