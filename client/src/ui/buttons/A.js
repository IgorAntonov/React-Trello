import styled from 'styled-components';
import PropTypes from 'prop-types';

import { styles } from './commonStyles';

export const A = styled.a`
  ${styles}
`;

A.propTypes = {
  href: PropTypes.string.isRequired,
  raised: PropTypes.bool,
  bgcolor: PropTypes.string
};
