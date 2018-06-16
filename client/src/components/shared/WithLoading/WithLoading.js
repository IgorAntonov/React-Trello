import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { LoadingSpinner } from '../LoadingSpinner';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const withLoading = Component => ({ isLoading, ...props }) => {
  return isLoading
    ? (
      <Wrapper>
        <LoadingSpinner />
      </Wrapper>
    )
    : <Component {...props} />;
};
