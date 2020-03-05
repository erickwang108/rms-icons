import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';

export default function Magnifier(props) {
  return (
    <Wrapper {...props}>
      <path fillRule="evenodd" d="M18.595 16.23l-4.304-4.305a7.03 7.03 0 0 0 1.022-3.66C15.313 4.373 11.94 1 8.048 1A7.05 7.05 0 0 0 1 8.05c0 3.892 3.374 7.263 7.264 7.263a7.023 7.023 0 0 0 3.55-.958l4.328 4.329c.423.423 1.11.423 1.534 0l1.075-1.074c.42-.424.268-.957-.156-1.38zM3.167 8.047a4.88 4.88 0 0 1 4.879-4.88c2.696 0 5.097 2.401 5.097 5.097a4.879 4.879 0 0 1-4.88 4.88c-2.695 0-5.096-2.402-5.096-5.097z" />
    </Wrapper>
  );
}

Magnifier.propTypes = PROP_TYPES;
Magnifier.defaultProps = DEFAULT_PROPS;
