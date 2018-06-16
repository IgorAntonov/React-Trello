import styled from 'styled-components';

import { H2 } from 'Components/shared';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;

  padding: 0.5rem 1rem;

  background-color: ${p => p.theme.main};
`;

export const FlexTitle = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 0.8rem;

`;

export const Title = styled(H2)`
  margin: 0;

  color: #fff;
  cursor: default;
`;

export const FlexBoard = styled.div`
  display: flex;
  align-items: flex-start;
  flex: 1;
`;

