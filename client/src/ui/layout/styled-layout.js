import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const is = value => typeof value !== 'undefined';
const prop = value => (is(value) ? value : 'initial');

const mixins = p => css`
  justify-content: ${prop(p.justify)};
  align-items: ${prop(p.align)};
  align-content: ${prop(p.alignContent)};
  flex-grow: ${prop(p.grow)};
  flex-shrink: ${prop(p.shrink)};
  flex-basis: ${prop(p.basis)};
  order: ${prop(p.order)};
  width: ${prop(p.width)};
  padding: ${prop(p.padding)};
  margin: ${prop(p.margin)};
  min-height: ${prop(p.minHeight)};
  background-color: ${prop(p.bgColor)}
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;

  ${mixins}
`;

export const Col = styled.div`
  display: flex;
  flex-direction: column;

  ${mixins}
`;

// eslint-disable-next-line
Row.propTypes = Col.propTypes = {
  justify: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-around',
    'space-between'
  ]),
  align: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'baseline',
    'stretch'
  ]),
  alignContent: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-around',
    'space-between',
    'stretch'
  ]),
  grow: PropTypes.number,
  shrink: PropTypes.number,
  basis: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  order: PropTypes.number,
  width: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
  minHeight: PropTypes.string,
  bgColor: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func
  ])
};

