import React from 'react';
import styled from 'styled-components';
import { BrowserView, MobileView } from 'react-device-detect';

import Label, { LabelType } from '../components/Label';
import Button from '../components/Button';
import Pokemon, { Pokemons } from '../components/Pokemon';
import CopyEmail from '../components/CopyEmail';

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

          <Button href="#projects" style={{ marginTop: 56 }}>SEE MY WORK</Button>
          <Pokemon pokemon={Pokemons.DITTO} style={{ marginTop: 40 }}/>

          <CopyEmail email={'thomas@boelmicheelsen.dk'} style={{ marginTop: 80 }} />

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