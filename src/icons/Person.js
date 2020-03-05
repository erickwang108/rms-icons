import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';

export default function Person(props) {
  return (
    <Wrapper {...props}>
      <path fillRule="evenodd" d="M10 10c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm0 2c-2.7 0-8 1.3-8 4v2h16v-2c0-2.7-5.3-4-8-4z" />
    </Wrapper>
  );
}

Person.propTypes = PROP_TYPES;
Person.defaultProps = DEFAULT_PROPS;
