import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';

export default function Msg(props) {
  return (
    <Wrapper {...props}>
      <path fillRule="evenodd" d="M17.2 1H2.8C1.81 1 1 1.81 1 2.8V19l3.6-3.6h12.6c.99 0 1.8-.81 1.8-1.8V2.8c0-.99-.81-1.8-1.8-1.8zM7.3 9.1H5.5V7.3h1.8v1.8zm3.6 0H9.1V7.3h1.8v1.8zm3.6 0h-1.8V7.3h1.8v1.8z" />
    </Wrapper>
  );
}

Msg.propTypes = PROP_TYPES;
Msg.defaultProps = DEFAULT_PROPS;
