import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { LoadingSpinner } from '../LoadingSpinner';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export class WithLoading extends Component {
  static propTypes = {
    apiCall: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.array
    ]).isRequired,
    render: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired
  };

  componentDidMount() {
    const { apiCall } = this.props;
    if (typeof apiCall === 'function') {
      apiCall();
    }
    if (Array.isArray(apiCall)) {
      apiCall.forEach(func => func());
    }
  }

  render() {
    const { render, isLoading } = this.props;
    return isLoading ?
      <Wrapper>
        <LoadingSpinner />
      </Wrapper> :
      render();
  }
}
