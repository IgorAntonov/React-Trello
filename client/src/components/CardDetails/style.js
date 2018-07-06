import styled from 'styled-components';
import ClickOutside from 'react-click-outside';

import { Icon } from 'Components/shared';

export const Wrapper = styled.div`
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

export const DetailsWrapper = styled(ClickOutside)`
  position: relative;

  display: flex;
  flex-direction: column;
  flex-basis: 50%;

  min-height: 80vh;
  padding: 1rem;
  padding-right: 4rem;
  margin-top: 3rem;

  border-radius: 4px;
  background-color: #edeff0;
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 2%;
  right: 2%;

  width: 24px;
  height: 24px;
  padding: 0;
  margin: 0;

  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;

  fill: #999;

  transition: 0.3s all;
  :hover {
    fill: #1a1a1a;
  }
`;
export const CloseIcon = styled(Icon).attrs({
  icon: 'close',
  width: '24px',
  height: '24px',
  viewBox: '48'
})``;

