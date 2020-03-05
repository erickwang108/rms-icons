import React from 'react';

import { PROP_TYPES, DEFAULT_PROPS } from '../constants';
import Wrapper from '../Wrapper';

export default function EnterArrow(props) {
  return (
    <Wrapper {...props} color={props.color || '#B2B9C8'}>
      <path fillRule="evenodd" d="M10 19l-1.575-1.575 6.3-6.3H1v-2.25h13.725l-6.3-6.3L10 1l9 9z" />
    </Wrapper>
  );
}

EnterArrow.propTypes = PROP_TYPES;
EnterArrow.defaultProps = DEFAULT_PROPS;
