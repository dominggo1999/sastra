import React from 'react';
import CirclePreview from '../../shared/CirclePreview/CirclePreview';
import { Container } from '../../shared/Flexi';
import HeaderDescription from '../../shared/HeaderDescription/HeaderDescription';
import { authors } from '../../data/authors';
import { Wrapper, Name, Description } from './AccountHeader.style';

const AccountHeader = () => {
  // Get user information from parent
  const item = authors[0];
  return (
    <Container>
      <Wrapper>
        <CirclePreview
          item={item}
          imageOnly
        >
        </CirclePreview>
        <Name>
          {item.name}
        </Name>
        <Description>
          Nice, you’re a paying subscriber! You’ve an active account with access to all areas. You’re all set, but if you need any help, get in touch with us and we’d be happy to help.
        </Description>
      </Wrapper>
    </Container>
  );
};

export default AccountHeader;
