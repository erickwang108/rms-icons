import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';

export default function LikeHeart(props) {
  return (
    <Wrapper {...props} color={props.color || '#f5f4f4'} circleColor={props.circleColor || '#000'}>
      <circle cx="9" cy="9" r="9" />
      <path fillRule="evenodd" d="M9.1 6.283c-.61-1.156-1.787-1.668-3.133-1.43-1.814.32-2.676 2.276-1.855 4.158.928 2.127 3.047 3.63 4.988 4.777 1.94-1.148 4.06-2.65 4.988-4.777.821-1.882-.04-3.837-1.855-4.158-1.346-.238-2.523.274-3.133 1.43z" />
    </Wrapper>
  );
}

LikeHeart.propTypes = PROP_TYPES;
LikeHeart.defaultProps = DEFAULT_PROPS;
