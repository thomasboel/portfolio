import React from 'react';
import styled from 'styled-components';
import { BrowserView, MobileView } from 'react-device-detect';

interface ContainerTemplateProps {

}

const ContainerTemplate = ({ }: ContainerTemplateProps) => {
  
  return (
    <>
      <BrowserView>
      
      </BrowserView>
      <MobileView>

      </MobileView>
    </>
  );
}

export default ContainerTemplate;