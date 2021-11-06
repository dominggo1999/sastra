import React from 'react';
import short from 'short-uuid';
import tw from 'twin.macro';
import {
  ListHeader, BottomListWrapper,
} from './List.style';
import Section from '../../shared/Section/Section';
import { Row, Container, Col } from '../../shared/Flexi';
import CirclePreview from '../../shared/CirclePreview/CirclePreview';

// path props hanya untuk testing saja untuk membedakan antara author list atau tag list
// path nya nanti akan didapatkan dari slug masing-masing tag dan authors

const List = ({ top, more, path }) => {
  return (
    <Section>
      <Container>
        <ListHeader>Top Authors This Week</ListHeader>
        <Row justify="center">
          {top && top.map((item) => {
            return (
              <Col
                tw="w-6/12 md:w-4/12"
                key={short.generate()}
              >
                <CirclePreview
                  item={item}
                  path={path}
                  big
                />
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
                  <CirclePreview
                    item={item}
                    path={path}
                  />
                </Col>
              );
            })}
          </Row>
        </BottomListWrapper>
      </Container>
    </Section>
  );
};

export default List;
