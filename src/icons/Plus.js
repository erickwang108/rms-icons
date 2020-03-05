import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';

export default function Plus(props) {
  return (
    <Wrapper {...props}>
      <path fillRule="evenodd" d="M9 11H1V9h8V1h2v8h8v2h-8v8H9v-8z" />
    </Wrapper>
  );
}

Plus.propTypes = PROP_TYPES;
Plus.defaultProps = DEFAULT_PROPS;
