import React from 'react';
import short from 'short-uuid';
import tw from 'twin.macro';
import CirclePreview from '../../shared/CirclePreview/CirclePreview';
import {
  Wrapper, Name, Meta, Socials,
} from './AuthorSingleHeader.style';
import { Container, Row, Col } from '../../shared/Flexi';
import SocialIcon from '../../shared/SocialIcon/SocialIcon';
import HeaderDescription from '../../shared/HeaderDescription/HeaderDescription';

const AuthorSingleHeader = ({ item, path }) => {
  return (
    <Container>
      <Wrapper>
        <CirclePreview
          item={item}
          path={path}
          big
          imageOnly
        />
        <Name>
          {item.name}
        </Name>
        <Meta>
          from
          {' '}
          {item.location}
          {' '}
          /
          {' '}
          {item.numberOfPost}
          {' '}
          posts
        </Meta>

        <Socials>
          <Row justify="center">
            {
            item.socials && item.socials.map((item) => {
              return (
                <Col key={short.generate()}>
                  <SocialIcon
                    item={item}
                  />
                </Col>
              );
            })
          }
          </Row>
        </Socials>
        <HeaderDescription>
          {item.about}
        </HeaderDescription>
      </Wrapper>
    </Container>
  );
};

export default AuthorSingleHeader;
