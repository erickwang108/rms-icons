import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';

export default function ReservedBox(props) {
  return (
    <Wrapper {...props}>
      <path fillRule="evenodd" d="M17 1H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zM8 15l-5-5 1.4-1.4L8 12.2l7.6-7.6L17 6l-9 9z" />
    </Wrapper>
  );
}

ReservedBox.propTypes = PROP_TYPES;
ReservedBox.defaultProps = DEFAULT_PROPS;
