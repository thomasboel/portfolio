import React from 'react';
import styled from 'styled-components';

import { colors } from '../util/theme';

const Wrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  position: relative;
  padding: 13px 37px 13px 37px;
  border: 3px solid ${colors.lightPurple};
`;

const ButtonText = styled.p`
  color: ${colors.lightPurple};
  font-size: 12px;
  font-weight: 300;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  
  width: 100%;
  height: 100%;
  border: 3px solid ${colors.lightPurple};
  opacity: .2;
`;

interface ButtonProps {
  children: any;
  href: string;
  style?: any;
}

const Button = ({ children, href, style }: ButtonProps) => {
  
  return (
    <a href={href}>
      <Wrapper style={style}>
        <ButtonText>{children}</ButtonText>
        <Backdrop />
      </Wrapper>
    </a>
  );
}

export default Button;