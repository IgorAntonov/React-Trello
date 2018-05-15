import styled from 'styled-components';

import { H1 as defaultH1 } from '../../shared';

export const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.5rem 0;

  background-color: #f8f9f9;
`;

export const H1 = styled(defaultH1)`
  color: #333;
`;

