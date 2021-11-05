import React from 'react';
import Button from '../../shared/Button/Button';
import Form from '../../shared/Form/Form';
import FormTitle from '../../shared/FormTitle/FormTitle';

const SubscribeForm = () => {
  return (
    <>
      <FormTitle>
        Subscribe to new posts
      </FormTitle>
      <Form>
        <label htmlFor="name">Your Name
        </label>
        <input
          name="name"
          id="name"
          type="text"
          required
        />
        <label htmlFor="email">Email Address</label>
        <input
          name="email"
          id="email"
          type="email"
          required
        />
        <Button type="submit">
          Subscribe
        </Button>
      </Form>
    </>
  );
};

export default SubscribeForm;
