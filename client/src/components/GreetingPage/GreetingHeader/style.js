import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0.5rem 0;

  background-color: #f8f9f9;
`;

export const Logo = styled(Link)`
  display: block;
  padding: 0.25rem 0.5rem;

  font-size: 2rem;
  font-weight: 500;
  color: #aeafaf;
  transition: 0.2s color;
    text-decoration: none;

  :hover {
    color: #7c7d7d;
  }
`;
