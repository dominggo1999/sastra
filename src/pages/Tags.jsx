import React from 'react';
import List from '../layout/List/List';
import { tags } from '../data/tags';

// Fake top authors
const a = tags[0];
const topTags = [];
for (let i = 0; i < 3; i += 1) {
  topTags.push(a);
}

const moreTags = [];
for (let i = 0; i < 7; i += 1) {
  moreTags.push(a);
}

const Tags = () => {
  return (
    <>
      <List
        more={moreTags}
        top={topTags}
        path="/tag-single"
        tag
      />
    </>
  );
};

export default Tags;
