import React from 'react';
import {
  CardImage, Card, Name, NumOfPost,
} from './CirclePreview.style';
import Link from '../Link';
import { UnderlineAnimation } from '../UnderlineAnimation/UnderlineAnimation';

const CirclePreview = ({
  big, item, path, imageOnly, tag, pb,
}) => {
  return (
    <Card pb={pb}>
      <CardImage big={big}>
        <Link to={path}>
          <img
            src={item.imageUrl}
            alt="Cool"
          />
        </Link>
      </CardImage>
      {
        !imageOnly
        && (
        <>
          <Name big={big}>
            <UnderlineAnimation>
              <Link to={path}>
                {tag && '#'}
                {item.name}
              </Link>
            </UnderlineAnimation>
          </Name>
          <NumOfPost>
            {item.numberOfPost}
            {' '}
            posts
          </NumOfPost>
        </>
        )
      }

    </Card>
  );
};

export default CirclePreview;
