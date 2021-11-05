import React from 'react';
import tw from 'twin.macro';
import { Container, Row, Col } from '../../shared/Flexi';
import { FormContent } from './FormSection.style';

const FormSection = ({ children }) => {
  return (
    <Container>
      <Row
        justify="center"
      >
        <Col
          tw="w-full md:w-8/12 lg:w-5/12"
        >
          <FormContent>
            {children}
          </FormContent>
        </Col>
      </Row>
    </Container>
  );
};

export default FormSection;
