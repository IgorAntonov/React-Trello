import styled from 'styled-components';

import { H2, Button } from 'Components/shared';

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.5rem 0;

  background-color: ${p => p.theme.darker};
`;

export const FlexWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: ${p => p.justify};

  position: relative;
`;

export const Title = styled(H2)`
  flex: 1;
  margin: 0;
  
  text-align: center;
  font-style: italic;
  color: #fff;
`;

export const MenuButton = styled(Button)`
  margin: 0;

  border-radius: 0;
`;

export const CreateButton = styled(Button)`
  display: flex;
  align-items: center;

  padding: 0.3rem;
  
  fill: #fff;

  :hover {
    opacity: 0.6;
  }
`;

