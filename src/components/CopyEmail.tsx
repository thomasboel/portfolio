import React, { useState } from 'react';
import styled from 'styled-components';
import { BrowserView, MobileView } from 'react-device-detect';

import { colors } from '../util/theme';
import { media, sizes } from '../util/theme';
import { CopyIcon, MailIconSmallDesktop } from '../util/icons';

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  
  width: 240px;
  height: 40px;

  border: 3px solid ${colors.lightPurple};

  ${media(sizes.tablet)`
    width: 440px;
    height: 60px;

    &:hover {
      cursor: pointer;
    }
  `};
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 40px;
  height: 100%;
  border-right: 3px solid ${colors.lightPurple};

  ${media(sizes.tablet)`
    min-width: 60px;
  `};
`;

interface EmailProps {
  color?: string;
}

const Email = styled.p<EmailProps>`
  color: ${props => props.color ? props.color : colors.white};
  font-size: 12px;
  margin-left: 16px;

  ${media(sizes.tablet)`
    font-size: 24px;
    margin-left: 24px;
  `};
`;

interface CopyEmailProps {
  email: string;
  style?: any;
}

const CopyEmail = ({ email, style }: CopyEmailProps) => {
  
  const [ hover, setHover ] = useState(false);

  return (
    <>
      <BrowserView>
        <Wrapper
          onMouseEnter={() => setHover(true)} 
          onMouseLeave={() => setHover(false)} 
          onClick={() => navigator.clipboard.writeText(email)}
          style={style}
        >
          <IconWrapper>
            {hover 
            ? <CopyIcon color={colors.red} />
            : <MailIconSmallDesktop color={colors.lightPurple} />}
          </IconWrapper>
          <Email color={hover ? colors.white : colors.lightPurple}>{email}</Email>
        </Wrapper>
      </BrowserView>
      <MobileView>
        <Wrapper onClick={() => navigator.clipboard.writeText(email)} style={style}>
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