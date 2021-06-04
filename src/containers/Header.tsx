import React from 'react';
import styled from 'styled-components';
import { BrowserView, MobileView } from 'react-device-detect';

import BurgerIcon from '../components/BurgerIcon';

import { media, sizes } from '../util/theme';

const Wrapper = styled.header`
  display: flex;
  flex-direction: row-reverse;
  align-items: flex-end;

  padding: 0 40px 0 40px;

  height: 88px;

  ${media(sizes.tablet)`
    height: 104px;
  `};
`;

const BurgerWrapper = styled.div`
  position: fixed;
  z-index: 2;
`;

interface ContainerTemplateProps {
  showMenu: boolean;
  setShowMenu(value: boolean): void;
}

const ContainerTemplate = ({ showMenu, setShowMenu }: ContainerTemplateProps) => {
  
  return (
    <>
      <BrowserView>
      
      </BrowserView>
      <MobileView>
        <Wrapper id="home">
          <BurgerWrapper>
            <BurgerIcon active={showMenu} handleOnClick={() => setShowMenu(!showMenu)} />
          </BurgerWrapper>
        </Wrapper>
      </MobileView>
    </>
  );
}

export default ContainerTemplate;