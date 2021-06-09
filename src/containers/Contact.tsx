import React from 'react';
import styled from 'styled-components';
import { BrowserView, MobileView, isMobile } from 'react-device-detect';

import Label, { LabelType } from '../components/Label';
import Pokemon, { Pokemons } from '../components/Pokemon';

import { GitHubIcon, LinkedInIcon, PhoneIcon, DiscordIcon, MailIcon } from '../util/icons';
import CopyEmail from '../components/CopyEmail';
import { colors, media, sizes } from '../util/theme';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  padding: 0 24px 0 24px;
  margin-top: 80px;

  ${media(sizes.tablet)`
    align-items: center;
  `};
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const Red = styled.span`
  color: ${colors.red};
`;

export const IconWrapper = styled.div`
  margin-right: 32px;

  &:last-child {
    margin-right: 0;
  }
`;

interface Link {
  url: string;
  icon: JSX.Element;
}

export const contactOptions: Array<Link> = [
  { 
    url: "https://github.com/thomasboel",
    icon: <GitHubIcon color={colors.white} />
  },
  { 
    url: "https://www.linkedin.com/in/thomas-boel-micheelsen-72502514b/",
    icon: <LinkedInIcon />
  },
  { 
    url: "tel:+4551305516",
    icon: <PhoneIcon />
  },
  { 
    url: "mailto:thomas@boelmicheelsen.dk",
    icon: <MailIcon />
  },
  { 
    url: "https://discordapp.com/users/190577521367056394",
    icon: <DiscordIcon />
  }
]

const Contact = () => {
  
  const ContactIcons = ({ style }: any) => (
    <FlexRow style={style}>

      {contactOptions.map((contact, index) => !contact.url.includes('mailto') && (
        <IconWrapper key={index}>
            <a href={contact.url}>
            {contact.icon}
          </a>
        </IconWrapper>
      ))}

    </FlexRow>
  )

  return (
    <>
      <BrowserView>
        <Wrapper id="contact">

        <FlexRow>
            <Pokemon pokemon={Pokemons.STARYU} style={{ marginRight: 24 }} />
            <Label type={LabelType.HEADER}>LIKE WHAT YOU SEE?</Label>
          </FlexRow>

          <Label type={LabelType.SUB_HEADER}>Let's get in touch!</Label>

          <Label center>
            You can catch me on {"<"}<Red>a</Red>{">"}<a style={{ color: colors.lightPurple }} href={contactOptions[1].url}>LinkedIn</a>{"</"}<Red>a</Red>{">"}
            <br />
            If you’re interested, you can also check out my {"<"}<Red>a</Red>{">"}<a style={{ color: colors.lightPurple }} href={contactOptions[0].url}>GitHub</a>{"</"}<Red>a</Red>{">"}
            <br />
            And if you’re a bit old-fashioned, give me a phone call {"<"}<Red>a</Red>{">"}<a style={{ color: colors.lightPurple }} href={contactOptions[2].url}>+45 51 30 55 16</a>{"</"}<Red>a</Red>{">"}
          </Label>

          <FlexRow style={{ marginTop: 32 }}>
            <Label type={LabelType.SUB_HEADER}>Or via my mail...</Label>
            <CopyEmail email={'thomas@boelmicheelsen.dk'} style={{ marginLeft: 32, marginTop: 16 }} />
          </FlexRow>

          <ContactIcons style={{ marginTop: 64 }}/>

        </Wrapper>
      </BrowserView>
      <MobileView>
        <Wrapper id="contact">

          <FlexRow>
            <Pokemon pokemon={Pokemons.STARYU} style={{ marginRight: 24 }} />
            <Label rtl type={LabelType.HEADER}>CONTACT</Label>
          </FlexRow>

          <Label rtl type={LabelType.SUB_HEADER}>Let's get in touch!</Label>

          <Label rtl>{"You can catch me on LinkedIn\nOr check out all my projects at GitHub\nOld-fashioned? Call me at +45 51 30 55 16"}</Label>

          <ContactIcons style={{ marginTop: 24 }} />

          <Label rtl type={LabelType.SUB_HEADER}>Or via my mail...</Label>

          <CopyEmail email={'thomas@boelmicheelsen.dk'} style={{ marginTop: 16 }} />
          
        </Wrapper>
      </MobileView>
    </>
  );
}

export default Contact;