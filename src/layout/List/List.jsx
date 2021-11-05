import React from 'react';
import short from 'short-uuid';
import tw from 'twin.macro';
import {
  ListWrapper, ListHeader, CardImage, Card, BigCard, BottomListWrapper, Name, NumOfPost,
} from './List.style';
import Section from '../../shared/Section/Section';
import { Row, Container, Col } from '../../shared/Flexi';
import { UnderlineAnimation } from '../../shared/UnderlineAnimation/UnderlineAnimation';
import Link from '../../shared/Link';

const List = ({ top, more, path }) => {
  return (
    <Section>
      <Container>
        <ListWrapper>
          <ListHeader>Top Authors This Week</ListHeader>
          <Row justify="center">
            {top && top.map((item) => {
              return (
                <Col
                  tw="w-6/12 md:w-4/12"
                  key={short.generate()}
                >
                  <BigCard>
                    <CardImage>
                      <Link to="/author-single">
                        <img
                          src={item.imageUrl}
                          alt="Cool"
                        />
                      </Link>
                    </CardImage>
                    <Name>
                      <UnderlineAnimation>
                        <Link to="/author-single">
                          {item.name}
                        </Link>
                      </UnderlineAnimation>
                    </Name>
                    <NumOfPost>
                      {item.numberOfPost}
                      {' '}
                      posts
                    </NumOfPost>
                  </BigCard>
                </Col>
              );
            })}
          </Row>

          <ListHeader spaceTop>See Also</ListHeader>
          <BottomListWrapper>
            <Row
              justify="center"
            >
              {more && more.map((item) => {
                return (
                  <Col
                    tw="w-6/12 md:w-4/12 xl:w-3/12"
                    key={short.generate()}
                  >
                    <Card>
                      <CardImage>
                        <Link to="/author-single">
                          <img
                            src={item.imageUrl}
                            alt="Cool"
                          />
                        </Link>
                      </CardImage>
                      <Name>
                        <UnderlineAnimation>
                          <Link to="/author-single">
                            {item.name}
                          </Link>
                        </UnderlineAnimation>
                      </Name>
                      <NumOfPost>
                        {item.numberOfPost}
                        {' '}
                        posts
                      </NumOfPost>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </BottomListWrapper>
        </ListWrapper>
      </Container>
    </Section>
  );
};

export default List;
