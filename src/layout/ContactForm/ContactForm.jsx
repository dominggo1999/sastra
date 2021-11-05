import React from 'react';
import Button from '../../shared/Button/Button';
import Form from '../../shared/Form/Form';
import FormTitle from '../../shared/FormTitle/FormTitle';

const ContactForm = () => {
  return (
    <>
      <FormTitle>
        Contact Us
      </FormTitle>
      <Form>
        <label htmlFor="email">Your name</label>
        <input
          name="email"
          id="email"
          type="email"
          required
        />
        <label htmlFor="email">Email address
        </label>
        <input
          name="name"
          id="name"
          type="text"
          required
        />
        <label htmlFor="email">Message
        </label>
        <textarea
          name="message"
          id="message"
        >
        </textarea>
        <Button type="submit">
          Send Messages
        </Button>
      </Form>
    </>
  );
};

export default ContactForm;
