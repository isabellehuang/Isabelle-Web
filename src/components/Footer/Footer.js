import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { Div3, CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem> i24huang@uwaterloo.ca</LinkItem>
        </LinkColumn>
        <Div3>
          <SocialIcons href="https://www.instagram.com/isabellehuangg/?hl=en">
            <AiFillInstagram size = "3rem" />
          </SocialIcons>
          <SocialIcons href="https://github.com/isabellehuang">
            <AiFillGithub size = "3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/isabellehuangg/">
            <AiFillLinkedin size = "3rem" />
          </SocialIcons>
      </Div3>
      </LinkList>
    </FooterWrapper>
  );
};

export default Footer;
