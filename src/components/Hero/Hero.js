import React from 'react';
import TextAnimation from './TextAnimation';

import { SecondaryBtn, Section, SectionSubText, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <div>
    <Section row nopadding>
      <LeftSection>
        <TextAnimation>Hi, I'm Isabelle Huang.</TextAnimation>
        <SectionText>
          I am first-year Computer Engineering student at the University of Waterloo. Recently, I've enjoyed snowboarding and familiarizing myself with Leetcode.
          <br /> <br /> Last Updated: December 21, 2022
        </SectionText>
        <SecondaryBtn onClick = {() => window.location = 'https://google.com'}> Say Hello!</SecondaryBtn>
      </LeftSection>
    </Section>
  </div>
);

export default Hero;
