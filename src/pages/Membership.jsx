import React from 'react';
import SubscriptionPlan from '../layout/SubscribtionPlan/SubscriptionPlan';
import SectionHeader from '../layout/SectionHeader/SectionHeader';

const Membership = () => {
  return (
    <>
      <SectionHeader
        title="Membership"
        description="Unlock full access to Renge and see the entire library of subscribers-only content & updates"
        bg="membership"
      />
      <SubscriptionPlan />
    </>
  );
};

export default Membership;
