import React from 'react';
import styled from 'styled-components';
import { BrowserView, MobileView } from 'react-device-detect';

interface ComponentTemplateProps {

}

const ComponentTemplate = ({ }: ComponentTemplateProps) => {
  
  return (
    <>
      <BrowserView>
      
      </BrowserView>
      <MobileView>

      </MobileView>
    </>
  );
}

export default ComponentTemplate;