import React from 'react';
import short from 'short-uuid';
import tw from 'twin.macro';
import { Container, Row, Col } from '../../shared/Flexi';
import SectionTitle from '../../shared/SectionTitle/SectionTitle';
import Section from '../../shared/Section/Section';
import { subPlan } from '../../data/subPlan';
import PlanCard from '../PlanCard/PlanCard';
import { Plans } from './SubscriptionPlan.style';
import FormMessage from '../../shared/FormMessage/FormMessage';
import Link from '../../shared/Link';

const SubscriptionPlan = () => {
  return (
    <Section>
      <Container>
        <SectionTitle>Choose your plan</SectionTitle>
        <Plans>
          <Row
            tw="gap-y-20"
            justify="center"
          >
            {subPlan && subPlan.map((item) => {
              return (
                <Col
                  tw="w-full md:w-6/12 lg:w-4/12"
                  key={short.generate()}
                >
                  <PlanCard
                    item={item}
                  />
                </Col>
              );
            })}
          </Row>
        </Plans>
        <FormMessage center>
          Already have an account?
          {' '}
          <Link to="/login">
            Sign In
          </Link>
        </FormMessage>
      </Container>
    </Section>
  );
};

export default SubscriptionPlan;
