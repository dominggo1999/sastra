import React from 'react';
import { Icon } from './SocialIcon.style';
import icons from '../../constants/icons';

const SocialIcon = ({ item }) => {
  return (
    <Icon>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={item.link}
      >
        {icons[item.name]}
      </a>
    </Icon>
  );
};

export default SocialIcon;
