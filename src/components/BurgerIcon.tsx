import React from 'react';
import styled from 'styled-components';
import { BrowserView, MobileView } from 'react-device-detect';

const Wrapper = styled.div``;

interface BurgerIconProps {
  active: boolean;
  handleOnClick(): void;
}

const BurgerIcon = ({ active, handleOnClick }: BurgerIconProps) => {
  
  return (
    <Wrapper onClick={() => handleOnClick()}>
      <BrowserView>
        
      </BrowserView>
      <MobileView>
        {active ?
        <svg width="40" height="29" viewBox="0 0 40 29">
          <g id="BurgerIconClose" transform="translate(-295 -53)">
            <g id="x" transform="translate(0 10)">
              <rect id="top" width="30" height="3" rx="1.5" transform="translate(303.333 67.046) rotate(-45)" fill="#f4f4f4"/>
              <rect id="bottom" width="30" height="3" rx="1.5" transform="translate(305.454 45.832) rotate(45)" fill="#f4f4f4"/>
            </g>
            <rect id="boxing" width="40" height="29" transform="translate(295 53)" fill="none"/>
          </g>
        </svg>
        :
        <svg width="40" height="29" viewBox="0 0 40 29">
          <g id="BurgerIcon" transform="translate(-295 -56)">
            <rect id="bottom" width="30" height="3" rx="1.5" transform="translate(300 82)" fill="#a288e3"/>
            <rect id="middle" width="40" height="3" rx="1.5" transform="translate(295 69)" fill="#a288e3"/>
            <rect id="top" width="30" height="3" rx="1.5" transform="translate(300 56)" fill="#a288e3"/>
          </g>
        </svg>
        }
      </MobileView>
    </Wrapper>
  );
}

export default BurgerIcon;