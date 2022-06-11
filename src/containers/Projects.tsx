import React from 'react';
import styled from 'styled-components';
import { BrowserView, MobileView } from 'react-device-detect';

import Label, { LabelType } from '../components/Label';
import Pokemon, { Pokemons } from '../components/Pokemon';
import Project from '../components/Project';

import { useWindowSize } from '../hooks/useWindowSize';

import { media, sizes } from '../util/theme';

import projects from '../assets/projectData';
import { ProjectData } from '../util/interfaces';

const Wrapper = styled.section`
  padding: 0 24px 0 24px;
  margin-top: 120px;

  ${media(sizes.tablet)`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    padding: 0 80px 0 80px;
    margin-top: 200px;
    padding-bottom: 100px;
  `};
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  ${media(sizes.widescreen)`
    flex-direction: row;
    align-items: flex-start;
  `};
`;

interface ProjectsProps {
  setActiveProject: (project: ProjectData) => void;
}

const Projects = ({ setActiveProject }: ProjectsProps) => {
  const [ width ] = useWindowSize();

  return (
    <>
      <BrowserView>
        <Wrapper id="projects">
          
          <FlexRow>
            <Label type={LabelType.HEADER}>PROJECTS</Label>
            <Pokemon pokemon={Pokemons.PHANPY} style={{ marginLeft: 48 }}/>
          </FlexRow>

          {width >= 1920 ? (
            <>
              <ProjectsWrapper style={{ marginTop: 60 }}>
                {projects.slice(0, 3).map((project, index) => (
                  <Project key={index} project={project} handleOnClick={() => setActiveProject(project)} style={{ top: index * 20, marginLeft: index === 0 ? 0 : 160 }}/>
                ))}
              </ProjectsWrapper>

              <ProjectsWrapper style={{ marginTop: 120 }}>
                {projects.slice(3, 5).map((project, index) => (
                  <Project key={index} project={project} handleOnClick={() => setActiveProject(project)} style={{ top: index * 20, marginLeft: index === 0 ? 0 : 160 }}/>
                ))}
              </ProjectsWrapper>
            </>
          ) : (
            <>
              <ProjectsWrapper style={{ marginTop: 60 }}>
                {projects.slice(0, 2).map((project, index) => (
                  <Project key={index} project={project} handleOnClick={() => setActiveProject(project)} style={{ marginLeft: index === 0 ? 0 : 160 }}/>
                ))}
              </ProjectsWrapper>

              <ProjectsWrapper style={{ marginTop: 120 }}>
                {projects.slice(2, 4).map((project, index) => (
                  <Project key={index} project={project} handleOnClick={() => setActiveProject(project)} style={{ marginLeft: index === 0 ? 0 : 160 }}/>
                ))}
              </ProjectsWrapper>

              <ProjectsWrapper style={{ marginTop: 120 }}>
                {projects.slice(4, 5).map((project, index) => (
                  <Project key={index} project={project} handleOnClick={() => setActiveProject(project)} style={{ marginLeft: index === 0 ? 0 : 160 }}/>
                ))}
              </ProjectsWrapper>
            </>
          )}

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
              <Project key={index} project={project} handleOnClick={() => setActiveProject(project)} style={{ marginTop: index === 0 ? 32 : 56 }}/>
            ))}
          </ProjectsWrapper>

        </Wrapper>
      </MobileView>
    </>
  );
}

export default Projects;