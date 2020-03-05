import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';

export default function SmileFace(props) {
  return (
    <Wrapper {...props}>
      <path fillRule="evenodd" d="M13.15 9.1c.72 0 1.35-.63 1.35-1.35 0-.72-.63-1.35-1.35-1.35-.72 0-1.35.63-1.35 1.35 0 .72.63 1.35 1.35 1.35zm-6.3 0c.72 0 1.35-.63 1.35-1.35 0-.72-.63-1.35-1.35-1.35-.72 0-1.35.63-1.35 1.35 0 .72.63 1.35 1.35 1.35zM10 15.4c2.34 0 4.32-1.53 5.13-3.6H4.87c.81 2.07 2.79 3.6 5.13 3.6zM10 1c-4.95 0-9 4.05-9 9s4.05 9 9 9 9-4.05 9-9-4.05-9-9-9zm0 16.2c-3.96 0-7.2-3.24-7.2-7.2S6.04 2.8 10 2.8s7.2 3.24 7.2 7.2-3.24 7.2-7.2 7.2z" />
    </Wrapper>
  );
}

SmileFace.propTypes = PROP_TYPES;
SmileFace.defaultProps = DEFAULT_PROPS;

