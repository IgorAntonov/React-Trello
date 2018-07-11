import styled from 'styled-components';
import PropTypes from 'prop-types';

import { styles } from './commonStyles';

export const Button = styled.button`
  ${styles}
`;

Button.propTypes = {
  raised: PropTypes.bool,
  bgcolor: PropTypes.string
};

