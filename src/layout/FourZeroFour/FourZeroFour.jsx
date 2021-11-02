import React from 'react';
import { Container } from 'react-grid-system';
import { Link } from 'react-router-dom';
import { Wrapper404, ErrorCode, ErrorMessage } from './FourZeroFour.style';
import Button from '../../shared/Button/Button';
import Section from '../../shared/Section/Section';

const FourZeroFour = () => {
  return (
    <Section>
      <Container>
        <Wrapper404>
          <ErrorCode>
            404
          </ErrorCode>
          <ErrorMessage>
            Page not found
          </ErrorMessage>
          <Link to="/">
            <Button>
              Back To Homepage
            </Button>
          </Link>
        </Wrapper404>
      </Container>
    </Section>
  );
};

export default FourZeroFour;
