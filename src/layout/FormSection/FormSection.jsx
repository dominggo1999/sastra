import React from 'react';
import { Row, Col, Visible } from 'react-grid-system';
import Container from '../../shared/Container/Container';
import { FormContent } from './FormSection.style';

const FormSection = ({ children }) => {
  return (
    <Container>
      <Row
        justify="center"
      >
        <Col
          xs={12}
          md={8}
          lg={5}
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
