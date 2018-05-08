import styled from 'styled-components';
import PropTypes from 'prop-types';

import css from '../commonStyles';

const A = styled.a`
  ${css}
`;

A.propTypes = {
  href: PropTypes.string.isRequired
};

export default A;
