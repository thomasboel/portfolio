import React from 'react';
import styled from 'styled-components';

import { colors } from '../util/theme';
import { media, sizes } from '../util/theme';

interface Props {
  rtl: boolean;
  center: boolean;
}

const Header = styled.h1<Props>`
  color: ${props => props.color};
  letter-spacing: .080em;
  font-size: 40px;
  font-weight: 300;
  margin-block-start: 24px;

  text-align: ${props => props.center ? 'center' : props.rtl ? 'right' : 'left'};

  ${media(sizes.tablet)`
    font-size: 70px;
    margin-block-start: 32px;
  `};
`;

const ProjectHeader = styled.h2<Props>`
  color: ${props => props.color};
  letter-spacing: .060em;
  line-height: 30px;
  font-size: 30px;
  font-weight: 300;
  margin-block-start: 24px;
  white-space: pre-wrap;

  text-align: ${props => props.center ? 'center' : props.rtl ? 'right' : 'left'};

  ${media(sizes.tablet)`
    font-size: 50px;
    line-height: 60px;
    /*margin-block-start: 16px;*/
  `};
`;

const SubHeader = styled.h3<Props>`
  color: ${props => props.color};
  letter-spacing: 0em;
  font-size: 20px;
  font-weight: 300;
  margin-block-start: 24px;

  text-align: ${props => props.center ? 'center' : props.rtl ? 'right' : 'left'};

  ${media(sizes.tablet)`
    font-size: 30px;
    margin-block-start: 40px;
  `};
`;

const ProjectSubHeader = styled.h4<Props>`
  color: ${props => props.color};
  letter-spacing: .032em;
  font-size: 16px;
  font-weight: 300;

  text-align: ${props => props.center ? 'center' : props.rtl ? 'right' : 'left'};

  ${media(sizes.tablet)`
    font-size: 24px;
  `};
`;

const Paragraph = styled.p<Props>`
  color: ${props => props.color};
  letter-spacing: .060em;
  line-height: 20px;
  font-size: 12px;
  margin-block-start: 16px;
  white-space: pre-wrap;

  text-align: ${props => props.center ? 'center' : props.rtl ? 'right' : 'left'};

  ${media(sizes.tablet)`
    font-size: 20px;
    line-height: 40px;
    margin-block-start: 24px;
  `};
`;

const MenuHeader = styled.h2<Props>`
  color: ${props => props.color};
  letter-spacing: .040em;
  font-size: 16px;
  font-weight: 300;
  margin-block-start: 8px;

  text-align: ${props => props.center ? 'center' : props.rtl ? 'right' : 'left'};

  ${media(sizes.tablet)`
    font-size: 24px;
  `};
`;

const MenuParagraph = styled.h3<Props>`
  color: ${props => props.color};
  letter-spacing: .040em;
  font-size: 20px;
  font-weight: 300;
  margin-block-start: 24px;

  text-align: ${props => props.center ? 'center' : props.rtl ? 'right' : 'left'};

  ${media(sizes.tablet)`
    font-size: 30px;
    margin-block-start: 48px;
  `};
`;

export enum LabelType {
  HEADER="HEADER",
  PROJECT_HEADER="PROJECT_HEADER",
  SUB_HEADER="SUB_HEADER",
  PROJECT_SUB_HEADER="PROJECT_SUB_HEADER",
  PARAGRAPH="PARAGRAPH",
  MENU_HEADER="MENU_HEADER",
  MENU_PARAGRAPH="MENU_PARAGRAPH3"
}

interface LabelProps {
  children: any;
  type?: LabelType;
  color?: string;
  rtl?: boolean;
  center?: boolean;
}

const Label = ({ children, type=LabelType.PARAGRAPH, color=colors.white, rtl=false, center=false }: LabelProps) => {
  
  switch (type) {
    case LabelType.HEADER:
      return (
        <Header 
          color={color}
          rtl={rtl}
          center={center}
        >{children}</Header>
      );
    case LabelType.PROJECT_HEADER:
      return (
        <ProjectHeader 
          color={color}
          rtl={rtl}
          center={center}
        >{children}</ProjectHeader>
      );
    case LabelType.SUB_HEADER:
      return (
        <SubHeader 
          color={color}
          rtl={rtl}
          center={center}
        >{children}</SubHeader>
      );
    case LabelType.PROJECT_SUB_HEADER:
      return (
        <ProjectSubHeader 
          color={color}
          rtl={rtl}
          center={center}
        >{children}</ProjectSubHeader>
      );
    case LabelType.PARAGRAPH:
      return (
        <Paragraph 
          color={color}
          rtl={rtl}
          center={center}
        >{children}</Paragraph>
      );
    case LabelType.MENU_HEADER:
      return (
        <MenuHeader 
          color={color}
          rtl={rtl}
          center={center}
        >{children}</MenuHeader>
      );
    case LabelType.MENU_PARAGRAPH:
      return (
        <MenuParagraph 
          color={color}
          rtl={rtl}
          center={center}
        >{children}</MenuParagraph>
      );

    default:
      return (
        <Paragraph 
          color={color}
          rtl={rtl}
          center={center}
        >{children}</Paragraph>
      );
  }
}

export default Label;