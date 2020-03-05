import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';

export default function Subtract(props) {
  return (
    <Wrapper {...props}>
      <path fillRule="evenodd" d="M19 11H1V9h18z" />
    </Wrapper>
  );
}

Subtract.propTypes = PROP_TYPES;
Subtract.defaultProps = DEFAULT_PROPS;
