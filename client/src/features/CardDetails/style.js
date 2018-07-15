import styled from 'styled-components';
import posed from 'react-pose';
import ClickOutside from 'react-click-outside';

import { media } from 'Src/helpers';

export const Wrapper = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  
  display:flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  min-height: 100vh;
  
  background-color: rgba(0, 0, 0, 0.6);
`;

export const Posed = posed.div({
  init: { opacity: 0 },
  open: { opacity: 1 }
});

export const DetailsWrapper = styled(ClickOutside)`
  position: relative;

  display: flex;
  flex-direction: column;
  flex-basis: 90%;
  ${media.mobile`
    flex-basis: 80%;
  `}
  ${media.desktop`
    flex-basis: 50%;
  `}
  min-height: 80vh;
  padding: 1rem;
  padding-right: 4rem;
  margin-top: 3rem;
  border-radius: 4px;
  
  background-color: #edeff0;
`;
