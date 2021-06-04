import React from 'react';
import styled from 'styled-components';
import { BrowserView, MobileView } from 'react-device-detect';
import Label, { LabelType } from '../components/Label';
import { colors } from '../util/theme';

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 40px;
  padding-bottom: 24px;
`;

interface ContainerTemplateProps {

}

const ContainerTemplate = ({ }: ContainerTemplateProps) => {
  
  return (
    <>
      <BrowserView>
      
      </BrowserView>
      <MobileView>
        <Wrapper>
          <Label color={colors.lightPurple}>© 2021 THOMASBOELMICHEELSEN.DK</Label>
        </Wrapper>
      </MobileView>
    </>
  );
}

export default ContainerTemplate;