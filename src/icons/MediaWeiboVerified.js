import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';

export default function MediaWeiboVerified(props) {
  return (
    <Wrapper {...props} color={props.color || '#f5f4f4'} circleColor={props.circleColor || '#000'}>
      <circle fillRule="evenodd" cx="10" cy="10" r="9" />
      <path fillRule="evenodd" d="M4.71 6.01l3.526 9.312h3.105L14.8 6.011h-2.927L9.82 12.708 7.727 6.011z" />
    </Wrapper>
  );
}

MediaWeiboVerified.propTypes = PROP_TYPES;
MediaWeiboVerified.defaultProps = DEFAULT_PROPS;
