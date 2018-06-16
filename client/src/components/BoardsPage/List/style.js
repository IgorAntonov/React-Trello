import styled from 'styled-components';

import { P } from 'Components/shared';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 16rem;
  margin-right: 1rem;

  border-radius: 4px;
  overflow: hidden;

  background-color: #d6dadc;
  color: #333;
`;

export const TitleWrapper = styled.div`
  display: flex;

  padding: 0.5rem;

  background-color: #fff;
  box-shadow:  0 1px 2px rgba(0,0,0,0.12);
`;

export const Title = styled(P)`
  margin: 0;
  
  color: #333;
  font-weight: 500;
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0.6rem;
  padding-bottom: 0;
`;
