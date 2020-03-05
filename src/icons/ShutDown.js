import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';

export default function ShutDown(props) {
  return (
    <Wrapper {...props}>
      <path d="M11 1H9v10h2V1zm4.83 2.17l-1.42 1.42A6.92 6.92 0 0 1 17 10c0 3.87-3.13 7-7 7A6.995 6.995 0 0 1 5.58 4.58L4.17 3.17A8.932 8.932 0 0 0 1 10a9 9 0 0 0 18 0c0-2.74-1.23-5.18-3.17-6.83z" />
    </Wrapper>
  );
}

ShutDown.propTypes = PROP_TYPES;
ShutDown.defaultProps = DEFAULT_PROPS;
