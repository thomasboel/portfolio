import React from 'react';
import styled from 'styled-components';
import { BrowserView, MobileView } from 'react-device-detect';

import Label, { LabelType } from '../components/Label';
import Pokemon, { Pokemons } from '../components/Pokemon';
import Project from '../components/Project';

import { ExternalLinkIcon, GitHubIcon } from '../util/icons';
import { media, sizes } from '../util/theme';

const Wrapper = styled.section`
  padding: 0 24px 0 24px;
  margin-top: 120px;

  ${media(sizes.tablet)`
    padding: 0 80px 0 80px;
  `};
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

interface ProjectLink {
  url: string;
  icon: JSX.Element;
}

export interface ProjectData {
  title: string;
  description: string;
  technologies: Array<string>;
  links: Array<ProjectLink>;
}

const projects: Array<ProjectData> = [
  {
    title: "PayShare",
    description: "Share your receipts, select who, what and how much. Keep track of the economy.",
    technologies: [ "React-Native", ".NET Core", "Postgres", "AWS", "Docker" ],
    links: [ 
      { url: "https://payshare.dk", icon: <ExternalLinkIcon /> }
    ]
  },
  {
    title: "Noodle",
    description: "Noodle event planner will help you create and communicate the schedule to any participants.",
    technologies: [ "React-Native", "Express", "MariaDB", "Docker" ],
    links: [ 
      { url: "https://github.com", icon: <GitHubIcon /> } 
    ]
  },
  {
    title: "Presuno",
    description: "Presuno turns you and your smartphone into a complete TV crew! Live Streaming software.",
    technologies: [ "React", "React-Native", "Wowza", ".NET Core" ],
    links: [ 
      { url: "https://presuno.com", icon: <ExternalLinkIcon /> } 
    ]
  },
  {
    title: "Katalog",
    description: "Keep track and share diet/intolerance catalogs with your friends or the public!",
    technologies: [ "React-Native", "Express", "Postgres", "AWS", "Docker" ],
    links: [ 
      { url: "https://katalog.sikkerforskning.dk", icon: <ExternalLinkIcon /> } 
    ]
  },
  {
    title: "Portfolio Website",
    description: "Should you be interested, the code for this website has been pushed to GitHub 😃",
    technologies: [ "React with typescript ❤" ],
    links: [ 
      { url: "https://github.com/thomasboel/portfolio", icon: <GitHubIcon /> }
    ]
  }
];

const Projects = () => {
  
  return (
    <>
      <BrowserView>
        <Wrapper id="projects">
          
        <FlexRow>
          <Label type={LabelType.HEADER}>PROJECTS</Label>
          <Pokemon pokemon={Pokemons.PHANPY} style={{ marginLeft: 48 }}/>
        </FlexRow>

        </Wrapper>
      </BrowserView>
      <MobileView>
        <Wrapper id="projects">

          <FlexRow>
            <Label type={LabelType.HEADER}>PROJECTS</Label>
            <Pokemon pokemon={Pokemons.PHANPY} style={{ marginLeft: 24 }}/>
          </FlexRow>
          
          <ProjectsWrapper>
            {projects.map((project, index) => (
              <Project key={index} project={project} style={{ marginTop: index === 0 ? 32 : 56 }}/>
            ))}
          </ProjectsWrapper>

        </Wrapper>
      </MobileView>
    </>
  );
}

export default Projects;