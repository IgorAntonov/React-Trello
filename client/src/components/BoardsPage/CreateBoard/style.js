import styled from 'styled-components';

import { Button } from 'Components/shared';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
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

export const CreateInput = styled.input.attrs({
  placeholder: 'Add board title'
})`
  align-self: stretch;

  padding: 0 0.5rem;

  outline: none;
`;

