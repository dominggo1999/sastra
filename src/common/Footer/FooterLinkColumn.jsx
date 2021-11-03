import React from 'react';
import short from 'short-uuid';
import Link from '../../shared/Link';
import { Column, FooterLink } from './FooterLinkColumn.style';
import { UnderlineAnimation } from '../../shared/UnderlineAnimation/UnderlineAnimation';

const FooterLinkColumn = ({ data }) => {
  return (
    <Column>
      {data && data.map((item) => {
        return (
          <FooterLink
            key={short.generate()}
          >
            <Link
              to={item.path}
            >
              <UnderlineAnimation>
                {item.text}
              </UnderlineAnimation>
            </Link>
          </FooterLink>
        );
      })}
    </Column>
  );
};

export default FooterLinkColumn;
