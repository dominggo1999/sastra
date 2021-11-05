import React from 'react';
import Button from '../../shared/Button/Button';
import Form from '../../shared/Form/Form';
import FormTitle from '../../shared/FormTitle/FormTitle';
import FormMessage from '../../shared/FormMessage/FormMessage';
import Link from '../../shared/Link';

const SignUpForm = () => {
  return (
    <>
      <FormTitle>
        Get started with Sastra
      </FormTitle>
      <Form>
        <label htmlFor="email">Your name</label>
        <input
          id="name"
          type="text"
          required
        />
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          required
        />
        <Button type="submit">
          Continue
        </Button>
      </Form>
      <FormMessage>
        Already have an account?
        {' '}
        <Link to="/login">
          Sign In
        </Link>
      </FormMessage>
    </>
  );
};

export default SignUpForm;
