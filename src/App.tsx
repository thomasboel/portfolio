import React, { useState } from 'react';
import styled from 'styled-components';

import Header from './containers/Header';
import Introduction from './containers/Introduction';
import Projects from './containers/Projects';
import Contact from './containers/Contact';
import Footer from './containers/Footer';

import { colors } from './util/theme';

const Wrapper = styled.div`
  flex: 1;
  min-height: 100vh;
  background-color: ${colors.purple};
`;

const App = () => {
  const [ showMenu, setShowMenu ] = useState(false);

  return (
    <Wrapper>

      <Header showMenu={showMenu} setShowMenu={setShowMenu} />

      <Introduction />

      <Projects />

      <Contact />

      <Footer />

    </Wrapper>
  );
}

export default App;