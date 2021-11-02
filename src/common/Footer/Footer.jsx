import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import short from 'short-uuid';
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
            xs={12}
            lg={4}
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
            xs={12}
            lg={8}
          >
            <Row>
              {
                footerNavLinks && footerNavLinks.map((data) => {
                  return (
                    <Col
                      key={short.generate()}
                      xs={6}
                      sm={3}
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
