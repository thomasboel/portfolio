import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserView, MobileView } from 'react-device-detect';

import { colors } from '../util/theme';

import "../assets/burgerMenuStyles.css";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: ${colors.purple};
`;

interface BurgerIconProps {
  active: boolean;
  handleOnClick(): void;
}

const BurgerIcon = ({ active, handleOnClick }: BurgerIconProps) => {
  
  const [ hover, setHover ] = useState(false);

  return (
    <>
      <BrowserView>
        <button 
          className="menu" 
          onMouseEnter={() => setHover(true)} 
          onMouseLeave={() => setHover(false)} 
          onClick={(e) => {
            e.currentTarget.classList.toggle('opened'); 
            e.currentTarget.setAttribute('aria-expanded', e.currentTarget.classList.contains('opened').toString())
            handleOnClick();
          }} 
          aria-label="Main Menu"
        >
          <svg width="100" height="100" viewBox="0 0 100 100">
            <path className="line line1" stroke={hover || active ? colors.white : colors.lightPurple} d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
            <path className="line line2" stroke={hover || active ? colors.white : colors.lightPurple} d="M 20,50 H 80" />
            <path className="line line3" stroke={hover || active ? colors.white : colors.lightPurple} d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
          </svg>
        </button>
      </BrowserView>
      <MobileView>
        <Wrapper>
          <button 
            className="menu" 
            onMouseEnter={() => setHover(true)} 
            onMouseLeave={() => setHover(false)} 
            onClick={(e) => {
              e.currentTarget.classList.toggle('opened'); 
              e.currentTarget.setAttribute('aria-expanded', e.currentTarget.classList.contains('opened').toString())
              handleOnClick();
            }} 
            aria-label="Main Menu"
          >
            <svg width="40" height="40" viewBox="0 0 100 100">
              <path className="line line1" stroke={hover || active ? colors.white : colors.lightPurple} d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
              <path className="line line2" stroke={hover || active ? colors.white : colors.lightPurple} d="M 20,50 H 80" />
              <path className="line line3" stroke={hover || active ? colors.white : colors.lightPurple} d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
            </svg>
          </button>
        </Wrapper>
      </MobileView>
    </>
  );
}

export default BurgerIcon;