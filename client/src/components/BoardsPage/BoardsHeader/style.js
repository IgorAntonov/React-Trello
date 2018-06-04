import styled from 'styled-components';

import { H2 } from 'Components/shared';

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.5rem 0;

  background-color: #aaa;
`;

export const FlexWrapper = styled.div`
  display: flex;
  align-items: center;

  position: relative;
`;

export const Title = styled(H2)`
  margin: 0;
`;
