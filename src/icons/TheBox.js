import React from 'react';

import Wrapper from '../Wrapper';

export default function TheBox(props) {
  return (
    <Wrapper {...props}>
      <path fillRule="evenodd" d="M17 3v14H3V3h14zm0-2H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2z" />
    </Wrapper>
  );
}
