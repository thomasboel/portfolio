import React, { useState } from 'react';
import styled from 'styled-components';

import Menu from './containers/Menu';
import Header from './containers/Header';
import Introduction from './containers/Introduction';
import Projects from './containers/Projects';
import Contact from './containers/Contact';
import Footer from './containers/Footer';
import ProjectModal from './containers/ProjectModal';

import { colors } from './util/theme';
import { ProjectData } from './util/interfaces';

const Wrapper = styled.div`
  flex: 1;
  min-height: 100vh;
  background-color: ${colors.purple};
  overflow: hidden;
`;

const App = () => {
  const [ showMenu, setShowMenu ] = useState(false);
  const [ projectModal, setProjectModal ] = useState<ProjectData | null>(null);

  return (
    <Wrapper>

      {showMenu && <Menu closeMenu={() => setShowMenu(false)} />}

      {projectModal && <ProjectModal project={projectModal} handleClose={() => setProjectModal(null)} />}

      <Header showMenu={showMenu} setShowMenu={setShowMenu} />

      <Introduction />

      <Projects setActiveProject={(project: ProjectData) => setProjectModal(project)} />

      <Contact />

      <Footer />

    </Wrapper>
  );
}

export default App;