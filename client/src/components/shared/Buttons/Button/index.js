import styled from 'styled-components';
import PropTypes from 'prop-types';

import css from '../commonStyles';

const Button = styled.button`
  ${css}
  
  ${props => props.raised &&
    'box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);'}
  :active {
    outline: none;
    transform: translate(-2px, -2px);
    ${props => props.raised &&
    'box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 1px 2px rgba(0,0,0,0.24);'}
  }
`;

Button.propTypes = {
  raised: PropTypes.bool
};

export default Button;
