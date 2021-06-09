import React, { useState } from 'react';
import styled from 'styled-components';

import Label, { LabelType } from './Label';

import { ProjectData } from '../containers/Projects';
import { colors, media, sizes } from '../util/theme';
import { BrowserView, MobileView } from 'react-device-detect';

interface HoverProps {
  hover?: boolean;
}

const MobileWrapper = styled.div`
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

  ${media(sizes.tablet)`
    width: 420px;
    height: 420px;
  `};
`;

const BrowserWrapper = styled.div<HoverProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  position: relative;
  width: 420px;
  height: 420px;
  padding: 24px 24px 24px 24px;
  border: 6px solid ${colors.red};
  background-color: ${props => props.hover ? colors.red : 'transparent'};

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

  ${media(sizes.tablet)`
    width: 420px;
    height: 420px;
  `};
`;

const Links = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;

  ${media(sizes.tablet)`
    padding-bottom: 80px;
  `};
`;

const Technologies = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
  width: 100%;
`;

const FlexGrow = styled.div`
  flex: 1;
`;

const Description = styled.div`
  width: 420px;
`;

const IndentText = styled.div`
  margin-left: 24px;
`;

const Indentation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  margin-left: 16px;

  width: 100%;
`;

interface ProjectProps {
  project: ProjectData;
  style?: any;
}

const Project = ({ project, style }: ProjectProps) => {
  
  const [ hover, setHover ] = useState(false);

  return (
    <>
      <BrowserView>
        <BrowserWrapper 
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          hover={hover}
          style={style}
        >

          <Indentation>

            <Links>{project.links.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                style={{ marginRight: index === 0 ? 16 : 24 }}
              >{link.icon(hover ? colors.purple : colors.white)}</a>
            ))}</Links>

            <Label 
              type={LabelType.PROJECT_HEADER} 
              color={hover ? colors.white : colors.lightPurple}
            >{project.title.toUpperCase().replace(' ', '\n').concat('.')}</Label>

            <FlexGrow />

            <Technologies>{project.technologies.map((technology, index) => (
              <Label 
                key={index} 
                type={LabelType.PROJECT_SUB_HEADER}
                color={hover ? colors.purple : colors.white}
              >{technology.toUpperCase()}</Label>
            ))}</Technologies>

          </Indentation>

          <Backdrop />

        </BrowserWrapper>

        <Description style={{ ...style, marginTop: style.top + 40 }}>
          <IndentText>
            <Label>{project.description}</Label>
          </IndentText>
        </Description>

      </BrowserView>
      <MobileView>
        <MobileWrapper style={style}>

          <Indentation>

            <Links>{project.links.map((link, index) => (
              <a 
                key={index} 
                href={link.url} 
                style={{ marginRight: index === 0 ? 0 : 24 }}
              >{link.icon(colors.white)}</a>
            ))}</Links>

            <Label 
              type={LabelType.PROJECT_HEADER} 
              color={colors.lightPurple}
            >{project.title.toUpperCase().replace(' ', '\n').concat('.')}</Label>

            <FlexGrow>
              <Label>{project.description}</Label>
            </FlexGrow>

            <Technologies>{project.technologies.map((technology, index) => (
              <Label 
                key={index} 
                type={LabelType.PROJECT_SUB_HEADER}
              >{technology.toUpperCase()}</Label>
            ))}</Technologies>

          </Indentation>

          <Backdrop />

        </MobileWrapper> 
      </MobileView>
    </>
  );
}

export default Project;