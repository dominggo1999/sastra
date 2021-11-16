import React from 'react';
import { Container } from '../../shared/Flexi';
import {
  Title, Description, Wrapper, BackgroundBox, DotsBackground,
} from './SectionHeader.style';
import { colors } from '../../constants/colors';

const SectionHeader = ({ title, description, bg }) => {
  return (
    <Container>
      <Wrapper>
        <DotsBackground />
        <BackgroundBox bg={colors[bg]} />
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Wrapper>
    </Container>
  );
};

export default SectionHeader;
