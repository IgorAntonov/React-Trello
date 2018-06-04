import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { LoadingSpinner } from '../LoadingSpinner';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${p => p.type === 'page' && 'min-height: 100vh;'}
`;

export const WithLoading = ({ render, isLoading, type }) => (
  isLoading ?
    <Wrapper type={type} >
      <LoadingSpinner />
    </Wrapper> :
    render()
);

WithLoading.defaultProps = {
  type: ''
};
WithLoading.propTypes = {
  render: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  type: PropTypes.string
};
