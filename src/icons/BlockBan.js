import React from 'react';

import Wrapper from '../Wrapper';

export default function BlockBan(props) {
  return (
    <Wrapper {...props}>
      <path fillRule="evenodd" d="M10 1c-4.968 0-9 4.032-9 9s4.032 9 9 9 9-4.032 9-9-4.032-9-9-9zm-7.2 9c0-3.978 3.222-7.2 7.2-7.2 1.665 0 3.195.567 4.41 1.521L4.321 14.41A7.112 7.112 0 0 1 2.8 10zm7.2 7.2a7.112 7.112 0 0 1-4.41-1.521L15.679 5.59A7.112 7.112 0 0 1 17.2 10c0 3.978-3.222 7.2-7.2 7.2z" />
    </Wrapper>
  );
}
