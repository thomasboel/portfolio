import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';
import styled from 'styled-components';

import { colors } from '../util/theme';
import { media, sizes } from '../util/theme';

interface HoverProps {
  hover: boolean;
}

const Wrapper = styled.div<HoverProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  
  position: relative;
  padding: 13px 37px 13px 37px;
  border: 3px solid ${colors.lightPurple};
  background-color: ${props => !isMobile && props.hover ? colors.lightPurple : 'transparent'};
`;

const ButtonText = styled.p<HoverProps>`
  color: ${props => !isMobile && props.hover ? colors.white : colors.lightPurple};
  font-size: 12px;
  font-weight: 300;

  ${media(sizes.tablet)`
    font-size: 24px;
  `};
`;

const Backdrop = styled.div`
  position: absolute;
  z-index: 0;
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
  
  const [ hover, setHover ] = useState(false);

  return (
    <a href={href}>
      <Wrapper 
        onMouseEnter={() => setHover(true)} 
        onMouseLeave={() => setHover(false)} 
        hover={hover}
        style={style}
      >
        <ButtonText hover={hover}>{children}</ButtonText>
        <Backdrop />
      </Wrapper>
    </a>
  );
}

export default Button;