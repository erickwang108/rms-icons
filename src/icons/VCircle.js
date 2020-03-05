import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';

export default function VCircle(props) {
  return (
    <Wrapper {...props} color={props.color || '#f5f4f4'} circleColor={props.circleColor || '#000'}>
      <circle cx="10" cy="10" r="9" stroke="#FFF" />
      <path fillRule="evenodd" d="M5.5 7h2.862l.249.574 1.622 3.856L12.167 7h2.36l-3.953 7.158h-1.17l-3.53-6.482z" />
    </Wrapper>
  );
}

VCircle.propTypes = PROP_TYPES;
VCircle.defaultProps = DEFAULT_PROPS;
