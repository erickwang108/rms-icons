import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';

export default function ReservedHalfBox(props) {
  return (
    <Wrapper {...props}>
      <path fillRule="nonzero" d="M17 1a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h14zM4 9v2h12V9H4z" />
    </Wrapper>
  );
}

ReservedHalfBox.propTypes = PROP_TYPES;
ReservedHalfBox.defaultProps = DEFAULT_PROPS;
