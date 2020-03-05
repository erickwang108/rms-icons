import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';

export default function EarlyWarning(props) {
  return (
    <Wrapper {...props}>
      <ellipse cx="9.981" cy="9.999" rx="8.981" ry="8.999" fill="#F76666" />
      <path d="M8.58 6.211c0-.794.643-1.44 1.436-1.44.793 0 1.437.646 1.437 1.44l-.72 5.826a.72.72 0 11-1.438 0L8.58 6.211zM9.122 14.33a.901.901 0 00.898.9.898.898 0 00.898-.9.9.9 0 00-.898-.9.897.897 0 00-.898.9z" fill="#fff" />
    </Wrapper>
  );
}

EarlyWarning.propTypes = PROP_TYPES;
EarlyWarning.defaultProps = DEFAULT_PROPS;

