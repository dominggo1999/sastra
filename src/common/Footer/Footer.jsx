import React from 'react';
import short from 'short-uuid';
import tw from 'twin.macro';
import { Container, Row, Col } from '../../shared/Flexi';
import {
  FooterWrapper, Copyright, FooterTextContent, FooterSocials, FooterIcon,
} from './Footer.style';
import Logo from '../Navbar/Logo/Logo';
import footerSocials from '../../data/footerSocials';
import { footerNavLinks } from '../../data/footerNavLinks';
import FooterLinkColumn from './FooterLinkColumn';

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Row>
          <Col
            tw="w-full lg:w-4/12"
          >
            <Logo />
            <FooterTextContent>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </FooterTextContent>
            <FooterSocials>
              {footerSocials && footerSocials.map((item) => {
                return (
                  <FooterIcon key={item.name}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={item.path}
                    >{item.icon()}
                    </a>
                  </FooterIcon>
                );
              })}
            </FooterSocials>
          </Col>
          <Col
            tw="w-full lg:w-8/12"
          >
            <Row>
              {
                footerNavLinks && footerNavLinks.map((data) => {
                  return (
                    <Col
                      key={short.generate()}
                      tw="w-6/12 lg:w-3/12"
                    >
                      <FooterLinkColumn data={data} />
                    </Col>
                  );
                })
              }
            </Row>
          </Col>
        </Row>
        <Copyright>
          Sastra © {new Date().getFullYear()}. All Right Reserved. Developed by
          {' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/dominggo1999"
          >dominggo1999
          </a>
        </Copyright>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
