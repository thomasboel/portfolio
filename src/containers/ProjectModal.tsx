import React, { useRef } from 'react';
import styled from 'styled-components';
import { BrowserView, MobileView } from 'react-device-detect';

import Label, { LabelType } from '../components/Label';

import useOnClickOutside from '../hooks/useOnClickOutside';

import { colors, media, sizes } from '../util/theme';
import { ProjectData } from '../util/interfaces';

const Wrapper = styled.div`
  position: fixed;
  width: 100vw;
  height: 200vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: rgba(16, 16, 16, .2);
  z-index: 2;
`;

const ModalWrapper = styled.div`
  max-width: 60%;
  margin-top: 120px;
  background-color: ${colors.purple};
  border: 4px solid ${colors.red};
  padding: 56px 32px 56px 32px;

  ${media(sizes.tablet)`
    width: unset;
    padding: 80px 80px 80px 80px;
  `};
`;

const FlexRow = styled.div`
	display: flex;
	flex-direction: row;
`;

const Links = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;

  ${media(sizes.tablet)`
    padding-bottom: 80px;
  `};
`;

interface ProjectModalProps {
	project: ProjectData;
	handleClose: () => void;
}

const ProjectModal = ({ project, handleClose }: ProjectModalProps) => {
	const modalWrapperRef = useRef(null);

	useOnClickOutside(modalWrapperRef, handleClose);

  return (
    <>
      <BrowserView>
				<Wrapper>
					<ModalWrapper ref={modalWrapperRef}>
	
						<FlexRow>
							<Label 
								type={LabelType.PROJECT_HEADER} 
								color={colors.white}
							>{project.title.toUpperCase().replace(' ', '\n').concat('.')}</Label>

							<Links>{project.links.map((link, index) => (
								<a 
									key={index} 
									href={link.url} 
									style={{ marginRight: index === 0 ? 16 : 24 }}
								>{link.icon(colors.white)}</a>
							))}</Links>
						</FlexRow>

						<Label>{project.longDescription ? project.longDescription : project.description}</Label>

					</ModalWrapper>
				</Wrapper>
      </BrowserView>
      <MobileView>

      </MobileView>
    </>
  );
}

export default ProjectModal;