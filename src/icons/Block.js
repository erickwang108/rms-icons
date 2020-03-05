import React from 'react';

import Wrapper from '../Wrapper';

export default function Block(props) {
  return (
    <Wrapper {...props}>
      <path fillRule="nonzero" d="M6.4 1h7.2A5.4 5.4 0 0 1 19 6.4v7.2a5.4 5.4 0 0 1-5.4 5.4H6.4A5.4 5.4 0 0 1 1 13.6V6.4A5.4 5.4 0 0 1 6.4 1z" />
    </Wrapper>
  );
}
