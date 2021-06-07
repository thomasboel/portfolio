import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserView, MobileView } from 'react-device-detect';

import { BurgerMenuIcon } from '../util/icons';
import { colors } from '../util/theme';

const Wrapper = styled.div``;

interface BurgerIconProps {
  active: boolean;
  handleOnClick(): void;
}

const BurgerIcon = ({ active, handleOnClick }: BurgerIconProps) => {
  
  const [ hover, setHover ] = useState(false);

  return (
    <>
      <BrowserView>
        <Wrapper 
          onMouseEnter={() => setHover(true)} 
          onMouseLeave={() => setHover(false)} 
          onClick={() => handleOnClick()}
        >
          <BurgerMenuIcon active={active} color={hover ? colors.white : colors.lightPurple} />
        </Wrapper>
      </BrowserView>
      <MobileView>
        <Wrapper 
          onClick={() => handleOnClick()}
        >
          <BurgerMenuIcon active={active} />
        </Wrapper>
      </MobileView>
    </>
  );
}

export default BurgerIcon;