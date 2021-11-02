import React from 'react';
import { Container } from 'react-grid-system';
import Section from '../../shared/Section/Section';
import { SubscribeWrapper, SubscribeText, SubscribeForm } from './Subscribe.style';
import Button from '../../shared/Button/Button';

const Subscribe = () => {
  return (
    <Section>
      <Container>
        <SubscribeWrapper>
          <SubscribeText>Subscribe to new posts.</SubscribeText>
          <SubscribeForm>
            <input
              type="email"
              placeholder="Your email address"
            />
            <Button>Subscribe</Button>
          </SubscribeForm>
        </SubscribeWrapper>
      </Container>
    </Section>
  );
};

export default Subscribe;
