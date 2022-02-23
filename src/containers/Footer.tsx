import React from 'react';
import styled from 'styled-components';
import { BrowserView, MobileView } from 'react-device-detect';
import Label from '../components/Label';
import { colors } from '../util/theme';

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 40px;
  padding-bottom: 24px;
`;

const Footer = () => {
  
  return (
    <>
      <BrowserView>
        <Wrapper>
          <Label color={colors.lightPurple}>© 2021-2022 BOELMICHEELSEN.DK</Label>
        </Wrapper>
      </BrowserView>
      <MobileView>
        <Wrapper>
          <Label color={colors.lightPurple}>© 2021-2022 BOELMICHEELSEN.DK</Label>
        </Wrapper>
      </MobileView>
    </>
  );
}

export default Footer;