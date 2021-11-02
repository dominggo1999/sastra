import React from 'react';
import PreviewBig from '../PreviewBig/PreviewBig';
import { blogPosts } from '../../data/blogPosts';

const test = blogPosts[0];

const BlogList = () => {
  return (
    <>
      <PreviewBig data={test} />
      <PreviewBig data={test} />
      <PreviewBig data={test} />
    </>
  );
};

export default BlogList;
