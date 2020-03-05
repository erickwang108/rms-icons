import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';

export default function OriginalLink(props) {
  return (
    <Wrapper {...props}>
      <path fillRule="evenodd" d="M17 17v-7h2v7c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h7v2H3v14h14zM11.657 1H19v7.343h-2.098V4.566l-10.28 10.28-1.468-1.468 10.28-10.28h-3.777V1z" />
    </Wrapper>
  );
}

OriginalLink.propTypes = PROP_TYPES;
OriginalLink.defaultProps = DEFAULT_PROPS;
