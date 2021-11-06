import React from 'react';
import CirclePreview from '../../shared/CirclePreview/CirclePreview';
import { Container } from '../../shared/Flexi';
import { Wrapper } from './TagSingle.style';

const TagSingleHeader = ({ item, path }) => {
  return (
    <Container>
      <Wrapper>
        <CirclePreview
          item={item}
          path={path}
          big
        />
      </Wrapper>
    </Container>
  );
};

export default TagSingleHeader;
