import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';

export default function Ellipse(props) {
  return (
    <Wrapper {...props}>
      <path fillRule="nonzero" d="M3.25 8a2.257 2.257 0 0 1 2.25 2.25 2.257 2.257 0 0 1-2.25 2.25A2.257 2.257 0 0 1 1 10.25 2.257 2.257 0 0 1 3.25 8zm13.5 0A2.257 2.257 0 0 1 19 10.25a2.257 2.257 0 0 1-2.25 2.25 2.257 2.257 0 0 1-2.25-2.25A2.257 2.257 0 0 1 16.75 8zM10 8a2.257 2.257 0 0 1 2.25 2.25A2.257 2.257 0 0 1 10 12.5a2.257 2.257 0 0 1-2.25-2.25A2.257 2.257 0 0 1 10 8z" />
    </Wrapper>
  );
}

Ellipse.propTypes = PROP_TYPES;
Ellipse.defaultProps = DEFAULT_PROPS;
