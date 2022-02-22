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
  const [ copied, setCopied ] = useState(false);

  const handleOnPress = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <>
      <BrowserView>
        <Wrapper
          onMouseEnter={() => setHover(true)} 
          onMouseLeave={() => setHover(false)} 
          onClick={() => handleOnPress()}
          style={style}
        >
          <IconWrapper>
            {hover || copied 
            ? <CopyIcon color={colors.red} />
            : <MailIconSmallDesktop color={colors.lightPurple} />}
          </IconWrapper>
          <Email color={hover || copied ? colors.white : colors.lightPurple}>{copied ? "copied to clipboard!" : email}</Email>
        </Wrapper>
      </BrowserView>
      <MobileView>
        <Wrapper onClick={() => handleOnPress()} style={style}>
          <IconWrapper>
            <CopyIcon color={colors.red} />
          </IconWrapper>
          <Email>{copied ? "copied to clipboard!" : email}</Email>
        </Wrapper>
      </MobileView>
    </>
  );
}

export default CopyEmail;