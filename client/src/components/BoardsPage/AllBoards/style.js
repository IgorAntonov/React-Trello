import styled from 'styled-components';

import { H2 } from 'Components/shared';

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;

  background-color: ${p => p.theme.main};
`;

export const FlexTitle = styled.div`
  display: flex;
  align-items: center;

  padding: 1rem;

  fill: #fff;
`;

export const Title = styled(H2)`
  margin: 0;
  padding: 0 0.5rem;

  color: #fff;
  cursor: default;
`;

export const FlexBoards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  padding: 0.5rem;
`;

