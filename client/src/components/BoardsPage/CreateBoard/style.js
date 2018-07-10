import styled from 'styled-components';

import { media } from 'Src/helpers';
import { Button } from 'Components/shared';

export const Wrapper = styled.div`
  display: none;

  ${media.tablet`
    display: flex;
    align-items: center;
  `}
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
  width: 11rem;
  padding: 0 0.5rem;
  
  align-self: stretch;
  outline: none;
  border: none;
  border-radius: 4px;
`;

