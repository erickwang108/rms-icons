import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';

export default function RadioChecked(props) {
  return (
    <Wrapper {...props}>
      <path fillRule="evenodd" d="M10 1c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9zm0 16.2c3.978 0 7.2-3.222 7.2-7.2S13.978 2.8 10 2.8A7.198 7.198 0 0 0 2.8 10c0 3.978 3.222 7.2 7.2 7.2zm0-2.7a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9z" />
    </Wrapper>
  );
}

RadioChecked.propTypes = PROP_TYPES;
RadioChecked.defaultProps = DEFAULT_PROPS;
