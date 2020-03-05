import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';

export default function MediaWeiboOtherVerified(props) {
  return (
    <Wrapper {...props} color={props.color || '#FDD31C'} circleColor={props.circleColor || '#BD1B18'}>
      <path id="round_1" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16z" stroke="#FDCE02" strokeWidth="2" />
      <path id="letter_1" d="M5 6l3.408 9h3.001l3.343-9h-2.83l-1.983 6.473L7.916 6z" />
    </Wrapper>
  );
}

MediaWeiboOtherVerified.propTypes = PROP_TYPES;
MediaWeiboOtherVerified.defaultProps = DEFAULT_PROPS;
