import { css } from 'styled-components';

import { media } from '../media-template';

export const styles = css`
  display: flex;
  align-items: center;

  padding: 0.4rem;
  margin: 0 0.1rem;
  border-width: 0;
  border-radius: 4px;

  background-color: ${props => props.bgcolor || props.theme.button || '#3f51b5'};
  color: #fff;
  font-weight: 300;
  text-align: center;
  cursor: pointer;
  user-select: none;
  transition: 0.1s all ease-out;

  ${props => props.raised &&
    'box-shadow: 0 2px 2px rgba(0,0,0,0.24), 2px 2px 4px rgba(0,0,0,0.24)'};
  
  :hover {
    opacity: 0.8;
    color: fff;
  }
  :focus {
    opacity: 0.8;
    outline: none;
  }
  :active {
    transform: translate(-1px, -1px);
    ${props => props.raised &&
    'box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 1px 2px rgba(0,0,0,0.24);'}
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
