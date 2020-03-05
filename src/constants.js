import PropTypes from 'prop-types';

export const PROP_TYPES = {
  color: PropTypes.string,
  fontSize: PropTypes.string,
  circleColor: PropTypes.string,
  title: PropTypes.node,
};

export const DEFAULT_PROPS = {
  color: '',
  circleColor: '',
  fontSize: '14px',
  title: null,
};