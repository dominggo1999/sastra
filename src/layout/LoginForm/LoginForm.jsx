import React from 'react';
import Button from '../../shared/Button/Button';
import Form from '../../shared/Form/Form';
import FormTitle from '../../shared/FormTitle/FormTitle';
import FormMessage from '../../shared/FormMessage/FormMessage';
import Link from '../../shared/Link';

const LoginForm = () => {
  return (
    <>
      <FormTitle>
        Sign In to Sastra
      </FormTitle>
      <Form>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          required
        />
        <Button type="submit">
          Send Login Email
        </Button>
      </Form>
      <FormMessage>
        Don&apos;t have an account yet?
        {' '}
        <Link to="/sign-up">
          Sign up
        </Link>
      </FormMessage>
    </>
  );
};

export default LoginForm;
