import React from 'react';
import styled from 'styled-components';
import { BrowserView, MobileView } from 'react-device-detect';

import Label, { LabelType } from '../components/Label';
import Pokemon, { Pokemons } from '../components/Pokemon';
import Project from '../components/Project';

import { GitHubIcon } from '../util/icons';

const Wrapper = styled.section`
  padding: 0 24px 0 24px;
  margin-top: 120px;
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

export interface Project {
  title: string;
  description: string;
  technologies: Array<string>;
  links: Array<ProjectLink>;
}

const projects: Array<Project> = [
  {
    title: "Project Name",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    technologies: [ "React", "NodeJS" ],
    links: [ 
      { url: "https://github.com", icon: <GitHubIcon /> } 
    ]
  },
  {
    title: "Project Name",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    technologies: [ "React", "NodeJS" ],
    links: [ 
      { url: "https://github.com", icon: <GitHubIcon /> } 
    ]
  },
  {
    title: "Project Name",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    technologies: [ "React", "NodeJS" ],
    links: [ 
      { url: "https://github.com", icon: <GitHubIcon /> } 
    ]
  },
  {
    title: "Project Name",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    technologies: [ "React", "NodeJS" ],
    links: [ 
      { url: "https://github.com", icon: <GitHubIcon /> } 
    ]
  },
  {
    title: "Project Name",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    technologies: [ "React", "NodeJS" ],
    links: [ 
      { url: "https://github.com", icon: <GitHubIcon /> } 
    ]
  }
];

interface ContainerTemplateProps {

}

const ContainerTemplate = ({ }: ContainerTemplateProps) => {
  
  return (
    <>
      <BrowserView>
      
      </BrowserView>
      <MobileView>
        <Wrapper>
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

export default ContainerTemplate;