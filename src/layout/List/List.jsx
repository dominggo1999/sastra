import React from 'react';
import short from 'short-uuid';
import tw from 'twin.macro';
import {
  BottomListWrapper,
} from './List.style';
import Section from '../../shared/Section/Section';
import { Row, Container, Col } from '../../shared/Flexi';
import CirclePreview from '../../shared/CirclePreview/CirclePreview';
import SectionHeader from '../../shared/SectionHeader/SectionHeader';

// path props hanya untuk testing saja untuk membedakan antara author list atau tag list
// path nya nanti akan didapatkan dari slug masing-masing tag dan authors

const List = ({
  top, more, path, tag,
}) => {
  return (
    <Section>
      <Container>
        <SectionHeader>Top Authors This Week</SectionHeader>
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
                  tag={tag}
                />
              </Col>
            );
          })}
        </Row>

        <SectionHeader spaceTop>See Also</SectionHeader>
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
                    tag={tag}
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
