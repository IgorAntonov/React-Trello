import styled from 'styled-components';
import ClickOutside from 'react-click-outside';

import { P, StyledLink } from 'Components/shared';

export const Container = styled(ClickOutside)`
  position: absolute;
  top: 8%;
  left: 0;

  display: flex;
  flex-direction: column;

  width: 18rem;
  min-height: 90vh;
  padding: 0.2rem;
  border-radius: 4px;

  background-color: #fff;

  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`;

export const Title = styled(P)`
  margin: 0;

  font-weight: 500;
  color: #4c4e50;
  
  cursor: default;
`;

export const TitleWrapper = styled.div`
  display: flex;

  padding: 0.5rem;
  margin-bottom: 0.5rem;
  margin-left: 1rem;
  margin-right: 1rem;
  
  border-bottom: 1px solid #d6dadc;
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BoardLink = styled(StyledLink)`
  margin-bottom: 0.5rem;
  border-radius: 4px;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  background-color: rgba(222, 225, 227, 0.6);
  color: #4c4e50;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  :hover {
    background-color: rgba(222, 225, 227, 1);
    color: #000;
  }
`;

