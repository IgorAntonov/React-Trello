import { css } from 'styled-components';

import media from '../mediaTemplate';

const styles = css`
  display: block;
  padding: 0.25rem;
  margin: 0 0.1rem;

  border-width: 0;
  border-radius: 2px;

  background-color: ${props => props.theme.button};

  color: #fff;
  font-weight: 300;
  
  transition: 0.2s all;
  cursor: pointer;
  user-select: none;

  :hover {
    background-color: ${props => props.theme.buttonHover};
    color: fff;
  }
  
  ${media.mobile`
    padding: 0.5rem;
    margin: 0 0.2rem;

    font-weight: 400;
  `}
  ${media.tablet`
    padding: 0.5rem 1rem;
    margin: 0 0.25rem;
  `}
  ${media.desktop`
    padding: 0.5rem 2rem;
    margin: 0 0.5rem;
  `}
`;

export default styles;
