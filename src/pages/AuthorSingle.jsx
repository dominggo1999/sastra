import React from 'react';
import BlogList from '../layout/BlogList/BlogList';
import AuthorSingleHeader from '../layout/AuthorSingleHeader/AuthorSingleHeader';
import { authors } from '../data/authors';

const AuthorSingle = () => {
  return (
    <>
      <AuthorSingleHeader
        path="/author-single"
        item={authors[0]}
      />
      <BlogList />
    </>
  );
};

export default AuthorSingle;
