import React from 'react';
import styled from 'styled-components';

import { ProjectData } from '../containers/Projects';
import { colors } from '../util/theme';
import Label, { LabelType } from './Label';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  position: relative;
  width: calc(100vw - 140px);  // padding and distance to edges
  height: calc(100vw - 140px); // padding and distance to edges
  padding: 24px 24px 24px 24px;
  border: 6px solid ${colors.red};

  &:nth-child(even) {
    align-self: flex-end;
    margin-right: 16px;
  }
`;

const Backdrop = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;

  width: calc(100vw - 140px);  // padding and distance to edges
  height: calc(100vw - 140px); // padding and distance to edges
  padding: 24px 24px 24px 24px;
  border: 6px solid ${colors.red};
  opacity: .2;
  pointer-events: none;
`;

const Links = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
`;

const Technologies = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  width: 100%;
`;

const Description = styled.div`
  flex: 1;
`;

const Indentation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  margin-left: 16px;
`;

interface ProjectProps {
  project: ProjectData;
  style?: any;
}

const Project = ({ project, style }: ProjectProps) => {
  
  return (
    <Wrapper style={style}>

      <Indentation>

        <Links>{project.links.map((link, index) => <a key={index} href={link.url} style={{ marginRight: index === 0 ? 0 : 24 }}>{link.icon}</a>)}</Links>

        <Label type={LabelType.PROJECT_HEADER} color={colors.lightPurple}>{project.title.toUpperCase().replace(' ', '\n').concat('.')}</Label>

        <Description>
          <Label>{project.description}</Label>
        </Description>

        <Technologies>{project.technologies.map((technology, index) => <Label key={index} type={LabelType.PROJECT_SUB_HEADER}>{technology.toUpperCase()}</Label>)}</Technologies>

      </Indentation>

      <Backdrop />

    </Wrapper>
  );
}

export default Project;