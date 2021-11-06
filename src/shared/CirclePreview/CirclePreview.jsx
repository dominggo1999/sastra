import React from 'react';
import {
  CardImage, Card, Name, NumOfPost,
} from './CirclePreview.style';
import Link from '../Link';
import { UnderlineAnimation } from '../UnderlineAnimation/UnderlineAnimation';

const CirclePreview = ({ big, item, path }) => {
  return (
    <Card big={big}>
      <CardImage big={big}>
        <Link to={path}>
          <img
            src={item.imageUrl}
            alt="Cool"
          />
        </Link>
      </CardImage>
      <Name big={big}>
        <UnderlineAnimation>
          <Link to={path}>
            {item.name}
          </Link>
        </UnderlineAnimation>
      </Name>
      <NumOfPost>
        {item.numberOfPost}
        {' '}
        posts
      </NumOfPost>
    </Card>
  );
};

export default CirclePreview;
