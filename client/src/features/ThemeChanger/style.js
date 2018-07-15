import styled from 'styled-components';
import posed from 'react-pose';
import ClickOutside from 'react-click-outside';

import { P } from 'Src/ui';

export const Posed = posed.div({
  init: { opacity: 0 },
  open: { opacity: 1 }
});

export const Container = styled(ClickOutside)`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  flex-direction: column;

  width: 14rem;

  background-color: #fff;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  padding: 0.6rem 0;
  margin: 0 1rem 0.5rem 1rem; 
  border-bottom: 1px solid #d6dadc;
`;

export const Title = styled(P)`
  margin: 0;
  
  color: #333;
  font-weight: 500;
`;

export const CloseBtn = styled.button`
  padding: 0;
  width: 1.5rem;
  height: 1.5rem;
  border: none;

  background-color: #fff;
  opacity: 0.6;
  cursor: pointer;
  
  transition: all 0.2s;
  :hover {
    opacity: 1;
  }
  :focus {
    outline: none;
    opacity: 0.8;
  }
`;

export const ThemeButton = styled.button`
  flex-basis: 45%;
  
  height: 4rem;
  margin-bottom: 0.5rem;
  border: none;
  border-radius: 6px;

  background-color: ${p => p.color};
  cursor: pointer;

  transition: all 0.2s;
  :hover {
    opacity: 0.7;
  }
  :focus {
    outline: none;
    opacity: 0.8;
  }
`;
