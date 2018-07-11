import React from 'react';
import styled, { keyframes } from 'styled-components';

export const LoadingSpinner = () => (
  <Svg width="100px" height="100px" viewBox="0 0 66 66">
    <Circle fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30" />
  </Svg>
);

export const PageSpinner = () => (
  <Wrapper>
    <LoadingSpinner />
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const rotator = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(270deg); }
`;
const colors = keyframes`
  0% { stroke: #4285F4; }
  25% { stroke: #DE3E35; }
  50% { stroke: #F7C223; }
  75% { stroke: #1B9A59; }
  100% { stroke: #4285F4; }
`;
const dash = keyframes`
  0% { stroke-dashoffset: 187; }
  50% {
    stroke-dashoffset: 47;
    transform:rotate(135deg);
  }
  100% {
    stroke-dashoffset: 187;
    transform:rotate(450deg);
  }
`;

export const Svg = styled.svg`
  animation: ${rotator} 1.4s linear infinite;
`;

const Circle = styled.circle`
  stroke-dasharray: 187;
  stroke-dashoffset: 0;
  transform-origin: center;
  animation:
    ${dash} 1.4s ease-in-out infinite, 
    ${colors} 5.6s ease-in-out infinite;
`;
