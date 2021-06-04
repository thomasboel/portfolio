import React from 'react';
import styled from 'styled-components';
import { BrowserView, MobileView } from 'react-device-detect';

import { colors } from '../util/theme';
import { CopyIcon } from '../util/icons';

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  
  width: 220px;
  height: 40px;

  border: 3px solid ${colors.lightPurple};
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 40px;
  height: 40px;
  border-right: 3px solid ${colors.lightPurple};
`;

const Email = styled.p`
  color: ${colors.white};
  font-size: 12px;
  margin-left: 16px;
`;

interface CopyEmailProps {
  email: string;
  style?: any;
}

const CopyEmail = ({ email, style }: CopyEmailProps) => {
  
  return (
    <>
      <BrowserView>

      </BrowserView>
      <MobileView>
        <Wrapper style={style}>
          <IconWrapper>
            <CopyIcon color={colors.red} />
          </IconWrapper>
          <Email>{email}</Email>
        </Wrapper>
      </MobileView>
    </>
  );
}

export default CopyEmail;