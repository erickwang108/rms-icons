import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';

export default function Errors(props) {
  return (
    <Wrapper {...props}>
      <path fillRule="evenodd" d="M1 10.192L10.192 1l9.193 9.192-9.193 9.193L1 10.192zm2.121 0l7.071 7.071 7.071-7.07-7.07-7.072-7.072 7.071zM9.2 6.146h2v5h-2v-5zM9.2 13h2v2h-2v-2z" />
    </Wrapper>
  );
}

Errors.propTypes = PROP_TYPES;
Errors.defaultProps = DEFAULT_PROPS;
