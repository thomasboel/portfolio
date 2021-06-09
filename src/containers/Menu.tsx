import React from 'react';
import styled from 'styled-components';
import { BrowserView, MobileView } from 'react-device-detect';

import { contactOptions, IconWrapper } from './Contact';

import Label, { LabelType } from '../components/Label';
import Pokemon, { Pokemons } from '../components/Pokemon';

import { colors, media, sizes } from '../util/theme';
import { ResumeIcon } from '../util/icons';

const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 200vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: rgba(16, 16, 16, .2);
  z-index: 1;
`;

const MenuWrapper = styled.div`
  width: 84%;
  margin-top: 120px;
  background-color: ${colors.purple};
  border: 4px solid ${colors.red};
  padding: 56px 32px 56px 32px;

  ${media(sizes.tablet)`
    width: unset;
    padding: 80px 80px 80px 80px;
  `};
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

const ResumeText = styled.h3`
  color: ${props => colors.white};
  letter-spacing: .040em;
  font-size: 20px;
  font-weight: 300;

  ${media(sizes.tablet)`
    font-size: 30px;
  `};
`;

interface MenuProps {
  closeMenu(): void;
}

const Menu = ({ closeMenu }: MenuProps) => {
  
  return (
    <>
      <BrowserView>
        <Wrapper>
          <MenuWrapper>

            <FlexRow style={{ alignItems: 'flex-start' }}>

              <FlexColumn>
                <FlexRow>
                  <Label type={LabelType.MENU_HEADER}>CATCH ME!</Label>
                  <Pokemon small pokemon={Pokemons.MASTER_BALL}/>
                </FlexRow>

                <FlexRow style={{ marginTop: 16 }}>
                  {contactOptions.slice(0, 4).map((contact, index) => (
                    <IconWrapper key={index}>
                        <a href={contact.url}>
                        {contact.icon}
                      </a>
                    </IconWrapper>
                  ))}
                </FlexRow>
                <FlexRow style={{ marginTop: 24 }}>
                  {contactOptions.slice(4, 5).map((contact, index) => (
                    <IconWrapper key={index}>
                        <a href={contact.url}>
                        {contact.icon}
                      </a>
                    </IconWrapper>
                  ))}
                </FlexRow>

                <a href="resume.pdf">
                  <FlexRow style={{ marginTop: 40, gap: 16 }}>
                    <ResumeText>RESUMÉ</ResumeText>
                    <ResumeIcon />
                  </FlexRow>
                </a>
              </FlexColumn>

              <FlexColumn>
                <FlexRow style={{ marginTop: 40, paddingBottom: 8 }}>
                  <Label type={LabelType.MENU_HEADER}>NAVIGATION</Label>
                </FlexRow>

                <a href="#home" onClick={() => closeMenu()}>
                  <Label type={LabelType.MENU_PARAGRAPH}>HOME</Label>
                </a>
                
                <a href="#projects" onClick={() => closeMenu()}>
                  <Label type={LabelType.MENU_PARAGRAPH}>PROJECTS</Label>
                </a>
                
                <a href="#contact" onClick={() => closeMenu()}>
                  <Label type={LabelType.MENU_PARAGRAPH}>CONTACT</Label>
                </a>
              </FlexColumn>

            </FlexRow>

          </MenuWrapper>
        </Wrapper>
      </BrowserView>
      <MobileView>
        <Wrapper>
          <MenuWrapper>

            <FlexRow>
              <Label type={LabelType.MENU_HEADER}>CATCH ME!</Label>
              <Pokemon small pokemon={Pokemons.MASTER_BALL} style={{ marginLeft: 16 }}/>
            </FlexRow>

            <FlexRow style={{ marginTop: 24 }}>
              {contactOptions.map((contact, index) => (
                <IconWrapper key={index}>
                    <a href={contact.url}>
                    {contact.icon}
                  </a>
                </IconWrapper>
              ))}
            </FlexRow>

            <a href="resume.pdf">
              <FlexRow style={{ marginTop: 40, gap: 16 }}>
                <ResumeText>RESUMÉ</ResumeText>
                <ResumeIcon />
              </FlexRow>
            </a>

            <FlexRow style={{ marginTop: 40, paddingBottom: 8 }}>
              <Label type={LabelType.MENU_HEADER}>NAVIGATION</Label>
            </FlexRow>

            <a href="#home" onClick={() => closeMenu()}>
              <Label type={LabelType.MENU_PARAGRAPH}>HOME</Label>
            </a>
            
            <a href="#projects" onClick={() => closeMenu()}>
              <Label type={LabelType.MENU_PARAGRAPH}>PROJECTS</Label>
            </a>
            
            <a href="#contact" onClick={() => closeMenu()}>
              <Label type={LabelType.MENU_PARAGRAPH}>CONTACT</Label>
            </a>

          </MenuWrapper>
        </Wrapper>
      </MobileView>
    </>
  );
}

export default Menu;