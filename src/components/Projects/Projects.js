import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <div>
    <Section nopadding id = "projects">
      <SectionDivider />
      <SectionTitle main> Projects </SectionTitle>
      <GridContainer>
        {projects.map(({title, description, image, tags, visit, id}) => (
          <BlogCard key={id}>
            <Img src={image} />
            <TitleContent>
              <HeaderThree title>{title}</HeaderThree>
            </TitleContent>
            <CardInfo>{description}</CardInfo>
            <div>
            <Hr />
              <TitleContent>Stack</TitleContent>
              <TagList>
                {tags.map((t, i) => (
                  <Tag key={i}>{t}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={projects.visit}>Code</ExternalLinks>
            </UtilityList>
          </BlogCard>
        ))}
      </GridContainer>
    </Section>
  </div>
);
 
export default Projects;