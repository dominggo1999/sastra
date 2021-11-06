import React from 'react';
import BlogList from '../layout/BlogList/BlogList';
import TagSingleHeader from '../layout/TagSingleHeader/TagSingleHeader';

export const tag = [
  {
    name: 'creative',
    numberOfPost: 8,
    imageUrl: 'https://images.pexels.com/photos/1037993/pexels-photo-1037993.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
  },
];

const TagSingle = () => {
  return (
    <>
      <TagSingleHeader
        item={tag[0]}
        path="/tag-single"
      />
      <BlogList />
    </>
  );
};

export default TagSingle;
