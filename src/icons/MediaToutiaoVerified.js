import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';

export default function MediaToutiaoVerified(props) {
  return (
    <Wrapper {...props} color={props.color || '#FFF'} circleColor={props.circleColor || '#D0021B'}>
      <path fillRule="evenodd" id="round" d="M10 19a9 9 0 1 1 0-18 9 9 0 0 1 0 18z" />
      <path fillRule="evenodd" id="letter" d="M16 6h-3.35l-4.174 5.211L7.056 6H4v1.223h1.223l2.713 9.2z" />
    </Wrapper>
  );
}

MediaToutiaoVerified.propTypes = PROP_TYPES;
MediaToutiaoVerified.defaultProps = DEFAULT_PROPS;
