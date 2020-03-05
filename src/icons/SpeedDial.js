import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';

export default function SpeedDial(props) {
  return (
    <Wrapper {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M1 2a1 1 0 011-1h2.5a1 1 0 011 1v2.5a1 1 0 01-1 1H2a1 1 0 01-1-1V2zm6.75 0a1 1 0 011-1h2.5a1 1 0 011 1v2.5a1 1 0 01-1 1h-2.5a1 1 0 01-1-1V2zM19 2a1 1 0 00-1-1h-2.5a1 1 0 00-1 1v2.5a1 1 0 001 1H18a1 1 0 001-1V2zM1 8.75a1 1 0 011-1h2.5a1 1 0 011 1v2.5a1 1 0 01-1 1H2a1 1 0 01-1-1v-2.5zm11.25 0a1 1 0 00-1-1h-2.5a1 1 0 00-1 1v2.5a1 1 0 001 1h2.5a1 1 0 001-1v-2.5zm2.25 0a1 1 0 011-1H18a1 1 0 011 1v2.5a1 1 0 01-1 1h-2.5a1 1 0 01-1-1v-2.5zm-9 6.75a1 1 0 00-1-1H2a1 1 0 00-1 1V18a1 1 0 001 1h2.5a1 1 0 001-1v-2.5zm2.25 0a1 1 0 011-1h2.5a1 1 0 011 1V18a1 1 0 01-1 1h-2.5a1 1 0 01-1-1v-2.5zm11.25 0a1 1 0 00-1-1h-2.5a1 1 0 00-1 1V18a1 1 0 001 1H18a1 1 0 001-1v-2.5z" />
    </Wrapper>
  );
}

SpeedDial.propTypes = PROP_TYPES;
SpeedDial.defaultProps = DEFAULT_PROPS;
