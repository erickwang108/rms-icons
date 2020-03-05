import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';

export default function FallingArrow(props) {
  return (
    <Wrapper {...props}>
      <path fillRule="evenodd" transform="rotate(90 8 10)" d="M8 0L6.6 1.4 12.2 7H0v2h12.2l-5.6 5.6L8 16l8-8z" />
    </Wrapper>
  );
}

FallingArrow.propTypes = PROP_TYPES;
FallingArrow.defaultProps = DEFAULT_PROPS;
