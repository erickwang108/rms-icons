import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';

export default function Line(props) {
  return (
    <Wrapper {...props}>
      <path fillRule="evenodd" d="M1 8.5h18v3H1z" />
    </Wrapper>
  );
}

Line.propTypes = PROP_TYPES;
Line.defaultProps = DEFAULT_PROPS;
