import React from 'react';
import short from 'short-uuid';
import { Row, Col } from 'react-grid-system';
import {
  ListWrapper, ListHeader, CardImage, Card, BigCard, BottomListWrapper, Name, NumOfPost,
} from './List.style';
import Section from '../../shared/Section/Section';
import Container from '../../shared/Container/Container';
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
                  xs={6}
                  md={4}
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
                    xs={6}
                    md={4}
                    xl={3}
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
