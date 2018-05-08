import { css } from 'styled-components';

const sizes = {
  mobile: 30,
  tablet: 45,
  desktop: 60
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media only screen and (min-width: ${sizes[label]}rem) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export default media;
