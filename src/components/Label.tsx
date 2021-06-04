import React from 'react';
import styled from 'styled-components';

import { colors } from '../util/theme';

interface Props {
  rtl: boolean;
}

const Header = styled.h1<Props>`
  color: ${props => props.color};
  letter-spacing: .080em;
  font-size: 40px;
  font-weight: 300;
  margin-block-start: 24px;

  text-align: ${props => props.rtl ? 'right' : 'left'};
`;

const ProjectHeader = styled.h2<Props>`
  color: ${props => props.color};
  letter-spacing: .060em;
  line-height: 30px;
  font-size: 30px;
  font-weight: 300;
  margin-block-start: 24px;
  white-space: pre-wrap;

  text-align: ${props => props.rtl ? 'right' : 'left'};
`;

const SubHeader = styled.h3<Props>`
  color: ${props => props.color};
  letter-spacing: 0em;
  font-size: 20px;
  font-weight: 300;
  margin-block-start: 24px;

  text-align: ${props => props.rtl ? 'right' : 'left'};
`;

const ProjectSubHeader = styled.h4<Props>`
  color: ${props => props.color};
  letter-spacing: .032em;
  font-size: 16px;
  font-weight: 300;

  text-align: ${props => props.rtl ? 'right' : 'left'};
`;

const Paragraph = styled.p<Props>`
  color: ${props => props.color};
  letter-spacing: .060em;
  line-height: 20px;
  font-size: 12px;
  margin-block-start: 16px;
  white-space: pre-wrap;

  text-align: ${props => props.rtl ? 'right' : 'left'};
`;

const MenuHeader = styled.h2<Props>`
  color: ${props => props.color};
  letter-spacing: .040em;
  font-size: 16px;

  text-align: ${props => props.rtl ? 'right' : 'left'};
`;

const MenuParagraph = styled.h3<Props>`
  color: ${props => props.color};
  letter-spacing: .040em;
  font-size: 20px;

  text-align: ${props => props.rtl ? 'right' : 'left'};
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
}

const Label = ({ children, type=LabelType.PARAGRAPH, color=colors.white, rtl=false }: LabelProps) => {
  
  switch (type) {
    case LabelType.HEADER:
      return (
        <Header 
          color={color}
          rtl={rtl}
        >{children}</Header>
      );
    case LabelType.PROJECT_HEADER:
      return (
        <ProjectHeader 
          color={color}
          rtl={rtl}
        >{children}</ProjectHeader>
      );
    case LabelType.SUB_HEADER:
      return (
        <SubHeader 
          color={color}
          rtl={rtl}
        >{children}</SubHeader>
      );
    case LabelType.PROJECT_SUB_HEADER:
      return (
        <ProjectSubHeader 
          color={color}
          rtl={rtl}
        >{children}</ProjectSubHeader>
      );
    case LabelType.PARAGRAPH:
      return (
        <Paragraph 
          color={color}
          rtl={rtl}
        >{children}</Paragraph>
      );
    case LabelType.MENU_HEADER:
      return (
        <MenuHeader 
          color={color}
          rtl={rtl}
        >{children}</MenuHeader>
      );
    case LabelType.MENU_PARAGRAPH:
      return (
        <MenuParagraph 
          color={color}
          rtl={rtl}
        >{children}</MenuParagraph>
      );

    default:
      return (
        <Paragraph 
          color={color}
          rtl={rtl}
        >{children}</Paragraph>
      );
  }
}

export default Label;