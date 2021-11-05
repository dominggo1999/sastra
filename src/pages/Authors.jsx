import React from 'react';
import List from '../layout/List/List';
import { authors } from '../data/authors';

// Fake top authors
const a = authors[0];
const topAuthors = [];
for (let i = 0; i < 3; i += 1) {
  topAuthors.push(a);
}

const moreAuthors = [];
for (let i = 0; i < 10; i += 1) {
  moreAuthors.push(a);
}

const Authors = () => {
  return (
    <>
      <List
        more={moreAuthors}
        top={topAuthors}
      />
    </>
  );
};

export default Authors;
