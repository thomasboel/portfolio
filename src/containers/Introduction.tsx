import React from 'react';
import styled from 'styled-components';
import { BrowserView, MobileView } from 'react-device-detect';

import Label, { LabelType } from '../components/Label';
import Button from '../components/Button';
import Pokemon, { Pokemons } from '../components/Pokemon';
import CopyEmail from '../components/CopyEmail';
import Signature from '../components/Signature';

import { colors, media, sizes } from '../util/theme';
import { BackgroundDecoration } from '../util/icons';

const Wrapper = styled.section`
  position: relative;
  padding: 0 24px 0 24px;

  ${media(sizes.tablet)`
    padding: 0 80px 0 80px;
  `};
`;

const BackgroundDecorationWrapper = styled.div`
  position: absolute;
  top: 152px;
  right: 40px;
  z-index: 0;
  pointer-events: none;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  ${media(sizes.tablet)`
    top: -260px;
    right: 120px;
  `};

  animation-name: bounce-1;
  animation-timing-function: ease-in-out;
  animation-duration: 5s;
  animation-iteration-count: infinite;

  @keyframes bounce-1 {
    0%   { transform: translateY(0); }
    50%  { transform: translateY(-100px); }
    100% { transform: translateY(0); }
  }
`;

const SignatureWrapper = styled.div`
  position: absolute;
  top: 100px;
  right: 50%;
  transform: translateX(50%);
  z-index: 1;
`;

const Introduction = () => {
  return (
    <>
      <BrowserView>
        <Wrapper>

          <Label type={LabelType.SUB_HEADER}>HI THERE 👋, I’M</Label>
          <Label type={LabelType.HEADER} color={colors.red}>THOMAS.</Label>
          <Label type={LabelType.SUB_HEADER} color={colors.lightPurple}>DEVELOPER & DEVOPS 👨‍💻</Label>
          <Label>I’m a design-minded developer with a love for DevOps<br/>based in Copenhagen, Denmark.</Label>

          <Button handleOnClick={() => window.scrollTo({ behavior: 'smooth', top: 1000 })} style={{ marginTop: 56 }}>SEE MY WORK</Button>
          <Pokemon pokemon={Pokemons.DITTO} style={{ marginTop: 40 }}/>

          <CopyEmail email={'thomas@boelmicheelsen.dk'} style={{ marginTop: 80 }} />

          <BackgroundDecorationWrapper>
            <BackgroundDecoration />
          </BackgroundDecorationWrapper>

          <SignatureWrapper>
            <Signature />
          </SignatureWrapper>

        </Wrapper>
      </BrowserView>

      <MobileView>
        <Wrapper>

          <Label type={LabelType.SUB_HEADER}>HI THERE 👋, I’M</Label>
          <Label type={LabelType.HEADER} color={colors.red}>THOMAS.</Label>
          <Label type={LabelType.SUB_HEADER} color={colors.lightPurple}>DEVELOPER & DEVOPS 👨‍💻</Label>
          <Label>I’m a design-minded developer with a love for DevOps, based in Copenhagen, Denmark.</Label>
          
          <Button href="#projects" style={{ marginTop: 32 }}>SEE MY WORK</Button>
          <Pokemon pokemon={Pokemons.DITTO} style={{ marginTop: 32 }}/>
          
          <CopyEmail email={'thomas@boelmicheelsen.dk'} style={{ marginTop: 80 }}/>
          
          <BackgroundDecorationWrapper>
            <BackgroundDecoration />
          </BackgroundDecorationWrapper>

        </Wrapper>
      </MobileView>
    </>
  );
}

export default Introduction;